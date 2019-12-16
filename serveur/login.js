$(document).ready(function () {
    $("#boutonEnvoyer").on("click", function () {
        const pseudo = document.getElementById("name").value;
        let socket = new WebSocket(`ws://127.0.0.1:8080/chat?pseudo=${pseudo}`,'http');

        socket.addEventListener("message", function (event) {
            console.log(e.data);
        });

        socket.addEventListener("open",function (event) {
            socket.send("Salut");
        });
    });
});