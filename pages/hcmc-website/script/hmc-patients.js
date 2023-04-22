const form = document.getElementById("mainForm");
form.addEventListener("submit", handleSubmit);

const outPatientToggle = document.getElementById("chkShowOutPatients");
outPatientToggle.addEventListener("change", handleToggle);

const elderlyPatients = document.getElementById("chkElderlyPatients");
elderlyPatients.addEventListener("change", handleToggle);

function handleSubmit(event) {
  event.preventDefault();

  const patientData = Object.fromEntries(new FormData(event.target));
  patients.push(patientData);
  console.log(patientData);
  renderTable();
  form.reset();
}

let patients = [];

function handleToggle(event) {
  renderTable();
}

function renderTable() {
  const tableBody = document.getElementById("tbodyPatientsList");

  let filteredPatients = outPatientToggle.checked
    ? patients.filter((patient) => patient.radioIsOutPatient === "Yes")
    : patients;

  filteredPatients = elderlyPatients.checked
    ? filteredPatients.filter(
        (patient) => calculateAge(patient.dateOfBirth) > 65
      )
    : filteredPatients;

  tableBody.innerHTML = "";

  filteredPatients.forEach((patient) => {
    const row = document.createElement("tr");

    const patientIdCell = document.createElement("td");
    patientIdCell.textContent = patient.patientIdNumber;
    row.appendChild(patientIdCell);

    const firstNameCell = document.createElement("td");
    firstNameCell.textContent = patient.firstName;
    row.appendChild(firstNameCell);

    const middleNameCell = document.createElement("td");
    middleNameCell.textContent = patient.middleInitials || "-";
    row.appendChild(middleNameCell);

    const lastNameCell = document.createElement("td");
    lastNameCell.textContent = patient.lastName;
    row.appendChild(lastNameCell);

    const dateOfBirthCell = document.createElement("td");
    dateOfBirthCell.textContent = patient.dateOfBirth;
    row.appendChild(dateOfBirthCell);

    const departmentCell = document.createElement("td");
    departmentCell.textContent = patient.ddlDepartment;
    row.appendChild(departmentCell);

    const outPatientCell = document.createElement("td");
    outPatientCell.textContent = patient.radioIsOutPatient;
    row.appendChild(outPatientCell);

    tableBody.appendChild(row);
  });
}

function calculateAge(dateOfBirth) {
  const today = new Date();
  const birthDate = new Date(dateOfBirth);
  let age = today.getFullYear() - birthDate.getFullYear();
  const monthDiff = today.getMonth() - birthDate.getMonth();
  if (
    monthDiff < 0 ||
    (monthDiff === 0 && today.getDate() < birthDate.getDate())
  ) {
    age--;
  }
  return age;
}
