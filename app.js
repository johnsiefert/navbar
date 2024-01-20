// classList - shows/gets all classes
// contains - checks classList for specific class
// add - add class
// remove - remove class
// toggle - toggles class
const links = document.querySelector('.links');
const toggle = document.querySelector('.nav-toggle');

function toggleClick(){
    let showLinks = links.classList;
    console.log(showLinks)
    if(showLinks.contains('show-links')) {
        links.classList.remove('show-links');
    }else{
        links.classList.add('show-links');
    }
}

toggle.addEventListener('click',toggleClick)
