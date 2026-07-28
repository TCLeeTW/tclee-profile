---
title: "Activity photo de-identification pipeline"
summary: "A scheduled GitHub Actions pipeline that finds new civil defense activity photos on Google Drive, strips identifying EXIF metadata, and blurs faces before anyone has to do it by hand."
category: "Civil Defense"
year: "2026"
status: "ongoing"
order: 8
is_published: false
why:
  heading: "Every week's photos, someone had to blur by hand."
  paragraphs:
    - "港湖民防團 (Ganghu Civil Defense Corps) runs training activities almost every week, and members upload the photos to a shared Google Drive folder. Before those photos can be used publicly, faces need to be blurred and location/device metadata stripped — otherwise identifying information about civil defense members ends up in circulation. That was a manual, recurring chore that didn't scale with weekly activity volume."
    - "It also had to be trustworthy: a privacy tool that occasionally misses a face is worse than no automation at all, because it creates false confidence that photos are safe to share."
how:
  heading: "A pipeline that runs itself, and a detector that doesn't trust just one model."
  items:
    - "Google Drive access via rclone, scoped to a single folder by root ID rather than a fragile path, running on a daily GitHub Actions schedule with no server to maintain."
    - "Output filenames key off each source file's Drive ID rather than its name, because Drive allows duplicate filenames in the same folder — phones and messaging apps collide on names like IMG_0001.HEIC constantly, and name-based dedup was silently dropping photos."
    - "Face de-identification turned out to need two complementary detectors, not one: direct face detection (checked at four rotations, since a training photo often has someone lying on the ground) catches clean faces at odd angles; a pose-estimation pass locates the head from body keypoints when the face itself is occluded, closed-eyed, or too indirect for a face model to trust. Each one misses cases the other catches, so the pipeline unions both rather than picking a winner."
    - "Idempotent by design: every run only processes photos it hasn't seen, self-splits large backlogs across multiple runs to stay under Actions' execution limits, and pushes a completion notification (with a direct link to the folder it just touched) so nothing has to be checked by hand."
what:
  heading: "Running in production, still being tuned."
  items:
    - "Processes new activity photos automatically within a day of upload, no manual blurring step left in the workflow."
    - "The two-detector union recovered real misses neither single method caught on its own, confirmed against actual training photos before being adopted."
  note: "Actively evolving — the current focus is tightening the face/pose detectors' remaining blind spots (extreme occlusion, unusual poses) without over-blurring."
zh:
  title: "活動照片自動去識別管線"
  summary: "一套排程自動化流程，找出 Google Drive 上新上傳的民防活動照片，清除可識別身份的 EXIF metadata 並模糊人臉，不用再手動處理。"
  why:
    heading: "問題陳述"
    paragraphs:
      - "活動照片需要去識別，避免民防成員身份外流。"
      - "照片檔案需要移除 EXIF 資料，避免被 OSINT 反查地點、裝置等資訊。"
      - "過去人臉辨識率不佳，經常需要人工額外檢查、補漏處理。"
  how:
    heading: "協作與調整的過程"
    items:
      - "拿實際活動照片測試人臉偵測效果，逐一比對漏判與誤判案例。"
      - "發現單一偵測方法各有盲點，改成兩種方法一起跑、模糊範圍取聯集。"
      - "依實測結果持續調整偵測邏輯與參數，收斂到目前版本。"
  what:
    heading: "已經在正式環境運作，仍在持續調整。"
    items:
      - "用團隊協作雲端空間裡的資料夾 ID 鎖定範圍，每天自動排程執行。"
      - "輸出檔名用來源檔案的雲端 ID 命名，避免同名照片互相覆蓋或漏掉。"
      - "同時用「直接偵測人臉（多角度）」與「偵測姿態關鍵點推算頭部」兩種方法，模糊範圍取聯集。"
      - "遇到大量積壓會自動分批處理，完成後推播通知，不用人工確認。"
      - "新照片一天內自動處理完成，取代原本人工模糊流程。"
    note: "若有其他團隊此工具有興趣歡迎詢問討論。"
---
