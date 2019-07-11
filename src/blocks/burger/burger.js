export default function(){
    let burger = document.querySelector('.burger')
        .addEventListener('click', clickBurger);
    let burElems = document.querySelectorAll('.burger_elem');

    let burgNav = document.querySelector('.logo_burger__nav');

    let burgNavLinck = document.querySelectorAll('.logo_burger__nav .logo_a__nav');
    
    let Flag = true

    for(let i=0; i<burgNavLinck.length; i++){
        burgNavLinck[i].addEventListener('click', function(){
            if(!Flag){
                Flag = true;
                burElems[0].style.transform = 'translateY(0)';
                burElems[3].style.transform = 'translateY(0)';
                burElems[1].style.transform = 'rotate(0)';
                burElems[2].style.transform = 'rotate(0)';
                burgNav.style.transform = 'translateX(100%)';
            }
        })
    }

    function clickBurger(){

        if(Flag){
            Flag = false;
            burElems[0].style.transform = 'translateY(-300%)';
            burElems[3].style.transform = 'translateY(300%)';
            burElems[1].style.transform = 'rotate(45deg)';
            burElems[2].style.transform = 'rotate(-45deg)';
            burgNav.style.transform = 'translateX(0)';
        }else{
            Flag = true;
            burElems[0].style.transform = 'translateY(0)';
            burElems[3].style.transform = 'translateY(0)';
            burElems[1].style.transform = 'rotate(0)';
            burElems[2].style.transform = 'rotate(0)';
            burgNav.style.transform = 'translateX(100%)';
        }
    };

};