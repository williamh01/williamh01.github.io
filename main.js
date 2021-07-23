const scroll = new SmoothScroll('.navbar a[href*="#"]', {
    speed: 700
});


const menubutton = document.querySelector('.menubox');
const menu = document.querySelector('.menucontainer');
let menuOpen = false;

const menuhome = document.querySelector('.home_link');
const menuabout = document.querySelector('.about_link');
const menuprojects = document.querySelector('.projects_link');
const menucontact = document.querySelector('.contact_link');

function navListener(e) {
    e.addEventListener('click', () => {
        if (!menuOpen) {
            menubutton.classList.add('open');
            menuOpen = true;
        } else {
            menubutton.classList.remove('open');
            menuOpen = false;
        }
    });
}
navListener(menu);
navListener(menuhome);
navListener(menuabout);
navListener(menuprojects);
navListener(menucontact);


document.querySelector('.contact_form').addEventListener('submit', submitForm);
function submitForm(e) {
    e.preventDefault();

    //   Get input Values
    let name = document.getElementById("name_input").value;
    let email = document.getElementById("email_input").value;
    let message = document.getElementById("message_input").value;
    console.log(name, email, message);
    document.querySelector('.contact_form').reset();

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



const flightpath = {
    curviness: 1,
    autoRotate: true,
    values: [
        { x: -50, y: 0 },
        { x: 900, y: 200 },
        { x: 700, y: 50 },
        { x: -100, y: 350 },
        { x: 200, y: 300 }
        /*
        {x:10, y: 200},
        {x:100, y: 500},
        {x:500, y: 50},
        {x:window.innerWidth - (window.innerWidth / 3), y: 500}*/
    ]
}

const tween = new TimelineLite();

tween.add(
    TweenLite.to('.plane_smoke', 3, {
        bezier: flightpath,
        ease: Power1.easeInOut
    })
);

const controller = new ScrollMagic.Controller();

const scene = new ScrollMagic.Scene({
    triggerElement: '#mainHeader',
    duration: 3000
})
    .setTween(tween)
    .addIndicators()
    .addTo(controller);


