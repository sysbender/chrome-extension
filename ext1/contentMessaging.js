chrome.runtime.sendMessage(
  { payload: "hello from content messaging -1 " },
  function (response) {
    console.log(response.payload);
  }
);
