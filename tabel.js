const onAdd = () => {
  const firstNameInput = document.getElementById("first-name");
  const lastNameInput = document.getElementById("last-name");
  const pointsInput = document.getElementById("points");

  const tr = document.createElement("tr");

  const td = document.createElement("td");
  td.appendChild(document.createTextNode(firstNameInput.value));
  tr.appendChild(td);

  const td1 = document.createElement("td");
  td1.appendChild(document.createTextNode(lastNameInput.value));
  tr.appendChild(td1);

  const td2 = document.createElement("td");
  td2.appendChild(document.createTextNode(pointsInput.value));
  tr.appendChild(td2);

  const table = document.getElementById("table");
  table.appendChild(tr);

};
