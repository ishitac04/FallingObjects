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
    } else if (object==0) {
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
    } else if (object==2) {
        boxes[i].classList.add("clock1");
        boxes[i+1].classList.add("clock2");
        boxes[i+40].classList.add("clock3");
        boxes[i+41].classList.add("clock4");
    }
}

function eraseCube(i) {
        if (object==1) {
            boxes[i].classList.remove("cube1");
            boxes[i+1].classList.remove("cube2");
            boxes[i+40].classList.remove("cube3");
            boxes[i+41].classList.remove("cube4");
        } else if (object==0) {
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
        } else if (object==2) {
            boxes[i].classList.remove("clock1");
            boxes[i+1].classList.remove("clock2");
            boxes[i+40].classList.remove("clock3");
            boxes[i+41].classList.remove("clock4");
        }
}

function checker() {
    const solid = ["cube1","cube2","suitcase1","suitcase2","blank","suitcase4","suitcase5","suitcase6","red","blue","green","clock1","clock2"];

    if (position + 40 >= 800) { 
        return true; 
    }

    for (let i=0; i < solid.length; i++) {
    if (object == 1) { 
        if (boxes[position+40].classList.contains(solid[i])) {
            return true; 
        } else if (boxes[position+41].classList.contains(solid[i])) {
            return true; 
        }
    } else if (object == 0) { 
        if (boxes[position+40].classList.contains(solid[i])) {
            return true; 
        } else if (boxes[position+41].classList.contains(solid[i])) {
            return true; 
        } else if (boxes[position+42].classList.contains(solid[i])) {
            return true; 
        } else if (boxes[position+43].classList.contains(solid[i])) {
            return true; 
        } else if (boxes[position+44].classList.contains(solid[i])) {
            return true; 
        } else if (boxes[position+45].classList.contains(solid[i])) {
            return true; 
        }
    } else if (object == 2) {
        if (boxes[position+40].classList.contains(solid[i])) {
            return true; 
        } else if (boxes[position+41].classList.contains(solid[i])) {
            return true; 
        }
    }
    }
    return false;
}

function addBases() {
    boxes[766].classList.add("red");
    boxes[766].classList.add("red");
    boxes[767].classList.add("red");
    boxes[768].classList.add("red");
    boxes[769].classList.add("red");

    boxes[776].classList.add("blue");
    boxes[776].classList.add("blue");
    boxes[777].classList.add("blue");
    boxes[778].classList.add("blue");
    boxes[779].classList.add("blue");

    boxes[786].classList.add("green");
    boxes[786].classList.add("green");
    boxes[787].classList.add("green");
    boxes[788].classList.add("green");
    boxes[789].classList.add("green");
}

function moveCube() {
    if (positionChecker == 0) {
        eraseCube(position);
        position=position+40;
        check=checker();

    if (check==true) {
        position=position-40;

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
        console.log("in loop");
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
    object = Math.floor(Math.random()*3);
    position = Math.floor(Math.random()*40);
    positionChecker=0;
    cubeInterval = setInterval(moveCube, 200);
}

generateGrid();
addBases();
document.addEventListener('keydown', keyPress);
cube();