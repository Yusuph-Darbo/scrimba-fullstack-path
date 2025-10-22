let home_score = 0;
let guest_score = 0;

let homeEl = document.getElementById("home_score");
let guestEl = document.getElementById("guest_score");

function updateScore(team, points)
{
    if (team == "home")
        {
            home_score += points;
            homeEl.textContent = home_score;

        }
    else
        {
            guest_score += points;
            guestEl.textContent = guest_score;
        }
}

function resetScore()
{
    home_score = 0;
    guest_score = 0;

    homeEl.textContent = home_score;
    guestEl.textContent = guest_score;
}
