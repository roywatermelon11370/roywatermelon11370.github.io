const mushrooms = [
  {
    id: "shiitake",
    name: "香菇",
    texture: "厚實帶木質香",
    prep: "去蒂後切厚片，乾香菇可先泡水並保留香菇水",
    cookTip: "先乾煎出香氣再下調味，菇味會更集中"
  },
  {
    id: "king-oyster",
    name: "杏鮑菇",
    texture: "脆嫩多汁",
    prep: "切滾刀塊或厚片，表面劃淺刀紋更容易入味",
    cookTip: "用中大火煎到邊緣金黃，口感最像主菜"
  },
  {
    id: "shimeji",
    name: "鴻喜菇",
    texture: "清甜彈牙",
    prep: "切掉根部後撥散，保留小束狀更有口感",
    cookTip: "最後 4 分鐘再下鍋，能留下漂亮彈性"
  },
  {
    id: "button",
    name: "蘑菇",
    texture: "溫和多汁",
    prep: "擦淨後切片，避免久泡讓香氣變淡",
    cookTip: "先把水分炒乾，再讓油脂與醬汁包住菇片"
  },
  {
    id: "enoki",
    name: "金針菇",
    texture: "細嫩爽脆",
    prep: "切掉根部後分小束，沖洗後確實瀝乾",
    cookTip: "避免久煮，起鍋前短時間加熱最清爽"
  },
  {
    id: "maitake",
    name: "舞菇",
    texture: "香氣濃、邊緣柔軟",
    prep: "用手撕成大片，保留自然皺褶方便吸附醬汁",
    cookTip: "適合先煎到邊緣微焦，再用醬汁快速包覆"
  },
  {
    id: "oyster",
    name: "秀珍菇",
    texture: "柔嫩帶淡淡鮮味",
    prep: "撕成入口大小，較粗的梗可縱向剖半",
    cookTip: "下鍋後不要太快翻動，表面略上色會更香"
  },
  {
    id: "wood-ear",
    name: "黑木耳",
    texture: "爽脆清口",
    prep: "切成寬絲，較厚的部位可先汆燙 30 秒",
    cookTip: "適合最後拌炒，保留脆度與清爽口感"
  }
];

const proteins = [
  {
    id: "chicken",
    name: "雞肉",
    cut: "去骨雞腿肉",
    prep: "切一口大小，用少許鹽、米酒與白胡椒抓醃 10 分鐘",
    cook: "雞肉先煎到表面上色，再和菇類一起收汁",
    time: 24,
    calories: 520
  },
  {
    id: "pork",
    name: "豬肉",
    cut: "梅花豬肉片",
    prep: "用醬油、米酒與太白粉薄薄抓勻",
    cook: "肉片大火快炒到八分熟，回鍋時保持嫩度",
    time: 20,
    calories: 560
  },
  {
    id: "beef",
    name: "牛肉",
    cut: "牛小排薄片",
    prep: "用油、鹽與黑胡椒拌勻，避免過早加酸性醬料",
    cook: "牛肉快速煎香後先取出，最後再回鍋拌勻",
    time: 18,
    calories: 610
  },
  {
    id: "salmon",
    name: "鮭魚",
    cut: "去刺鮭魚塊",
    prep: "擦乾後撒鹽靜置 8 分鐘，再用紙巾吸掉表面水分",
    cook: "鮭魚先煎皮面或單面定型，避免翻動太多次",
    time: 22,
    calories: 590
  },
  {
    id: "duck",
    name: "鴨肉",
    cut: "鴨胸薄片",
    prep: "用鹽、米酒與少許五香粉抓醃 10 分鐘",
    cook: "鴨肉先把油脂煎出香氣，回鍋時不要久煮",
    time: 26,
    calories: 640
  },
  {
    id: "lamb",
    name: "羊肉",
    cut: "羊肩肉片",
    prep: "用米酒、薑末、孜然粉與少許油抓勻",
    cook: "羊肉大火快炒到變色後先取出，最後回鍋保留嫩度",
    time: 21,
    calories: 620
  }
];

