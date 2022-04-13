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

const gridBoxes=document.querySelectorAll(".gridBox")

gridBoxes.forEach(
    
    gridBox=> {
    gridBox.addEventListener("mouseover",colorChanger);
})

function colorChanger() {
    console.log("black");
    gridBoxes.style.backgroundColor="black";
}