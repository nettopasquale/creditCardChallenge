# Frontend Mentor - Interactive card details form solution

This is a solution to the [Interactive card details form challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/interactive-card-details-form-XpS8cKZDWw). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

## Table of contents

- [Frontend Mentor - Interactive card details form solution](#frontend-mentor---interactive-card-details-form-solution)
  - [Table of contents](#table-of-contents)
  - [Overview](#overview)
    - [The challenge](#the-challenge)
    - [Screenshot](#screenshot)
    - [Links](#links)
  - [My process](#my-process)
    - [Built with](#built-with)
    - [What I learned](#what-i-learned)
    - [Continued development](#continued-development)
    - [Useful resources](#useful-resources)
  - [Author](#author)

## Overview

### The challenge

This challenge was to create a HTML page that displays a credit card with a basic form for the user to
input their credit card info, so they could submit their info when clicking the button.

As the user inputs their card info, the credit card image should update it text in real time as the user input.

If every info is correctly filled in the form and the user submit it in the button, the form should "disappear"
and be replaced with a ```div``` that shows a message saying "Thank You! We've added your card details" with a button to continue.

If the user fails to fill correctly the form fields, the message of success should not appear and the inputs should
show a error message telling the user to fill the fields correctly.

### Screenshot

![Mobile preview screenshot](./Screenshot%202022-10-28%20at%2001-46-02%20Mobile%201Frontend%20Mentor%20Interactive%20card%20details%20form.png)
![Mobile Filled screenshot](./Screenshot%202022-10-28%20at%2001-46-02%20Mobile%20FILLED_1%201Frontend%20Mentor%20Interactive%20card%20details%20form.png)
![Mobile Error screenshot](./Screenshot%202022-10-28%20at%2001-46-02%20Mobile%20ERROR%201Frontend%20Mentor%20Interactive%20card%20details%20form.png)
![Mobile Success screenshot](./Screenshot%202022-10-28%20at%2001-46-02%20Mobile%20SUCSESS%201Frontend%20Mentor%20Interactive%20card%20details%20form.png)

![Desktop preview screenshot](./Screenshot%202022-10-28%20at%2001-46-02%20Desktop%201Frontend%20Mentor%20Interactive%20card%20details%20form.png)
![Desktop Filled screenshot](./Screenshot%202022-10-28%20at%2001-46-02%20Desktop%20FILLED%201Frontend%20Mentor%20Interactive%20card%20details%20form.png)
![Desktop Error screenshot](./Screenshot%202022-10-28%20at%2001-46-02%20Desktop%20ERROR%201Frontend%20Mentor%20Interactive%20card%20details%20form.png)
![Desktop Success screenshot](./Screenshot%202022-10-28%20at%2001-46-02%20Desktop%20SUCSESS%201Frontend%20Mentor%20Interactive%20card%20details%20form.png)

### Links

- Github URL: [Github solution creditcard card](https://your-solution-url.com)
- Live Vercel URL: [Vercel live site credit card preview](https://your-live-site-url.com)

## My process

I basically had to remember again some javascript DOM methods that I didn't used for a while so that was
a good exercise to put it into practise;

I heavly based the javascript logic into another Credit Card DOM project that I've made in a tutorial. But that project used a javascript lib called "IMask" to help with Regex and create patters on the input fields, so the inputs on the HTML didn't need  a lot of attributes like ```required```, ```pattern``` or even ```type```;

I don't know if this is a good practise, but I have attributed all primary DOM selectors into ```const``` variables
and listed all of them at the top of the document so whoever sees the code can see the main variables spot on;

I also have specied each session with comment lines, specifing the functions and DOM purposes;

Last thing, since I couldn't insert the credit back back image in a way to be as close as possible from the
design sugestion, I have implemented a animation to flip the card to show its back. Though I could have used
the image provided, I copied the same front image but had created the white strap and a cvc field as well.
So as the user hovers the mouse on the cvc input, the credit card flips, and if the mouse leaves the input,
it flips back.

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- Mobile-first workflow
- Javascript

### What I learned

Since this time I used pure javascript, I have adapted some logic from the previous project, so here I used a lot of ```style.``` methods with some ```classList.add()```, and even template strings to create HTML elements like
the success message:

  ```<img src="./images/icon-complete.svg" alt="checkmark complete">```
  ```<span class="title">Thank you!</span>```
  ```<span> We've added your card details</span>```
  ```<button>Continue</button>```;

I also refactored some expressions of ```if()``` to be inline like below:

```cardHolder.innerText = inputHolder.value.length === 0 ? "Jane applessed" : inputHolder.value;```;

I also have learnt that I could use ```oninput = () =>``` instead of ```addEventListener("event", ()=>{})```;

Finally, I have learnt how to use ```onmouseenter``` and ```onmouseleave``` events

### Continued development

To tell the truth, this project is far from being perfect or completed. Some stuff I know it can be improved, but I couldn't resolve at first:

- Implement the given credit card back image and make it properly positioned;
- Improve HTML and CSS skills to use less ```divs```, ```positions``` and its properties;
- Improve Mobile-first by using less or not using at all the ```position``` properties;
- Create custom errors messages on each field;
- Use REGEX to create patterns for the inputs fields;
- Improve the Success message div so it doesn't break the credit card line;

### Useful resources

- [Mister Web Designer](https://youtu.be/G7_VTWnWz40) - This video helped me a lot on the CSS part of my project. I have adapted a lot of things. I also learnt about the "oninput" and "onmouseenter" and "onmouseleave" with this video.

## Author

- Github - [nettopasquale](https://github.com/nettopasquale)
- Frontend Mentor - [@nettopasquale](https://www.frontendmentor.io/profile/nettopasquale)
- LinkedIn - [Pasquale Milone Netto](https://www.linkedin.com/in/pasquale-milone-netto/)
