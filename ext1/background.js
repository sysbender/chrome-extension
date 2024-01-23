chrome.runtime.onInstalled.addListener(() => {
  console.log("installed");

  // create context menu
  chrome.contextMenus.create({
    id: "1",
    title: 'you selected "%s"',
    contexts: ["selection"],
  });
});

chrome.bookmarks.onCreated.addListener(() => {
  console.log("bookmark created");
});
// messaging
chrome.runtime.onMessage.addListener(bgMessagingCallback);
function bgMessagingCallback(message, sender, sendResponse) {
  console.log(message);
  console.log("sender=", sender);
  sendResponse({ payload: "response from background messaging js -1 " });
}

// add listener for context menu
chrome.contextMenus.onClicked.addListener(function (info, tab) {
  console.log(info);
  console.log(tab);
});
