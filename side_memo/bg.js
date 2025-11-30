// ① インストール時に「アイコンクリックでパネルを開く」動作を登録
chrome.runtime.onInstalled.addListener(() => {
  chrome.sidePanel
        .setPanelBehavior({ openPanelOnActionClick: true })
        .catch(console.error);
});

// ② （代替案）setPanelBehavior が効かない環境向け
// chrome.action.onClicked.addListener(async tab => {
//   await chrome.sidePanel.open({ tabId: tab.id });   // Chrome 116+
// });
