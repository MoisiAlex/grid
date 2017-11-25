"use strict";

function fillRow(size,row){
      for(let i=0;i<size;i++){
        const column = document.createElement("div");
        column.classList.add("box");
        row.appendChild(column);
        }
    }


function createGrid(size){
    console.log("Creating grid of size:");
    console.log(size);
    const box = document.querySelector(".scratchBox");
  for(let i=0;i<size;i++){
        const row = document.createElement("div");
        row.classList.add("row");
        box.appendChild(row);
        fillRow(size,row);
    }  
    setColorBoxes();
} 

function killGrid(){
   let row = document.querySelectorAll(".row");
   let box = document.querySelectorAll(".box"); 
    row.forEach(div => div.remove());
    box.forEach(div => div.remove());
    console.log("killed grid");
}

function resizeGrid(){
    console.log("about to resize grid")
     let size = document.querySelector("#size");
    console.log(size.value);
    killGrid();
    createGrid(parseInt(size.value)); 
}

function setColorBoxes(){
    let boxes= document.querySelectorAll(".box");
    boxes.forEach(box => box.addEventListener("mouseover",changeColor));
}

function selectColor(){
    return document.querySelector("#color").value;
}


function changeColor(){
    this.style.backgroundColor = selectColor();
       
}

function cleanColor(){
    let box = document.querySelectorAll(".box"); 
    box.forEach(div => div.style.backgroundColor="white");
}


document.body.addEventListener("load", createGrid(16));





