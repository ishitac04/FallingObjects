let position = 0;
let positionChecker = 0;
let cubeInterval;
let base=718;
let columnHeights = new Array(40).fill(718);
let object=0;
let check;

function generateGrid() {
    const board = document.getElementById('grid');
    for (i=0; i<800; i++) {
        const square = document.createElement('div')
        board.appendChild(square)
    }
    boxes = document.querySelectorAll('#grid div')
}

function createCube(i) {
    if (object==1) {
    boxes[i].classList.add("cube1");
    boxes[i+1].classList.add("cube2");
    boxes[i+40].classList.add("cube3");
    boxes[i+41].classList.add("cube4");
    } else {
        boxes[i].classList.add("suitcase1");
        boxes[i+1].classList.add("suitcase2");
        boxes[i+2].classList.add("blank");
        boxes[i+3].classList.add("suitcase4");
        boxes[i+4].classList.add("suitcase5");
        boxes[i+5].classList.add("suitcase6");

        boxes[i+40].classList.add("blank");
        boxes[i+41].classList.add("suitcase2");
        boxes[i+42].classList.add("blank");
        boxes[i+43].classList.add("suitcase4");
        boxes[i+44].classList.add("suitcase5");
        boxes[i+45].classList.add("suitcase22");
    }
}

function eraseCube(i) {
    if (object==1) {
    boxes[i].classList.remove("cube1");
    boxes[i+1].classList.remove("cube2");
    boxes[i+40].classList.remove("cube3");
    boxes[i+41].classList.remove("cube4");
    } else {
        boxes[i].classList.remove("suitcase1");
    boxes[i+1].classList.remove("suitcase2");
    boxes[i+2].classList.remove("blank");
    boxes[i+3].classList.remove("suitcase4");
    boxes[i+4].classList.remove("suitcase5");
    boxes[i+5].classList.remove("suitcase6");

    boxes[i+40].classList.remove("blank");
    boxes[i+41].classList.remove("suitcase2");
    boxes[i+42].classList.remove("blank");
    boxes[i+43].classList.remove("suitcase4");
    boxes[i+44].classList.remove("suitcase5");
    boxes[i+45].classList.remove("suitcase22");
    }
}

function checker() {
    if (position + 40 >= 800) { 
        return true; 
    }

    const array=["cube1","cube2","suitcase1","suitcase2","blank","suitcase4","suitcase5","suitcase6"];
    for (let n=0; n < array.length; n++) {
        if (boxes[position+40].classList.contains(array[n]) || boxes[position+46].classList.contains(array[n]) ||  boxes[position+45].classList.contains(array[n]) || boxes[position+44].classList.contains(array[n]) || boxes[position+43].classList.contains(array[n]) || boxes[position+41].classList.contains(array[n]) || boxes[position+42].classList.contains(array[n])) {
            return true;
            break;
        }
    }
    return false;
}

function moveCube() {
    if (positionChecker == 0) {
        eraseCube(position);
        position=position+40;
        check=checker();

    if (check==true) {
        let col = position % 40;
        let row = Math.floor(position / 40);
        position = (row-1) * 40 + col;

        columnHeights[col] = row - 1;
        columnHeights[col+1] = row - 1;

        positionChecker = 1;
        createCube(position);
        clearInterval(cubeInterval);
        cube();
        return;
    }
}
    createCube(position);
    console.log(position);
    if (position >= 760) {
        let col = position % 40;
        let row=Math.floor(position/40);
        console.log("in loop");
        columnHeights[col] = row;
        columnHeights[col+1] = row;
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
    object = Math.floor(Math.random()*2);
    position = Math.floor(Math.random()*40);
    positionChecker=0;
    cubeInterval = setInterval(moveCube, 200);
}
function suitcase() {
    suitcaseposition = Math.floor(Math.random()*40);
    SuitcasepositionChecker=0
    suitcaseInterval = setInterval(moveSuitcase, 200)
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