function tip_calculator(){
    let subtotal = document.getElementById("subtotal").value;
    let tip = document.getElementById("tip").value;

    // creating the answer
    let result = eval(`${subtotal} * (${tip} / 100)`);
    result = Math.round(result * 100) / 100;

    document.getElementById("your_total").innerHTML = result;
}
