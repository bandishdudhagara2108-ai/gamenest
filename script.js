const search = document.getElementById("search");

search.addEventListener("keyup", function () {
    const value = search.value.toLowerCase();

    const cards = document.querySelectorAll(".game-card");

    cards.forEach(card => {
        const title = card.innerText.toLowerCase();

        if (title.includes(value)) {
            card.style.display = "block";
        } else {
            card.style.display = "none";
        }
    });
});
