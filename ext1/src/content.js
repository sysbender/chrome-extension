window.onload = () => {
  const button = document.createElement("button");
  button.id = "darkModeButton";
  button.textContent = "Dark Mode";

  const input = document.createElement("input");
  input.type = "checkbox";
  input.id = "darkSetting";
  document.querySelector("#end").prepend(button, input, "Auto Apply?");

  button.addEventListener("click", enableDarkMode);
  input.addEventListener("click", storeSetting);

  checkSetting();
};

function enableDarkMode(status = true) {
  if (status) {
    document.querySelector("ytd-app").style.backgroundColor = "lightGreen";
  } else {
    document.querySelector("ytd-app").style.backgroundColor = "white";
  }
}

function storeSetting() {
  const isEnabled = document.getElementById("darkSetting").checked;
  const setting = { enabled: isEnabled };
  //await chrome.storage.session.set({ name: "David", color: "green" });
  chrome.storage.local.set(setting).then(() => {
    console.log("store setting = ", setting);
  });
  enableDarkMode(isEnabled);
}

function checkSetting() {
  // chrome.storage.local.get(["key"]).then((result) => {
  //     console.log("Value currently is " + result.key);
  //   });

  let isEnabled = false;
  chrome.storage.local.get(["enabled"]).then((result) => {
    isEnabled = result.enabled;
    console.log(`get setting = ${result.enabled}`);
    //set
    document.getElementById("darkSetting").checked = result.enabled;
    if (isEnabled) {
      enableDarkMode();
    }
  });
}
