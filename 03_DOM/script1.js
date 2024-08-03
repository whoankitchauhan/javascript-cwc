// 1. Change Content
document.getElementById("change-content").addEventListener("click", () => {
  document.getElementById("content").innerHTML =
    "Updated Content with innerHTML";
  document.getElementById("textInput").textContent =
    "Updated Text with textContent";
  document.getElementById("textInput").innerText =
    "Updated Simple Text with innerText";
});

// 2. Change Styles
document.getElementById("change-style").addEventListener("click", () => {
  const styleBox = document.getElementById("style-box");
  styleBox.style.backgroundColor = "#555555"; // Change background color
  styleBox.style.border = "2px solid #ffffff"; // Add border
});

// 3. Add/Remove Classes
document.getElementById("toggle-class").addEventListener("click", () => {
  const classBox = document.getElementById("class-box");
  classBox.classList.toggle("highlight"); // Toggle highlight class
  classBox.classList.toggle("shadow"); // Toggle shadow class
});

// 4. Create and Append Elements
document.getElementById("add-element").addEventListener("click", () => {
  const newDiv = document.createElement("div");
  newDiv.textContent = "I am a newly created element!";
  newDiv.className = "box highlight";
  document.getElementById("element-list").appendChild(newDiv);
});

// 5. Remove Elements
document.getElementById("remove-element").addEventListener("click", () => {
  const elementToRemove = document.getElementById("remove-me");
  if (elementToRemove) {
    elementToRemove.parentNode.removeChild(elementToRemove); // Remove element
  }
});

// 6. Clone Elements
document.getElementById("clone-element").addEventListener("click", () => {
  const elementToClone = document.getElementById("clone-me");
  if (elementToClone) {
    const clonedElement = elementToClone.cloneNode(true); // Deep clone
    document.getElementById("clone-container").appendChild(clonedElement);
  }
});

// 7. Event Listeners
document.getElementById("event-button").addEventListener("click", () => {
  alert("Button Clicked!");
});

// 8. Working with Forms
document.getElementById("myForm").addEventListener("submit", function (event) {
  event.preventDefault(); // Prevent form submission
  const inputValue = document.getElementById("textInput").value;
  alert(`Form Submitted with Input: ${inputValue}`);
});

// 9. DOM Traversal
document.getElementById("traverse-dom").addEventListener("click", () => {
  const parent = document.getElementById("parent");
  if (parent) {
    console.log("First Child:", parent.firstElementChild.textContent); // Log first child
    console.log("Last Child:", parent.lastElementChild.textContent); // Log last child
    console.log(
      "Next Sibling:",
      parent.firstElementChild.nextElementSibling.textContent
    ); // Log next sibling
    console.log(
      "Previous Sibling:",
      parent.lastElementChild.previousElementSibling.textContent
    ); // Log previous sibling
  } else {
    console.log("Parent element not found");
  }
});

// Additional notes:
// 1. getElementById: Selects an element by its unique ID.
// 2. getElementsByClassName: Returns a live HTMLCollection of elements with the specified class name.
// 3. getElementsByTagName: Returns a live HTMLCollection of elements with the specified tag name.
// 4. querySelector: Selects the first element matching a CSS selector.
// 5. querySelectorAll: Returns a static NodeList of elements matching a CSS selector.
// 6. innerHTML: Sets or gets the HTML content of an element.
// 7. innerText: Sets or gets the text content of an element, taking CSS into account.
// 8. textContent: Sets or gets the text content of an element, ignoring CSS.
// 9. Directly manipulate an element’s style properties to change its appearance.
// 10. classList.add: Adds one or more classes to an element.
// 11. classList.remove: Removes one or more classes from an element.
// 12. classList.toggle: Toggles a class on or off.
// 13. createElement: Creates a new HTML element.
// 14. appendChild: Adds a new child node to an element.
// 15. removeChild: Removes a child node from an element.
// 16. addEventListener: Attaches an event handler to an element.
// 17. removeEventListener: Removes an event handler from an element.
// 18. preventDefault: Prevents the default action of form submission.
// 19. value: Gets the current value of an input element.
// 20. parentElement, firstElementChild, lastElementChild, nextElementSibling, previousElementSibling: Traverses the DOM.
// 21. cloneNode: Creates a copy of an element and its children.
