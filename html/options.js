var submitEngine = document.querySelector("#submitEngine");

function changeDefaultEngine(){
    localStorage.setItem("defaultEngine", document.querySelector("#searchEngine").value);
    var value = document.querySelector("#searchEngine").value;
    var notifOptions = {
        type: "basic",
        iconUrl: "../img/48.png",
        title: "Default Search Engine changed",
        message: "Your default search engine for QuickSearch™ is now: " + value
    };
   
    chrome.notifications.create('resetNotif', notifOptions);
}

if(localStorage.getItem("defaultEngine") == "" || localStorage.getItem("defaultEngine") == null || localStorage.getItem("defaultEngine") == undefined || localStorage.getItem("defaultEngine") == 0){
    document.getElementById("message").innerHTML = "https://www.google.com/search?q=";
} else {
    document.getElementById("message").innerHTML = localStorage.getItem("defaultEngine");
}

submitEngine.addEventListener("click", changeDefaultEngine);