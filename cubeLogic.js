export class Cube {
    static white = 0;
    static orange = 1;
    static green = 2;
    static blue = 3;
    static red = 4;
    static yellow = 5;
    // opposite sides add up to 5

    // w o g b r y
    static colours = ['#ffffff', '#ff8b1a', '#00e202', '#017eff', '#dd0000', '#f6ff00'];

    constructor(size) {
        this.size = size;
        this.solvedState = this.initSolvedState();
        this.state = this.initSolvedState();
    }

    initSolvedState() {
        var state = Array.from({ length: 6 }, (_, i) => 
            Array.from({ length: this.size }, () => 
                Array.from({ length: this.size }, () => i))
        );

        // swap 3 and 4 (blue and red)
        [state[3], state[4]] = [state[4], state[3]];

        return state;
    }

    rotateLayer(face, layers, clockwise) {
        
        this.cycleFaceStickers(face, clockwise);

        for (let i = 0; i <= layers; i++) {
            this.cycleSideStickers(face, clockwise, i);
        }

        
    }

    doSliceMove(face, layer, clockwise) {
        this.cycleSideStickers(face, clockwise, layer);
    }

    cycleSideStickers(face, clockwise, layer = 0) {
        var stateCopy = this.copyState();
        const N = this.size - 1;

        if (face == 0) {
            if (clockwise) { // 1 -> 4 -> 3 -> 2
                for (let i = 0; i < this.size; i++) {
                    var temp = stateCopy[1][layer][i];
                    stateCopy[1][layer][i] = stateCopy[2][layer][i];
                    stateCopy[2][layer][i] = stateCopy[3][layer][i];
                    stateCopy[3][layer][i] = stateCopy[4][layer][i];
                    stateCopy[4][layer][i] = temp;
                }
            } else { // 4 -> 3 -> 2 -> 1
                for (let i = 0; i < this.size; i++) {   
                    var temp = stateCopy[1][layer][i];
                    stateCopy[1][layer][i] = stateCopy[4][layer][i];
                    stateCopy[4][layer][i] = stateCopy[3][layer][i];
                    stateCopy[3][layer][i] = stateCopy[2][layer][i];
                    stateCopy[2][layer][i] = temp;
                }
            }
        } else if (face == 1) {
            if (clockwise) { // 0 2 5 4
                for (let i = 0; i < this.size; i++) {
                    var temp = stateCopy[0][i][layer];
                    stateCopy[0][i][layer] = stateCopy[4][N-i][N-layer];
                    stateCopy[4][N-i][N-layer] = stateCopy[5][i][layer];
                    stateCopy[5][i][layer] = stateCopy[2][i][layer];
                    stateCopy[2][i][layer] = temp;
                }
            } else { // 0 4 5 2
                for (let i = 0; i < this.size; i++) {
                    var temp = stateCopy[0][i][layer];
                    stateCopy[0][i][layer] = stateCopy[2][i][layer];
                    stateCopy[2][i][layer] = stateCopy[5][i][layer];
                    stateCopy[5][i][layer] = stateCopy[4][N-i][N-layer];
                    stateCopy[4][N-i][N-layer] = temp;
                }
            }
        } else if (face == 2) {
            if (clockwise) { // 0 -> 3 -> 5 -> 1
                for (let i = 0; i < this.size; i++) {
                    var temp = stateCopy[0][N-layer][i];
                    stateCopy[0][N-layer][i] = stateCopy[1][N-i][N-layer];
                    stateCopy[1][N-i][N-layer] = stateCopy[5][layer][N-i];
                    stateCopy[5][layer][N-i] = stateCopy[3][i][layer];
                    stateCopy[3][i][layer] = temp;
                }
            } else { // 0 -> 1 -> 5 -> 3
                for (let i = 0; i < this.size; i++) {
                    var temp = stateCopy[0][N-layer][i];
                    stateCopy[0][N-layer][i] = stateCopy[3][i][layer];
                    stateCopy[3][i][layer] = stateCopy[5][layer][N-i];
                    stateCopy[5][layer][N-i] = stateCopy[1][N-i][N-layer];
                    stateCopy[1][N-i][N-layer] = temp;
                }
            }
        } else if (face == 3) {
            if (clockwise) { // 0 -> 4 -> 5 -> 2
                for (let i = 0; i < this.size; i++) {
                    var temp = stateCopy[0][i][N-layer];
                    stateCopy[0][i][N-layer] = stateCopy[2][i][N-layer];
                    stateCopy[2][i][N-layer] = stateCopy[5][i][N-layer];
                    stateCopy[5][i][N-layer] = stateCopy[4][N-i][layer];
                    stateCopy[4][N-i][layer] = temp;
                }
            } else { // 0 -> 2 -> 5 -> 4
                for (let i = 0; i < this.size; i++) {
                    var temp = stateCopy[0][i][N-layer];
                    stateCopy[0][i][N-layer] = stateCopy[4][N-i][layer];
                    stateCopy[4][N-i][layer] = stateCopy[5][i][N-layer];
                    stateCopy[5][i][N-layer] = stateCopy[2][i][N-layer];
                    stateCopy[2][i][N-layer] = temp;
                }
            }
        } else if (face == 4) {
            if (clockwise) { // 0 -> 1 -> 5 -> 3
                for (let i = 0; i < this.size; i++) {
                    var temp = stateCopy[0][layer][i];
                    stateCopy[0][layer][i] = stateCopy[3][N-i][N-layer];
                    stateCopy[3][N-i][N-layer] = stateCopy[5][N-layer][N-i];
                    stateCopy[5][N-layer][N-i] = stateCopy[1][N-i][layer];
                    stateCopy[1][N-i][layer] = temp;
                }
            } else { // 0 -> 3 -> 5 -> 1
                for (let i = 0; i < this.size; i++) {
                    var temp = stateCopy[0][layer][i];
                    stateCopy[0][layer][i] = stateCopy[1][N-i][layer];
                    stateCopy[1][N-i][layer] = stateCopy[5][N-layer][N-i];
                    stateCopy[5][N-layer][N-i] = stateCopy[3][N-i][N-layer];
                    stateCopy[3][N-i][N-layer] = temp;
                }
            }
        } else if (face == 5) {
            if (clockwise) { // 1 -> 2 -> 3 -> 4
                var temp = stateCopy[1][N-layer];
                stateCopy[1][N-layer] = stateCopy[4][N-layer];
                stateCopy[4][N-layer] = stateCopy[3][N-layer];
                stateCopy[3][N-layer] = stateCopy[2][N-layer];
                stateCopy[2][N-layer] = temp;
            } else { // 1 -> 4 -> 3 -> 2
                var temp = stateCopy[1][N-layer];
                stateCopy[1][N-layer] = stateCopy[2][N-layer];
                stateCopy[2][N-layer] = stateCopy[3][N-layer];
                stateCopy[3][N-layer] = stateCopy[4][N-layer];
                stateCopy[4][N-layer] = temp;
            }
        }
        this.state = stateCopy;
    }



    cycleFaceStickers(face, clockwise) {
        var stateCopy = structuredClone(this.state);
        var f = structuredClone(stateCopy[face]);

        
        var fNew = Array.from({ length: this.size }, () => new Array(this.size));

        if (clockwise) {
            for (let i = 0; i < this.size; i++) {
                for (let j = 0; j < this.size; j++) {
                    fNew[j][i] = f[i][j];
                }
            }

            for (let i = 0; i < this.size; i++) {
                fNew[i].reverse();
            }

        } else {
            for (let i = 0; i < this.size; i++) {
                f[i].reverse();
            }

            for (let i = 0; i < this.size; i++) {
                for (let j = 0; j < this.size; j++) {
                    fNew[j][i] = f[i][j];
                }
            }
        }

        
        for (let i = 0; i < this.size; i++) {
            stateCopy[face][i] = fNew[i].slice();
        }

        this.state = stateCopy;
    }

    copyState() {
        var copy = structuredClone(this.state);

        return copy;
    }
}