let students = [];

function addStudent() {
  let rollno = document.getElementsByName("rollno")[0].value;
  let email = document.getElementsByName("email")[0].value;
  let gender = document.getElementsByName("gender")[0].value;
  let subjects = addSubjects();
  let semester = document.getElementsByName("semester")[0].value;

  if (isUnique(rollno)) {
    let student = [rollno, email, gender, subjects, semester];
    students.push(student);
    addRow(student);
  } else {
    alert("Student with Roll Number " + rollno + " already exists!");
  }
}


function addRow(student) {
  let table = document.getElementById("table");
  let row = table.insertRow(-1);
  for (let i = 0; i < student.length; i++) {
    let cell = row.insertCell(i);
    cell.innerHTML = student[i];
  }
}


function addSubjects() {
  let checkboxes = document.getElementsByName("subject");
  let checkedBoxes = [];

  for (let i = 0, l = checkboxes.length; i < l; i++) {
    if (checkboxes[i].checked) {
      (checkboxes[i].value);
    }
  }
  if (checkedBoxes === 0) {
    alert("Please Select a Subject");
  }
}
