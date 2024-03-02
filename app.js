function unitchanged(id, error) {
    if (document.querySelectorAll(id).value != '')  //1 not equal to blank its true
    {
        document.querySelectorAll(error).innerHTML = ""; // it show no error
        return;
    }
    else {
        document.querySelectorAll(error).innerHTML = "field is requiered" // if condition false it show this error
    }
}


function getavg() {


    if (document.querySelector(".Quantity1").value == '') {
        document.getElementById("error1").innerHTML = "Quantity required"
        return;
    } else if (document.querySelector('.price1').value == '') {
        document.getElementById("error2").innerHTML = "price required"
        return;

    } else if (document.querySelector(".Quantity2").value == '') {
        document.getElementById("error3").innerHTML = "Quantity required"
        return;
    } else if (document.querySelector('.price2').value == "") {
        document.getElementById("error4").innerHTML = "price required"
        return;

    }


    // variable declearation
     
    let Quantity1 = parseFloat(document.querySelector('.Quantity1').value) || 0;
    let price1 = parseFloat(document.querySelector('.price1').value) || 0;
    let Quantity2 = parseFloat(document.querySelector('.Quantity2').value) || 0;
    let price2 = parseFloat(document.querySelector('.price2').value) || 0;
    if (Quantity2 == 0 || price2 == 0 || Quantity1 == 0 || price1 == 0) {
        alert("Enter positive numbers");
        throw new Error("Enter number greater than 0");
    }
    

    
    // calculation
    console.log("Quantity1:", Quantity1, "price1:", price1, "Quantity2:", Quantity2, "price2:", price2); 
    let result1 = (Quantity1 * price1) + (Quantity2 * price2)
    // 10*10+20*20=100+400=500
    let result2 = +Quantity1 + +Quantity2;
    let amount = result1;
    let quant = result2;
    // 10+20
    let result = result1 / result2;
    
    document.getElementById('total-quantity').innerHTML = quant;
    document.getElementById('amount').innerHTML = amount;
    document.getElementById('total-amt').innerHTML = `${result.toFixed(2)}`;

}
function clearFields() {
    document.querySelector(".Quantity1").value = '';
    document.querySelector(".price1").value = '';
    document.querySelector(".Quantity2").value = '';
    document.querySelector(".price2").value = '';
    document.getElementById("total-quantity").innerHTML = 0;
    document.getElementById("amount").innerHTML = 0;
    document.getElementById("total-amt").innerText = 0;
    var errorElements = document.querySelectorAll(".err");
    for (const it of errorElements) {
        it.innerHTML=""
    }
}