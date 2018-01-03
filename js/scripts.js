var chairName = document.querySelectorAll('.article-box-description');

for (var i=0; i<chairName.length; i++) {
    chairName[i].addEventListener('mouseover', function (hide) {
        hide.preventDefault();
        this.style.visibility='hidden';
    })
}

var next = document.querySelector('.fa-angle-right');
var prev = document.querySelector('.fa-angle-left');

var imgOne = document.querySelector('.imgOne');
var imgTwo = document.querySelector('.imgTwo');



next.addEventListener('click', function() {
    imgOne.setAttribute('src','images/red_chair.png');
});


prev.addEventListener('click', function() {
    imgOne.setAttribute('src','images/red_chair.png');
});

