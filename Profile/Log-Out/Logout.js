document.addEventListener('DOMContentLoaded', () => {
    var logoutBtn = document.getElementById('logout-btn');
    var logoutBufferTime = 2000;

    logoutBtn.addEventListener('click', () => {
        showBufferingMessage();
        setTimeout(function () {
            // Clear any session or token data (not implemented in this example)
            // Here, you would include your actual logout logic

            window.location.href = '/index.html';
        }, logoutBufferTime);
    });

    function showBufferingMessage() {
        var bufferingMessage = document.createElement('p');
        bufferingMessage.textContent = 'Logging out... Please wait.';
        bufferingMessage.id = 'buffering-message';
        document.body.appendChild(bufferingMessage);
    }
});
