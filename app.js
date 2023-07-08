
let chalk=require("chalk")
let yargs =require("yargs")

let Notlarım = require("./Notlar.js")
let{listnots}=require("./Notlar.js")
let{readNotes}=require("./Notlar.js")

yargs.version("1.1.0");


yargs.command({
  command: "ekle",
  describe: "yeni not ekle",
  builder: {
    title: {
      describe: "note title",
      demandOption: true,
      type: "string"
    },
    body: {
      describe: "note body",
      demandOption: true,
      type: "string"
    }
  },
  handler(argv) {
    Notlarım.notekle(argv.title, argv.body);
  }
});

yargs.command({
  command: "remove",
  describe: "bir not sil",
  builder: {
    title: {
      describe: "sil başlığı",
      demandOption: true,
      type: "string"
    }
  },
  handler(argv) {
    Notlarım.removenote(argv.title);
  }
});


yargs.command({
  command: "listele",
  describe: "notlarını listele",
  handler() {
    listnots();
  }
});

yargs.command({
  command: "readNotes",
  describe: "Bir notu oku",
  builder: {
    title: {
      describe: "Not başlığı",
      demandOption: true,
      type: "string",
    },
  },
  handler(argv) {
    readNotes(argv.title);
  },
});

yargs.parse();