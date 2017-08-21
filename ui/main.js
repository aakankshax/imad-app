console.log('Loaded!');

// Change the text of the maintext div

var element = document.getElementById('maintext');

element.innerHTML = 'New value';

// Move the image

var img = document.getElementById('madi');
madi.onclick = function() { 
    madi.style.marginLeft = '100px';
};