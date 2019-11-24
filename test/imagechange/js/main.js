let myImage = document.querySelector('img');

myImage.onclick = function() {
    let mySrc = myImage.getAttribute('src')
    if(mySrc === 'images/firefox-icon.png') {
        myImage.setAtribute('src', 'images/firefox2.png')
    }
}
