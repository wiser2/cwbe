import { initCubeHtml } from './init.js';
import { Cube } from './cubeLogic.js';
import { drawCube } from './draw.js';

var cube = new Cube(3);

window.onload = function() {
    initCubeHtml(3);
    // cube.rotateLayer(0, 0, true);
    cube.doSliceMove(5, 1, false)
    cube.doSliceMove(5, 1, false)
    
    cube.doSliceMove(4, 1, false)
    cube.doSliceMove(4, 1, false)
    
    cube.doSliceMove(3, 1, false)
    cube.doSliceMove(3, 1, false)
    // cube.doSliceMove(1, 1, false)
    // cube.rotateLayer(1, 0, true);
    drawCube(cube.state, Cube.colours);
}