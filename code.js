let position = 0;
let positionChecker = 0;
let cubeInterval;

function generateGrid() {
    const board = document.getElementById('grid');
    for (i=0; i<800; i++) {
        const square = document.createElement('div')
        board.appendChild(square)
    }
    boxes = document.querySelectorAll('#grid div')
}

function createCube(i) {
    boxes[i].classList.add("cube1");
    boxes[i+1].classList.add("cube2");
    boxes[i+40].classList.add("cube3");
    boxes[i+41].classList.add("cube4");
}

function eraseCube(i) {
    boxes[i].classList.remove("cube1");
    boxes[i+1].classList.remove("cube2");
    boxes[i+40].classList.remove("cube3");
    boxes[i+41].classList.remove("cube4");
}

function moveCube() {
    eraseCube(position);
    if (positionChecker == 0) {
    position=position+40;
    }
    createCube(position);
    console.log(position);
    if (position>718) {
        console.log("in loop");
        positionChecker = 1;
        clearInterval(cubeInterval);
        cube();
    }
}

function cube() {
    position = Math.floor(Math.random()*40);
    positionChecker=0;
    cubeInterval = setInterval(moveCube, 200);
}

generateGrid();
cube();
cube();