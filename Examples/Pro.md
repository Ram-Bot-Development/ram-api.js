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

This is not supported past v15. v16 and v17 use NormalEndpoints. v13 is retired.

> Pro Examples

Returns below are the objects the methods resolve with.

```javascript
import * as ramapi from "ram-api.js"; // typescript
const ramapi = require("ram-api.js"); // javascript

const lang = "english"; // "spanish" for spanish

let RamApi = new ramapi.ProEndpoints("api key here", "v14", 60000, 1);

// { url }
RamApi.laughAsync().then((data) => { console.log(data); }).catch((error) => {});

// { version, outdated, supported, latest }
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

// { text }
RamApi.helloAsync(lang).then(data => { console.log(data); }).catch(error => {});

// { api_choice, your_choice }
RamApi.rpsAsync("paper").then(data => { console.log(data); }).catch(error => {});

// { text }
RamApi._8ballAsync(lang).then(data => { console.log(data); }).catch(error => {});

// { limit, current, remaining, resetTime, resetTimeFormated }
RamApi.rateLimitAsync().then(data => { console.log(data); }).catch(error => {});

// { Number, roundedNumber, flooredNumber, enteredNumbers }
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
```
