var contextMenuAlertItem = {
    "id": "alert",
    "title": "Alert",
    "contexts": ["all"]
}

var contextMenuAlertSeletionItem = {
    "id": "alertSelection",
    "title": "Alert selected text",
    "contexts": ["selection"]
}

chrome.contextMenus.create(contextMenuAlertItem);
chrome.contextMenus.create(contextMenuAlertSeletionItem);

chrome.contextMenus.onClicked.addListener(function(data){
    if (data.menuItemId == "alert") {
        alert("nice");
    }

    else if (data.menuItemId == "alertSelection" && data.selectionText) {
        alert(data.selectionText);
    }
})

// https://developer.chrome.com/docs/extensions/reference/contextMenus/