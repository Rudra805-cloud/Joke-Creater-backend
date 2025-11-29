import express from "express";
const app = express()

const port = process.env.port||3000

app.get('/api/jokes', (req, res) => {
  const jokes = [
  {
    id: 1,
    setup: "Why don't programmers like nature?",
    punchline: "Too many bugs."
  },
  {
    id: 2,
    setup: "Why did the computer go to the doctor?",
    punchline: "Because it caught a virus!"
  },
  {
    id: 3,
    setup: "Why do Java developers wear glasses?",
    punchline: "Because they don’t C#."
  },
  {
    id: 4,
    setup: "Why was the math book sad?",
    punchline: "Because it had too many problems."
  },
  {
    id: 5,
    setup: "Why did the developer go broke?",
    punchline: "Because they used up all their cache."
  },
  {
    id: 6,
    setup: "Why did the function break up with the loop?",
    punchline: "It felt stuck in a cycle."
  },
  {
    id: 7,
    setup: "Why was the JavaScript developer sad?",
    punchline: "Because they didn’t know how to 'null' their feelings."
  },
  {
    id: 8,
    setup: "Why did the programmer quit his job?",
    punchline: "Because he didn’t get arrays."
  },
  {
    id: 9,
    setup: "Why don’t computers ever get tired?",
    punchline: "Because they take power naps."
  },
  {
    id: 10,
    setup: "Why did the coder bring a ladder to work?",
    punchline: "Because they were climbing the tech ladder!"
  }
];
res.send(jokes)
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})