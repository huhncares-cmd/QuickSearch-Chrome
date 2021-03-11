const searchBtn = document.querySelector("#searchBtn");

if(localStorage.getItem("defaultEngine") == "" || localStorage.getItem("defaultEngine") == null || localStorage.getItem("defaultEngine") == undefined || localStorage.getItem("defaultEngine") == 0){
    function search(){
        window.open("https://www.google.com/search?q=" + document.querySelector("#search").value);
    }
    searchBtn.addEventListener("click", search);
} else {
    function search(){
        window.open(localStorage.getItem("defaultEngine") + document.querySelector("#search").value);
    }
    searchBtn.addEventListener("click", search);
}


