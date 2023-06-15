(function () {
    var messageInput = document.getElementById("message-input");
    var submitBtn = document.getElementById("submitID");
    messageInput.addEventListener("keydown", function (e) {
        if (e.key == "Enter") {
            getMessage();
        }
    });
    submitBtn.addEventListener("click", function () {
        getMessage();
        // ???????????????????????////
    });
    function getMessage() {
        var output = document.getElementById("message-output");
        output.innerHTML = messageInput.value;
        messageInput.value = "";
    }
})();
