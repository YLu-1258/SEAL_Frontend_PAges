function httpGet() {
    var xmlHttp = new XMLHttpRequest();
    xmlHttp.open("GET", "http://13.58.102.35/api/users/", false); // false for synchronous request
    xmlHttp.send(null);
    json = JSON.parse(xmlHttp.responseText);
    return json;
}

getResult = httpGet();

console.log(getResult[0]["gpa"]);