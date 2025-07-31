const express = require("express");
const app = express();
const port = 3000;

//Array di post del blog
const post = [
  {
    titolo: "Introduzione a JavaScript",
    contenuto: "JavaScript è un linguaggio di programmazione versatile e potente, utilizzato principalmente per lo sviluppo web. In questo post esploreremo le basi del linguaggio e le sue caratteristiche principali.",
    immagine: "/asset/img/javascript.png",
    tags: ["javascript", "programmazione", "web development", "tutorial"]
  },
  {
    titolo: "Node.js per principianti",
    contenuto: "Node.js permette di eseguire JavaScript lato server, aprendo infinite possibilità per lo sviluppo di applicazioni web moderne. Scopriamo insieme come iniziare con questo potente runtime.",
    immagine: "/asset/img/nodejs.png",
    tags: ["nodejs", "backend", "server", "javascript"]
  },
  {
    titolo: "Express.js: Il framework web per Node.js",
    contenuto: "Express.js è il framework web più popolare per Node.js. Semplifica la creazione di server web robusti e scalabili. In questo articolo vedremo come configurare il primo server.",
    immagine: "/asset/img/expressjs.png",
    tags: ["expressjs", "framework", "nodejs", "api", "web server"]
  },
  {
    titolo: "Database e MongoDB",
    contenuto: "MongoDB è un database NoSQL molto popolare nell'ecosistema Node.js. Impariamo a configurarlo e a utilizzarlo nelle nostre applicazioni per gestire i dati in modo efficace.",
    immagine: "/asset/img/mongodb.png",
    tags: ["mongodb", "database", "nosql", "nodejs", "backend"]
  },
  {
    titolo: "Deploy di applicazioni Node.js",
    contenuto: "Una volta sviluppata la tua applicazione Node.js, è il momento di metterla online! Esploriamo le diverse opzioni di hosting e le best practices per il deployment.",
    immagine: "/asset/img/nodejs2.png",
    tags: ["deploy", "hosting", "production", "nodejs", "devops"]
  }
];

app.get("/", (req, res) => {
  res.send("Server del mio blog");
});

//Rotta per la bacheca che deve restituire tutti i post in JSON
app.get("/bacheca", (req, res) => {
  res.json({
    post: post,
    count: post.length
  });
});

app.listen(port, () => {
  console.log(`Server in ascolto sulla porta ${port}`);
});