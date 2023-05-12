let divs = document.getElementsByTagName('div');

wordsSearch = [];
wordsReplace = [];

chrome.storage.sync.get('username', function(options){
    console.log(`Hello, ${options.username}! :)`)
})

chrome.storage.sync.get('wordsInput', function(options){
    if(options.wordsInput){
        const lines = options.wordsInput.split('\n');
        const linesSplit = lines.map(line => line.split('|'));
        linesSplit.forEach(lineSplit => {
            wordSearch = lineSplit[1];
            wordReplace = lineSplit[2];
            wordsSearch.push(wordSearch);
            wordsReplace.push(wordReplace);
        });
        console.log(wordsSearch);
        console.log(wordsReplace);
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