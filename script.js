let plus = false;
let mult = false;
let take = false;
let div = false;



function main() {

    let first = 2.3;
    let second = 1.2;

    type = "*"
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
            return Math.round((first * second)*round_amount)/round_amount;
        case "+":
            return first + second;
        case "-":
            return first - second;
        case "/":
            if (second == 0) return 8008135
            return Math.round((first/ second)*round_amount)/round_amount;
        default:
            return "Error";
    }
}
function flipcase(number){
    return number* -1;
}

// front end side

function update_buttons(){
    if (plus){
        mult = false;
        div = false;
        take = false;
    }
    else if (mult){
        plus = false;
        take = false;
        div = false;
    }
    else if (take){
        plus = false;
        mult = false;
        div = false;
    }
    else {
        take = false;
        mult = false;
        plus = false;
    }
}



console.log(main());