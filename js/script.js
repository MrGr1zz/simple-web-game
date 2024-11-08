    
window.onload = function() {
    const name = prompt("Input name: ");
    const username = document.getElementById("username");
    username.textContent = name;
    if (name === "") username.textContent = "Vasya";

    button = document.getElementById("play");
    let score_player = 0, wins_player = 0, score_pc = 0, wins_pc = 0;;
    button.addEventListener("click", function() {
        const PlayerScore = document.getElementById("score_player");
        const PlayerWins = document.getElementById("wins_player");
        const PCScore = document.getElementById("score_pc");
        const PCWins = document.getElementById("wins_pc");
        score_player = Math.floor(Math.random() * 22);
        score_pc = Math.floor(Math.random() * 22);
        if (score_player > score_pc) wins_player++;
        else if (score_pc > score_player) wins_pc++;
        PlayerScore.textContent = "Score: " + score_player;
        PCScore.textContent = "Score: " + score_pc;
        PlayerWins.textContent = "Wins: " + wins_player;
        PCWins.textContent = "Wins: " + wins_pc;
        if (wins_player >= 3) {
            score_player = 0, wins_player = 0, score_pc = 0, wins_pc = 0;
            alert(`${username.textContent} wins!`)
        }
        else if (wins_pc >= 3) {
            score_player = 0, wins_player = 0, score_pc = 0, wins_pc = 0;
            alert("PC wins!");
        };
    });   
}