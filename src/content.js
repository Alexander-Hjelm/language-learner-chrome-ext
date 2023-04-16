let divs = document.getElementsByTagName('div');

wordsSearch = ["a", "e", "i"];
wordsReplace = ["o", "o", "o"];

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