const styles = [
  {
    id: "taiwanese",
    name: "台式家常",
    titlePrefix: "蒜香醬燒",
    pantry: ["蒜末 3 瓣", "醬油 1.5 大匙", "米酒 1 大匙", "烏醋 1 小匙", "青蔥 1 支"],
    sauce: "醬油、米酒、烏醋與 2 大匙水調成醬汁",
    aroma: "蒜末與蔥白",
    finish: "起鍋前撒蔥綠，淋少許香油",
    flavor: "鹹香、微酸、很下飯",
    side: "白飯、燙青菜"
  },
  {
    id: "japanese",
    name: "日式和風",
    titlePrefix: "味噌奶油",
    pantry: ["白味噌 1 大匙", "味醂 1 大匙", "醬油 1 小匙", "奶油 10 克", "海苔絲 少許"],
    sauce: "白味噌、味醂、醬油與 3 大匙水拌開",
    aroma: "薑末與少量蔥白",
    finish: "關火後拌入奶油，放上海苔絲",
    flavor: "柔和甘甜，尾韻有奶油香",
    side: "熱飯、玉子燒"
  },
  {
    id: "korean",
    name: "韓式辣拌",
    titlePrefix: "韓式辣醬",
    pantry: ["韓式辣醬 1.5 大匙", "醬油 1 小匙", "蒜末 2 瓣", "芝麻油 1 小匙", "白芝麻 少許"],
    sauce: "韓式辣醬、醬油、糖 1 小匙與 2 大匙水調勻",
    aroma: "蒜末與洋蔥絲",
    finish: "起鍋後淋芝麻油，撒白芝麻",
    flavor: "甜辣厚實，菇類會吸滿醬香",
    side: "紫菜飯捲、泡菜"
  },
  {
    id: "italian",
    name: "義式香草",
    titlePrefix: "番茄香草",
    pantry: ["蒜片 2 瓣", "小番茄 8 顆", "橄欖油 1.5 大匙", "義式香料 1 小匙", "帕瑪森起司 少許"],
    sauce: "小番茄壓裂後與 3 大匙水煮成輕醬",
    aroma: "蒜片與橄欖油",
    finish: "撒黑胡椒、帕瑪森起司與九層塔",
    flavor: "清亮酸甜，香草味讓菇香更明顯",
    side: "烤麵包、短義大利麵"
  },
  {
    id: "thai",
    name: "泰式酸辣",
    titlePrefix: "檸檬香茅",
    pantry: ["香茅末 1 小匙", "魚露 1 大匙", "檸檬汁 1 大匙", "辣椒 1 根", "九層塔 一把"],
    sauce: "魚露、檸檬汁、糖 1 小匙與 2 大匙水調成酸辣汁",
    aroma: "香茅末、蒜末與辣椒",
    finish: "關火後拌入九層塔與檸檬汁",
    flavor: "酸辣明亮，適合想吃清爽重口味時",
    side: "茉莉香米、涼拌青木瓜"
  },
  {
    id: "sichuan",
    name: "川味麻辣",
    titlePrefix: "花椒麻辣",
    pantry: ["花椒粒 1 小匙", "辣豆瓣醬 1 大匙", "蒜末 2 瓣", "乾辣椒 2 根", "青蒜 1 支"],
    sauce: "辣豆瓣醬、醬油 1 小匙、糖 1 小匙與 3 大匙水調勻",
    aroma: "花椒粒、蒜末與乾辣椒",
    finish: "起鍋前撒青蒜，依喜好補一點辣油",
    flavor: "麻香、鹹辣，醬汁厚度很適合配飯",
    side: "白飯、涼拌小黃瓜"
  },
  {
    id: "curry",
    name: "咖哩椰香",
    titlePrefix: "椰香咖哩",
    pantry: ["咖哩粉 1 大匙", "椰奶 80 毫升", "洋蔥絲 半顆", "薑末 1 小匙", "香菜 少許"],
    sauce: "咖哩粉、椰奶、鹽少許與 2 大匙水拌成咖哩汁",
    aroma: "洋蔥絲與薑末",
    finish: "煮到醬汁濃稠後撒香菜，淋少許檸檬汁",
    flavor: "濃郁溫潤，椰香會把菇類鮮味拉得更圓",
    side: "薑黃飯、烤餅"
  },
  {
    id: "mediterranean",
    name: "地中海清炒",
    titlePrefix: "橄欖檸香",
    pantry: ["橄欖油 2 大匙", "檸檬皮屑 1 小匙", "蒜片 2 瓣", "黑橄欖 6 顆", "巴西里 少許"],
    sauce: "檸檬汁 1 大匙、鹽、黑胡椒與 2 大匙水調成清爽醬汁",
    aroma: "蒜片與橄欖油",
    finish: "起鍋後撒巴西里與檸檬皮屑",
    flavor: "清爽、帶果香酸度，吃起來輕盈不膩",
    side: "庫斯庫斯、烤蔬菜"
  },
  {
    id: "dessert",
    name: "甜點風",
    titlePrefix: "楓糖奶香",
    pantry: ["楓糖漿 1 大匙", "無鹽奶油 12 克", "鮮奶油 50 毫升", "肉桂粉 少許", "烤堅果 1 大匙"],
    sauce: "楓糖漿、鮮奶油、鹽一小撮與 2 大匙水拌勻",
    aroma: "奶油與少量肉桂粉",
    finish: "收成光亮醬汁後撒烤堅果，補一小撮鹽平衡甜味",
    flavor: "甜鹹奶香，像溫熱鹹派內餡，菇類會帶出焦糖感",
    side: "烤吐司、可頌、馬鈴薯泥"
  },
  {
    id: "cocktail",
    name: "調酒風味",
    titlePrefix: "琴酒香草",
    pantry: ["琴酒 1 大匙", "檸檬汁 1 小匙", "迷迭香 少許", "蜂蜜 1 小匙", "蘇打水 2 大匙"],
    sauce: "琴酒、檸檬汁、蜂蜜、蘇打水與鹽少許調成清亮醬汁",
    aroma: "迷迭香、檸檬皮屑與少量蒜末",
    finish: "起鍋前淋入醬汁快速拌勻，讓酒香保留在尾韻",
    flavor: "帶草本酒香與檸檬酸度，像把清爽調酒轉成料理醬汁",
    side: "烤麵包、油醋沙拉"
  }
];

const baseIngredients = ["菇類 180 克", "肉類 220 克", "食用油 1.5 大匙", "鹽 適量", "黑胡椒 少許"];
const servings = "2 人份";
const favoriteKey = "mushroom-recipe-favorites";

