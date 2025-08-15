addEventListener("DOMContentLoaded", () => {
    const click = document.getElementById("counter");
    const scores = document.getElementById("score");
    const scoreguardado = localStorage.getItem("scoreGuardado");



    if (scoreguardado) {
        score = parseInt(scoreguardado)
        scores.textContent = parseInt(scoreguardado);
    } else {
        score = 0
        scores.textContent = parseInt(score);
    }

    click.addEventListener("click", () => {
        score += 1
        scores.textContent = parseInt(score);
        localStorage.setItem("scoreGuardado", score)
    });
});

