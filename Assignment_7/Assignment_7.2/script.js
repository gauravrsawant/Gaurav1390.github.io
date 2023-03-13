const students = [];
function getFormData() {
    const form = document.forms[0];
  
    if (!form.checkValidity()) {
      alert('Please fill all required fields.');
      return null;
    }
  
    const rollno = form.elements['rollno'].value;
    const email = form.elements['email'].value;
    const gender = form.elements['gender'].value;
    const subjectInputs = form.elements['subject'];
    const checkedSubjectInputs = Array.from(subjectInputs).filter(input => input.checked);
  
    if (checkedSubjectInputs.length === 0) {
      alert('Please select at least one subject.');
      return null;
    }
  
    const subjects = checkedSubjectInputs.map(input => input.value);
    const semester = form.elements['semester'].value;
  
    return { rollno, email, gender, subjects, semester };
  }
  

function addStudent() {
  const formData = getFormData();
  if (!formData) return;

  if (isUnique(formData.rollno)) {
    students.push(formData);
    addRow(formData);
  } else {
    alert(`Student with Roll Number ${formData.rollno} already exists!`);
  }
}

function isUnique(rollno) {
  return !students.some(student => student.rollno === rollno);
}

function addRow(student) {
    const table = document.querySelector('.table');
    const row = document.createElement('tr');
    const { rollno, email, gender, subjects, semester } = student;
    const data = [rollno, email, gender, subjects.join(', '), semester];
    data.forEach(value => {
      const cell = document.createElement('td');
      cell.textContent = value;
      cell.classList.add("cell-data");
      row.appendChild(cell);
    });
    
    table.appendChild(row);
  }
  
