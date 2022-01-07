//Demonstrate understanding of DOM traversal and DOM manipulation. Build familiarity with JS syntax. 
//Look into: getElementById, querySelector, getElementsByClassName, querySelectorAll, the innerText property,
// classList.add, className, classList.remove, createElement, appendChild. Section off the code with comments based on the 
//particular part of the prompt you are addressing. 


//1) Select the section with an id of container without using querySelector.
console.log(document);
const contSelector = document.getElementById("container");
console.log(contSelector);

//2) Select the section with an id of container using querySelector.
const newSelector= document.querySelector("#container");
console.log(newSelector);

//3) Select all of the list items with a class of "second".
const secondClassSel = document.getElementsByClassName("second");
console.log(secondClassSel);

//4) Select a list item with a class of third, but only the list item inside of the ol tag.
const thirdSel = document.querySelector("ol").querySelector(".third");
console.log(thirdSel);

//5) Give the section with an id of container the text "Hello!".
newSelector.innerText = "Hello!";  //DRY

//6) Add the class main to the div with a class of footer.
let divFooter = document.getElementsByClassName("footer")[0];
divFooter.classList.add("main");
console.log(divFooter);

//7) Remove the class main on the div with a class of footer.
divFooter.classList.remove("main")

//8) Create a new li element.
let newLi = document.createElement("li")
console.log(newLi);

//9) Give the li the text "four".
newLi.innerHTML = "four";

//10) Append the li to the ul element.
document.querySelector("ul").appendChild(newLi);

//12) Loop over all of the lis inside the ol tag and give them a background color of "green".
let ol = document.querySelector("ol").querySelectorAll("li");
console.log(ol);
ol.forEach(ele => {
    ele.style.backgroundColor= "green";
})

//13) Remove the div with a class of footer.
divFooter.remove();