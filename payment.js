function processPayment(paymentMethod) {
    const amountToPay = 500; // Fixed amount
    let enteredAmount = prompt(`Enter the amount to pay via ${paymentMethod}:`);

    if (enteredAmount === null || enteredAmount.trim() === "") {
        alert("Payment cancelled.");
        return;
    }

    enteredAmount = parseFloat(enteredAmount);

    if (isNaN(enteredAmount) || enteredAmount <= 0) {
        alert("Invalid amount. Please enter a valid number.");
        return;
    }

    if (enteredAmount !== amountToPay) {
        alert(`You must pay the exact amount: ₱${amountToPay.toFixed(2)}`);
        return;
    }

    alert(`Payment of ₱${enteredAmount.toFixed(2)} via ${paymentMethod} confirmed!`);
}
