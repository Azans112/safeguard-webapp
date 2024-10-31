function sendData() {
    const countryCode = document.getElementById("countryCode").value;
    const phoneNumber = document.getElementById("phoneNumber").value;
    const data = { countryCode, phoneNumber };

    // Send data to the Telegram bot
    Telegram.WebApp.sendData(JSON.stringify(data));
}

document.getElementById("submitButton").addEventListener("click", sendData);
