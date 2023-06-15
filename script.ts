(function() {

    const messageInput = document.getElementById("message-input") as HTMLDivElement;
    const submitBtn = document.getElementById("submitID") as HTMLButtonElement;

    messageInput.addEventListener("keydown", function(e) {
        if (e.key == "Enter") {
            getMessage();
        }
    })

    submitBtn.addEventListener("click", function() {
        getMessage();
        // ???????????????????????////
    })



    function getMessage() {
        const output = document.getElementById("message-output") as HTMLParagraphElement;
        output.innerHTML = messageInput.value;
        messageInput.value = "";
    }




})();