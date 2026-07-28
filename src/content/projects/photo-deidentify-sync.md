---
title: "Activity photo de-identification pipeline"
summary: "An automated pipeline that scans civil defense activity photos on a schedule, blurs faces and strips EXIF metadata, then notifies the social media team over Discord — replacing manual processing."
category: "Civil Defense"
year: "2026"
date: 2026-07-28
status: "ongoing"
order: 8
is_published: true
tags: ["Automation", "Privacy", "Civil Defense"]
why:
  heading: "Problem statement"
  paragraphs:
    - "Activity photos need to be de-identified, so civil defense members' identities don't leak out."
    - "Photo files need their EXIF data stripped, so OSINT techniques can't reverse-engineer locations or devices from them."
    - "Face-detection accuracy used to be poor, requiring extra manual review and cleanup."
    - "When photo volume is high or activities are frequent, doing this by hand burns through teammates' time and energy on repetitive busywork."
how:
  heading: "The collaboration and tuning process"
  items:
    - "Tested face-detection accuracy against real activity photos, comparing missed detections and false positives case by case."
    - "Tried two detection models — direct face detection, and pose-estimation to infer head position — testing multiple rotation angles, since training photos often show someone lying on the ground."
    - "Found that neither method alone was reliable, so decided to run both together and take the union of what each one flags."
    - "Kept tuning detection logic and parameters against real results until converging on the current version."
what:
  heading: "Running in production, still being tuned."
  items:
    - "Runs on a daily schedule, scoped to a shared team folder by folder ID."
    - "Runs both detection methods — direct face detection and pose-based head estimation — together, blurring the union of what either one flags."
    - "Automatically batches large backlogs and pushes a notification when done, no manual check needed."
    - "New photos are fully processed within a day, replacing the manual blurring step entirely."
    - "Still occasionally blurs something that isn't a face — but over-blurring is better than missing one."
  note: "If other teams are interested in this tool, feel free to reach out."
zh:
  title: "民防團活動照片自動化去識別流程"
  summary: "一套自動化流程：定期掃描民防團活動照片，模糊人臉並清除 EXIF metadata，完成後透過 Discord 通知社群媒體團隊，取代原本的人工處理。"
  why:
    heading: "問題陳述"
    paragraphs:
      - "活動照片需要去識別，避免民防成員身份外流。"
      - "照片檔案需要移除 EXIF 資料，避免被 OSINT 反查地點、裝置等資訊。"
      - "過去人臉辨識率不佳，經常需要人工額外檢查、補漏處理。"
      - "若照片多或活動密集，工人智慧經常消耗團隊夥伴時間與心力在瑣碎的事情上。"
  how:
    heading: "協作與調整的過程"
    items:
      - "拿實際活動照片測試人臉偵測效果，逐一比對漏判與誤判案例。"
      - "測試「直接人臉偵測」與「姿態關鍵點推算頭部」兩種模型，並嘗試不同旋轉角度（因為訓練照片常有人躺在地上的情境）。"
      - "發現單一偵測方法各有盲點，最後決定將兩種方法合併使用，模糊範圍取聯集。"
      - "依實測結果持續調整偵測邏輯與參數，收斂到目前版本。"
  what:
    heading: "已經在正式環境運作，仍在持續調整。"
    items:
      - "用團隊協作雲端空間裡的資料夾 ID 鎖定範圍，每天自動排程執行。"
      - "同時用「直接偵測人臉（多角度）」與「偵測姿態關鍵點推算頭部」兩種方法，模糊範圍取聯集。"
      - "遇到大量積壓會自動分批處理，完成後推播通知，不用人工確認。"
      - "新照片一天內自動處理完成，取代原本人工模糊流程。"
      - "目前仍偶爾會誤判、模糊到非人臉的區域——但寧可多模糊也不要漏掉。"
    note: "若有其他團隊此工具有興趣歡迎詢問討論。"
---
