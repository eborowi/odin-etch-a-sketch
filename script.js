let gridDimenNum= "";

let mainEtchGrid=document.getElementById("mainEtchGrid");

function makeGrid(){
    let currentGrids=document.querySelectorAll(".gridBox");
        currentGrids.forEach(grid=>{
            grid.remove();
        });
for (let i=0; i<gridDimenNum;i++){
    let gridRow=document.createElement('div');
    gridRow.classList.add("gridRow");
    mainEtchGrid.appendChild(gridRow);
        for (let x=0;x<gridDimenNum;x++){
            let gridBox=document.createElement('div');
            gridBox.classList.add("gridBox");            
            gridRow.appendChild(gridBox);
        }
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
    makeGrid();
    gridHover();
}

function make30grid(){
    gridDimenNum=30;
    makeGrid();
    gridHover();
}

function make100grid(){
    gridDimenNum=100;
    makeGrid();
    gridHover();
}
document.getElementById("grid10").addEventListener("click",make10grid);
document.getElementById("grid30").addEventListener("click",make30grid);
document.getElementById("grid100").addEventListener("click",make100grid);