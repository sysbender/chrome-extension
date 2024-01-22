chrome.runtime.onInstalled.addListener(() => {
  console.log("installed");
});

chrome.bookmarks.onCreated.addListener(() => {
  console.log("bookmark created");
});
