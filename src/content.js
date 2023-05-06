let divs = document.getElementsByTagName('div');

wordsSearch = [" I ", "[Yy]our", "[Yy]ou", "[Ll]ove", "[Gg]irl", "[Aa]sia"];
wordsReplace = [" 我 ", "你", "你", "愛", "女孩", "亚洲"];

chrome.storage.sync.get('username', function(options){
    console.log("aaa")
    if(options.username){
        wordsSearch.push('[Uu]sername');
        wordsReplace.push(options.username);
    }
    updatePage();
})

function updatePage() {
    for (var i = 0; i < divs.length; i++) {
        let div = divs[i];
        let resultText = div.innerHTML;
        for (var j = 0; j < wordsSearch.length; j++) {
            const wordSearch = wordsSearch[j];
            const wordReplace = wordsReplace[j];
            const regex = new RegExp("(?<!\\/\\/[\\S]+)"+wordSearch, 'gi');
            resultText = resultText.replace(regex, wordReplace);
        }
        div.innerHTML = resultText;
    }
}