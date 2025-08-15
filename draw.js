export function drawCube(state, colours) {
    const size = state[0].length;

    for (let i = 0; i < size; i++) {
        for (let j = 0; j < size; j++) {
            var uSticker = document.getElementById(1 + '-' + i + '-' + j);
            uSticker.style.backgroundColor = colours[state[0][i][j]];

            var fSticker = document.getElementById(2 + '-' + i + '-' + j);
            fSticker.style.backgroundColor = colours[state[2][i][j]];
        }
    }

    for (let i = 0; i < size; i++) {
        var lSticker = document.getElementById(0 + '-' + i);
        var rSticker = document.getElementById(3 + '-' + i);
        lSticker.style.backgroundColor = colours[state[1][0][i]];
        rSticker.style.backgroundColor = colours[state[3][0][size-1-i]];
    }

    for (let i = 1; i < size; i++) {
        var lSticker = document.getElementById(0 + '-' + (size-1+i));
        var rSticker = document.getElementById(3 + '-' + (size-1+i));
        lSticker.style.backgroundColor = colours[state[1][i][size-1]];
        rSticker.style.backgroundColor = colours[state[3][i][0]];
    }
}