<div align="center">
  <p>
    <a href="https://api.rambot.xyz"><img src="https://rambot.xyz/ram-api-images/ram/ram-apijs.png" width="546" alt="ram-api.js" /></a>
  </p>
  <p>
    <a href="https://discord.gamearoo.dev"><img src="https://img.shields.io/badge/chat-Discord-5865F2?logo=discord&logoColor=white" alt="Discord server" /></a>
    <a href="https://www.npmjs.com/package/ram-api.js"><img src="https://img.shields.io/npm/v/ram-api.js" alt="npm version" /></a>
    <a href="https://www.npmjs.com/package/ram-api.js"><img src="https://img.shields.io/npm/dm/ram-api.js?style=flat" alt="npm downloads" /></a>
    <a href="https://github.com/Ram-Bot-Development/ram-api.js/actions"><img src="https://img.shields.io/github/actions/workflow/status/Ram-Bot-Development/ram-api.js/text.yml?branch=main&label=Tests" alt="Tests status" /></a>
    
  </p>
  <a href="https://nodei.co/npm/ram-api.js/"><img src="https://nodei.co/npm/ram-api.js.png?downloads=true&downloadRank=true&stars=true"></a>
</div>

[Back to readme](../README.md)

> Normal Examples

Returns below are the objects the methods resolve with. v16 and v17 use the token header.

```javascript
import * as ramapi from "ram-api.js"; // typescript
const ramapi = require("ram-api.js"); // javascript

const lang = "english"; // "spanish" for spanish

let RamApi = new ramapi.NormalEndpoints("api key here", "v17", 60000, 1);

// { url }
RamApi.laughAsync().then((data) => { console.log(data); }).catch((error) => {});

// { version, outdated, supported, latest }
// { version: "v17", outdated: false, supported: true, latest: "v17" }
RamApi.versionInfoAsync().then(data => { console.log(data); }).catch(error => {});

// { text, url }
RamApi.birthdayAsync(lang).then(data => { console.log(data); }).catch(error => {});

// { url, text }
RamApi.cryAsync(lang).then(data => { console.log(data); }).catch(error => {});

// { url }
RamApi.tiredAsync().then(data => { console.log(data); }).catch(error => {});

// { url }
RamApi.sickAsync().then(data => { console.log(data); }).catch(error => {});

// { url, text, text2, text3, text4, textFormatted }
// textFormatted is "Ada Had slapped Bea". text2, text3, and text4 may be "NULL"
RamApi.slapAsync("Ada", "Bea").then(data => { console.log(data); }).catch(error => {});

// { url }
RamApi.kissAsync().then(data => { console.log(data); }).catch(error => {});

// { url }
RamApi.hugAsync().then(data => { console.log(data); }).catch(error => {});

// { url, text }
RamApi.goodNightAsync(lang).then(data => { console.log(data); }).catch(error => {});

// { url, text }
RamApi.goodMorningAsync(lang).then(data => { console.log(data); }).catch(error => {});

// { url }
RamApi.cuddleAsync().then(data => { console.log(data); }).catch(error => {});

// { text: "Hi, How are you?" }
RamApi.helloAsync(lang).then(data => { console.log(data); }).catch(error => {});

// { api_choice: "rock", your_choice: "paper" }
RamApi.rpsAsync("paper").then(data => { console.log(data); }).catch(error => {});

// { text }
RamApi._8ballAsync(lang).then(data => { console.log(data); }).catch(error => {});

// { limit, current, remaining, resetTime, resetTimeFormated }
// { limit: 2, current: 1, remaining: 1, resetTime: "2026-10-21T05:12:05.972Z", resetTimeFormated: "Today at 5:12 AM" }
RamApi.rateLimitAsync().then(data => { console.log(data); }).catch(error => {});

// { Number, roundedNumber, flooredNumber, enteredNumbers }
// { Number: 4.09, roundedNumber: 4, flooredNumber: 4, enteredNumbers: "Min: 1 Max: 10" }
RamApi.randomNumberAsync(1, 10).then(data => { console.log(data); }).catch(error => {});

// "Completed!"
RamApi.suggestionAsync("This is a suggestion", "Example User").then(data => { console.log(data); }).catch(error => {});

// { ping: "108ms" }
RamApi.pingAsync().then(data => { console.log(data); }).catch(error => {});

// { url }
RamApi.ramAsync().then(data => { console.log(data); }).catch(error => {});

// { url }
RamApi.nekoparaAsync().then(data => { console.log(data); }).catch(error => {});

// { url }
RamApi.mikuAsync().then(data => { console.log(data); }).catch(error => {});

// { url }
RamApi.memeAsync().then(data => { console.log(data); }).catch(error => {});

// { text }
RamApi.roastAsync().then(data => { console.log(data); }).catch(error => {});

// { text }
RamApi.complimentAsync().then(data => { console.log(data); }).catch(error => {});

// { setup, punchline }
RamApi.dadJokeAsync().then(data => { console.log(data); }).catch(error => {});

// topic: space, food, animals, places, or science
// { id: "fact_01", topic: "space", text }
RamApi.factAsync("space").then(data => { console.log(data); }).catch(error => {});

// { text }
RamApi.fortuneAsync().then(data => { console.log(data); }).catch(error => {});

// { name, scientificName, habitat, diet, fact, image }
RamApi.animalAsync().then(data => { console.log(data); }).catch(error => {});

// category: general, science, history, or games. difficulty: easy, medium, or hard
// The answer is not included. Check it with quizCheckAsync
// { id, category, difficulty, question, choices: ["Venus", "Mars", "Jupiter", "Mercury"] }
RamApi.triviaAsync("science", "easy").then(data => { console.log(data); }).catch(error => {});

// { id, prompt }
RamApi.wyrAsync().then(data => { console.log(data); }).catch(error => {});

// { id, prompt }
RamApi.neverHaveIEverAsync().then(data => { console.log(data); }).catch(error => {});

// type: truth, dare, or any. rating: pg or teen
// { type: "truth", rating: "pg", prompt }
RamApi.truthOrDareAsync("truth", "pg").then(data => { console.log(data); }).catch(error => {});

// pass "yes" to include hint
// { id, scrambled, length, hint }
RamApi.wordScrambleAsync("yes").then(data => { console.log(data); }).catch(error => {});

// { id, min: 1, max: 20, attempts: 8, prompt }
RamApi.guessNumberAsync(20).then(data => { console.log(data); }).catch(error => {});

// trivia or scramble: { id, correct, answer }
// wrong number guess: { id, correct: false, direction: "higher", attemptsLeft: 7 }
RamApi.quizCheckAsync("question id", "answer").then(data => { console.log(data); }).catch(error => {});

// game: guess, trivia, or scramble
// { sessionId, game: "guess", status: "lobby", host: "Ada", players: [{ name: "Ada", score: 0 }], expiresAt }
RamApi.gameSessionAsync("guess", "Ada").then(data => { console.log(data); }).catch(error => {});

// action: join, start, guess, or answer. value is the guess or answer
// join:  { sessionId, game, status: "lobby", host, players, expiresAt, result: "joined" }
// start: { sessionId, game, status: "active", host, players, expiresAt, round: { prompt, attemptsLeft }, result: "started" }
// guess: { sessionId, game, status: "active", host, players, expiresAt, round: { prompt, attemptsLeft }, result: "higher" }
RamApi.gameMoveAsync("session id", "Ada", "guess", "10").then(data => { console.log(data); }).catch(error => {});
```
