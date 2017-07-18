// dont put a semi colon after the ends of functions!!!


// runs the function on an event listener which is specified as a
// click. the event listener takes in what triggers it, and what
// happens when its triggered as agruments.
// inside the function, it will add any text in the item field to
// the to do list. 

// waits for the window to load before it runs
window.addEventListener('load', function() { 


	// remove and complete svgs into variables
	var removeSvg = '<svg version="1.1" class="trash-bin" id="Layer_2" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"width="20px" height="20px" viewBox="-214.862 74.252 52.982 71.667"enable-background="new -214.862 74.252 52.982 71.667" xml:space="preserve"><g><path fill="#C01311" d="M-196.375,107.64v-1.596v5.693c0-4.72,0.23-6.817-2.663-6.817s-2.663,2.097-2.663,6.817v-5.693v1.596v19.796c0,4.72-0.229,6.817,2.663,6.817s2.663-2.097,2.663-6.817V107.64z"/><path fill="#C01311" d="M-185.708,107.64v-1.596v5.693c0-4.72,0.23-6.817-2.663-6.817c-2.892,0-2.663,2.097-2.663,6.817v-5.693v1.596v19.796c0,4.72-0.229,6.817,2.663,6.817c2.893,0,2.663-2.097,2.663-6.817V107.64z"/><path fill="#C01311" d="M-175.042,107.64v-1.596v5.693c0-4.72,0.23-6.817-2.663-6.817c-2.892,0-2.663,2.097-2.663,6.817v-5.693v1.596v19.796c0,4.72-0.229,6.817,2.663,6.817c2.893,0,2.663-2.097,2.663-6.817V107.64z"/></g><g><path fill="#C01311" d="M-172.38,145.919h-31.982c-3.86,0-7-3.14-7-7V94.587h45.982v44.333C-165.38,142.779-168.52,145.919-172.38,145.919z M-207.362,98.587v40.333c0,1.654,1.346,3,3,3h31.982c1.654,0,3-1.346,3-3V98.587H-207.362z"/></g><g><path fill="#C01311" d="M-179.538,85.657h-17.666v-6.834c0-2.52,1.51-4.57,3.366-4.57h10.935c1.855,0,3.365,2.05,3.365,4.57V85.657z M-193.865,81.159h11.015v-2.336l-10.987-0.072L-193.865,81.159z"/></g><g><path fill="#C01311" d="M-167.88,98.919h-40.982c-3.309,0-6-2.691-6-6v-4.666c0-3.309,2.691-6,6-6h40.982c3.309,0,6,2.691,6,6v4.666C-161.88,96.228-164.571,98.919-167.88,98.919z M-208.862,86.253c-1.103,0-2,0.897-2,2v4.666c0,1.103,0.897,2,2,2h40.982c1.103,0,2-0.897,2-2v-4.666c0-1.103-0.897-2-2-2H-208.862z"/></g></svg>';
	var completeSvg = '<svg version="1.1" id="Layer_2" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"width="20px" height="20px" viewBox="-131.205 -22.581 54.334 54.333"enable-background="new -131.205 -22.581 54.334 54.333" xml:space="preserve"><circle fill="none" stroke="#3FA180" stroke-width="3" stroke-miterlimit="10" cx="-104.038" cy="4.586" r="25.667"/><path fill="none" stroke="#3FA180" stroke-width="4" stroke-miterlimit="10" d="M-119.599,4.01c5.412,4.764,10.463,11.657,10.463,11.657S-94.651-1.801-89.603-4.767"/></svg>';

	var completeIcon = document.createElement('complete');
	var removeIcon = document.createElement('remove');
	var plusSign = document.getElementById('addButton');

	// ADDS SOMETHING NEW TO THE LIST
	function addItem(text) {


		// finds the toDo ul by id
		var list = document.getElementById('toDo');


		// creates the li
		var listSlot = document.createElement('li');
		listSlot.classList.add('list-slot');

		// creates the paragraph for the list element to go in
		// styles it and appends that text
		var paragraph = document.createElement('p');
		paragraph.classList.add('list-text');
		paragraph.innerText = text;

		// creates the button for the complete svg and gives it a style
		var completeContainer = document.createElement('button');
		completeContainer.classList.add('list-buttons', 'complete');

		var removeContainer = document.createElement('button');
		removeContainer.classList.add('list-buttons','remove');

		// adds the complete svg and appropriate class
		var completeIcon = document.createElement('complete');
		completeIcon.classList.add('complete');
		completeIcon.innerHTML = completeSvg;

		var removeIcon = document.createElement('remove');
		removeIcon.classList.add('remove');
		removeIcon.innerHTML = removeSvg;


		// throws it into the HTML in its appropriate spot.
		
		list.appendChild(listSlot);
		listSlot.appendChild(paragraph);

		completeContainer.appendChild(completeIcon);
		
		removeContainer.appendChild(removeIcon);
	

		listSlot.appendChild(removeContainer);
		listSlot.appendChild(completeContainer);


		list.insertBefore(listSlot, list.childNodes[0]);
		console.log("added an item to the list");

		// event listenere for the delete function
		removeIcon.addEventListener('click', deleteItem);
		// event listenere for the complete function
		completeIcon.addEventListener('click', completeItem);


	} // END addItem()


	// button for addItem()
	document.getElementById('addButton').addEventListener('click', function() {

		var value = document.getElementById('itemField').value;

		if(value) addItem(value);

		// clears the typing field once the user submits.
		document.getElementById('itemField').value = '';

	});

	
	// REMOVES THE SELECTED SOMETHING FROM THE LIST
	function deleteItem() {

		// set variables to the parent and child to delete the child from the parent
		var item = this.parentNode.parentNode;
		var parent = item.parentNode;

		parent.removeChild(item);

		console.log('trashed!');
	};


	// MOVES THE SELECTED SOMETHING TO THE COMPLETE LIST
	// https://youtu.be/2wCpkOk2uCg?t=57m44s

	function completeItem() {

		var item = this.parentNode.parentNode;
		var parent = item.parentNode;

		var parentID = parent.id;

		var target;

		if(parent.id === "toDo") {
			// its already a todo item and needs to be completed
			target = document.getElementById("complete");
		} else {
			// its a task in the complete section that has to be moved back
			target = document.getElementById("toDo");
		}

		// shortened if / else statement.
		// if the id === "todo" then grab the complete element, otherwise grab the toDo element.
		// the question mark represents the if and the colon represents the else.
		// var target = (id === "toDo") ? document.getElementById("complete"):document.getElementById("toDo");

		// the item in this case represents the "this" instance in the var definition
		// it removes the li from the ul of this instance
		parent.removeChild(item);

		// adds it to the necessary list depending on the outcome of the
		// if else statement in the same way that removeitem() works
		target.insertBefore(item, target.childNodes[0]);



		console.log('moved!');

	};











}); // END window.addEventListener('onload')




