#

// intellisense for chrome extension
npm i types @types/chrome

chrome://extensions - developer mode

1. background script - monitor browser event
2. content script
3. options page
4. ui

create manifest.json
load extension

### chrome.storage,

- local storage
- sync storage -if sync is not enable by the account, it acts as local

permissions : "storage"

### sendmessage

chrome.runtime.sendMessage( message, callback) - send to extension , - runtime.onMessage() - receive by extension - runtime.onMessageExternal() - receive by other extension
chrome.tabs.sendMessage() - send to content
