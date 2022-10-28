// SELECTORS CARD IMAGE
const cardNumber = document.querySelector(".card-number-box");
const cardHolder = document.querySelector(".card-holder-name");
const cardExpMonth = document.querySelector(".exp-month");
const cardExpYear = document.querySelector(".exp-year");
const cardCvc = document.getElementById("cvc");

// SELECTORS FORM
const inputHolder = document.getElementById("cc-name");
const inputNumber = document.getElementById("cc-number");
const inputExpMonth = document.getElementById("month-input");
const inputExpYear = document.getElementById("year-input");
const inputCvc = document.getElementById("cc-cvc");
const inputSubmit= document.getElementById("submit");

// OTHER SELECTORS
const form = document.getElementById("cardForm");
const frontCard = document.getElementById("cardFront")
const backCard = document.getElementById("cardBack")

const thanksDiv = document.createElement('div');

//Prevent Default event of reload page on submit
form.addEventListener("submit", event=>{
    event.preventDefault();
})

// On submit, return alert of incorret or empty fields, otherwise return thank you
inputSubmit.addEventListener("click", ()=>{
    if(inputHolder.value.length === 0 || inputNumber.value.length === 0
        || inputExpMonth.value.length === 0 || inputExpYear.value.length ===0
        || inputCvc.value.length === 0){
            inputHolder.style.border= "2px solid hsl(0, 100%, 66%)";
            inputNumber.style.border= "2px solid hsl(0, 100%, 66%)";
            inputExpMonth.style.border="2px solid hsl(0, 100%, 66%)";
            inputExpYear.style.border="2px solid hsl(0, 100%, 66%)";
            inputCvc.style.border="2px solid hsl(0, 100%, 66%)";
            return alert("One or more inputs are empty, or not correctly filled. Please try it again")
        }else{ 
            form.style.display="none";
            thanksDiv.classList.add("thanksContainer");
            thanksDiv.innerHTML= `
            <img src="./images/icon-complete.svg" alt="checkmark complete">
            <span class="title">Thank you!</span>
            <span> We've added your card details</span>
             <button>Continue</button>
            `
            return document.body.appendChild(thanksDiv)
        }
})

// Realtime number input
inputNumber.oninput = ()=>{
    cardNumber.innerText = inputNumber.value.length === 0 ?
     "0000 0000 0000 0000" : inputNumber.value;
}

// Realtime cardholder input
inputHolder.oninput = () =>{
    cardHolder.innerText = inputHolder.value.length === 0 ?
    "Jane applessed" : inputHolder.value;
}

// Realtime expMonth input
inputExpMonth.oninput = () =>{
    cardExpMonth.innerText = inputExpMonth.value.length === 0 ?
    "00" : inputExpMonth.value;
}

// Realtime expYear input
inputExpYear.oninput = () =>{
    cardExpYear.innerText = inputExpYear.value.length === 0 ?
    "00" : inputExpYear.value;
}

// Realtime cvc input
inputCvc.oninput = () =>{
    cardCvc.innerText = inputCvc.value.length === 0 ?
    "0000" : inputCvc.value;
}

// Realtime card flip
inputCvc.onmouseenter = () =>{
    frontCard.style.transform = "perspective(1000px) rotateY(-180deg)";
    backCard.style.transform = "perspective(1000px) rotateY(0deg)";
}

inputCvc.onmouseleave = () =>{
    frontCard.style.transform = "perspective(1000px) rotateY(0deg)";
    backCard.style.transform = "perspective(1000px) rotateY(180deg)";
}