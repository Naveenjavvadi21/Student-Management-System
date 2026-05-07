// Login

document.getElementById("loginForm").addEventListener("submit", function(e){

    e.preventDefault();

    let username = document.getElementById("username").value;
    let password = document.getElementById("password").value;

    if(username === "admin" && password === "admin123")
    {
        document.getElementById("loginPage").classList.add("hidden");
        document.getElementById("dashboard").classList.remove("hidden");
    }
    else
    {
        alert("Invalid Username or Password");
    }

});

// Student Array

let students = [];

// Add Student

document.getElementById("studentForm").addEventListener("submit", function(e){

    e.preventDefault();

    let student = {

        id: document.getElementById("studentId").value,
        name: document.getElementById("name").value,
        email: document.getElementById("email").value,
        phone: document.getElementById("phone").value,
        course: document.getElementById("course").value,
        address: document.getElementById("address").value

    };

    students.push(student);

    displayStudents();

    document.getElementById("studentForm").reset();

});

// Display Students

function displayStudents()
{
    let tableBody = document.getElementById("studentTableBody");

    tableBody.innerHTML = "";

    students.forEach((student,index)=>{

        let row = `
            <tr>

                <td>${student.id}</td>
                <td>${student.name}</td>
                <td>${student.email}</td>
                <td>${student.phone}</td>
                <td>${student.course}</td>
                <td>${student.address}</td>

                <td>
                    <button class="edit-btn" onclick="editStudent(${index})">Edit</button>

                    <button class="delete-btn" onclick="deleteStudent(${index})">Delete</button>
                </td>

            </tr>
        `;

        tableBody.innerHTML += row;

    });

    document.getElementById("totalStudents").innerText = students.length;
}

// Delete Student

function deleteStudent(index)
{
    let confirmDelete = confirm("Are you sure to delete this student?");

    if(confirmDelete)
    {
        students.splice(index,1);
        displayStudents();
    }
}

// Edit Student

function editStudent(index)
{
    let student = students[index];

    document.getElementById("studentId").value = student.id;
    document.getElementById("name").value = student.name;
    document.getElementById("email").value = student.email;
    document.getElementById("phone").value = student.phone;
    document.getElementById("course").value = student.course;
    document.getElementById("address").value = student.address;

    students.splice(index,1);

    displayStudents();
}

// Search Student

document.getElementById("searchInput").addEventListener("keyup", function(){

    let value = this.value.toLowerCase();

    let rows = document.querySelectorAll("#studentTableBody tr");

    rows.forEach(row=>{

        row.style.display = row.innerText.toLowerCase().includes(value)
        ? ""
        : "none";

    });

});

// Logout

function logout()
{
    document.getElementById("dashboard").classList.add("hidden");

    document.getElementById("loginPage").classList.remove("hidden");
}