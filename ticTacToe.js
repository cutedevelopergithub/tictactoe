alert("Welcome to Tic Tac Toe Game \n Created by: @cutedeveloper")
//Restart Game Button
restart=document.querySelector("#b")
//Grab All Squares
squares=document.querySelectorAll("td")
//Clear all the squares
function clearSquares(){
    for(i=0; i<squares.length;i++){
        squares[i].textContent=""
    }
}
restart.addEventListener("click",clearSquares)
//Check the Square Marker
function changeMarker(){
    if (this.textContent===" "){
        this.textContent="X"
    }else if(this.textContent==="X"){
        this.textContent="O"
    }else{
        this.textContent=" "
    }
}
//For loof to populate our input in all squares
for(i=0; i<squares.length;i++){
    squares[i].addEventListener("click",changeMarker)
}