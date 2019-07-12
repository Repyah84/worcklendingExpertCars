export default function(){
    let links = document.querySelectorAll('.logo_a__nav');
    let linBurg = document.querySelectorAll('.logo_a__burger');

    for(let i=0; i<links.length; i++){
        links[i].addEventListener('click', function(){
            let elClass = links[i].name
            let elem = document.querySelector(`${elClass}`);
            elem.scrollIntoView({behavior: "smooth"});
        })
    }
    for(let i=0; i<linBurg.length; i++){
        linBurg[i].addEventListener('click', function(){
            let elClass = linBurg[i].name
            let elem = document.querySelector(`${elClass}`);
            elem.scrollIntoView({behavior: "smooth"});
        })
    }
}