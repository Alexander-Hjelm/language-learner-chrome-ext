let divs = document.getElementsByTagName('div');
for (var i = 0; i < divs.length; i++) {
    let div = divs[i];
    let resultText = div.innerHTML;
    resultText = resultText.replaceAll("a", "b");
    div.innerHTML = resultText;
}
