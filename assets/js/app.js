//#region Const and variables

const countdown = document.querySelector('.countdown')
console.log(countdown);

/* This is my Icons wrapper */
const myIconLinks = document.querySelector('.icons')
console.log(myIconLinks);

/* This is my Periods wrapper */
const appTime = document.querySelector('.periods')
console.log(appTime);
//#endregion

//#region Arrays and data
const iconLinks = [
    {
        a_class: 'single_icon',
        a_ref: '#',
        icon: "fa-brands fa-square-facebook"
    },
    {
        a_class: 'single_icon',
        a_ref: '#',
        icon: "fa-brands fa-pinterest"
    },
    {
        a_class: 'single_icon',
        a_ref: '#',
        icon: "fa-brands fa-instagram"
    }
]
console.log(iconLinks);

const myPeriod = ['Days', 'Hours', 'Minutes', 'Seconds']
console.log(myPeriod);

//#endregion


/* This is my Setinterval method */

const countdownInterval = setInterval(() => {

    /* This is my Deadline */
    const deadLine = new Date(2022, 7, 24, 12, 12, 0)
    // console.log(deadLine);

    /* This is my Current time (expressed in milliseconds) */
    const currentTime = new Date()
    // console.log(currentTime);

    /* This is the difference between de Deadline and the currenttime */
    const difference = deadLine - currentTime;
    // console.log(difference);

    /* These are my countdown elements */
    let days = Math.floor(difference / (100 * 60 * 60 * 20)) /* These are my Days */
    let hours = Math.floor(difference / (1000 * 60 * 60) % 24) /* These are my Hours */
    let minutes = Math.floor(difference / (1000 * 60) % 60) /* These are my Minutes */
    let seconds = Math.floor((difference / 1000) % 60) /* These are my Seconds */

    /* Condition to modify my seconds, hours etc. if they are under 10 */
    if (seconds < 10) {
        seconds = `0${Math.floor((difference / 1000) % 60)}`
    }
    if (minutes < 10) {
        minutes = `0${Math.floor(difference / (1000 * 60) % 60)}`
    }
    if (hours < 10) {
        hours = `0${Math.floor(difference / (1000 * 60 * 60) % 24)}`
    }
    if (days < 10) {
        days = `0${Math.floor(difference / (100 * 60 * 60 * 20))}`
    }


    /* This is my statement for not show in the DOM negative values */
    if (seconds <= 0 && days <= 0 && hours <= 0 && minutes <= 0) {
        seconds = 0 /* These are my Seconds */
        days = 0 /* These are my Days */
        hours = 0 /* These are my Hours */
        minutes = 0 /* These are my Minutes */
        // console.log(seconds);
    }


    /* These are my console Logs */
    /* I had to turn them off to keep the console from filling up */

    // console.log(`These are the remain seconds before the deadline : ${days}`);
    // console.log(`These are the remain hours before the deadline : ${hours}`);
    // console.log(`These are the remain minutes before the deadline : ${minutes}`);
    // console.log(`These are the remain seconds before the deadline : ${seconds}`);


    /* These are the moment where i have to inject my remain variables to the DOM */
    countdown.innerHTML =
        `   
            <div>
                <span class="left"></span>
                ${days}
                <span class="right"></span>
                
            </div>

            <div>
                <span class="left"></span>
                ${hours}
                <span class="right"></span>    
            </div>
            
            <div>
                <span class="left"></span>
                ${minutes}
                <span class="right"></span>    
            </div>

            <div>
                <span class="left"></span>
                ${seconds}
                <span class="right"></span>    
            </div>
        `
}, 1000)

/* This is my forEach loop for generate the icons dinamically */
iconLinks.forEach(element => {
    let singleFooterIcon =
        `
        <a class="${element.a_class}" href="${element.a_ref}">
            <i class="${element.icon}"></i>
        </a>
        `
    myIconLinks.insertAdjacentHTML('beforeend', singleFooterIcon)
})

/* This is my for loop for generate periods of time dinamically */
for (let i = 0; i < myPeriod.length; i++) {
    console.log(myPeriod[i]);
    appTime.insertAdjacentHTML('beforeend', `<p>${myPeriod[i]}</p>`)
}