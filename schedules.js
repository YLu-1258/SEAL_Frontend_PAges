function httpGet() {
    var xmlHttp = new XMLHttpRequest();
    xmlHttp.open("GET", "http://13.58.102.35/api/users/", false); // false for synchronous request
    xmlHttp.send(null);
    json = JSON.parse(xmlHttp.responseText);
    return json;
}

getResult = httpGet();

console.log(getResult[0]["gpa"]);



function create_fact(){
    //Validate Password (must be 6-20 characters in len)
    //verifyPassword("click");
    const body = {
        username: "eris29",
        fives : document.getElementById("fives").value,
        fours : document.getElementById("fours").value,
        threes : document.getElementById("threes").value,
        twos : document.getElementById("twos").value,
        ones : document.getElementById("ones").value,
        zeroes : document.getElementById("zeroes").value
    };
    const requestOptions = {
        method: 'POST',
        body: JSON.stringify(body),
        headers: {
            "content-type": "application/json",
            'Authorization': 'Bearer my-token',
        },
    };

    // URL for Create API
    // Fetch API call to the database to create a new user
    fetch("https://seal.nighthawkcodingsociety.com/api/users/gpa/update", requestOptions)
      .then(response => {
        // trap error response from Web API
        if (response.status !== 200) {
          const errorMsg = 'Database create error: ' + response.status;
          console.log(errorMsg);

        }
        // response contains valid result
    })
  }