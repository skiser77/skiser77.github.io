//@ts-check

let addedCourses = 0;
let courseElement =[];




let form = document.getElementById('form');
let appendHere = document.getElementById('appendHere');

form.addEventListener("submit", makeForm);

function makeForm(event){
    event?.preventDefault();

    form.style.display = "none";
    
    let name = document.getElementById('name').value;
    let mascot = document.getElementById('mascot').value;

    let image = document.getElementById("image").files[0];
    const imageUrl = URL.createObjectURL(image);

    let caption = document.getElementById('imagecaption').value;
    let personalBackground = document.getElementById('personalbackground').value;
    let proffesionalBackground = document.getElementById('professionalbackground').value;
    let academicBackground = document.getElementById('academicbackground').value;
    let webBackground = document.getElementById('backgroundinwebdevelopment').value;
    let platform = document.getElementById('primarycomputerplatform').value;

    let funnyThing = document.getElementById('funnything').value;
    let anythingElse = document.getElementById('anythingelse').value;

    let courseTitleInputs = document.querySelectorAll('.course-title');
    let courseDescriptionInputs = document.querySelectorAll('.course-description');

    let courses = [];

    for(let i = 0; i < addedCourses; i++){
        let course = {
            title: courseTitleInputs[i].value,
            description: courseDescriptionInputs[i].value
        };

        courses.push(course);
    }

    


    let page = `
    <h1>${name} || ${mascot}</h1>
    <figure>
    <img src= "${imageUrl}">
    <figcaption>${caption}</figcaption>
    </figure>
    <ul>
    <li><strong>Personal Background: </strong>${personalBackground}</li>
    <li><strong>Professional Background: </strong>${proffesionalBackground}</li>
    <li><strong>Academic Background: </strong>${academicBackground}</li>
    <li><strong>Background in Web Development: </strong>${webBackground}</li>
    <li><strong>Primary Computer Platform:  </strong>${platform}</li>
    <li><strong>Courses I'm Taking & Why: </strong></li>
    <ul id='addingplace'></ul>
    <li><strong>Funny Thing: </strong>${funnyThing}</li>
    <li><strong>Anything Else: </strong>${anythingElse}</li>
    </ul>
    <a href="byo_intro.html">New Form</a>

    <br>
    <br>
    `;

    document.getElementById('page').innerHTML = page;

    let addhere = document.getElementById('addingplace');
    for(let i = 0; i < addedCourses; i++){
        let liElement = document.createElement("li");

        liElement.innerHTML = `<strong>${courses[i].title}- </strong>${courses[i].description}`;

        addhere?.appendChild(liElement);

    }





}


function addCourse(){
    let addHere = document.getElementById('appendHere');

    let newCourse = `
    <p>Course Title:</p>
    <input type = "text" class="course-title">
    <p>Course Description</p>
    <input type = "text" class="course-description">
    <br>
    <button type="button" onclick="deleteCourse(this)">Delete Course</button>
    `;
    

    let divElement = document.createElement("div");

    courseElement.push(divElement);

    divElement.innerHTML = newCourse;


    addHere?.append(divElement);
    addedCourses++;
}

function deleteCourse(element){
    let index = courseElement.indexOf(element.parentElement);
    if (index !== -1) {
        element.parentElement.remove();
        courseElement.splice(index, 1);
        addedCourses--;
    }
}

