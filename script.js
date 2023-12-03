function getQueryParam(param) {
    var urlParams = new URLSearchParams(window.location.search);
    return urlParams.get(param);
}

function generateQRCode(text) {
    var qrContainer = document.getElementById('qrcode');
    qrContainer.innerHTML = ''; // Clear previous QR code

    var canvas = document.createElement('canvas');
    QRCode.toCanvas(canvas, text, function (error) {
        if (error) console.error(error);
        qrContainer.appendChild(canvas);
        createDownloadLink(canvas, text);
    });
}

function createDownloadLink(canvas, text) {
    var downloadLink = document.createElement('a');
    downloadLink.innerText = 'Download QR Code';
    downloadLink.href = canvas.toDataURL('image/png');
    downloadLink.download = 'qr-code.png';

    var qrContainer = document.getElementById('qrcode');
    qrContainer.appendChild(downloadLink);

    // Display URL for generated QR code
    var urlDisplay = document.getElementById('urlDisplay');
    var currentUrl = window.location.href.split('?')[0]; // Base URL
    urlDisplay.innerText = 'URL for this QR Code: ' + currentUrl + '?code=' + encodeURIComponent(text);
}

function generateRandomNumberAndQRCode() {
    let code = getQueryParam('code');
    if (!code) {
        code = Math.floor(Math.random() * 1000000).toString(); // Generates a random number between 0 and 999999
    }

    document.getElementById('randomNumber').innerText = `Code: ${code}`;
    generateQRCode(code);
}

// Initial generation on page load
document.addEventListener('DOMContentLoaded', generateRandomNumberAndQRCode);
