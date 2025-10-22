/*
1 meter = 3.281 feet
1 liter = 0.264 gallon
1 kilogram = 2.204 pound
*/

/*
Listen for the button click.
Read the number from the input box.
Validate the input (make sure it’s a number).
Compute all conversions. 
Display the results in the correct boxes. 
*/

const meter = 3.281;
const liter = 0.264;
const kilo = 2.204;

const convertBtn = document.querySelector("#convert-btn");
const varBox1 = document.querySelector("#result1");
const varBox2 = document.querySelector("#result2");
const varBox3 = document.querySelector("#result3");

convertBtn.addEventListener("click", function()
{
    let inputNum = document.getElementById("num-input").value.trim();
    inputNum = Number(inputNum); // Converting string to number

    // Error checking
    if (isNaN(inputNum) || inputNum == "")
        {
            alert("Please enter a valid number");
        } else 
        {
            console.log("Valid number: " + inputNum);
        }
    
    varBox1.innerHTML = `<p class="result-text"> ${inputNum} meters = ${(inputNum * meter).toFixed(3)} feet 
                        | ${inputNum} feet = ${(inputNum / meter).toFixed(3)} meters </p>`;

    varBox2.innerHTML = `<p class="result-text"> ${inputNum} liters = ${(inputNum / liter).toFixed(2)} gallons 
                        | ${inputNum} gallons = ${(inputNum * liter).toFixed(3)} liters </p>`;
                    
    varBox3.innerHTML = `<p class="result-text"> ${inputNum} kilos = ${(inputNum * kilo).toFixed(2)} pounds 
                        | ${inputNum} pounds = ${(inputNum / kilo).toFixed(3)} kilos </p>`;
})

