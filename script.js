var socket = io();


let side = 25;

function setup() {
    frameRate(5);
    createCanvas(matrix[0].length * side, matrix.length * side);
    background('#acacac');

    for (var y = 0; y < matrix.length; y++) {
        for (var x = 0; x < matrix[y].length; x++) {

            if (matrix[y][x] == 1) {
                let gr = new Grass(x, y)
                grassArr.push(gr)
            }
            else if (matrix[y][x] == 2) {
                let grEat = new GrassEater(x, y)
                grassEaterArr.push(grEat)
            }
            else if (matrix[y][x] == 3) {
                let grPred = new Predator(x, y)
                PredatorArr.push(grPred)
            }
            else if (matrix[y][x] == 4) {
                let grVict = new Victim(x, y)
                VictimArr.push(grVict)
            }
            else if (matrix[y][x] == 5) {
                let bomb = new Bomb(x, y)
                BombArr.push(bomb)
            }

        }
    }
}


function nkarel() {

	for (var y = 0; y < matrix.length; y++) {
		for (var x = 0; x < matrix[y].length; x++) {

			if (matrix[y][x] == 1) {
				fill("green");
			} else if (matrix[y][x] == 2) {
				fill("yellow");
			}
			else if (matrix[y][x] == 0) {
				fill("#acacac");
			} else if (matrix[y][x] == 3) {
				fill("red")
			}
			else if (matrix[y][x] == 4) {
				fill("black")
			}
			else if (matrix[y][x] == 5) {
				fill("blue")
			}

			rect(x * side, y * side, side, side);


		}
	}
}


setInterval(
    function () {
    socket.on('send matrix', nkarel)
    },1000
)