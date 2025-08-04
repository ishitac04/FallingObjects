let position = 0;
let positionChecker = 0;
let cubeInterval;
let base=718;
let columnHeights = new Array(40).fill(718);

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
    if (positionChecker == 0) {
    eraseCube(position);
    position=position+40;

    if (boxes[position+40].classList.contains("cube1") || boxes[position+40].classList.contains("cube2")) {
        let col = position % 40;
        columnHeights[col] -= 80;
        columnHeights[col+1] -= 80;
        position = Math.min(columnHeights[col], columnHeights[col+1]);
        positionChecker = 1;
        clearInterval(cubeInterval);
    }
}
    createCube(position);
    console.log(position);
    let col = position % 40;
    if (position > Math.min(columnHeights[col], columnHeights[col+1])) {
        console.log("in loop");
        columnHeights[col] -= 80;
        columnHeights[col+1] -= 80;
        positionChecker = 1;
        clearInterval(cubeInterval);
        cube();
    }
}

function keyPress(event) {
    switch (event.key) {
        case 'ArrowLeft':
            eraseCube(position);
            position = position - 1;
            createCube(position);
            break;
        case 'ArrowRight':
            eraseCube(position);
            position = position + 1;
            createCube(position);
            break;
    }
}

function cube() {
    position = Math.floor(Math.random()*40);
    positionChecker=0;
    cubeInterval = setInterval(moveCube, 200);
}

function makeSuitcase(i) {
    boxes[i].classList.add("suitcase1");
    boxes[i+1].classList.add("suitcase2");
    boxes[i+2].classList.add("blank");
    boxes[i+3].classList.add("suitcase4");
    boxes[i+4].classList.add("suitcase5");
    boxes[i+5].classList.add("suitcase6");

    boxes[i+40].classList.add("edge");
    boxes[i+41].classList.add("suitcase2");
    boxes[i+42].classList.add("blank");
    boxes[i+43].classList.add("suitcase4");
    boxes[i+44].classList.add("suitcase5");
    boxes[i+45].classList.add("suitcase22");

    boxes[i+80].classList.add("blank");
    boxes[i+81].classList.add("suitcase2");
    boxes[i+82].classList.add("blank");
    boxes[i+83].classList.add("suitcase4");
    boxes[i+84].classList.add("suitcase5");
    boxes[i+85].classList.add("suitcase22");
}

generateGrid();
document.addEventListener('keydown', keyPress);
cube();

function suitcase() {
    suitcaseposition = Math.floor(Math.random()*40);
    SuitcasepositionChecker=0
}
makeSuitcase(0);