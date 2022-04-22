let gridDimenNum= prompt("please enter a number for the grid");

let mainEtchGrid=document.getElementById("mainEtchGrid");

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

gridHover();