const extraStyleMethods = {
  taiwanese: [
    {
      id: "three-cup",
      name: "三杯塔香",
      titlePrefix: "三杯塔香",
      pantry: ["老薑片 6 片", "蒜頭 4 瓣", "醬油 1 大匙", "米酒 1.5 大匙", "九層塔 一把"],
      sauce: "醬油、米酒、糖 1 小匙與 2 大匙水調勻",
      aroma: "老薑片、蒜頭與少量麻油",
      finish: "起鍋前放入九層塔，蓋 20 秒讓香氣悶出來",
      flavor: "醬香濃、麻油香明顯，帶一點台式熱炒感",
      side: "白飯、煎蛋"
    },
    {
      id: "satay",
      name: "沙茶快炒",
      titlePrefix: "沙茶快炒",
      pantry: ["沙茶醬 1.5 大匙", "蒜末 2 瓣", "洋蔥絲 半顆", "醬油 1 小匙", "空心菜段 一把"],
      sauce: "沙茶醬、醬油、糖少許與 2 大匙水調勻",
      aroma: "蒜末、洋蔥絲與沙茶醬",
      finish: "起鍋前加入空心菜段快炒到翠綠",
      flavor: "香氣厚、帶海味甜香，很有熱炒店感",
      side: "白飯、涼拌豆干"
    }
  ],
  japanese: [
    {
      id: "teriyaki",
      name: "照燒收汁",
      titlePrefix: "照燒",
      pantry: ["醬油 1.5 大匙", "味醂 1.5 大匙", "清酒 1 大匙", "薑泥 1 小匙", "白芝麻 少許"],
      sauce: "醬油、味醂、清酒與 2 大匙水調成照燒醬",
      aroma: "薑泥與少量蔥白",
      finish: "中火收成亮面醬汁，撒白芝麻",
      flavor: "鹹甜平衡，醬汁帶光澤且很適合便當",
      side: "白飯、毛豆"
    },
    {
      id: "shio-koji",
      name: "鹽麴嫩燒",
      titlePrefix: "鹽麴嫩燒",
      pantry: ["鹽麴 1 大匙", "清酒 1 大匙", "薑片 3 片", "蔥段 1 支", "七味粉 少許"],
      sauce: "鹽麴、清酒與 2 大匙水調成溫和醬汁",
      aroma: "薑片與蔥段",
      finish: "收汁後撒少許七味粉",
      flavor: "甘鹹柔和，能凸顯菇類和肉香本身",
      side: "麥飯、味噌湯"
    }
  ],
  korean: [
    {
      id: "bulgogi",
      name: "韓式烤肉醬炒",
      titlePrefix: "韓式烤肉醬",
      pantry: ["韓式烤肉醬 2 大匙", "洋蔥絲 半顆", "蒜末 2 瓣", "芝麻油 1 小匙", "蔥花 少許"],
      sauce: "韓式烤肉醬、醬油 1 小匙與 2 大匙水調勻",
      aroma: "洋蔥絲與蒜末",
      finish: "起鍋前淋芝麻油並撒蔥花",
      flavor: "甜鹹開胃，比辣拌風格更溫和",
      side: "生菜、白飯"
    },
    {
      id: "kimchi-stew",
      name: "泡菜鍋煮",
      titlePrefix: "泡菜鍋煮",
      pantry: ["泡菜 120 克", "韓式辣椒粉 1 小匙", "蒜末 2 瓣", "豆腐 半盒", "蔥花 少許"],
      sauce: "泡菜汁、醬油 1 小匙、糖少許與 150 毫升水調成湯汁",
      aroma: "泡菜、蒜末與韓式辣椒粉",
      finish: "加入豆腐煮熱，起鍋撒蔥花",
      flavor: "酸辣有湯感，菇類會吸收泡菜鮮味",
      side: "白飯、海苔"
    }
  ],
  italian: [
    {
      id: "cream",
      name: "奶油白醬",
      titlePrefix: "白醬奶油",
      pantry: ["鮮奶油 80 毫升", "蒜末 2 瓣", "洋蔥丁 3 大匙", "帕瑪森起司 少許", "黑胡椒 少許"],
      sauce: "鮮奶油、帕瑪森起司與 2 大匙水拌成白醬",
      aroma: "蒜末、洋蔥丁與橄欖油",
      finish: "煮到白醬微稠後撒黑胡椒",
      flavor: "濃郁滑順，菇香會讓奶油味更立體",
      side: "義大利麵、烤麵包"
    },
    {
      id: "pesto",
      name: "青醬拌炒",
      titlePrefix: "羅勒青醬",
      pantry: ["青醬 1.5 大匙", "蒜片 2 瓣", "橄欖油 1 大匙", "松子 1 大匙", "帕瑪森起司 少許"],
      sauce: "青醬、2 大匙水與少許黑胡椒拌開",
      aroma: "蒜片與橄欖油",
      finish: "關火後拌入青醬，撒松子與起司",
      flavor: "草本香明亮，口感比白醬更清爽",
      side: "短義大利麵、番茄沙拉"
    }
  ],
  thai: [
    {
      id: "green-curry",
      name: "綠咖哩燉煮",
      titlePrefix: "綠咖哩",
      pantry: ["綠咖哩醬 1 大匙", "椰奶 100 毫升", "魚露 1 小匙", "糖 1 小匙", "九層塔 一把"],
      sauce: "綠咖哩醬、椰奶、魚露與 2 大匙水調勻",
      aroma: "綠咖哩醬與少量蒜末",
      finish: "起鍋前拌入九層塔，補幾滴檸檬汁",
      flavor: "辛香濃厚，椰奶讓辣味更圓潤",
      side: "茉莉香米、煎蛋"
    },
    {
      id: "pad-krapow",
      name: "打拋香炒",
      titlePrefix: "打拋香炒",
      pantry: ["打拋葉 一把", "魚露 1 大匙", "蒜末 2 瓣", "辣椒 1 根", "檸檬汁 1 小匙"],
      sauce: "魚露、糖 1 小匙、醬油 1 小匙與 2 大匙水調勻",
      aroma: "蒜末、辣椒與打拋葉",
      finish: "關火前補檸檬汁，讓香氣更亮",
      flavor: "鹹辣直爽，香草氣味非常醒胃",
      side: "茉莉香米、半熟蛋"
    }
  ],
  sichuan: [
    {
      id: "dry-pot",
      name: "乾鍋香辣",
      titlePrefix: "乾鍋香辣",
      pantry: ["乾辣椒 3 根", "花椒粉 少許", "豆瓣醬 1 大匙", "芹菜段 一把", "白芝麻 少許"],
      sauce: "豆瓣醬、醬油 1 小匙、糖少許與 1 大匙水調成濃醬",
      aroma: "乾辣椒、蒜末與花椒粉",
      finish: "炒到醬汁收乾後撒芹菜段與白芝麻",
      flavor: "香辣乾爽，適合想吃重口味小炒",
      side: "白飯、涼粉"
    },
    {
      id: "yu-xiang",
      name: "魚香燴炒",
      titlePrefix: "魚香燴炒",
      pantry: ["豆瓣醬 1 大匙", "蒜末 2 瓣", "薑末 1 小匙", "烏醋 1 大匙", "蔥花 少許"],
      sauce: "豆瓣醬、烏醋、糖 1 小匙、醬油 1 小匙與 3 大匙水調勻",
      aroma: "蒜末、薑末與豆瓣醬",
      finish: "收成亮面醬汁後撒蔥花",
      flavor: "酸甜鹹辣都有，醬汁濃但不死鹹",
      side: "白飯、燙青菜"
    }
  ],
  curry: [
    {
      id: "baked-curry",
      name: "焗烤咖哩",
      titlePrefix: "焗烤咖哩",
      pantry: ["咖哩塊 1 小塊", "牛奶 80 毫升", "洋蔥丁 3 大匙", "披薩起司 40 克", "麵包粉 1 大匙"],
      sauce: "咖哩塊、牛奶與 3 大匙水煮成濃醬",
      aroma: "洋蔥丁與少量奶油",
      finish: "鋪上起司與麵包粉，烤到表面金黃",
      flavor: "濃厚、有焗烤香，適合做成主餐盤",
      side: "白飯、烤花椰菜"
    },
    {
      id: "dry-curry",
      name: "南洋乾咖哩",
      titlePrefix: "南洋乾咖哩",
      pantry: ["咖哩粉 1 大匙", "椰糖 1 小匙", "洋蔥丁 半顆", "檸檬葉 2 片", "香菜 少許"],
      sauce: "咖哩粉、椰糖、鹽與 1 大匙水調成濃醬",
      aroma: "洋蔥丁、咖哩粉與檸檬葉",
      finish: "炒到醬汁收乾後撒香菜",
      flavor: "香料感強、醬汁乾爽，適合包進餅皮",
      side: "烤餅、優格醬"
    }
  ],
  mediterranean: [
    {
      id: "herb-roast",
      name: "香草烤盤",
      titlePrefix: "香草烤盤",
      pantry: ["橄欖油 2 大匙", "迷迭香 1 小匙", "蒜末 2 瓣", "檸檬汁 1 大匙", "小番茄 8 顆"],
      sauce: "橄欖油、檸檬汁、鹽與黑胡椒拌成烤盤調味",
      aroma: "蒜末、迷迭香與橄欖油",
      finish: "烤好後擠檸檬汁，撒少許香草",
      flavor: "烤香明顯，酸香讓整體更清爽",
      side: "佛卡夏、沙拉"
    },
    {
      id: "garlic-confit",
      name: "蒜香油封",
      titlePrefix: "蒜香油封",
      pantry: ["橄欖油 3 大匙", "蒜瓣 5 顆", "月桂葉 1 片", "檸檬汁 1 小匙", "巴西里 少許"],
      sauce: "橄欖油、檸檬汁、鹽與黑胡椒調成油封風味醬",
      aroma: "蒜瓣、月桂葉與橄欖油",
      finish: "以小火讓蒜香包覆食材，最後撒巴西里",
      flavor: "油潤但清香，蒜味柔和不嗆",
      side: "法棍、鷹嘴豆泥"
    }
  ],
  dessert: [
    {
      id: "honey-bake",
      name: "蜂蜜酥烤",
      titlePrefix: "蜂蜜酥烤",
      pantry: ["蜂蜜 1 大匙", "無鹽奶油 10 克", "蘋果丁 3 大匙", "肉桂粉 少許", "杏仁片 1 大匙"],
      sauce: "蜂蜜、奶油、鹽一小撮與 1 大匙水拌成甜鹹醬",
      aroma: "奶油、蘋果丁與肉桂粉",
      finish: "烤到表面微焦後撒杏仁片",
      flavor: "甜鹹酥香，像派餡和鹹點的混合感",
      side: "烤吐司、無糖優格"
    },
    {
      id: "cocoa-caramel",
      name: "可可焦糖",
      titlePrefix: "可可焦糖",
      pantry: ["黑糖 1 大匙", "無糖可可粉 1 小匙", "奶油 12 克", "鮮奶 60 毫升", "海鹽 少許"],
      sauce: "黑糖、可可粉、鮮奶與海鹽拌成甜鹹醬",
      aroma: "奶油、黑糖與可可粉",
      finish: "小火收成焦糖色醬汁，起鍋撒海鹽",
      flavor: "甜苦平衡，帶一點大人味的甜點感",
      side: "布里歐、烤蘋果"
    }
  ]
};

