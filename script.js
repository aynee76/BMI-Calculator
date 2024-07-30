document.getElementById("bmiForm").addEventListener("submit", function(e) {
    
    e.preventDefault();
    const gender = document.getElementById("gender").value;
    const age = parseInt(document.getElementById("age").value);
    const heightFt = parseInt(document.getElementById("heightFt").value);
    const heightInch = parseInt(document.getElementById("heightInch").value);
    const weight = parseFloat(document.getElementById("weight").value);


    if(gender && age && heightFt && heightInch && weight) {

        const heightInMeters = ((heightFt * 12) + heightInch) * 0.0254;
        const bmi = weight / (heightInMeters * heightInMeters);
        const resultElement = document.getElementById("result");

        let category = "";

        if(bmi < 18.5) {
            category = "Underweight";
        } else if(bmi >= 18.5 && bmi < 29.9) {
            category = "Normal Weight"
        } else if(bmi >= 25 && bmi < 29.9) {
            category = "Overweight"
        } else {
            category = "Obese"
        }


        let resultMessage = "Your Bmi: " + bmi.toFixed(2) + "<br>";
        resultMessage += "Category: " + category;

        resultElement.innerHTML = resultMessage;
    }


});