const express = require("express");
const app = express();
const port = 3000;

app.get("/", (req, res) => {
  res.send("Server del mio blog");
});

app.listen(port, () => {
  console.log(`Server in ascolto sulla porta ${port}`);
});

//Array di post del blog
const post = [
  {
    titolo: "Introduzione a Javascript",
    contenuto: "JavaScript è un linguaggio di programmazione versatile e potente, utilizzato principalmente per lo sviluppo web. In questo post esploreremo le basi del linguaggio e le sue caratteristiche principali.",
    immagine: "/asset/img/nodejs.png"
    tags: ["javascript", "programmazione", "web development", "tutorial"]
  },
]