const additionalStyleMethods = {
  taiwanese: [
    {
      id: "pickled-mustard",
      name: "酸菜薑絲",
      titlePrefix: "酸菜薑絲",
      pantry: ["酸菜 80 克", "薑絲 1 大匙", "蒜末 2 瓣", "米酒 1 大匙", "白胡椒 少許"],
      sauce: "米酒、醬油 1 小匙、糖少許與 3 大匙水調成清爽醬汁",
      aroma: "薑絲、蒜末與酸菜",
      finish: "起鍋前撒白胡椒，讓酸香和菇香更乾淨",
      flavor: "酸香開胃，鹹度比醬燒更輕盈",
      side: "白粥、煎蛋"
    }
  ],
  japanese: [
    {
      id: "ponzu",
      name: "柚子醋蒸煮",
      titlePrefix: "柚子醋蒸煮",
      pantry: ["柚子醋 1.5 大匙", "昆布水 80 毫升", "薑片 3 片", "蔥段 1 支", "蘿蔔泥 2 大匙"],
      sauce: "柚子醋、昆布水與醬油 1 小匙調成蒸煮汁",
      aroma: "薑片與蔥段",
      finish: "起鍋後放上蘿蔔泥，淋少許柚子醋",
      flavor: "酸香清爽，適合想吃不油膩的版本",
      side: "白飯、涼拌小菜"
    }
  ],
  korean: [
    {
      id: "soy-garlic",
      name: "蒜香醬油鍋",
      titlePrefix: "蒜香醬油鍋",
      pantry: ["蒜末 3 瓣", "韓式湯醬油 1 大匙", "洋蔥絲 半顆", "韓式冬粉 40 克", "蔥花 少許"],
      sauce: "湯醬油、糖少許、芝麻油 1 小匙與 120 毫升水調成湯汁",
      aroma: "蒜末與洋蔥絲",
      finish: "加入韓式冬粉煮到吸汁，起鍋撒蔥花",
      flavor: "蒜香濃但不辣，湯汁很適合拌飯",
      side: "白飯、醃蘿蔔"
    }
  ],
  italian: [
    {
      id: "balsamic",
      name: "巴薩米克燴煮",
      titlePrefix: "巴薩米克",
      pantry: ["巴薩米克醋 1 大匙", "蒜片 2 瓣", "小番茄 8 顆", "橄欖油 1.5 大匙", "芝麻葉 少許"],
      sauce: "巴薩米克醋、蜂蜜 1 小匙、鹽與 2 大匙水調成酸甜醬",
      aroma: "蒜片、小番茄與橄欖油",
      finish: "醬汁收亮後放上芝麻葉",
      flavor: "酸甜濃縮，帶一點義式餐酒館感",
      side: "佛卡夏、起司沙拉"
    }
  ],
  thai: [
    {
      id: "tamarind",
      name: "羅望子酸甜",
      titlePrefix: "羅望子酸甜",
      pantry: ["羅望子醬 1 大匙", "魚露 1 大匙", "蒜末 2 瓣", "辣椒 1 根", "花生碎 1 大匙"],
      sauce: "羅望子醬、魚露、糖 1 小匙與 3 大匙水調成酸甜醬",
      aroma: "蒜末與辣椒",
      finish: "起鍋後撒花生碎，補少許檸檬汁",
      flavor: "酸甜鮮明，比酸辣風格更圓潤",
      side: "河粉、豆芽菜"
    }
  ],
  sichuan: [
    {
      id: "peppercorn-oil",
      name: "藤椒清麻",
      titlePrefix: "藤椒清麻",
      pantry: ["藤椒油 1 小匙", "青辣椒 1 根", "蒜末 2 瓣", "醬油 1 大匙", "香菜 少許"],
      sauce: "醬油、藤椒油、糖少許與 2 大匙水調成清麻醬",
      aroma: "青辣椒、蒜末與少量花椒粉",
      finish: "關火後淋藤椒油並撒香菜",
      flavor: "清香麻感明顯，辣度比麻辣版更輕",
      side: "白飯、涼拌木耳"
    }
  ],
  curry: [
    {
      id: "japanese-curry-stew",
      name: "日式咖哩燉",
      titlePrefix: "日式咖哩燉",
      pantry: ["日式咖哩塊 1 小塊", "馬鈴薯丁 80 克", "紅蘿蔔丁 50 克", "洋蔥丁 半顆", "牛奶 50 毫升"],
      sauce: "咖哩塊、牛奶與 150 毫升水煮成燉汁",
      aroma: "洋蔥丁與少量奶油",
      finish: "燉到蔬菜柔軟後試味，以黑胡椒收尾",
      flavor: "溫和濃稠，甜味比南洋咖哩更明顯",
      side: "白飯、福神漬"
    }
  ],
  mediterranean: [
    {
      id: "olive-tomato-braise",
      name: "橄欖番茄燉",
      titlePrefix: "橄欖番茄燉",
      pantry: ["番茄糊 1 大匙", "黑橄欖 6 顆", "蒜末 2 瓣", "奧勒岡 1 小匙", "橄欖油 1 大匙"],
      sauce: "番茄糊、黑橄欖、奧勒岡與 80 毫升水調成燉醬",
      aroma: "蒜末與橄欖油",
      finish: "燉到醬汁濃縮，淋少許橄欖油",
      flavor: "番茄酸甜和橄欖鹹香明顯，適合慢慢吃",
      side: "烤麵包、藜麥"
    }
  ],
  dessert: [
    {
      id: "rum-raisin",
      name: "蘭姆葡萄",
      titlePrefix: "蘭姆葡萄",
      pantry: ["蘭姆酒 1 大匙", "葡萄乾 1 大匙", "奶油 12 克", "黑糖 1 小匙", "鮮奶油 40 毫升"],
      sauce: "蘭姆酒、鮮奶油、黑糖與鹽一小撮調成甜鹹醬",
      aroma: "奶油、葡萄乾與蘭姆酒",
      finish: "小火收汁到濃稠，讓酒香留在醬汁裡",
      flavor: "甜香帶酒韻，像鹹點版蘭姆葡萄內餡",
      side: "可頌、烤蘋果"
    }
  ],
  cocktail: [
    {
      id: "whisky-maple",
      name: "威士忌楓糖",
      titlePrefix: "威士忌楓糖",
      pantry: ["威士忌 1 大匙", "楓糖漿 1 大匙", "奶油 10 克", "黑胡椒 少許", "檸檬汁 1 小匙"],
      sauce: "威士忌、楓糖漿、檸檬汁與鹽少許調成甜鹹酒香醬",
      aroma: "奶油與黑胡椒",
      finish: "醬汁收亮後關火，讓威士忌香氣保留",
      flavor: "煙燻甜香明顯，適合做成深色醬汁料理",
      side: "馬鈴薯泥、烤蔬菜"
    },
    {
      id: "mojito-mint",
      name: "莫西多薄荷",
      titlePrefix: "莫西多薄荷",
      pantry: ["白蘭姆酒 1 大匙", "薄荷葉 一小把", "檸檬汁 1 大匙", "糖 1 小匙", "蘇打水 2 大匙"],
      sauce: "白蘭姆酒、檸檬汁、糖、蘇打水與鹽少許拌勻",
      aroma: "蒜末與少量薄荷梗",
      finish: "關火後拌入薄荷葉，保留清涼香氣",
      flavor: "清爽酸香，薄荷讓菇類和肉味更輕盈",
      side: "烤玉米、沙拉"
    },
    {
      id: "ume-sour",
      name: "梅酒酸甜",
      titlePrefix: "梅酒酸甜",
      pantry: ["梅酒 1.5 大匙", "烏醋 1 小匙", "薑末 1 小匙", "蜂蜜 1 小匙", "白芝麻 少許"],
      sauce: "梅酒、烏醋、蜂蜜、醬油 1 小匙與 2 大匙水調勻",
      aroma: "薑末與少量蒜末",
      finish: "收汁後撒白芝麻，讓酸甜味包覆食材",
      flavor: "梅香酸甜，尾韻有淡淡酒香",
      side: "白飯、涼拌小菜"
    }
  ]
};

