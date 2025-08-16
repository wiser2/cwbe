import { initCubeHtml } from './init.js';
import { Cube } from './cubeLogic.js';
import { drawCube } from './draw.js';


function doControls(c) {
        if (c === "KeyF") { // U'
        cube.doOuterLayerMove(0, 0, false)
    } else if (c === "KeyJ") { // U
        cube.doOuterLayerMove(0, 0, true)
    } else if (c === "KeyE") { // L'
        cube.doOuterLayerMove(1, 0, false)
    } else if (c === "KeyD") { // L
        cube.doOuterLayerMove(1, 0, true)
    } else if (c == "KeyG") { // F'
        cube.doOuterLayerMove(2, 0, false)
    } else if (c == "KeyH") { // F
        cube.doOuterLayerMove(2, 0, true)
    } else if (c === "KeyK") { // R'
        cube.doOuterLayerMove(3, 0, false)
    } else if (c === "KeyI") { // R
        cube.doOuterLayerMove(3, 0, true)
    } else if (c === "KeyO") { // B'
        cube.doOuterLayerMove(4, 0, false)
    } else if (c === "KeyW") { // B
        cube.doOuterLayerMove(4, 0, true)
    } else if (c === "KeyL") { // D'
        cube.doOuterLayerMove(5, 0, false)
    } else if (c === "KeyS") { // D
        cube.doOuterLayerMove(5, 0, true)
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
    } else if (c === "KeyC") { // u'
        cube.doOuterLayerMove(0, 1, false)
    } else if (c === "Comma") { // u
        cube.doOuterLayerMove(0, 1, true)
    } else if (c === "KeyR") { // l'
        cube.doOuterLayerMove(1, 1, false)
    } else if (c === "KeyV") { // l
        cube.doOuterLayerMove(1, 1, true)
    // } else if (c == "KeyG") { // f
    //     cube.rotateLayer(2, 1, false)
    // } else if (c == "KeyH") { // f
    //     cube.rotateLayer(2, 1, true)
    } else if (c === "KeyM") { // r'
        cube.doOuterLayerMove(3, 1, false)
    } else if (c === "KeyU") { // r
        cube.doOuterLayerMove(3, 1, true)
    // } else if (c === "KeyO") { // b'
    //     cube.rotateLayer(4, 1, false)
    // } else if (c === "KeyW") { // b
    //     cube.rotateLayer(4, 1, true)
    } else if (c === "KeyB" || c === "KeyN") { // x'
        cube.doCubeRotation(3, false)
    } else if (c === "KeyT" || c === "KeyY") { // x
        cube.doCubeRotation(3, true)
    } else if (c === "KeyA") { // y'
        cube.doCubeRotation(0, false)
    } else if (c === "Semicolon") { // y
        cube.doCubeRotation(0, true)
    } else if (c === "KeyQ") { // z'
        cube.doCubeRotation(2, false)
    } else if (c === "KeyP" ) { // z
        cube.doCubeRotation(2, true)
    }
}

function onKeyDown(e) {
    let c = e.code;

    // controls
    doControls(c);
    
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