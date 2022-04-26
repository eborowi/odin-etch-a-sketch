let gridDimenNum= "";

let mainEtchGrid=document.getElementById("mainEtchGrid");



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
            gridBox.style.background="black";
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
document.getElementById("grid10").addEventListener("click",make10grid);
document.getElementById("grid30").addEventListener("click",make30grid);
document.getElementById("grid100").addEventListener("click",make100grid);
