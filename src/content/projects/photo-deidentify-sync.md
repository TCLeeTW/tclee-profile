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
    heading: "每週的活動照片，本來都要有人手動打馬賽克。"
    paragraphs:
      - "港湖民防團幾乎每週都有訓練活動，成員會把照片上傳到共用的 Google Drive 資料夾。這些照片要公開使用前，需要先模糊人臉、清掉定位/裝置等 metadata，否則民防成員的身份資訊會跟著照片流出去。這件事原本是人工處理，量隨著每週活動累積，越來越不划算。"
      - "而且這件事必須做到值得信任：一個偶爾漏臉的隱私工具，比完全沒有自動化還糟，因為它會讓人誤以為照片已經處理過、可以放心公開。"
  how:
    heading: "一套會自己跑的管線，加上不只信任單一模型的偵測邏輯。"
    items:
      - "用 rclone 存取 Google Drive，用資料夾 ID 而不是容易失效的路徑鎖定範圍，靠 GitHub Actions 每天排程執行，不用維護伺服器。"
      - "輸出檔名用每個來源檔案在 Drive 上的 ID 命名，而不是原始檔名——因為 Google Drive 允許同一資料夾裡有重複檔名，手機跟通訊軟體常常撞名（例如都叫 IMG_0001.HEIC），用檔名去重會不知不覺漏掉照片。"
      - "人臉去識別實測下來需要兩種互補的偵測方式，不能只靠一種：直接偵測人臉（轉 4 個角度分別偵測，因為訓練照片常常有人躺在地上）能抓到角度歪但特徵清楚的臉；姿態偵測則是在臉被遮擋、閉眼、或角度太極端讓臉部模型沒信心時，改用身體關鍵點推算頭部位置。兩者各自會漏掉不同案例，所以管線把兩者的偵測結果取聯集，而不是二選一。"
      - "設計上具備冪等性：每次執行只處理還沒處理過的照片，遇到大量積壓會自動拆成多輪執行以免超過 Actions 執行時間上限，跑完會推播通知（附上這次處理到的資料夾連結），不用手動確認。"
  what:
    heading: "已經在正式環境運作，仍在持續調整。"
    items:
      - "新上傳的活動照片會在一天內自動處理完成，整個流程已經不需要人工模糊這一步。"
      - "兩個偵測方法取聯集後，實測確實補回了單一方法各自會漏掉的真實案例，拿實際訓練照片驗證過才採用。"
    note: "還在持續優化——目前重點是縮小人臉/姿態偵測剩下的盲區（極端遮擋、少見姿勢），同時避免模糊範圍過度擴大。"
---
