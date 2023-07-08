
let chalk = require("chalk");
let fs = require("fs");


let loadNotes = function() {
  try {
    let dataBuffer = fs.readFileSync("notes.json");
    let dataJSON = dataBuffer.toString();
    return JSON.parse(dataJSON);
  } catch (e) {
    return [];
  }
};


let Notal = () => {
  return "notlarınız..";
};


let notekle = (title, body) => {
  let notes = loadNotes();
  let duplicateNotes = notes.filter((note) => note.title === title);

  debugger

  if (duplicateNotes.length === 0) {

    notes.push({
      title: title,
      body: body,
    });

    fs.writeFileSync("notes.json", JSON.stringify(notes));
    console.log(chalk.green.inverse("Yeni not eklendi!"));
  } else {
    console.log(chalk.red.inverse("Not başlığı alınmış!"));
  }
};


let removenote = (title) => {
  let notes = loadNotes();
  let updatedNotes = notes.filter((note) => note.title !== title);

  if (notes.length === updatedNotes.length) {
    console.log(chalk.red.inverse("Not bulunamadı!"));
  } else {
    fs.writeFileSync("notes.json", JSON.stringify(updatedNotes));
    console.log(chalk.green.inverse("Not kaldırıldı!"));
  }
};


let listnots = () => {
  let notes = loadNotes();
  console.log(chalk.inverse("Notlarınız.."));
  notes.forEach((note) => {
    console.log(note.title);
  });
};

let readNotes = (title) => {
  let notes = loadNotes();
  let note = notes.find((note) => note.title === title);
  if (note) {
    console.log("Not bulundu");
    console.log(chalk.inverse("Title:", note.title));
    console.log(chalk.inverse("Body:", note.body));
  } else {
    console.log(chalk.red.inverse("Not bulunamadı"));
  }
};

module.exports = {
  Notal: Notal,
  notekle: notekle,
  removenote: removenote,
  listnots: listnots,
  readNotes:readNotes
};