---
title: "Taiwan drone no-fly zone dataset"
summary: "All 22 counties' restricted-airspace notices normalised into one open GeoJSON dataset — ~5,000 sites, with the time dimension no official source publishes."
category: "Information Resilience"
year: "2026"
status: ongoing
order: 1
is_published: true
links:
  - label: "CD-TWN_Drone_Restrict_Area — source and data"
    url: "https://github.com/TCLeeTW/CD-TWN_Drone_Restrict_Area"
    source: "GitHub"
  - label: "Interactive version map"
    url: "https://tcleetw.github.io/CD-TWN_Drone_Restrict_Area/"
    source: "GitHub Pages"
  - label: "Regulations governing remotely piloted aircraft"
    url: "https://drone.caa.gov.tw/Default/DataDetail3/69"
    source: "CAA"
  - label: "CAA UAV airspace information system"
    url: "https://drone.caa.gov.tw"
    source: "drone.caa.gov.tw"
screenshots:
  - src: "/projects/drone-nofly/v2026-07-latest.jpg"
    caption: "Latest version (2026/07) for Taipei — the sidebar lets you switch counties and page through every published version."
    captionZh: "最新版本（2026/07，臺北市）——側欄可切換縣市、翻閱每一個已收錄的公告版次。"
  - src: "/projects/drone-nofly/v2026-06-spike.jpg"
    caption: "Paging back to 2026/06 shows the change: 42 newly restricted zones highlighted in red against the previous version."
    captionZh: "回到 2026/06 版，紅色標示出比對上一版新增的 42 個禁限區域。"
  - src: "/projects/drone-nofly/v2025-12-increment.jpg"
    caption: "Every version carries its own diff — 2025/12 added 6 more restricted zones on top of what came before."
    captionZh: "每個版本都有自己的差異——2025/12 版比前一版新增了 6 個禁限區。"
why:
  heading: "The data existed, but nobody could use it."
  paragraphs:
    - "Under Taiwan's regulations, drone flight restriction zones are managed and published independently by each local government. Every county does it differently — ODS here, XLSX there, scanned PDFs elsewhere, coordinates in degrees-minutes-seconds, numbering schemes that collide between counties."
    - "But the regulation doesn't require local governments to retain or publish historical records — which means some counties' data only shows the current rules, with no way to see how the boundaries have changed."
    - "The Civil Aviation Administration runs a national map, but it's a single live snapshot: it shows you where you can't fly today, and nothing about how that changed. For anyone trying to understand how restricted airspace is actually expanding — researchers, civil defense planners, drone operators, journalists — there was no answer, because no one was keeping the history."
    - "And when a boundary change becomes disputed, can we actually pinpoint the difference between what it was and what it is now?"
how:
  heading: "Normalise everything, and keep every version."
  items:
    - "Collected the original government notices for all 22 counties, preserving each source file exactly as published so results stay auditable."
    - "Built a pipeline converting ODS, XLSX and OCR'd PDFs into standard WGS84 GeoJSON, including automatic correction of sources that stored coordinates latitude-first."
    - "Designed an ID scheme mapping a global UID to each government's original notice number, so records stay traceable and don't collide across counties."
    - "Merged snapshots into a temporal format where each site carries its own history[] — first seen, last seen, and every status change."
    - "Built an interactive Leaflet map that pages through published versions, showing both the change (newly restricted / lifted) and the full picture at that version."
    - "Documented the limits honestly: only Taipei has a true continuous series, so cross-source differences are flagged as completeness gaps rather than miscounted as policy changes."
what:
  heading: "An open dataset that didn't exist before."
  items:
    - "All 22 counties covered — roughly 5,000 restricted facilities plus 24 corridors, in one consistent schema."
    - "Taipei reconstructed across 9 published versions from 2022 to 2026, giving a real four-year view of how restrictions grew."
    - "Released openly: data under CC BY 4.0, code under MIT, fully rebuildable from source with one command."
    - "Usable straight in QGIS, web maps, or any analysis script — no scraping, no cleanup."
  note: "The dataset is maintained and open to contributions; the biggest remaining gap is historical versions from counties that haven't digitised their archives."
additional:
  items:
    - "This is an open-source project — discussion and contributions are welcome via GitHub PR."
    - "Historical data outside Taipei is sparse. If you're able to help source it, please get in touch."
zh:
  title: "台灣無人機禁航區資料集"
  summary: "把全台 22 縣市的禁航區公告，整併成一份開放的 GeoJSON 資料集——約 5,000 個地點，並且保留了官方資料沒有的時間維度。"
  why:
    heading: "資料本來就存在，但沒人能用。"
    paragraphs:
      - "台灣無人機飛行管制範圍依據法規是由地方政府管理並各自發布。每個縣市的格式都不一樣——有的是 ODS，有的是 XLSX，有的是掃描 PDF，座標系統用度分秒表示，編號規則在縣市之間還會互相衝突。"
      - "但法規並沒有要求地方政府要保留並公告歷史紀錄--這造成部分地方政府的資料只能找到[現在]的規範，而無法看出範圍的變化。"
      - "民航局有一套全國地圖，但那只是單一即時快照：只能告訴你今天不能在哪裡飛，看不出隨時間的變化。對於想了解禁航區實際上如何擴張的人——研究者、民防規劃者、無人機操作者、記者——一直找不到答案，因為沒有人在保存歷史紀錄。"
      - "而當區域的變化出現爭議時，我們究竟能不能準確地找到過去-現在之間的差異?"
  how:
    heading: "把所有資料標準化，並保留每一個版本。"
    items:
      - "蒐集全台 22 縣市的原始政府公告，完整保留每份來源檔案的原始樣貌，確保結果可追溯查核。"
      - "建立格式統一轉換流程，把 ODS、XLSX 和 OCR 辨識的 PDF 統一轉成標準 WGS84 GeoJSON 格式，並自動修正部分來源把座標寫成緯度優先的錯誤。"
      - "設計全域唯一ID對應系統，把全域唯一識別碼對應到各縣市政府原始的公告編號，確保記錄可追溯、不會在縣市之間互相衝突。"
      - "把各版本快照合併成時間序列格式，每個地點都有自己的 history[]——首次出現、最後出現，以及每一次狀態變化。"
      - "以互動式 Leaflet 地圖方式呈現，可以逐版本瀏覽，同時顯示變化（新增禁航／解除）與該版本的完整樣貌。"
      - "誠實記錄資料的限制：只有台北市有真正連續的版本序列，因此跨來源的差異會被標記為資料完整度落差，而不是被誤算成政策變動。"
  what:
    heading: "一份先前不存在的開放資料集。"
    items:
      - "涵蓋全台 22 縣市——約 5,000 個禁航設施，加上 24 條航道走廊，統一在同一套資料結構裡。"
      - "台北市從 2022 到 2026 年重建了 9 個歷史版本，是唯一能看到完整四年演變的縣市。"
      - "完全開放釋出：資料採 CC BY 4.0 授權，程式碼採 MIT 授權，一行指令就能從原始資料重建整個資料集。"
      - "可直接用於 QGIS、網頁地圖或任何分析腳本——不需要另外爬蟲或清理資料。"
    note: "這份資料集會持續維護，也歡迎外部貢獻；目前最大的缺口是那些縣市還沒有數位化的歷史檔案。"
  additional:
    items:
      - "此為開源專案，歡迎討論與改進(透過github PR)"
      - "北市以外區域缺乏歷史資料，若有人願意協助取得，請不吝提供"
---
