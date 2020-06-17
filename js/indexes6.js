console.log("here is classes e6")
class BookList {
    constructor(name, author, type) {
        this.name = name;
        this.author = author;
        this.type = type;

    }
    clearfrom() {
        libraryform.reset();
    }
    showAlert(type, displaymessage) {
        let message = document.getElementById("message");
        message.innerHTML = `
                                <div class="alert alert-${type} alert-dismissible fade show" role="alert">
                                <strong>Message:</strong> ${displaymessage}
                                <button type="button" class="close" data-dismiss="alert" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                                </button>
                                </div>
                            `
        setTimeout(() => {
            message.innerHTML = ""
        }, 2000);

    }
    validate(bookobj) {
        console.log("validate function triggered", bookobj);
        if (bookobj.name.length < 2 && bookobj.author.length < 2) {
            return false;
        }
        else {
            return true;
        }
    }
    showbooks(booklistobj) {
        console.log("adding to UI");

        let tableBody = document.getElementById("tableBody");
        Array.from(booklistobj).forEach(function (element, index) {
            let UiString = `<tr>
            <th scope="row" id="numbers">${index + 1}</th>
            <td>${element.name}</td>
            <td>${element.author}</td>
            <td>${element.type}</td>
           <td> <button type="button" class="btn btn-danger" id="${index}" onclick = "deletebook(this.id)">Delete</button></td>
        </tr>`
            tableBody.innerHTML += UiString;
        });
    }
}
let bookl = new BookList();
let libraryform = document.getElementById("libraryForm");
libraryForm.addEventListener("submit", formsubmit)
function formsubmit(e) {
    e.preventDefault();
    let name = document.getElementById("BookName").value;
    let author = document.getElementById("AuthorName").value;
    let type;

    let Sports = document.getElementById("Sports");
    let Cooking = document.getElementById("Cooking");
    let fiction = document.getElementById("fiction");

    if (Sports.checked) {
        type = Sports.value;

    }
    else if (Cooking.checked) {
        type = Cooking.value;

    }
    else if (fiction.checked) {
        type = fiction.value;

    }
    let bookobj = {
        name: name,
        author: author,
        type: type
    }

    if (bookl.validate(bookobj)) {

        let booklist = localStorage.getItem("booklist");
        if (booklist === null) {
            booklistobj = [];

        }
        else {
            booklistobj = JSON.parse(booklist);
        }

        booklistobj.push(bookobj);
        localStorage.setItem("booklist", JSON.stringify(booklistobj));
        bookl.showAlert("Success", "you added book successfully");
        bookl.clearfrom();
        window.location.reload(true);
    }
    else {
        bookl.showAlert("eroe", "enter some values to add the book")
    }

}
//retrieve books
let booklist = localStorage.getItem("booklist");
if (booklist === null) {
    booklistobj = [];

}
else {
    booklistobj = JSON.parse(booklist);
    bookl.showbooks(booklistobj);
}
//implementing delete function
function deletebook(index){

    let delbook = localStorage.getItem("booklist");
    if (booklist === null) {
        booklistobj = [];
    
    }
    else {
        booklistobj = JSON.parse(booklist);
    }
    booklistobj.splice(index, 1);
    localStorage.setItem("booklist", JSON.stringify(booklistobj));
    window.location.reload(true);
    }
