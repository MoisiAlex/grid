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

function showBorder(){
    let box = document.querySelectorAll(".box"); 
   console.log(box.item(0).style.border);
    

    if (box.item(0).style.border == "1px solid rgb(0, 0, 0)")
        {
    
    box.forEach(div => div.style.border="5px solid #0d0df0");
    console.log("show border");
         console.log(box.item(0).style.border);
        }
    
    else{
     box.forEach(div => div.style.border="1px solid rgb(0, 0, 0)");
    console.log("erase border"); 
        
         console.log(box.item(0).style.border);
    }
    
   
}

function removeBorder(){
    let box = document.querySelectorAll(".box"); 
    box.forEach(div => div.style.border="1px solid #0d0df0");
    console.log("erase border");
}

function resizeGrid(){
    console.log("about to resize grid")
     let size = document.querySelector("#size");
    console.log(size.value);
    killGrid();
    createGrid(parseInt(size.value)); 
    showBorder();
     
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





