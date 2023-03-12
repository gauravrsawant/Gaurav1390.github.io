let students = [];

function addStudent() {
  if (!document.querySelector("form").checkValidity()) {
    alert("Please fill all required fields.");
    return;
  }

  let rollno = document.getElementsByName("rollno")[0].value;
  let email = document.getElementsByName("email")[0].value;
  let gender = document.getElementsByName("gender")[0].value;
  let subjects = addSubjects();
  if (subjects.length === 0) {
    return;
  }
  let semester = document.getElementsByName("semester")[0].value;

  if (isUnique(rollno)) {
    let student = [rollno, email, gender, subjects, semester];
    students.push(student);
    addRow(student);
  } else {
    alert("Student with Roll Number " + rollno + " already exists!");
  }
}


function isUnique(rollno) {
  for (let i = 0; i < students.length; i++) {
    if (students[i][0] == rollno) {
      return false;
    }
  }
  return true;
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
      checkedBoxes.push(checkboxes[i].value);
    }
  }
  if (checkedBoxes.length === 0) {
    alert("Please Select a Subject");
  }

  return checkedBoxes;
}
