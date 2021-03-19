const button = document.getElementById('button');
const phone = document.getElementById('phone');
// const thankYouBox = document.getElementById("thankYouContainer");
let displayedNumber = "";

const validEntry = (event) => {
    displayedNumber = phone.value;
    let key = event.keyCode;
    let currentLength = displayedNumber.length;

    if (key === 8 && currentLength === 4) {
        displayedNumber = displayedNumber.substring(1, displayedNumber.length);
    }

    else if (key === 8 && currentLength === 10) {
        displayedNumber = displayedNumber.substring(0, displayedNumber.length - 1);
    }

    else if (currentLength === 3) {
        displayedNumber = '(' + displayedNumber + ') ';
    }

    else if (currentLength === 9) {
        displayedNumber = displayedNumber + '-';
    }

    else if (currentLength === 15) {
        displayedNumber = displayedNumber.substring(0, phone.value.length - 1);

    }
    phone.value = displayedNumber;
}


const phoneFormatter2 = (event) => {
    let key = event.keyCode;
    let numbers, backspace, dash;

    if ((key > 47 && key < 58) || (key > 95 && key < 106)) {
        numbers = true;
    }

    if (key === 8) {
        backspace = true;
    }

    if (key === 189) {
        dash = true;
    }

    if (!numbers && !backspace && !dash) {
        phone.value = phone.value.substring(0, phone.value.length - 1);
    } else {
        validEntry(event);
    }


}

// const scrollToThankYouBox = (i) => {
//     thankYouBox.style.height = i + "px";
// }

// const openThankYouBox = (firstName) => {
//     thankYouBox.classList.remove('hidden');
//     let thankYouStatement = document.createElement('h2');
//     thankYouStatement.innerHTML = firstName + ", thank you for submitting our customer form. You're an ok person.";
//     thankYouBox.appendChild(thankYouStatement);
//
//     for (let i = 1; i < 300; i++) {
//         setTimeout(scrollToThankYouBox, 5 * i, i);
//     }
//
// }

const submitCustomer = () => {

    let fullName = document.getElementById('name').value;
    let email = document.getElementById('email').value;

    let names = fullName.split(" ");
    let firstName = names[0];
    let lastName = names[names.length - 1];

    let formData = {
        firstName: firstName,
        lastName: lastName,
        phoneNumber: phone.value,
        email: email,
    }

    console.log(firstName);
    console.log(lastName);
    console.log(phone.value);

    $.ajax({
            type: "POST",
            contentType: "application/json",
            url: "/add-customer",
            data: JSON.stringify(formData),
            dataType: 'json'
        }
    )

}


phone.addEventListener('keyup', () => {
    phoneFormatter2(event);
});
button.addEventListener('click', submitCustomer);

/*
the "sort of" phone formatters below. They don't work well enough as is.
const formatPhoneNumber = (value) => {
    let displayedNumber = value.replace(/[^\d]/g,"");
    let phoneNumberLength = value.length;
    if (phoneNumberLength < 4) {
        phone.value = displayedNumber;
    }
    if (phoneNumberLength > 4 && phoneNumberLength < 7) {
        phone.value = `(${displayedNumber.slice(0, 3)}) ${displayedNumber.slice(3)}`;
    }
    phone.value = `(${displayedNumber.slice(0, 3)}) ${displayedNumber.slice(3, 6)}-${displayedNumber.slice(6, 9)}`;
}
 let cleaned = ('' + value).replace(/\D/g, '');
    let match = cleaned.match(/^(\d{3})(\d{3})(\d{4})$/);
    if (match) {
        phone.value = '(' + match[1] + ')' + match[2] + '-' + match[3];
    }
 */
