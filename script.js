console.log("Page Working..");
// console.log(textBox);
// console.log(textArea);
// console.log(btn);

displayData();
const btn = document.getElementById('btn');
btn.addEventListener('click', myBtn);
// btn.addEventListener('keyenter');

function myBtn() {
    let textBox = document.getElementById('textBox');

    let notes = localStorage.getItem("notes");
    if (notes == null) {
        notesObj = [];
        // console.log(notesObj);
    }
    else {
        notesObj = JSON.parse(notes);
        // console.log(notesObj);
    }
    notesObj.push(textBox.value);
    localStorage.setItem('notes', JSON.stringify(notesObj));
    textBox.value = '';
    displayData();
}

function displayData() {
    let notes = localStorage.getItem("notes");
    if (notes == null) {
        notesObj = [];
    }
    else {
        notesObj = JSON.parse(notes);
    }
    let html = '';
    notesObj.forEach(function (element, index) {
        html += `
        <div class="my-2 px-2 py-2 noteCards" style="background:#2f363e!important">
		<h5>Note: ${index + 1}</h5>
		<p>${element}</p>
		<button class="btn btn-danger orange" id="${index}" onclick="DelteNotes(this.id)">DelteNote</button>
	    </div>
        `;
    });

    if (notesObj != 0) {
        const addNote = document.getElementById('addNotes');
        // console.log(addNote.children[0]);
        addNote.children[0].innerHTML = html;
        // console.log(addNote);
    }
    else {
        const addNote = document.getElementById('addNotes');
        const h5 = document.createElement('h5');
        h5.innerHTML = "No notes here yet";
        h5.classList.add('text-center', 'lead');
        addNote.children[0].appendChild(h5);
    }
}
function DelteNotes(index) {
    console.log("Delete Function fired", index);
    let notes = localStorage.getItem("notes");
    // console.log(notes);
    if (notes == null) {
        notesObj = [];
        // console.log(notesObj);
    }
    else {
        notesObj = JSON.parse(notes);
    }
    notesObj.splice(index,1);
    let l = localStorage.setItem('notes', JSON.stringify(notesObj));
    console.log(l);
    if(l == undefined){
        const addNote = document.getElementById('addNotes');
        addNote.children[0].innerHTML = "";
    }
    displayData();
}

// var unicode = '\&#10006';
// alert(unicode)

serachBox.addEventListener("input", SerachBox);
function SerachBox() {
    // console.log("SerachBox has Been fired");
    var serachBox = document.getElementById('serachBox').value.toLowerCase();
    const noteCards = document.getElementsByClassName('noteCards');
    // console.log(noteCards);

    Array.from(noteCards).forEach(function (element) {
        var cardTxt = element.getElementsByTagName("p")[0].innerText.toLowerCase();
        // console.log(cardTxt);
        if (cardTxt.includes(serachBox)) {
            element.style.display = "";
        }
        else {
            element.style.display = "none";
        }
    })
}
