const button = document.getElementById('button');
const phone = document.getElementById('phone');
let displayedNumber = "";

const formatPhoneNumber = (event) => {
    displayedNumber = phone.value;
    let key = event.keyCode;

    if (key === 8) {
        displayedNumber = displayedNumber.substring(-1);
        phone.value = displayedNumber;
        console.log(displayedNumber);

    } else if ((key > 47 && key < 58) || (key > 95 && key < 106) || key === 189) {

        if (displayedNumber.length === 3) {
            displayedNumber = '(' + displayedNumber + ') ';
            phone.value = displayedNumber;
        }

        if (displayedNumber.length === 9) {
            if (event.keyCode === 189) {
                phone.value = displayedNumber;
            } else {
                phone.value = displayedNumber + '-';
            }
        }

        if (displayedNumber.length === 15) {
            displayedNumber = displayedNumber.substring(0, 14);
            phone.value = displayedNumber;
        }
    } else {
        displayedNumber = displayedNumber.substring(0, displayedNumber.length - 1);
        phone.value = displayedNumber;

    }

    console.log(displayedNumber);
}


const submitCustomer = () => {

    let fullName = document.getElementById('name').value;
    let email = document.getElementById('email').value;

    let names = fullName.split(" ");
    let firstName = names[0];
    let lastName = names[1];

    let formData = {
        firstName: firstName,
        lastName: lastName,
        phoneNumber: phone.value,
        email: email,
    }

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
    formatPhoneNumber(event);
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
