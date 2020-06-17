console.log("Welcome to Library")
//make a constructor with the name of * Book * 

function Book(name, author, type) {
    this.name = name;
    this.author = author;
    this.type = type;
}

//display constructor
function Display() {

}

//add method to display prototype.
let a =1;
console.log(a);
Display.prototype.add = function (book) {
    console.log("adding to UI");
  
    let tableBody = document.getElementById("tableBody");
    let UiString = `<tr>
                        <th scope="row" id="numbers">${a}</th>
                        <td>${book.name}</td>
                        <td>${book.author}</td>
                        <td>${book.type}</td>
                    </tr>`
    tableBody.innerHTML += UiString; 

}
//clear function
Display.prototype.clear = function () {
    let libraryForm = document.getElementById("libraryForm");
    libraryForm.reset();
}
//implementing validate function
Display.prototype.validate = function(book){
    if(book.name.length<2 && book.author.length<2){
return false;

    }
    else{
        return true;
    }
}
////show function
Display.prototype.show = function(type,displaymessage){
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




//add submit event listner to libraryForm.
let libraryForm = document.getElementById("libraryForm");
libraryForm.addEventListener('submit', libraryFormSubmit);

function libraryFormSubmit(e) {
    e.preventDefault();
    console.log("library from submitted")
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


    let book = new Book(name, author, type);
    console.log(book);

    let display = new Display();
    if(display.validate(book)){
        display.add(book);
        display.clear();
        display.show('sucess',"Your book has been successfully added");
    }
    else{
        //display error
        display.show('error',"Enter the book name and author firsts");
    }
    
    a=a+1;

}

