var contextMenuItem = {
    "id": "search",
    "title": "Search with QuickSearch™",
    "contexts": [
        "selection"
    ],
};
chrome.contextMenus.create(contextMenuItem);
chrome.contextMenus.onClicked.addListener(function(clickData){
    if(clickData.menuItemId == "search" && clickData.selectionText){
        if(localStorage.getItem("defaultEngine") == "" || localStorage.getItem("defaultEngine") == null || localStorage.getItem("defaultEngine") == undefined || localStorage.getItem("defaultEngine") == 0){
            window.open("https://www.google.com/search?q=" + clickData.selectionText);
        } else {
            window.open(localStorage.getItem("defaultEngine") + clickData.selectionText);
        }
    }
});