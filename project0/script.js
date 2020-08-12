const classNames = {
  TODO_ITEM: 'todo-container',
  TODO_CHECKBOX: 'todo-checkbox',
  TODO_TEXT: 'todo-text',
  TODO_DELETE: 'todo-delete',
}

const list = document.getElementById('todo-list')
const itemCountSpan = document.getElementById('item-count')
const uncheckedCountSpan = document.getElementById('unchecked-count')

function newTodo() {
	//alert('New TODO button clicked!')
	const message = window.prompt("Please enter the TODO") 
	var node = document.createElement("LI");                 // Create a <li> node
	var textnode = document.createTextNode(message);         // Create a text node

	//var x = document.createElement("INPUT");
	//x.setAttribute("type", "checkbox");
	//x.appendChild(textnode);


	node.appendChild(textnode);                              // Append the text to <li>
	list.appendChild(node);     // Append <li> to <ul> with id="myList"
	const count = Number(itemCountSpan.textContent) + 1
	itemCountSpan.textContent = count	


}
