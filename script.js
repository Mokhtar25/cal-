


// hitting equal when nothing is selected


function main(firsts, seconds, types) {

    let first = +firsts;
    let second = +seconds;

    let type = types;
    console.log(first, second, type);
    if (!first) {
        first = 0;
    }
    if (typeof (first) != "number" || typeof (second) != "number") return "error";
    answer = cal(first, second, type);
    return answer;

}

function cal(first, second, type) {
    let round_amount = 1000;
    switch (type) {
        case "*":
            return Math.round((first * second) * round_amount) / round_amount;
        case "+":
            return first + second;
        case "-":
            return first - second;
        case "/":
            if (second == 0) return 8008135
            return Math.round((first / second) * round_amount) / round_amount;
        default:
            return "";
    }
}
function flipcase(number) {
    return number * -1;
}

// front end side
let method = "0";
let first = "";
let tmp = "";
let second = "null";
let answer = "";
let first_nosecond = "";


// getting data 

const display = document.querySelector(".display");
const numbers = document.querySelectorAll(".number");

// button toggle logic
const buttons = document.querySelectorAll('.toggle-button');


numbers.forEach(num => {
    num.addEventListener('click', () => {
        display.textContent = "";
        buttons.forEach(btn => {
            btn.classList.remove('active');
        })
        tmp = tmp.concat(num.value);
        display.textContent = tmp;
    })
})


//
buttons.forEach(button => {
    button.addEventListener('click', () => {
        // Remove 'active' class from all buttons
        buttons.forEach(btn => {
            btn.classList.remove('active');
        });

        method = button.value;
        first = display.textContent;
        first_nosecond = first;
        tmp = "";

        // Add 'active' class to the clicked button
        button.classList.add('active');
    });
});

const equal = document.querySelector(".equal");

equal.addEventListener("click", () => {
    second = tmp;
    if (method === "0" && first === "") {
        answer = second;
    }
    else if (second === "") {
        answer = main(first, first_nosecond, method);
        first = answer;
    }
    else {
        answer = main(first, second, method);
        first = answer;

    }

    display.textContent = answer;

})

// clear 

const clear = document.querySelector("#c");
clear.addEventListener("click", () => {
    first = "";
    tmp = "";
    second = "";
    display.textContent = "";
})






console.log(main());