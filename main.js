let toggle = document.querySelector('.toggle');
let top_bar = document.querySelector('.top_bar');
let navigation = document.querySelector('.navigation');
let main = document.querySelector('.main');
toggle.classList.add('active');
top_bar.classList.add('active');
navigation.classList.add('active');
main.classList.add('active');
toggle.onclick = function () {
    toggle.classList.toggle('active');
    top_bar.classList.toggle('active');
    navigation.classList.toggle('active');
    main.classList.toggle('active');
}

function toggleMenu() {
    let navigation = document.querySelector('.navigation');
    let main = document.querySelector('.main');
    navigation.classList.remove('active');
    main.classList.remove('active');
}

var prevScrollpos = window.pageYOffset;
window.onscroll = function () {
    var currentScrollPos = window.pageYOffset;
    if (prevScrollpos > currentScrollPos) {
        document.querySelector('.top_bar').classList.remove('hide')
    } else {
        document.querySelector('.top_bar').classList.add('hide')
    }
    prevScrollpos = currentScrollPos;
};


document.querySelector('.contactForm').addEventListener('submit', submitForm);
function submitForm(e) {
    e.preventDefault();

    //   Get input Values
    let name = document.getElementById("name_input").value;
    let email = document.getElementById("email_input").value;
    let message = document.getElementById("message_input").value;
    console.log(name, email, message);
    document.querySelector('.contactForm').reset();

    sendEmail(name, email, message);
}


function sendEmail(name, email, message) {
    Email.send({
        Host: "smtp.gmail.com",
        Username: "williamhsia28@gmail.com",
        Password: "dcjobgbjibpanmwk",
        To: "williamhsia28@gmail.com",
        From: "williamhsia28@gmail.com",
        Subject: `${name} sent you a message`,
        Body: `Name: ${name} <br/> Email: ${email} <br/> Message: ${message}`,
    }).then((message) => alert("mail sent successfully"));

}
