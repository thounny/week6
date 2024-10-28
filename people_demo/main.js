// let people = [
//   {
//     id: 1,
//     firstName: "Ezra",
//     lastName: "Aiden",
//     email: "e.aiden@basshall.com",
//     ipAddress: "18.6.24.104",
//   },
// ];

document.addEventListener("DOMContentLoaded", () => {
  // one way
  peopleSelect.innerHTML += people
    .map((p) => `<option>${p.email}</option>`)
    .join("");

  // second way
  people
    .map((p) => new Option(p.email))
    .forEach((o) => peopleSelect2.appendChild(o));

  // third way (better / practical for map)
  people.map((p) => peopleSelect3.appendChild(new Option(p.email)));
}); // end load
