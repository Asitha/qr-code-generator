function generateRandomNumber() {
    // Generates a random number between 0 and 999999
    return Math.floor(Math.random() * 1000000);
}

function generateQRCode(text) {
    // Clear previous QR code
    var qrContainer = document.getElementById('qrcode');
    qrContainer.innerHTML = '';

    // Generate new QR code
    QRCode.toCanvas(document.createElement('canvas'), text, function (error, canvas) {
        if (error) {
            console.error('Error generating QR code: ', error);
            return;
        }
        qrContainer.appendChild(canvas);
    });
}

function generateRandomNumberAndQRCode() {
    // Generate random number
    const randomNumber = generateRandomNumber();

    // Display random number
    document.getElementById('randomNumber').innerText = `Random Number: ${randomNumber}`;

    // Generate and display QR code for the random number
    generateQRCode(randomNumber.toString());
}

// Generate initial random number and QR code when the page loads
document.addEventListener('DOMContentLoaded', generateRandomNumberAndQRCode);
