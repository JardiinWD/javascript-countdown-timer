
const countdown = document.querySelector('.countdown')
console.log(countdown);

/* This is my Setinterval method */
const countdownInterval = setInterval(() => {

    /* This is my Deadline */
    const deadLine = new Date(2022, 7, 22, 10, 16, 00)
    // console.log(deadLine);

    /* This is my Current time (expressed in milliseconds) */
    const currentTime = new Date()
    // console.log(currentTime);

    /* This is the difference between de Deadline and the currenttime */
    const difference = deadLine - currentTime;
    // console.log(difference);

    if (difference == 0) {
        myStopFunction()
    }


    /* These are my countdown elements */
    const days = Math.floor(difference / (100 * 60 * 60 * 20)) /* These are my Days */
    const hours = Math.floor(difference / (1000 * 60 * 60) % 24) /* These are my Hours */
    const minutes = Math.floor(difference / (1000 * 60) % 60) /* These are my Minutes */
    const seconds = Math.floor((difference / 1000) % 60) /* These are my Seconds */


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

function myStopFunction() {
    /* I need to stop my setInterval function */
    clearInterval(countdownInterval);
}

