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
  peopleSelect.innerHTML += people
    .map((p) => `<option>${p.email}</option>`)
    .join("");
}); // end load
