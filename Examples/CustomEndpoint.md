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

[Back to Utils](./Utils.md)

> Custom Endpoints Example

```javascript

import * as ramapi from "ram-api.js"; // typescript
const ramapi = require("ram-api.js"); // javascript
const lang = "english"; // "spanish" for spanish
// demo uses the latest api version
// hello returns { text }
new ramapi.Utils().customAsync("/hello", "demo", { params: { lang: lang } }).then(data => { console.log(data); }).catch(err => { });

//basic ended at v13, and v13 is retired

//pro, normal, or extended are also available options instead of demo below are examples NOTICE: extended only exists in v14 and v15


//v17
new ramapi.Utils().customAsync("/hello", "normal", { version: "v17", params: { lang: lang }, headers: {"token": "api key here"} }).then(data => { console.log(data); }).catch(err => { });

//v16 still uses the token header
new ramapi.Utils().customAsync("/hello", "normal", { version: "v16", params: { lang: lang }, headers: {"token": "api key here"} }).then(data => { console.log(data); }).catch(err => { });

//v15 and under use the api-key header
new ramapi.Utils().customAsync("/hello", "normal", { version: "v15", params: { lang: lang }, headers: {"api-key": "api key here"} }).then(data => { console.log(data); }).catch(err => { });


```