styles.forEach((style) => {
  style.methods = [
    {
      id: "classic",
      name: style.titlePrefix,
      titlePrefix: style.titlePrefix,
      pantry: style.pantry,
      sauce: style.sauce,
      aroma: style.aroma,
      finish: style.finish,
      flavor: style.flavor,
      side: style.side
    },
    ...(extraStyleMethods[style.id] || []),
    ...(additionalStyleMethods[style.id] || [])
  ];
});

const variationProfiles = [
  {
    id: "classic",
    name: "經典原味",
    titleSuffix: "",
    ingredients: [],
    step: "維持經典比例，讓菇類、肉類與醬汁味道集中。",
    tip: "第一次做這個組合時建議先選經典原味，最容易掌握鹹淡。",
    note: "保留原本料理手法的重點，味道最穩、最適合日常餐桌。",
    timeBonus: 0,
    caloriesBonus: 0
  },
  {
    id: "vegetable-plus",
    name: "蔬菜加量版",
    titleSuffix: "蔬菜加量版",
    ingredients: ["甜椒或櫛瓜 100 克", "洋蔥 半顆"],
    step: "在菇類半熟時加入甜椒或櫛瓜與洋蔥，炒到蔬菜仍保留脆度。",
    tip: "蔬菜會釋出水分，醬汁可多收 1 分鐘讓味道集中。",
    note: "增加蔬菜甜味與口感層次，份量更有飽足感。",
    timeBonus: 3,
    caloriesBonus: 70
  },
  {
    id: "one-pot",
    name: "主食一鍋版",
    titleSuffix: "主食一鍋版",
    ingredients: ["熟飯或熟麵 1 碗", "高湯或清水 80 毫升"],
    step: "醬汁收至一半時加入熟飯或熟麵與高湯，拌到主食吸附醬汁。",
    tip: "想做炒飯口感就把高湯減半，想做燴飯或拌麵就保留多一點醬汁。",
    note: "直接變成完整主餐，醬汁會包住飯麵，適合快速解決一餐。",
    timeBonus: 5,
    caloriesBonus: 220
  }
];

