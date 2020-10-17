var players = [];

function handlePlayerEntered(event) {
    event.preventDefault()
    var formArray = $("form").serializeArray();
    var currentPlayer = {
        name: formArray[0].value,
        score: 0,
        word: ""
    }
    players.push(currentPlayer);
    $(".playerList").append(formArray[0].value + "<br>");
    $('#addPlayer').children('input').val('');
    console.log(players);
}



$('.indexBody').on("click", ".playerName", handlePlayerEntered);
// document.onkeydown=function(){
//     if(window.event.keyCode=='13'){
//         handlePlayerEntered();
//     }
// }