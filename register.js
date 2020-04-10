var customSelect = document.getElementsByClassName("custom-select");
for (let i = 0; i < customSelect.length; i++) {
    let a, b, c;
    let selElmnt = customSelect[i].getElementsByTagName("select")[0];
    /* For each element, create a new DIV that will act as the selected item: */
    a = document.createElement("DIV");
    a.setAttribute("class", "select-selected");
    a.innerHTML = selElmnt.options[selElmnt.selectedIndex].innerHTML;
    customSelect[i].appendChild(a);
    /* For each element, create a new DIV that will contain the option list: */
    b = document.createElement("DIV");
    b.setAttribute("class", "select-items select-hide");
    for (let j = 1; j < selElmnt.length; j++) {
        /* For each option in the original select element,
    create a new DIV that will act as an option item: */
        c = document.createElement("DIV");
        c.innerHTML = selElmnt.options[j].innerHTML;
        c.addEventListener("click", function (e) {
            /* When an item is clicked, update the original select box,
        and the selected item: */
            var y, i, k, s, h;
            s = this.parentNode.parentNode.getElementsByTagName("select")[0];
            h = this.parentNode.previousSibling;
            for (i = 0; i < s.length; i++) {
                if (s.options[i].innerHTML == this.innerHTML) {
                    s.selectedIndex = i;
                    h.innerHTML = this.innerHTML;
                    y = this.parentNode.getElementsByClassName(
                        "same-as-selected"
                    );
                    for (k = 0; k < y.length; k++) {
                        y[k].removeAttribute("class");
                    }
                    this.setAttribute("class", "same-as-selected");
                    break;
                }
            }
            h.click();
        });
        b.appendChild(c);
    }
    customSelect[i].appendChild(b);
    a.addEventListener("click", function (e) {
        /* When the select box is clicked, close any other select boxes,
    and open/close the current select box: */
        e.stopPropagation();
        closeAllSelect(this);
        this.nextSibling.classList.toggle("select-hide");
        this.classList.toggle("select-arrow-active");
    });
}

function closeAllSelect(elmnt) {
    /* A function that will close all select boxes in the document,
  except the current select box: */
    var x,
        y,
        i,
        arrNo = [];
    x = document.getElementsByClassName("select-items");
    y = document.getElementsByClassName("select-selected");
    for (i = 0; i < y.length; i++) {
        if (elmnt == y[i]) {
            arrNo.push(i);
        } else {
            y[i].classList.remove("select-arrow-active");
        }
    }
    for (i = 0; i < x.length; i++) {
        if (arrNo.indexOf(i)) {
            x[i].classList.add("select-hide");
        }
    }
}

/* If the user clicks anywhere outside the select box,
then close all select boxes: */
document.addEventListener("click", closeAllSelect);

$(document).ready(function () {
    $("#errorAlert").hide();
    $("#successAlert").hide();
});

/* Input validation */
function doValidation() {
    let fname = $("#fname").val();
    let lname = $("#lname").val();
    let gender = $("#gender").val();
    let dob = $("#dob").val();
    let region = $("#country").val();
    let province = $("#province").val();
    let pw = $("#pw").val();
    let con_pw = $("#con-pw").val();
    let checkbox = $("#checkbox")[0].checked;
    let errorMessage = [];

    console.log("First Name", fname);
    console.log("Last Name", lname);
    console.log("Gender", gender);
    console.log("Date of birth", dob);
    console.log("Country", region);
    console.log("Province", province);
    console.log("Password", pw);
    console.log("Confirmation Password", con_pw);
    console.log("Agreement", checkbox);

    if (fname.length < 4) {
        console.warn("First name must be at least 4 characters");
        errorMessage.push("First name must be at least 4 characters");
    }

    if (lname.length < 3) {
        console.warn("Last name must be at least 3 characters");
        errorMessage.push("Last name must be at least 3 characters");
    }

    if (gender == 0) {
        console.warn("Please select the gender");
        errorMessage.push("Please select the gender");
    }

    if (dob == "") {
        console.warn("Please select the date of birth");
        errorMessage.push("Please select the date of birth");
    }

    if (region == 0) {
        console.warn("Please select the region");
        errorMessage.push("Please select the region");
    }

    if (province == 0) {
        console.warn("Please select the province");
        errorMessage.push("Please select the province");
    }

    if (pw.length < 6) {
        console.warn("Password must be at least 6 characters");
        errorMessage.push("Password must be at least 6 characters");
    }

    if (con_pw !== pw) {
        console.warn("Confirmation password does not match with the password");
        errorMessage.push(
            "Confirmation password does not match with the password"
        );
    }

    if (!checkbox) {
        console.warn("You must Agree with term and service");
        errorMessage.push("You must Agree with term and service");
    }

    if (errorMessage.length === 0) {
        let errorMsg = $("#errorAlert");
        errorMsg.html(""); //deleting the error messages

        let successMsg = $("#successAlert");
        successMsg.text("Registration Success!");
        successMsg.css("color", "var(--orange)");
        successMsg.css("font-weight", "bold");
        successMsg.css("font-size", "1rem");
        successMsg.show("slow");
    } else {
        let errorMsg = $("#errorAlert");

        errorMsg.html("");

        // looping error Messagenya
        errorMessage.forEach(function (e) {
            errorMsg.append('<div class="my-2">' + e + "</div>");
        });

        errorMsg.css("color", "red");

        errorMsg.slideDown();
        errorMsg.click(function () {
            errorMsg.slideUp();
        });
    }
    return false;
}

$("#submit").click(function (e) {
    e.preventDefault();
    doValidation();
});