const recipeMap = new Map();
const recipeGroups = new Map();
const allRecipes = [];

mushrooms.forEach((mushroom) => {
  proteins.forEach((protein) => {
    styles.forEach((style) => {
      const groupId = `${mushroom.id}-${protein.id}-${style.id}`;
      style.methods.forEach((method) => {
        variationProfiles.forEach((variant) => {
          const id = `${groupId}-${method.id}-${variant.id}`;
          const recipe = buildRecipe(id, mushroom, protein, style, method, variant, groupId);
          recipeMap.set(id, recipe);
          allRecipes.push(recipe);

          if (!recipeGroups.has(groupId)) {
            recipeGroups.set(groupId, []);
          }
          recipeGroups.get(groupId).push(recipe);
        });
      });
    });
  });
});

const mushroomSelect = document.querySelector("#mushroomSelect");
const proteinSelect = document.querySelector("#proteinSelect");
const styleSelect = document.querySelector("#styleSelect");
const recipeCard = document.querySelector("#recipeCard");
const favoritesList = document.querySelector("#favoritesList");
const favoriteCount = document.querySelector("#favoriteCount");
const recipeCount = document.querySelector("#recipeCount");
const comboMatrix = document.querySelector("#comboMatrix");

let currentRecipeId = allRecipes[0].id;
let favorites = readFavorites();
let loadingTimer;

