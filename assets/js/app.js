/* Declaration of my strict mode */
/* 'use strict' */

const countdown = document.querySelector('.countdown')
console.log(countdown);

/* This is my Setinterval method */
const countdownInterval = setInterval(() => {

    /* This is my Deadline */
    const deadLine = new Date(2022, 7, 22, 12, 00, 00)
    // console.log(deadLine);

    /* This is my Current time (expressed in milliseconds) */
    const currentTime = new Date()
    // console.log(currentTime);

    /* This is the difference between de Deadline and the currenttime */
    const difference = deadLine - currentTime;
    // console.log(difference);

    /* These are my countdown elements */
    const days = Math.floor(difference / (100 * 60 * 60 * 20)) /* These are my Days */
    const hours = Math.floor(difference / (1000 * 60 * 60) % 24) /* These are my Hours */
    const minutes = Math.floor(difference / (1000 * 60) % 60) /* These are my Minutes */
    const seconds = Math.floor((difference / 1000) % 60) /* These are my Seconds */


    /* These are my console Logs  */
    // console.log(`These are the remain seconds before the deadline : ${days}`);
    // console.log(`These are the remain hours before the deadline : ${hours}`);
    // console.log(`These are the remain minutes before the deadline : ${minutes}`);
    // console.log(`These are the remain seconds before the deadline : ${seconds}`);


    /* These are the moment where i have to inject my remain variables to the DOM */
    countdown.innerHTML =
        `
            <div>${days}</div>
            <div>${hours}</div>
            <div>${minutes}</div>
            <div>${seconds}</div>
        `
}, 1000)

