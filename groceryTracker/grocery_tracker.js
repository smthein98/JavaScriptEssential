function calculateTotal() {
    let groceryone =parseFloat(document.getElementById("groceryone").value);
    let grocerytwo = parseFloat(document.getElementById("grocerytwo").value);
    let grocerythree = parseFloat(document.getElementById("grocerythree").value);

    let total = groceryone + grocerytwo + grocerythree;
    document.getElementById("groceryTotal").innerHTML = `Total Grocery Cost:$ ${total}`;
}