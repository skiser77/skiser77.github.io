let person = [];
let salaries = [];

let addSalaryButton = document.getElementById('add-salary');
let modifySalaryButton = document.getElementById('modify-salary');
let displayResultsButton = document.getElementById('display-results');
let displaySalaryButton = document.getElementById('display-salary');

let addSalaryDiv = document.getElementById('add-info');
let modifySalaryDiv = document.getElementById('modify-info');
let displayResultsDiv = document.getElementById('display-info');
let displaySalaryDiv = document.getElementById('display-table');


function addSalary(){
    addSalaryDiv.style.display = "block";
    let newInput = `
    <form id="salary-form">
    <label for="name">Name:</label>
    <input style="margin-bottom: 10px" type="text" id="name" placeholder="Type your name" required>
    <br>
    <label for="salary">Salary:</label>
    <input style="margin-bottom: 20px" type="number" id="salary" placeholder="Type your salary" required>
    <br>
    <button type="submit" id="submit-salary">Submit</button>
    </form>
    `;

    addSalaryDiv.innerHTML = newInput;

    let salaryForm = document.getElementById("salary-form");
    salaryForm.addEventListener('submit', submitSalary);

    function submitSalary(event){

        event.preventDefault();
    
        let name = document.getElementById('name').value;
        let salary = parseFloat(document.getElementById('salary').value);
    
        person.push(name);
        salaries.push(salary);
    
            
        addSalaryDiv.innerHTML = `Person Added`
    }
}


function modifySalary(){
    let modifyInput;
    if(person.length === 0)
    {
        modifyInput = `<p>There are no people added</p>`
    }
    else{
        modifyInput = `
    <form id="modify-salary-form">
    <label for="person">Choose a person:</label>
    <select style="margin-bottom: 20px" id="person">
    `

    for (let i = 0; i < person.length; i++){
        modifyInput += `<option id="person" value="${i}" >${person[i]} - $${salaries[i]}</option>`
    }

    modifyInput += `</select>
    <br>
    <button type="submit" id="submit-modify">Submit</button>
    </form>
    `
    }
    


    modifySalaryDiv.innerHTML = modifyInput;


    let modifySalaryForm = document.getElementById("modify-salary-form");
    modifySalaryForm.addEventListener('submit', submitModify);

    function submitModify(event){

        event.preventDefault();

        let name = person[document.getElementById('person').value];
        let salary = salaries[document.getElementById('person').value];
        let id = document.getElementById('person').value;

        let newInput = `
        <form id="salary-form" >
        <label for="name">Name:</label>
        <input style="margin-bottom: 10px" type="text" id="name" value = "${name}" required>
        <br>
        <label for="salary">Salary:</label>
        <input style="margin-bottom: 20px" type="number" id="salary" value = "${salary}" required>
        <br>
        <button type="submit" id="submit-salary" value ="${id}">Submit</button>
        </form>
        
    `;

        modifySalaryDiv.innerHTML = newInput;


        let salaryForm = document.getElementById("salary-form");
        salaryForm.addEventListener('submit', submitSalary);

        function submitSalary(event){

        event.preventDefault();
    
        let name = document.getElementById('name').value;
        let salary = parseFloat(document.getElementById('salary').value);
        let id = parseInt(document.getElementById('submit-salary').value);
    

        
        person[id] = name;
        salaries[id] = salary;
    
            
        modifySalaryDiv.innerHTML = `<p>Person Modified</p>`;
    }

    }
}

function displayResults(){
    if (salaries.length === 0){
        displayResultsDiv.innerHTML = `<p>There are no people added</p>`
    }
    else{
        let sum = 0;
        let largest = 0;
        for(let i = 0; i < salaries.length; i++){
            sum += salaries[i];

            if (salaries[i] > largest){
                largest = salaries[i];
            }
        }
        let average = sum / salaries.length;
        average = average.toFixed(2);

        let display = `
        <h2>Results</h2>
        <p>Average: $${average}</p>
        <p>Highest Salary: $${largest}</p>
        `

        displayResultsDiv.innerHTML = display;
    }
    
}

function displaySalary(){

    if (salaries.length === 0){
        displaySalaryDiv.innerHTML = `<p>There are no people added</p>`
    }
    else{
        let display = `
        <table>
        <tr>
            <th>Name</th>
            <th>Salary</th>
        </tr>
    `

    for(let i = 0; i < person.length; i++){
        display += `
        <tr>
            <td>${person[i]}</td>
            <td>$${salaries[i]}</td>
        </tr>
        `
    }

    display += `</table>`

    displaySalaryDiv.innerHTML = display;
    }
    
}



addSalaryButton.addEventListener('click', addSalary);
modifySalaryButton.addEventListener('click', modifySalary);
displayResultsButton.addEventListener('click', displayResults);
displaySalaryButton.addEventListener('click', displaySalary);