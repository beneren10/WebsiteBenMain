var index = 0;

function change() {
    var colours = ["red","green","orange","lilac",'blue','yellow'];
    
    document.getElementById('containerbox').style.background = colours[index++];

    if (index > colours.length - 1) {
        index = 0;
    }
}

function reset() {
    document.getElementById('containerbox').style.background = '#1F509A'
}

function view() {
    var nameInput = document.getElementsByTagName('input')[0].value
    var whereInput = document.getElementsByTagName('input')[1].value
    var motherInput = document.getElementsByTagName('input')[2].value

    alert(`Welcome to my page ${nameInput}, I have a feeling you live in ${whereInput} and your mothers' maiden name is probably ${motherInput}`)
}

function nav() {
    document.getElementById('nav').classList.toggle('nav-toggle');
    
}