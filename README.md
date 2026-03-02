# 個人品牌網站 - HTML/CSS 切版練習

六角學院 2024 Web Camp 切版練習專案，實作個人品牌形象網站，包含響應式設計（RWD）。

## 專案結構

```
htmlcssUpdate/
├── index.html          # 主頁面
├── all.css             # 樣式表
├── all.js              # 互動邏輯（jQuery）
├── jquery-3.7.1.min.js
└── img/                # 本地圖片資源
```

## 頁面區塊

- **Header**：Logo + 導覽選單 / 漢堡選單
- **Banner**：主視覺標語
- **Experience**：2B / 2C 工作經驗
- **作品集**：六件作品卡片展示
- **分頁**：頁碼導覽
- **Footer**：聯絡資訊 + 社群連結

## 響應式斷點

| 斷點 | 說明 |
|------|------|
| `> 980px` | 桌機版，顯示完整導覽選單 |
| `≤ 980px` | 平板 / 手機，切換為漢堡選單 |
| `≤ 768px` | 手機版，footer 改為直式排列 |
| `≤ 375px` | 小尺寸手機 |

## 漢堡選單行為

- 980px 以下顯示漢堡圖示
- 點擊展開全螢幕下拉選單（`height: 100vh`）
- 選單開啟時鎖定頁面捲動（`body overflow: hidden`）
- 點擊關閉圖示收起選單，恢復頁面捲動

## 使用技術

- HTML5 / CSS3
- jQuery 3.7.1
- CSS Flexbox
- RWD Media Queries
