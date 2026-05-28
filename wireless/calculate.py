import sqlite3
import time

DB = "wifi_people.db"

now = int(time.time())
window = 5 * 60

conn = sqlite3.connect(DB)
cur = conn.cursor()

cur.execute("""
SELECT COUNT(DISTINCT mac_hash)
FROM detections
WHERE timestamp >= ?
""", (now - window,))

count = cur.fetchone()[0]
conn.close()

print(f"最近 5 分鐘附近裝置數：{count}")