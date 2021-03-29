let element = document.getElementById('company-name');

function changeColorPurple() {
    element.style.textDecoration ='underline'
}

function changeColorWhite() {
    element.style.textDecoration ='none'
}

element.onmouseenter = changeColorPurple ;
element.onmouseleave = changeColorWhite ;

let profile = document.querySelector('.profile');

function Colorize() {
    profile.style.filter = 'grayscale(0%)';
    profile.style.height = '250px';
    profile.style.width = '250px';
}

function Blacken() {
    profile.style.filter = 'grayscale(100%)';
    profile.style.height = '200px';
    profile.style.width = '200px';
}
profile.onmouseenter = Colorize ;
profile.onmouseleave = Blacken ;

let lif = document.getElementById('nav-founders');
let lip = document.getElementById('nav-portfolio');
let liv = document.getElementById('nav-values');

function Border(event) {
    event.target.style.border = 'solid';
};

function unBorder(event) {
    event.target.style.border = '';
};

lif.onmouseover = Border ;
lif.onmouseleave = unBorder ;
lip.onmouseover = Border ;
lip.onmouseleave = unBorder ;
liv.onmouseover = Border ;
liv.onmouseleave = unBorder ;
