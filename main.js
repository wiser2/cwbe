import { initCubeHtml } from './init.js';
import { Cube } from './cubeLogic.js';
import { drawCube } from './draw.js';


function onKeyDown(e) {
    let c = e.code;

    if (c === "KeyF") { // U'
        cube.rotateLayer(0, 0, false)
    } else if (c === "KeyJ") { // U
        cube.rotateLayer(0, 0, true)
    } else if (c === "KeyE") { // L'
        cube.rotateLayer(1, 0, false)
    } else if (c === "KeyD") { // L
        cube.rotateLayer(1, 0, true)
    } else if (c == "KeyG") { // F'
        cube.rotateLayer(2, 0, false)
    } else if (c == "KeyH") { // F
        cube.rotateLayer(2, 0, true)
    } else if (c === "KeyK") { // R'
        cube.rotateLayer(3, 0, false)
    } else if (c === "KeyI") { // R
        cube.rotateLayer(3, 0, true)
    } else if (c === "KeyO") { // B'
        cube.rotateLayer(4, 0, false)
    } else if (c === "KeyW") { // B
        cube.rotateLayer(4, 0, true)
    } else if (c === "KeyS") { // D'
        cube.rotateLayer(5, 0, false)
    } else if (c === "KeyL") { // D
        cube.rotateLayer(5, 0, true)
    } else if (c === "Period" || c === "KeyX") { // M'
        cube.doSliceMove(1, 1, false)
    } else if (c === "Digit5" || c === "Digit6") { // M
        cube.doSliceMove(1, 1, true)
    } else if (c === "Digit9") { // E'
        cube.doSliceMove(5, 1, false)
    } else if (c === "Digit2" ) { // E
        cube.doSliceMove(5, 1, true)
    } else if (c === "Digit1") { // S'
        cube.doSliceMove(2, 1, false)
    } else if (c === "Digit0" ) { // S
        cube.doSliceMove(2, 1, true)
    }

    drawCube(cube.state, Cube.colours);
}


var cube = new Cube(3);

window.onload = function() {
    initCubeHtml(3);
    console.log(cube.size);
    // cube.rotateLayer(1, 0, false);
    // cube.rotateLayer(0, 0, false);
    drawCube(cube.state, Cube.colours);
}

window.onkeydown = onKeyDown;