var counter = 1; // counter is used moving from one bar to another
var flag = true; // flag is used for checking if it play or pause button is clicked

// this function is used to access the id of each bar 
handleClick = (col) => {
    for (var i = 1; i <= 131; i++) {
        if (i <= col.id) {
            document.getElementById(i).style.backgroundColor = "pink";
        } else {
            document.getElementById(i).style.backgroundColor = "grey";
        }
    }
    counter = col.id
}

// this is used to change color each bar after 500 miliseconds if the play button is clicked 
setInterval(() => {
    if (flag == false) {
        document.getElementById(counter).style.backgroundColor = "pink";
        counter++;
    }
}, 500);

// function for toggling the button and handling play/pause for bar to change the color
handlePlay = (x) => {
    x.classList.toggle("fa-pause");
    if (flag == false) {
        flag = true
    } else {
        flag = false;
    }
}