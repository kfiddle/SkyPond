const button = document.getElementById('button');


const submitCustomer = () => {

    let fullName = document.getElementById('name').value;
    let email = document.getElementById('email').value;
    let phone = document.getElementById('phone').value;


    let names = fullName.split(" ");
    let firstName = names[0];
    let lastName = names[1];

    let formData = {
        firstName : firstName,
        lastName : lastName,
        phoneNumber : phone,
        email : email,
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


button.addEventListener('click', submitCustomer);
