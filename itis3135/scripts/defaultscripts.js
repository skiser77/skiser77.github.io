//@ts-check

function displayDate(){
    const weekday =["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    const month = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    let h3element = document.createElement("h3");
    let currentDate = new Date();
    let hour = currentDate.getHours() % 12;
    let minute = currentDate.getMinutes();
    let meridiem;
    if(currentDate.getHours() < 12)
    {
        meridiem = "am";
    }
    else
    {
        meridiem = "pm";
    }
    let dayName = weekday[currentDate.getDay()];
    let day = currentDate.getDate();
    let monthName = month[currentDate.getMonth()];
    let year = currentDate.getFullYear();

    let display = "Today is " + hour + ":" + minute + meridiem + " on " + dayName + ", " + day + " " + monthName + ", " + year;

    h3element.textContent = display;

    let title = document.getElementById("title").appendChild(h3element);
    
}

function welcomeMessage(){
    let name = document.getElementById("name").value;
    let feeling = document.getElementById("feeling").value;
    let display = "The Sensational Kangaroo welcomes you, " + name + "! We're glad you are doing " + feeling + "!";
    document.getElementById("displayMessage").innerHTML = display;

    const input = document.getElementById("input");

    input.remove();
}

function polygon(){
    let number = document.getElementById("polygon").value;

    number = Math.abs(number);
    let baseNumber = Math.floor(number);
    
    if ((number % baseNumber) >= 0.5)
    {
        number = Math.ceil(number);
    }
    else{
        number = baseNumber;
    }

    let text;

    switch(number){
        case 1:
            text = "A henagon has 1 side";
            break;
        case 2:
            text = "A digon has 2 sides";
            break;
        case 3:
            text = "A trigon has 3 sides";
            break;
        case 4:
            text = "A tetragon has 4 sides";
            break;
        case 5:
            text = "A pentagon has 5 sides";
            break;
        case 6:
            text = "A hexagon has 6 sides";
            break;
        case 7:
            text = "A heptagon has 7 sides";
            break;
        case 8:
            text = "A octagon has 8 sides";
            break;
        case 9:
            text = "A enneagon has 9 sides";
            break;
        case 10:
            text = "A decagon has 10 sides";
            break;
        default:
            text = "That is not a valid input";
    }

    alert(text);
}

function fact(){
    let text = document.getElementById("fact");
    let number =  Math.floor(Math.random() * 5);

    let facts = ["Our Kangaroos are fed fresh never frozen ground beef", 
    "The actual fabric of the hammocks are made up of 100% real kangaroo fur", 
    "All of our shipping is completely free", 
    "We provide an array of colors such as salmon pink or moonlight blue", 
    "All of our kangaroos are from Australia"];

    text.innerHTML = facts[number];
}

function price(){
    let number = document.getElementById("hammockNumber").value;
    let text = document.getElementById("displayPrice");

    text.innerHTML = number + " Hammocks Cost $" + (number * 49.99);

}

function changeColor(){
    let number =  Math.floor(Math.random() * 5);

    let colors = ["red", "green", "orange", "pink", "white"]

    document.body.style.backgroundColor = colors[number];
}

function changeText(){
    let number =  Math.floor(Math.random() * 5);

    let font = ["georgia", "arial", "impact", "verdana", "cambria"];

    document.body.style.fontFamily = font[number];
}