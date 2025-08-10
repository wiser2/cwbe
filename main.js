import { initCubeHtml } from './init.js';
import { Cube } from './cubeLogic.js';
import { drawCube } from './draw.js';

var cube = new Cube(3);

window.onload = function() {
    initCubeHtml(3);
    drawCube(cube.state, Cube.colours);
}