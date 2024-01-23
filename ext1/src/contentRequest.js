const requestSender = new XMLHttpRequest();

requestSender.onreadystatechange = apiHandler;
function apiHandler(response) {
  console.log("------------------get response from api");
  //console.log(response);
  // done = 4
  if (requestSender.readyState === 4 && requestSender.status === 200) {
    console.log(response.target.response);
  }
}

requestSender.open("GET", "https://api.github.com/users/sysbender", true);
requestSender.send();
console.log("===============send request");
