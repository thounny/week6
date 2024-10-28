"use strict";

const monsters = [
  { name: "Frankenstein's Monster" },
  { name: "Dracula" },
  { name: "OJ Simpson" },
];

function getMonster(m, i) {
  //   `<div id="1">The Mummy</div>`;

  return `<div id="${i}">${m.name}</div>`;
}

// .map() transforms INPUT array into an OUTPUT array
console.log(monsters.map(getMonster).join(`\n`));
