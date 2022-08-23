# Launch Countdown Timer Main

This project was a challenge accepted on the `Frontend Mentor` website.

## **Tag head**

Inside the head tag there are all the links necessary for the page style. The links are:

-  My `main stylesheet`.
-  My `second stylesheet`.
-  Link to the `Red Hat Text` font taken from Google Fonts.

## **Script Files**

At the bottom of the page is the link for my script file `app.js`

## **App.js**

This is my main `script file` where all the `DOM manipulations` applied to my markup reside inside.

For the countdown I created a `setInterval function`, I set a random `deadline` via the `new Date()` function, and I saved in a constant the function to get the `current date`.

```js
/* This is my Deadline */
const deadLine = new Date(2022, 8, 23, 12, 12, 01);

/* This is my Current time (expressed in milliseconds) */
const currentTime = new Date();
```

After setting my deadline and `finding` my current date, I saved the time `difference` in a `variable`.
I noticed that the remaining time was `expressed` in `milliseconds`, consequently for `all my variables` (days, months, hours) a `calculation was needed`

```js
/* This is the difference between de Deadline and the currenttime */
const difference = deadLine - currentTime;
/* These are my countdown elements */
let days = Math.floor(
   difference / (100 * 60 * 60 * 20)
); /* These are my Days */
let hours = Math.floor(
   (difference / (1000 * 60 * 60)) % 24
); /* These are my Hours */
let minutes = Math.floor(
   (difference / (1000 * 60)) % 60
); /* These are my Minutes */
let seconds = Math.floor((difference / 1000) % 60); /* These are my Seconds */
```

After some tests I realized that `once` the time `difference` was `negative`, the timer `went off` at `-1` for `each period`. It was necessary to create a `condition` to `set my value to 0` once the time expired.

```js
/* This is my statement for not show in the DOM negative values */
if (seconds <= 0 && days <= 0 && hours <= 0 && minutes <= 0) {
   seconds = 00; /* These are my Seconds */
   days = 00; /* These are my Days */
   hours = 00; /* These are my Hours */
   minutes = 00; /* These are my Minutes */
   // console.log(seconds);
}
```

I also added the `condition` for `double numbers`, as required by the `screenshot`. In this case it was enough to `add`, together with the `template literal`, a `0` in `front` of all the `numbers` if they were `less` than `10`

```js
/* Condition to modify my seconds, hours etc. if they are under 10 */
if (seconds < 10) {
   seconds = `0${Math.floor((difference / 1000) % 60)}`;
}
if (minutes < 10) {
   minutes = `0${Math.floor((difference / (1000 * 60)) % 60)}`;
}
if (hours < 10) {
   hours = `0${Math.floor((difference / (1000 * 60 * 60)) % 24)}`;
}
if (days < 10) {
   days = `0${Math.floor(difference / (100 * 60 * 60 * 20))}`;
}
```

## **Style.css**

In this exercise I have prepared `2 distinct style sheets`, because from the screenshot, `analyzed` on figma, it appears that the `height` of the `screen` is equivalent to `800px`, with a `width` of `1440px` in the `desktop` version and, in the mobile version, it has a `height` of `667px` . In this case I created a second style sheet with the `heights` and `widths` set to `100vh / vw` on the body. The second style sheet is commented out and can be activated when required.
