"use strict";

const btn = document.getElementById("btn");
const input = document.getElementById("input");
const container = document.getElementById("notes");

const notes = [];

function getText() {
  const currentDate = new Date();

  const note = {
    id: undefined,
    text: input.value,
    date: `${currentDate.toLocaleDateString()} ${currentDate.toLocaleTimeString()}`,
  };

  if (note.text !== "") {
    notes.push(note);
  }

  let formatedNotes = "";

  for (let i = 0; i < notes.length; i++) {
    note.id = i + 1;

    const formatedNote = `<div id="div">${notes[i].id} - ${notes[i].text} Дата создания: ${notes[i].date} 
    <input id="checkbox" type="checkbox"/></div>`;

    formatedNotes += formatedNote;
  }

  container.innerHTML = formatedNotes;

  const checkbox = document.querySelectorAll("#checkbox");
  const checkDiv = document.querySelectorAll("#div");

  for (let j = 0; j < checkbox.length; j++) {
    function getCheck() {
      if (checkbox[j].checked === true) {
        checkDiv[j].classList.add("div");
      } else {
        checkDiv[j].classList.remove("div");
      }
    }
    checkbox[j].addEventListener("change", getCheck);
  }
}

function handleChange() {
  if (input.value === "") {
    btn.disabled = true;
  } else {
    btn.disabled = false;
  }
}

btn.addEventListener("click", getText);
input.addEventListener("input", handleChange);
