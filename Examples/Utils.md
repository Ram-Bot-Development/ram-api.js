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

> Custom Endpoints Example

```javascript

import * as ramapi from "ram-api.js"; // typescript
const ramapi = require("ram-api.js"); // javascript

new ramapi.Utils().VersionCheck("v17", "60000", 6)

// { ping: "108ms" }
new ramapi.Utils().pingAsync().then(data => { console.log(data); }).catch(err => {})



```

[Custom Endpoints](./CustomEndpoint.md)
