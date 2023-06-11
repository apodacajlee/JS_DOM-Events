console.log("Script attached");
/*----------- Exercise #1: SELECTING/MANIPULATING ELEMENTS -----------*/

// Select Node #1 and change the text to: "I used the getElementById("node1") method to access this"
document.getElementById("node1").innerHTML = "I used the getElementById(\"node1\") method to access this";

// Select Node #2 and change the text to: "I used the getElementByClassName("node2") method to access this" */
document.getElementsByClassName("node2")[0].innerHTML = "I used the getElementByClassName(\"node2\") method to access this";

// Select ALL the h3 tags and change the text to: "I used the getElementByTagName("h3") method to access all of these" */
const h3Elements = document.getElementsByTagName("h3");
for (let ele of h3Elements) {
    ele.textContent = "I used the getElementByTagName(\"h3\") method to access all of these";
}

/*----------- Exercise #2: CREATING/APPENDING/INSERTING ELEMENTS/OBJECTS -----------*/

// TODO: Create a paragraph element using this document.createElement() and put this text inside "This node was created using the createElement() method"
const par = document.createElement("p")
par.textContent = "This node was created using the createElement() method";

// TODO: Append the created node to the parent node using the element.appendChild() method
document.getElementById("parent").appendChild(par);

// TODO: Create a <a> element using this document.createElement() and put this text inside "I am a <a> tag"
const aElement = document.createElement("a");
aElement.textContent = "I am a <a> tag";

// BONUS: Add a link href to the <a>
aElement.href = "https://github.com/apodacajlee"; // link to my github page :)

// TODO: Insert the created <a> in the parent but before the <p> you just created using the element.insertBefore() method
document.getElementById("parent").insertBefore(aElement, par);

/*----------- Exercise #3: REMOVING/REPLACING ELEMENTS/OBJECTS -----------*/

// TODO: Replace the "Child Node" with a new <p> element that reads "New Child Node"
let parentNode = document.querySelector("#exercise-container3");
let oldChild = document.querySelector("#N1");
let newChild = document.createElement("p");
newChild.textContent = "New Child Node";

parentNode.replaceChild(newChild, oldChild);

// TODO: Remove the "New Child Node"
parentNode.removeChild(newChild);

/*----------- Exercise #4: LIST ITEMS ----------- */
// Use the following array of values to generate a list on the DOM

let list = [ "apples", "bananas", "carrots", "dragon fruit", "eggplant", "fish", "grapes", "honey", "ice bag", "juice (any kind)" ];


// TODO: Create an unordered list element
const ulElement = document.createElement("ul");

// TODO: Iterate over the array values, and create a list item element for each
list.forEach((item) => {
    let liElement = document.createElement("li");
    liElement.textContent = item;

    // TODO: Append the new list items to the unordered list element
    ulElement.appendChild(liElement);
});



// TODO: Append the unordered list to the `div#container` under exercise 4
document.getElementById("container").appendChild(ulElement);

/*----------- Exercise #5: DOM EVENTS --------------*/

// TODO: write a function called "show" which creates a new div with an alerting message to the user with this message
// -> "Clicking the button triggers the onclick event, which calls the JS function show()... which alerts the user"
// This div should be a 'modal' that covers the main content on the screen
// BONUS: The modal popup should be able to be closed. Refactor for this functionality

function show () {
    let modalContainer = document.createElement("div");
    let modalCard = document.createElement("div");
    let h2 = document.createElement("h2");
    let p = document.createElement("p");
    let closeBtn = document.createElement("button");

    //add content to the modalCard
    h2.textContent = "Modal Header";
    p.textContent = "Modal Content";
    closeBtn.textContent = "Close";

    //add an event listener to closeBtn to remove the modalContainer
    closeBtn.addEventListener("click", () => {
        document.body.removeChild(modalContainer);
    });

    modalCard.append(h2, p, closeBtn);
    modalCard.classList.add("modal-card");

    //add the modalCard to the modal
    modalContainer.id = "modal";
    modalContainer.appendChild(modalCard);

    //add the modal to the body
    document.body.appendChild(modalContainer);
}

let button = document.querySelector("#btn");
button.addEventListener("click", show);