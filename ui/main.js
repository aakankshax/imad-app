console.log('Loaded!');

// Change the text of the maintext div

var element = document.getElementById('maintext');

element.innerHTML = 'New value';

// Move the image

var img = document.getElementById('madi');
var marginLeft=0;
function moveRight() {
    marginLeft = marginLeft+5;
    img.style.marginLeft = marginLeft+'px';
}
madi.onclick = function() { 
    var interval = setInterval(moveRight, 50);
};