import test  from '../image/test.jpg';
import { printMe } from './print.js';
import { verity } from './aggregation.js';
let image = new Image();
image.src = test;
document.body.appendChild(image);
verity();

if( module.hot ){
    module.hot.accept('./print.js',function () {
        printMe();
    })
}