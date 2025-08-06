
function checker() {
    const solid = ["cube1","cube2","suitcase1","suitcase2","blank","suitcase4","suitcase5","suitcase6","red","blue","green","clock1","clock2","redi","bluei","greeni"];

    if (position + 40 >= 800) { 
        return true; 
    }

    for (let i=0; i < solid.length; i++) {
    if (object == 1) { 
        if (boxes[position+40].classList.contains(solid[i])) {
            if (solid[i]=="red" || solid[i]=="redi") {
                alert(boxes[position+40].classList)
                alert("GAME OVER! That should have been placed in the blue section :( ")
            } else if (solid[i]=="blue" || solid[i]=="bluei") {
                blue=blue+1;
                boxes[position+40].classList.add("bluei");
                createCube(position-40);
            } else if (solid[i]=="green" || solid[i]=="greeni") {
                alert("GAME OVER! That should have been placed in the blue section :( ")
            }
            return true;
        } else if (boxes[position+41].classList.contains(solid[i])) {
            if (solid[i]=="red" || solid[i]=="redi") {
                alert("GAME OVER! That should have been placed in the blue section :( ")
            } else if (solid[i]=="blue" || solid[i]=="bluei") {
                blue=blue+1;
                boxes[position+41].classList.add("bluei");
                createCube(position-40);
            } else if (solid[i]=="green" || solid[i]=="greeni") {
                alert("GAME OVER! That should have been placed in the blue section :( ")
            }
            return true;
        }
    } else if (object == 0) { 
        if (boxes[position+40].classList.contains(solid[i])) {
            if (solid[i]=="red" || solid[i]=="redi") {
                red=red+1;
                boxes[position+40].classList.add("redi");
                createCube(position-40);
            } else if (solid[i]=="blue" || solid[i]=="bluei") {
                alert("GAME OVER! That should have been placed in the red section :( ")
            } else if (solid[i]=="green" || solid[i]=="greeni") {
                alert("GAME OVER! That should have been placed in the red section :( ")
            }
            return true;; 
        } else if (boxes[position+41].classList.contains(solid[i])) {
            if (solid[i]=="red" || solid[i]=="redi") {
                red=red+1;
                boxes[position+41].classList.add("redi");
                createCube(position-40);
            } else if (solid[i]=="blue" || solid[i]=="bluei") {
                alert("GAME OVER! That should have been placed in the red section :( ")
            } else if (solid[i]=="green" || solid[i]=="greeni") {
                alert("GAME OVER! That should have been placed in the red section :( ")
            }
            return true;; 
        } else if (boxes[position+42].classList.contains(solid[i])) {
            if (solid[i]=="red" || solid[i]=="redi") {
                red=red+1;
                boxes[position+42].classList.add("redi");
                createCube(position-40);
            } else if (solid[i]=="blue" || solid[i]=="bluei") {
                alert("GAME OVER! That should have been placed in the red section :( ")
            } else if (solid[i]=="green" || solid[i]=="greeni") {
                alert("GAME OVER! That should have been placed in the red section :( ")
            }
            return true;; 
        } else if (boxes[position+43].classList.contains(solid[i])) {
            if (solid[i]=="red" || solid[i]=="redi") {
                red=red+1;
                boxes[position+43].classList.add("redi");
                createCube(position-40);
            } else if (solid[i]=="blue" || solid[i]=="bluei") {
                alert("GAME OVER! That should have been placed in the red section :( ")
            } else if (solid[i]=="green" || solid[i]=="greeni") {
                alert("GAME OVER! That should have been placed in the red section :( ")
            }
            return true;; 
        } else if (boxes[position+44].classList.contains(solid[i])) {
            if (solid[i]=="red" || solid[i]=="redi") {
                red=red+1;
                boxes[position+44].classList.add("redi");
                createCube(position-40);
            } else if (solid[i]=="blue" || solid[i]=="bluei") {
                alert("GAME OVER! That should have been placed in the red section :( ")
            } else if (solid[i]=="green" || solid[i]=="greeni") {
                alert("GAME OVER! That should have been placed in the red section :( ")
            }
            return true;; 
        } else if (boxes[position+45].classList.contains(solid[i])) {
            if (solid[i]=="red" || solid[i]=="redi") {
                red=red+1;
                boxes[position+45].classList.add("redi");
                createCube(position-40);
            } else if (solid[i]=="blue" || solid[i]=="bluei") {
                alert("GAME OVER! That should have been placed in the red section :( ")
            } else if (solid[i]=="green" || solid[i]=="greeni") {
                alert("GAME OVER! That should have been placed in the red section :( ")
            }
            return true;; 
        }
    } else if (object == 2) {
        if (boxes[position+40].classList.contains(solid[i])) {
            if (solid[i]=="red" || solid[i]=="redi") {
                alert("GAME OVER! That should have been placed in the green section :( ")
            } else if (solid[i]=="blue" || solid[i]=="bluei") {
                alert("GAME OVER! That should have been placed in the green section :( ")
            } else if (solid[i]=="green" || solid[i]=="greeni") {
                green=green+1;
                boxes[position+40].classList.add("greeni");
                createCube(position-40);
            }
            return true;; 
        } else if (boxes[position+41].classList.contains(solid[i])) {
            if (solid[i]=="red" || solid[i]=="redi") {
                alert("GAME OVER! That should have been placed in the green section :( ")
            } else if (solid[i]=="blue" || solid[i]=="bluei") {
                alert("GAME OVER! That should have been placed in the green section :( ")
            } else if (solid[i]=="green" || solid[i]=="greeni") {
                green=green+1;
                boxes[position+41].classList.add("greeni");
                createCube(position-40);
            }
            return true;; 
        }
    }
    }
    return false;
}