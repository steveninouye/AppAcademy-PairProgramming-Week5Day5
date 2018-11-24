const readline = require("readline");

const reader = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

class Game {
    constructor(name) {
        this.player = name;
        this.towers = [[1, 2, 3], [], []];
        // this.reader = readline.createInterface({
        //     input: process.stdin,
        //     output: process.stdout
        // })/;
    }

    run() {
        while (!(this.towers[1].length === 3 || this.towers[2].length === 3)) {
            this.display();
            let move = this.getMove();
            if (this.valid(move)) {
                this.makeMove(move);
            }
        }
        console.log("Good job :)");
        this.reader.close();
    }

    display() {
        console.log(this.towers);
    }

    getMove() {
        reader.question("Select a column", answer => {
            reader.question(
                "where would you like to move this to?",
                answer2 => {
                    return [parseInt(answer), parseInt(answer2)];
                }
            );
        });
    }

    valid(move) {
        let tower1 = this.towers[move[0]];
        let tower2 = this.towers[move[1]];

        if (tower1.length === 0 || tower1[0] > tower2[0]) {
            return false;
        } else {
            return true;
        }
    }

    makeMove(move) {
        let tower1 = this.towers[move[0]];
        let tower2 = this.towers[move[1]];

        let piece = tower1.shift();

        tower2.unshift(piece);
    }
}

const game = new Game("Steven");
game.run();