init();

function init() {
  fillSelect(mushroomSelect, mushrooms);
  fillSelect(proteinSelect, proteins);
  fillSelect(styleSelect, styles);
  recipeCount.textContent = allRecipes.length;
  renderMatrix();
  renderCurrentRecipe();
  renderFavorites();

  document.querySelector("#generateBtn").addEventListener("click", () => {
    loadRecipe(randomRecipeForGroup(selectedRecipeId()).id);
  });

  document.querySelector("#randomBtn").addEventListener("click", () => {
    const randomRecipe = allRecipes[Math.floor(Math.random() * allRecipes.length)];
    selectRecipe(randomRecipe.id);
    loadRecipe(randomRecipe.id);
  });

  document.querySelector("#clearFavoritesBtn").addEventListener("click", () => {
    favorites = [];
    saveFavorites();
    renderFavorites();
    renderCurrentRecipe();
  });
}

function loadRecipe(recipeId) {
  currentRecipeId = recipeId;
  window.clearTimeout(loadingTimer);
  setControlsDisabled(true);
  renderLoadingRecipe();
  loadingTimer = window.setTimeout(() => {
    setControlsDisabled(false);
    renderCurrentRecipe();
  }, 780 + Math.floor(Math.random() * 360));
}

function buildRecipe(id, mushroom, protein, style, method, variant, groupId) {
  const title = `${method.titlePrefix}${mushroom.name}${protein.name}${variant.titleSuffix}`;
  const ingredients = [
    `${mushroom.name} 180 克`,
    `${protein.cut} 220 克`,
    ...method.pantry,
    ...variant.ingredients,
    ...baseIngredients.slice(2)
  ];

  const steps = [
    `${mushroom.prep}；${protein.prep}。`,
    `熱鍋下油，放入${method.aroma}炒香，再加入${protein.cut}。${protein.cook}。`,
    `加入${mushroom.name}，依菇類出水狀況拌炒 3 至 6 分鐘。${mushroom.cookTip}。`,
    `倒入${method.sauce}，轉中火煮到醬汁微微包覆食材。`,
    variant.step,
    `${method.finish}，試味後以鹽與黑胡椒調整。`
  ];

  return {
    id,
    groupId,
    mushroomId: mushroom.id,
    proteinId: protein.id,
    styleId: style.id,
    methodId: method.id,
    variantId: variant.id,
    title,
    mushroom: mushroom.name,
    protein: protein.name,
    style: style.name,
    method: method.name,
    variant: variant.name,
    servings,
    time: `${protein.time + (style.id.length + method.id.length) % 5 + variant.timeBonus} 分鐘`,
    calories: `約 ${protein.calories + mushroom.name.length * 12 + variant.caloriesBonus} kcal`,
    difficulty: style.id === "thai" || style.id === "korean" || method.id === "baked-curry" ? "中等" : "簡單",
    ingredients,
    steps,
    tips: [
      mushroom.cookTip,
      protein.cook,
      `適合搭配 ${method.side} 。`,
      variant.tip
    ],
    variation: variant.note,
    flavor: `${mushroom.texture}搭配${protein.name}，做成${style.name}的${method.name}後呈現${method.flavor}。這次是${variant.name}，${variant.note}`
  };
}

function fillSelect(select, items) {
  select.innerHTML = items
    .map((item) => `<option value="${item.id}">${item.name}</option>`)
    .join("");
}

