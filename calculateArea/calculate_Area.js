function calculateArea() {
    let length = document.getElementById("length").value;
    let width = document.getElementById("width").value;

    //let length = parseFloat(document.getElementById('length').value);
    //let width = parseFloat(document.getElementById('width').value);

    let area = length*width;
    //The backticks and ${} notation allow for the inclusion of JavaScript variables
    //within a string (using template literals).
    document.getElementById('result').innerHTML = `The area of the rectangle is: ${area}`;
}