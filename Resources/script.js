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
  
}



function resizeGrid(){
    console.log("about to resize grid")
     let size = document.querySelector("#size");
    console.log(size.value);
    killGrid();
    createGrid(parseInt(size.value)); 
 
   
     
}

function setOpacity(){
    let opacityOnOff = document.querySelector(".leftBtn span");
    
    if(opacityOnOff.textContent == "on"){ opacityOnOff.textContent ="off";  }
    else {opacityOnOff.textContent ="on";}
    
}

function setColorBoxes(){
    let boxes= document.querySelectorAll(".box");
    boxes.forEach(box => box.addEventListener("mouseover",changeColor));
    
}





function selectColor(){
    return document.querySelector("#color").value;
}




function changeColor(){
    if(selectColor() !=="random"){
    this.style.backgroundColor = selectColor();
        }
    else {
        this.style.backgroundColor = getRandomColor();
    }
    
    if (document.querySelector(".leftBtn span").textContent == "on"){
        
         this.style.opacity = Number(this.style.opacity) + 0.1 ;   }
    
        
}

function getRandomColor() {
  var letters = '0123456789ABCDEF';
  var color = '#';
  for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

function cleanColor(){
    let box = document.querySelectorAll(".box"); 
    box.forEach(div => div.style.backgroundColor="white");
}


document.body.addEventListener("load", createGrid(16));