function selectedRecipeId() {
  return `${mushroomSelect.value}-${proteinSelect.value}-${styleSelect.value}`;
}

function selectRecipe(id) {
  const recipe = recipeMap.get(id) || recipeGroups.get(id)?.[0];
  if (!recipe) return;
  mushroomSelect.value = recipe.mushroomId;
  proteinSelect.value = recipe.proteinId;
  styleSelect.value = recipe.styleId;
}

function renderCurrentRecipe() {
  const recipe = recipeMap.get(currentRecipeId) || allRecipes[0];
  const isSaved = favorites.includes(recipe.id);

  recipeCard.innerHTML = `
    <div class="recipe-top">
      <div class="recipe-title">
        <h2>${recipe.title}</h2>
        <ul class="tags">
          <li>${recipe.mushroom}</li>
          <li>${recipe.protein}</li>
          <li>${recipe.style}</li>
          <li>${recipe.method}</li>
          <li>${recipe.variant}</li>
        </ul>
      </div>
      <div class="recipe-actions">
        <button type="button" id="favoriteBtn">${isSaved ? "已收藏" : "收藏"}</button>
      </div>
    </div>

    <div class="recipe-meta">
      <div class="meta-item"><span>份量</span><strong>${recipe.servings}</strong></div>
      <div class="meta-item"><span>時間</span><strong>${recipe.time}</strong></div>
      <div class="meta-item"><span>難度</span><strong>${recipe.difficulty}</strong></div>
      <div class="meta-item"><span>熱量</span><strong>${recipe.calories}</strong></div>
    </div>

    <div class="recipe-layout">
      <div>
        <section class="recipe-section">
          <h3>材料</h3>
          <ul class="ingredients">${recipe.ingredients.map((item) => `<li>${item}</li>`).join("")}</ul>
        </section>
        <section class="recipe-section">
          <h3>味道</h3>
          <p class="flavor-note">${recipe.flavor}</p>
        </section>
        <section class="recipe-section">
          <h3>變化重點</h3>
          <p class="variation-note">${recipe.variation}</p>
        </section>
      </div>
      <div>
        <section class="recipe-section">
          <h3>步驟</h3>
          <ol class="steps">${recipe.steps.map((item) => `<li>${item}</li>`).join("")}</ol>
        </section>
        <section class="recipe-section">
          <h3>小提示</h3>
          <ul class="tips">${recipe.tips.map((item) => `<li>${item}</li>`).join("")}</ul>
        </section>
      </div>
    </div>
  `;

  document.querySelector("#favoriteBtn").addEventListener("click", () => {
    toggleFavorite(recipe.id);
  });
}

function renderLoadingRecipe() {
  const mushroomName = mushroomSelect.options[mushroomSelect.selectedIndex].text;
  const proteinName = proteinSelect.options[proteinSelect.selectedIndex].text;
  const styleName = styleSelect.options[styleSelect.selectedIndex].text;

  recipeCard.innerHTML = `
    <div class="loading-card">
      <div class="pan-loader" aria-hidden="true">
        <span></span>
      </div>
      <h2>料理中...</h2>
      <p>正在把 ${mushroomName}、${proteinName} 和 ${styleName} 組成一份食譜。</p>
      <div class="loading-bar"><span></span></div>
    </div>
  `;
}

function setControlsDisabled(disabled) {
  [mushroomSelect, proteinSelect, styleSelect, document.querySelector("#generateBtn"), document.querySelector("#randomBtn")]
    .forEach((control) => {
      control.disabled = disabled;
    });
}

function renderFavorites() {
  favoriteCount.textContent = favorites.length;

  if (favorites.length === 0) {
    favoritesList.innerHTML = `<li><p class="empty-state">尚未收藏食譜。</p></li>`;
    return;
  }

  favoritesList.innerHTML = favorites
    .map((id) => recipeMap.get(id))
    .filter(Boolean)
    .map((recipe) => `<li><button type="button" data-recipe-id="${recipe.id}">${recipe.title}</button></li>`)
    .join("");

  favoritesList.querySelectorAll("button").forEach((button) => {
    button.addEventListener("click", () => {
      currentRecipeId = button.dataset.recipeId;
      selectRecipe(currentRecipeId);
      renderCurrentRecipe();
    });
  });
}

function renderMatrix() {
  comboMatrix.innerHTML = [
    ["菇類", mushrooms],
    ["肉類", proteins],
    ["風格", styles]
  ].map(([label, items]) => `
    <div class="combo-group">
      <span class="combo-pill combo-pill-heading">${label}</span>
      ${items.map((item) => `<span class="combo-pill">${item.name}</span>`).join("")}
    </div>
  `).join("");
}

function randomRecipeForGroup(groupId) {
  const recipes = recipeGroups.get(groupId) || allRecipes;
  return recipes[Math.floor(Math.random() * recipes.length)];
}

function toggleFavorite(id) {
  favorites = favorites.includes(id)
    ? favorites.filter((savedId) => savedId !== id)
    : [id, ...favorites].slice(0, 12);
  saveFavorites();
  renderFavorites();
  renderCurrentRecipe();
}

function readFavorites() {
  try {
    return JSON.parse(localStorage.getItem(favoriteKey)) || [];
  } catch {
    return [];
  }
}

function saveFavorites() {
  localStorage.setItem(favoriteKey, JSON.stringify(favorites));
}
