let gridDimenNum= "";

let mainEtchGrid=document.getElementById("mainEtchGrid");


let rainbowColors=["red","orange","yellow","blue","indigo","violet"];
let rainbowMode=false;





function makeGrid(){
    let currentGrids=document.querySelectorAll(".gridBox");
        currentGrids.forEach(grid=>{
            grid.remove();
        });
    
for (let i=0; i<(gridDimenNum*gridDimenNum);i++){
    let gridBox=document.createElement('div');
    gridBox.classList.add("gridBox");
    mainEtchGrid.appendChild(gridBox);        
}

}
function gridHover(){
    let gridBoxes=document.querySelectorAll(".gridBox")
    gridBoxes.forEach(gridBox=> {
        gridBox.addEventListener("mouseover",function(){
            if (rainbowMode){
                (gridBox.style.background=rainbowColors[(Math.floor(Math.random()*rainbowColors.length))])}
            else{
                gridBox.style.background="black"
            }
        })
    })
}

function clear(){
    let gridBoxes=document.querySelectorAll(".gridBox")
    gridBoxes.forEach(gridBox=> {        
            gridBox.style.background="white";        
    })
}

document.getElementById("clearButton").addEventListener("click",clear);



function make10grid(){
    gridDimenNum=10;
    mainEtchGrid.style.gridTemplateColumns='repeat('+gridDimenNum+',1fr)';
    console.log(rainbowMode)
    makeGrid();
    gridHover();
}

function make30grid(){
    gridDimenNum=30;
    mainEtchGrid.style.gridTemplateColumns='repeat('+gridDimenNum+',1fr)';
    makeGrid();
    gridHover();
}

function make100grid(){
    gridDimenNum=100;
    mainEtchGrid.style.gridTemplateColumns='repeat('+gridDimenNum+',1fr)';
    makeGrid();
    gridHover();
}

function rainbowColorer(){
    rainbowMode=true;
}

function blackMode(){
    rainbowMode=false;
}
document.getElementById("grid10").addEventListener("click",make10grid);
document.getElementById("grid30").addEventListener("click",make30grid);
document.getElementById("grid100").addEventListener("click",make100grid);
document.getElementById("rainbowColor").addEventListener("click", rainbowColorer)
document.getElementById("blackColor").addEventListener("click",blackMode)
