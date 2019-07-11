import cliCk from '../blocks/questions_block/questions_block.js';
import Ytoo from '../blocks/header/header.js';
import slider from '../blocks/prices/prices.js';
import burger from '../blocks/burger/burger.js';
import googleMap from '../blocks/contact/map.js';
import cols from '../blocks/cols/cols.js';
import comSlid from '../blocks/comment/comment.js';

window.addEventListener('load', function(){
    cliCk();
    Ytoo();
    slider();
    comSlid()
    burger();
    googleMap();
    cols();
})