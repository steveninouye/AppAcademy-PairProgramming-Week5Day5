const readline = require("readline");

// const reader = readline.createInterface({
//     input: process.stdin,
//     output: process.stdout
// });

class Game {
    constructor(name) {
        this.player = name;
        this.towers = [[1, 2, 3], [], []];
        this.reader = readline.createInterface({
            input: process.stdin,
            output: process.stdout
        });
    }

    run() {
        this.display();
        if (!(this.towers[1].length === 3 || this.towers[2].length === 3)) {
            let move = this.getMove();
        } else {
            console.log("Good Job!");
            this.reader.close();
        }
    }

    display() {
        console.log(this.towers);
    }

    getMove() {
        this.reader.question("Select a column", answer => {
            this.reader.question(
                "where would you like to move this to?",
                answer2 => {
                    if (this.valid([parseInt(answer), parseInt(answer2)])) {
                        this.makeMove([parseInt(answer), parseInt(answer2)]);
                    } else {
                        console.log("move was invalid");
                        this.run();
                    }
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
        this.run();
    }
}

const game = new Game("Steven");
game.run();
