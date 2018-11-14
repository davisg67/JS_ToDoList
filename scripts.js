"use strict";

const UL = document.getElementById("itemList"); 


//Creates the button span. 
function createBtnSpan(className, txtValue, tipText) {
    let span = document.createElement("SPAN");
    let txt = document.createTextNode(txtValue);
    span.className = className;
    span.title = tipText;
    span.appendChild(txt);
    return span;
}


UL.addEventListener('click', (event) => {
    if (event.target.tagName === 'LI') {
        event.target.classList.toggle('checked');
     }

     //Move directly to the top of the list.
     if (event.target.className == 'top') {
        let li = event.target.parentElement;  //Reference to the list item.
        UL.insertBefore(li, UL.childNodes[0]);
    }

    //Remove Item.
    if (event.target.className == 'close') {
      let li = event.target.parentElement; //Reference to list item to be removed.
      UL.removeChild(li);
    }

    //Move item UP.
    if (event.target.className == 'up') {
        let li = event.target.parentElement;
        let prevLi = li.previousElementSibling; //Reference to the list item above the selected one. Returns null if no sibbling.
        if (prevLi) {
            UL.insertBefore(li, prevLi);
        }
    }

    //Move item DOWN.
    if (event.target.className == 'down') {
        let li = event.target.parentElement;
        let nextLi = li.nextElementSibling; //Reference to the list item below the selected one. Returns null if no sibbling.
        if (nextLi) {
            UL.insertBefore(nextLi, li);
        }
    }
  });


// Create a new list item when clicking on the "Add Item" button
function newElement() {
    let inputValue = document.getElementById("itemInput").value;
    if (inputValue === '') {
        alert("You must write something!");
    } else {
        let li = document.createElement("li");
        let t = document.createTextNode(inputValue);
    
        li.appendChild(t);

        document.getElementById("itemList").appendChild(li);
        
        let spanTop = createBtnSpan('top', 'Top', 'Move to the top of the list.');
        let spanUp = createBtnSpan('up', '\u25B2', 'Move Up');
        let spanDown = createBtnSpan('down', '\u25BC', 'Move Down');
        let spanClose = createBtnSpan('close', '\u00D7', 'Remove Item');
        li.appendChild(spanTop);
        li.appendChild(spanUp);
        li.appendChild(spanDown);
        li.appendChild(spanClose);
    }

    document.getElementById("itemInput").value = "";
  } 

//Detect 'enter' push on input.
itemInput.addEventListener('keyup', (event) => {
    if ( event.keyCode == 13 ) {
        newElement();
    }
})
  

