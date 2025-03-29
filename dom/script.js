const div = document.createElement("div");
const div2 = document.querySelector("#div2");
const main = document.querySelector("#main");

main.appendChild(div)
// main.insertBefore(div, div2)

// main.removeChild(div2)

div.classList.add

div.style.color = "blue";

// adds several style rules
div.style.cssText = "color: blue; backgound: white;";

// adds several style rules
div.setAttribute("style", "color: blue; background: white;");

// dot notation with camelCase
div.style.backgroundColor;

// bracket notation with kebab-case: also works
div.style["background-color"] = "yellow"

// bracket notation with camelCase: also works
div.style["backgroundColor"];

// if id exists, update it to 'theDiv', else create an id with value "theDiv"
div.setAttribute("id", "theDiv");

// returns value of specified attribute, in this case "theDiv"
const ret = div.getAttribute("id")

// removes specified attribute
div.removeAttribute("id")

// adds class "new" to your new div
div.classList.add("new");

// remove "new" class from div
div.classList.add("new");

// toggle a class
div.classList.toggle("active")

// It is standard and cleaner to toggle a CSS style rather than adding and removing inline CSS.

// Adding text content
// div.textContent = "Hello World!";

// Adding HTML content
// div.innerHTML = "<span>Hello World!</span>";


// if you want to add js script tag in <head> use this: defer
{/* <script src="script.js" defer></script>  */}


const btn1 = document.querySelector("#btn1")

btn1.style.background = "cadetblue";
btn1.style.padding = "10px 24px";
btn1.style.color = "white";
btn1.style.border = "none";


btn1.addEventListener("mousemove", function(e){
    console.log(e);
    
})



// btn1.addEventListener("click", function(e){
//     e.target.style.background = "cadetblue"
// })

// const buttons = document.querySelectorAll("button");

// buttons.forEach((button) => {
//     button.addEventListener("keydown", function(){
//         alert(button.id)
//     })
// })

// const link = document.querySelector("a");

// link.textContent = "Mozilla Developer Network";

// link.href = "https://developer.mozilla.org";


// const para = document.createElement("p");
// para.textContent = "We hope you enjoyed the ride.";

// div2.appendChild(para)

// const text = document.createTextNode(
//     "- the premier source.",
// );




