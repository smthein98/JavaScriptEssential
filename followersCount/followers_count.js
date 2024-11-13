let followers = 0;
function increaseCount(){
    followers++;
    displayCount();
    followersCount();
}

function reset(){
    followers=0;
    document.getElementById("countDisplay").innerHTML = followers;
    alert("Your followers count have been reset");
}

function followersCount(){
    if (followers==10){
        alert("You gained 10 followers");
    } else if (followers==20){
        alert("You gained 20 followers keep up");
    }
}

function displayCount(){
    document.getElementById("countDisplay").innerHTML = followers;
}
