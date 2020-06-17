console.log("percentage calculator")
class Info {
    constructor(name, regno, Class) {
        this.name = name;
        this.regno = regno;
        this.Class = Class;
    }
    validate(valuesobj) {
        if (valuesobj.name.length < 2 && valuesobj.regno.length < 2 && valuesobj.Class.length < 2) {
            return false;
        }
        else {
            return true;
        }
    }
    clearfrom() {
        formsubmit.reset();
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
}
let formsubmit = document.getElementById("submitForm");
formsubmit.addEventListener("submit", getvalues);
function getvalues(e) {
    //e.preventDefault();
    let name = document.getElementById("StudentName").value;
    let regno = document.getElementById("RegNo").value;
    let Class = document.getElementById("Class").value;
    let valuesobj = {
        name: name,
        regno: regno,
        Class: Class
    }
    console.log(valuesobj)
    let infoObj1 = new Info();

    if (infoObj1.validate(valuesobj)) {
        let getstudentinfo = localStorage.getItem("getstudentinfo")
        if (getstudentinfo === null) {
            infoObj = [];

        }
        else {
            infoObj = JSON.parse(getstudentinfo);
        }


        infoObj.push(valuesobj);
        localStorage.setItem("getstudentinfo", JSON.stringify(infoObj));

        infoObj1.clearfrom();

        infoObj1.showAlert('sucess', "Your book has been successfully added");
    }
    else {
        //display error
       infoObj1.showAlert('error', "Enter the book name and author firsts");
    }


}
 
