export class Cube {
    static white = 0;
    static orange = 1;
    static green = 2;
    static blue = 3;
    static red = 4;
    static yellow = 5;
    // opposite sides add up to 5

    static colours = ['w', 'o', 'g', 'b', 'r', 'y'];

    constructor(size) {
        this.size = size;
        this.solvedState = this.initSolvedState();
        this.state = this.initSolvedState();
    }

    initSolvedState() {
        var state = new Array(6);

        for (let i = 0; i < 6; i++) {
            var face = new Array(this.size).fill(new Array(this.size).fill(i));
            state[i] = face;
        }

        // swap 3 and 4 (blue and red)
        [state[3], state[4]] = [state[4], state[3]];

        return state;
    }

    rotateLayer(face, layers, direction) {
        var f = this.state[face]

        if (direction == 1) {

        } else if (direction == -1) {

        }

        this.state[face] = f;
    }
}