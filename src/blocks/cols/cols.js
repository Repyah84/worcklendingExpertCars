
export default function(){
    let blend = document.querySelector('.cols_blender');
        blend.addEventListener('mouseover', enterMouskBlend);
        blend.addEventListener('mouseout', leveMouskBlend);
        blend.addEventListener('click', clickkBlend);
    let wrapElems = document.querySelector('.cols_elems');
    let colsElem = document.querySelectorAll('.cols_elem ');
    let colsLinck = document.querySelectorAll('.cols_a');

    let winWid = (window.innerWidth <= 992) ? true : false;
    let Clic = true;

    window.addEventListener('resize', function(){
        winWid = (window.innerWidth <= 992) ? true : false;
    })

    function clickkBlend(){
        if(winWid && Clic){
            for(let i=0; i<colsElem.length; i++){
                colsElem[i].style.transform = 'scaley(1)';
            };
            for(let i=0; i<colsLinck.length; i++){
                colsLinck[i].style.opacity = '1';
            };
            wrapElems.style.transform = 'scaley(1)';
            Clic = !Clic 
        }else if(winWid && !Clic){
            for(let i=0; i<colsElem.length; i++){
                colsElem[i].style.transform = 'scaley(0)';
            };
            for(let i=0; i<colsLinck.length; i++){
                colsLinck[i].style.opacity = '0';
            };
            wrapElems.style.transform = 'scaley(0)';
            Clic = !Clic
        }
    }

    function enterMouskBlend(){
        if(!winWid){
            for(let i=0; i<colsElem.length; i++){
                colsElem[i].style.transform = 'scaley(1)';
            };
            for(let i=0; i<colsLinck.length; i++){
                colsLinck[i].style.opacity = '1';
            };
            wrapElems.style.transform = 'scaley(1)';
        }
    };

    function leveMouskBlend(){
        if(!winWid){
            for(let i=0; i<colsElem.length; i++){
                colsElem[i].style.transform = 'scaley(0)';
            };
            for(let i=0; i<colsLinck.length; i++){
                colsLinck[i].style.opacity = '0';
            };
            wrapElems.style.transform = 'scaley(0)';
        }
    }
};