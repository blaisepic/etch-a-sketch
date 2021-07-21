//element selectors
let container = document.querySelector(`div[class="container"]`);

//create grid
function createGrid(size) {
    for(let i = 0; i < size; i++){
        let row = document.createElement("row");
        for(let j = 0; j < size; j++){
            let cell = document.createElement("cell");
            cell.addEventListener('mouseenter', () => cell.classList.add('hover'));
            row.appendChild(cell);
        }
        container.appendChild(row);
    }
}

//create initial grid
createGrid(16);

//set up event listeners for each cell in the grid
let cells = document.querySelectorAll("cell");
let cellsArr = Array.from(cells);

cellsArr.forEach(cell => {
    cell.addEventListener('mouseenter', () => cell.classList.add('hover'));
    // cell.addEventListener('mouseleave', () => cell.classList.remove('hover'));
});

//insert reset button at the top of the screen
let resetBTN = document.createElement("button");
resetBTN.textContent = "Reset Grid";
resetBTN.classList.add('button');

//add reset functionality and prompt when button is clicked
resetBTN.onclick = resetGrid;
resetBTN.onclick = userPrompt;

//resetBTN functions
function resetGrid() {
    cellsArr.forEach(cell => {
        cell.classList.remove('hover');
    })
}

function userPrompt() {
    let input = "";
    let gridSize = 101;
    while(isNaN(gridSize) || gridSize > 100){
        input = prompt("Please enter your desired grid size.", "40");
        gridSize = parseInt(input);
    }
    
    

    //first delete current grid
    let rows = document.querySelectorAll("row");
    let rowArr = Array.from(rows);
    rowArr.forEach(row => {
        row.parentNode.removeChild(row);
    })
    createGrid(gridSize);
}

//append resetBTN to container
container.appendChild(resetBTN);

//original grid creation
// for(let i = 0; i < 16; i++){
//     let row = document.createElement("row");
//     for(let j = 0; j < 16; j++){
//         row.appendChild(document.createElement("cell"));
//     }
//     container.appendChild(row);
// }
