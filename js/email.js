document.querySelector('.contactForm').addEventListener('submit', submitForm);
function submitForm(e) {
    e.preventDefault();

    //   Get input Values
    let name = document.getElementById("name_input").value;
    let email = document.getElementById("email_input").value;
    let message = document.getElementById("message_input").value;
    
    if (email.includes("@")) {
        document.querySelector('.contactForm').reset();
        sendEmail(name, email, message);
    } else {
        alert("Invalid Email");
    }
}


function sendEmail(name, email, message) {
    Email.send({
        Host: "smtp.gmail.com",
        Username: "contacttowill@gmail.com",
        Password: "",
        To: "williamhsia28@gmail.com",
        From: "contacttowill@gmail.com",
        Subject: `${name} sent you a message`,
        Body: `Name: ${name} <br/> Email: ${email} <br/> Message: ${message}`,
    }).then((message) => alert("mail sent successfully"));
}
