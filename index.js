
const heightBrick = 20
const widthPinBrick = 17;
const rowBrick = 20;
let widthBox = 850;
let randomWidthBrick = 0;
let randomColorBrick = '';
let arrBricks = [];
let arrBricksWidth = [2, 4, 6];
let arrColorBrick = ['#f0d95a', '#fd2626', '#6bf06b', '#267cfd', '#7d7e80']
let selectedTd;

function generateColorBrick() {
    randomColorBrick = arrColorBrick[Math.floor(Math.random() * arrColorBrick.length)];
}

function generateBrick() {

    for (let i = 0; i < rowBrick; i++){
        while (widthBox > 102){
            generateColorBrick();
            randomWidthBrick = arrBricksWidth[Math.floor(Math.random() * arrBricksWidth.length)] * widthPinBrick;
            arrBricks.push({height: heightBrick, width: randomWidthBrick, color: randomColorBrick});
            widthBox = widthBox - randomWidthBrick;
        } 
        if (widthBox == 102){
            generateColorBrick();
            arrBricks.push({height: heightBrick, width: 102, color: randomColorBrick});
        } else if (widthBox == 68){
            generateColorBrick();
            arrBricks.push({height: heightBrick, width: 68, color: randomColorBrick});
        } else {
            generateColorBrick();
            arrBricks.push({height: heightBrick, width: 34, color: randomColorBrick});
        }
        widthBox = 850;
    }
}    

generateBrick();

console.log(arrBricks);

let wall = document.getElementById('firstBlock');
wall.innerHTML = "";

function renderBricks() {
    arrBricks.forEach((element, index) => {
        const brick = document.createElement("div");
        brick.style.width = arrBricks[index].width + 'px';
        brick.style.height = arrBricks[index].height + 'px';
        brick.style.backgroundColor = arrBricks[index].color;
        brick.className = 'brick';
        brick.id = index;
        document.getElementById("firstBlock").appendChild(brick);
    });
    let wallEvent = document.getElementById('firstBlock');
    wallEvent.onclick = function(event) {
        let target = event.target;
        if (target.className != 'brick') return;
        deleteBrick(target);
    }
    function deleteBrick(brick) {
        selectedTd = brick;
        selectedTd.classList.add('delete');
    }
}



renderBricks();





