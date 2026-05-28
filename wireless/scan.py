from scapy.all import *
from scapy.layers.dot11 import Dot11, Dot11ProbeReq
import hashlib
import sqlite3
import time

DB = "wifi_people.db"
SALT = "change_this_secret_salt"

def init_db():
    conn = sqlite3.connect(DB)
    cur = conn.cursor()
    cur.execute("""
    CREATE TABLE IF NOT EXISTS detections (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        mac_hash TEXT,
        ssid TEXT,
        rssi INTEGER,
        timestamp INTEGER
    )
    """)
    conn.commit()
    conn.close()

def anonymize_mac(mac):
    return hashlib.sha256((SALT + mac).encode()).hexdigest()

def handle_packet(pkt):
    if pkt.haslayer(Dot11ProbeReq):
        mac = pkt.addr2
        if not mac:
            return

        ssid = ""
        try:
            ssid = pkt.info.decode(errors="ignore")
        except:
            pass

        rssi = None
        if hasattr(pkt, "dBm_AntSignal"):
            rssi = pkt.dBm_AntSignal

        mac_hash = anonymize_mac(mac)
        now = int(time.time())

        conn = sqlite3.connect(DB)
        cur = conn.cursor()
        cur.execute(
            "INSERT INTO detections (mac_hash, ssid, rssi, timestamp) VALUES (?, ?, ?, ?)",
            (mac_hash, ssid, rssi, now)
        )
        conn.commit()
        conn.close()

        print(f"[{now}] device={mac_hash[:10]} ssid={ssid} rssi={rssi}")

if __name__ == "__main__":
    init_db()
    print("Start sniffing...")
    sniff(iface="wlan1", prn=handle_packet, store=0)