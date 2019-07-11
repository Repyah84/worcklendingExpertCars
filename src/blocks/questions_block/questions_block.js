export default function (){

    let btn = document.querySelectorAll('.questions_block__button');
    let elems = document.querySelectorAll('.questions_block__elem:nth-child(1)');
    let block = document.querySelectorAll('.questions_block__wraper');
    let ol = document.querySelectorAll('.questions_block__ol');
    let tachBlock = document.querySelectorAll('.questions_block__text');

    let el = ol.length - 1;
    let heightOl = ol[el].clientHeight

        // elems[el].style.transform = `rotate(0deg)`;
        // ol[el].style.top = `0px`;
        // block[el].style.height = `${heightOl}px`;

    window.onresize = function(){
        let elHeight = ol[0].clientHeight;
        if(block[el].clientHeight !== 0) block[el].style.height = `${elHeight}px`;
    }

    for(let i=0; i<tachBlock.length; i++){
        tachBlock[i].addEventListener('click', function(){

            elems[el].style.transform = 'rotate(90deg)';
            ol[el].style.top = `-100%`;
            block[el].style.height = `0px`;   

            heightOl = ol[i].clientHeight;
            el = i;
            
            if(block[i].clientHeight === 0){
                elems[i].style.transform = `rotate(0deg)`;
                ol[i].style.top = `0px`;
                block[i].style.height = `${heightOl}px`;
            }
        });
    }

    // for(let i=0; i<btn.length; i++){
    //     btn[i].addEventListener('click', function(){

    //         elems[el].style.transform = 'rotate(90deg)';
    //         ol[el].style.top = `-100%`;
    //         block[el].style.height = `0px`;   

    //         heightOl = ol[i].clientHeight;
    //         el = i;
            
    //         if(block[i].clientHeight === 0){
    //             elems[i].style.transform = `rotate(0deg)`;
    //             ol[i].style.top = `0px`;
    //             block[i].style.height = `${heightOl}px`;
    //         }
    //     });
    // }
}