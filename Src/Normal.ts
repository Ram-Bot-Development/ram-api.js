
import axios from "axios";
import {ExecuteLocalLogger as ExecuteLogger } from "./ExecuteLocalLogger";



var logger = new ExecuteLogger("Ram Bot Development");
  export class NormalEndpoints {
    private retryAfter;
    private retry;
    private baseURL;
    private version;
    private headers;
   
    
   
    constructor(apikey: string, version = "v17", retryAfter = 60000, retry = 6) {
      logger = new ExecuteLogger("Ram Bot Development");
        this.retryAfter = retryAfter;
        this.retry = retry;
        this.baseURL = "https://api.rambot.xyz/"
        this.version = version;
        this.headers = {"api-key": apikey};

      if (Number(String(version).replace(/\D/g, "")) >= 16) this.headers = {"token": apikey};


    }
    private async _newErrors(endpoint: string, error: any, resolve: any, reject: any, type: string, _options: any, loop = 0) {
       
        if (error.response) {
            let err = `Status: ${error.response.status} | Error: ${error.response.statusText}`;
            logger.errorAsync(err, "ram-api");
            if (
              this.retry > 0 &&
              error.response.statusText === "Too Many Requests" &&
              this.retry >= loop &&
              type === "get"
            ) {
              logger.warnAsync(`api rate limit reached Retrying to run ${endpoint}`, "ram-api.js");
      
              setTimeout(async () => {
      
                try {
                  const response = await axios({
                    method: "get",
                    url: endpoint,
                    params: _options.params || {},
                    baseURL: this.baseURL,
                    headers: _options.headers || {},
                  });
      
                  resolve(response.data);
                } catch (err) {
                  loop++;
                  this._newErrors(
                    endpoint,
                    err,
                    resolve,
                    reject,
                    type,
                    _options,
                    loop
                  );
                }
              }, this.retryAfter);
            } else {
              if (error.response.data.error.message)
                logger.errorAsync(
                  `Ram Api Ran into an error while running ${endpoint}. The problem is: ${error.response.data.error.message}.`, "ram-api.js"
                );
              reject("Error Handled By Ram-api.js");
            }
          } else {
           
            console.log(error);
            logger.errorAsync(
              `Error running ${endpoint}. Please report to the developers the error logged into your console!`, "ram-api.js"
            );
            reject("Error Handled By Ram-api.js");
            
            
          }
    }

    private _apiRequest(
        endpoint: string,
        _options?: {
           params?: {},
           method?: "get" | "post",
           data?: any
}
    ) {
      
        return new Promise(async (resolve, reject) => {

           _options = _options || {};
          
            const supportedVersions = ["v17"];
            const outdatedVersions = ["v14", "v15", "v16"];
            const notsupported = [
              "v0",
              "v1",
              "v2",
              "v3",
              "v4",
              "v5",
              "v6",
              "v7",
              "v8",
              "v9",
              "v10",
              "v11",
              "v12",
              "v13"
            ];
            const requestedVersion = this.version || "v17";
      
            if (supportedVersions.includes(requestedVersion)) {
            } else if (outdatedVersions.includes(requestedVersion)) {
              logger.warnAsync(
                `${requestedVersion} is outdated please update to the latest ${supportedVersions[0]}`, "ram-api.js"
              );
            } else if (notsupported.includes(requestedVersion)) {
              logger.errorAsync(`${requestedVersion} is no longer supported`, "ram-api.js");
              return reject("Check console");
            }
      
      
               
      
            try {
              const response = await axios({
                method: _options.method || "get",
                url: `/${requestedVersion}/` + endpoint,
                params: _options.params || {},
                data: _options.data,
                baseURL: this.baseURL,
                headers: this.headers
              });
      
              resolve(response.data);
            } catch (error) {
              this._newErrors(
                endpoint,
                error,
                resolve,
                reject,
                _options.method || "get",
                _options
              );
            }
          });
    }
    async versionInfoAsync(): Promise<{ version: string; outdated: boolean; supported: boolean; latest: string }> {
    
    
      return await this._apiRequest("/versionCheck") as Promise<{ version: string; outdated: boolean; supported: boolean; latest: string }>;
    }

    async birthdayAsync(lang = "english"): Promise<{ text: string, url: string }> {
        return await this._apiRequest("/bday", {
            params: { lang }
        }) as Promise<{ text: string, url: string }>;
      }
      async laughAsync(): Promise<{ url: string }> {
        return await this._apiRequest("/laugh") as Promise<{ url: string }>;
      }
      async cryAsync(lang = "english"): Promise<{ text: string, url: string }> {
        return await this._apiRequest("/cry", { params: { lang } }) as Promise<{ text: string, url: string }>;
      }
      async tiredAsync(): Promise<{ url: string }> {
        return await this._apiRequest("/tired") as Promise<{ url: string }>;
      }
      async sickAsync(): Promise<{ url: string }> {
        return await this._apiRequest("/sick") as Promise<{ url: string }>;
      }
      
      async slapAsync(user1 = "You", user2 = "Ram"): Promise<{ text: string, url: string, text2: string, text3: string, text4: string, textFormatted: string }> {
        return await this._apiRequest("/slap",  {
          params: { user1, user2},
        }) as Promise<{ text: string, url: string, text2: string, text3: string, text4: string, textFormatted: string }>;
      }
      async kissAsync(): Promise<{ url: string }> {
        return await this._apiRequest("/kiss") as Promise<{ url: string }>;
      }
      async hugAsync(): Promise<{ url: string }> {
        return await this._apiRequest("/hug") as Promise<{ url: string }>;
      }
      async goodNightAsync(lang = "english"): Promise<{ text: string, url: string }> {
        return await this._apiRequest("/goodNight", { params: { lang } }) as Promise<{ text: string, url: string }>;
      }
      async goodMorningAsync(lang = "english"): Promise<{ text: string, url: string }> {
        return await this._apiRequest("/goodMorning", { params: { lang } }) as Promise<{ text: string, url: string }>;
      }
      async cuddleAsync(): Promise<{ url: string }> {
        return await this._apiRequest("/cuddle") as Promise<{ url: string }>;
      }
      async helloAsync(lang = "english"): Promise<{ text: string}> {
        return await this._apiRequest("/hello", { params: { lang } }) as Promise<{ text: string}>;
      }
      async rpsAsync(pick = "No Choice Made"): Promise<{ api_choice: string, your_choice: string }> {
        return await this._apiRequest("/rps", { params: { pick } }) as Promise<{ api_choice: string, your_choice: string }>;
      }
      async _8ballAsync(lang = "english"): Promise<{ text: string }> {
        return await this._apiRequest("/8ball", { params: { lang } }) as Promise<{ text: string }>;
      }
      async rateLimitAsync(): Promise<{ limit: number, current: number, remaining: number, resetTime: string, resetTimeFormated: string  }> {
        return await this._apiRequest("/rateLimit") as Promise<{ limit: number, current: number, remaining: number, resetTime: string, resetTimeFormated: string  }>;
      }
      async randomNumberAsync(min: number, max: number): Promise<{ Number: number, roundedNumber: number, flooredNumber: number, enteredNumbers: string}> {
        return await this._apiRequest("/randomNumber", {
          params: { min, max },
        }) as Promise<{ Number: number, roundedNumber: number, flooredNumber: number, enteredNumbers: string}>;
      }
      async suggestionAsync(suggestion: string, requestedBy?: string): Promise<string> {
        return new Promise(async (resolve, reject) => {
          let params = {};
      
          if (requestedBy) params = { requestedBy };
      
          try {
            await axios({
              method: "post",
              url: `/${this.version}/suggestion/${suggestion}`,
              data: {}, // Replace {} with the actual request body you want to send
              params: params || {},
              baseURL: this.baseURL,
              headers: this.headers
            });
            resolve("Completed!");
          } catch (err) {
            reject(err);
            logger.errorAsync("Error in api", "ram-api.js");
          }
        });
      }
      async pingAsync(): Promise<{ping: string}> {
        return await this._apiRequest("/ping") as Promise<{ping: string}>;
      }
      async ramAsync(): Promise<{url: string}> {
        return await this._apiRequest("/ram") as Promise<{url: string}>;
      }
      async nekoparaAsync(): Promise<{url: string}> {
        return await this._apiRequest("/nekopara") as Promise<{url: string}>;
      }
      async mikuAsync(): Promise<{url: string}> {
        return await this._apiRequest("/miku") as Promise<{url: string}>;
      }
      async memeAsync(): Promise<{ url: string }> {
        return await this._apiRequest("/meme", {
    
        }) as Promise<{ url: string }>;
      }
      async roastAsync(): Promise<{ text: string }> {
        return await this._apiRequest("/roast") as Promise<{ text: string }>;
      }
      async complimentAsync(): Promise<{ text: string }> {
        return await this._apiRequest("/compliment") as Promise<{ text: string }>;
      }
      async dadJokeAsync(): Promise<{ setup: string, punchline: string }> {
        return await this._apiRequest("/dadJoke") as Promise<{ setup: string, punchline: string }>;
      }
      async factAsync(topic?: string): Promise<{ id: string, topic: string, text: string }> {
        return await this._apiRequest("/fact", { params: { topic } }) as Promise<{ id: string, topic: string, text: string }>;
      }
      async fortuneAsync(): Promise<{ text: string }> {
        return await this._apiRequest("/fortune") as Promise<{ text: string }>;
      }
      async animalAsync(): Promise<{ name: string, scientificName: string, habitat: string, diet: string, fact: string, image: string }> {
        return await this._apiRequest("/animal") as Promise<{ name: string, scientificName: string, habitat: string, diet: string, fact: string, image: string }>;
      }
      async triviaAsync(category?: string, difficulty?: string): Promise<{ id: string, category: string, difficulty: string, question: string, choices: string[] }> {
        return await this._apiRequest("/trivia", { params: { category, difficulty } }) as Promise<{ id: string, category: string, difficulty: string, question: string, choices: string[] }>;
      }
      async wyrAsync(): Promise<{ id: string, prompt: string }> {
        return await this._apiRequest("/wyr") as Promise<{ id: string, prompt: string }>;
      }
      async neverHaveIEverAsync(): Promise<{ id: string, prompt: string }> {
        return await this._apiRequest("/neverHaveIEver") as Promise<{ id: string, prompt: string }>;
      }
      async truthOrDareAsync(type?: string, rating?: string): Promise<{ type: string, rating: string, prompt: string }> {
        return await this._apiRequest("/truthOrDare", { params: { type, rating } }) as Promise<{ type: string, rating: string, prompt: string }>;
      }
      async wordScrambleAsync(hint?: string): Promise<{ id: string, scrambled: string, length: number, hint?: string }> {
        return await this._apiRequest("/wordScramble", { params: { hint } }) as Promise<{ id: string, scrambled: string, length: number, hint?: string }>;
      }
      async guessNumberAsync(max?: number): Promise<{ id: string, min: number, max: number, attempts: number, prompt: string }> {
        return await this._apiRequest("/guessNumber", { params: { max } }) as Promise<{ id: string, min: number, max: number, attempts: number, prompt: string }>;
      }
      async quizCheckAsync(id: string, answer: string): Promise<{ id: string, correct: boolean, answer?: string, direction?: string, attemptsLeft?: number }> {
        return await this._apiRequest("/quiz/check", {
          method: "post",
          data: { id, answer }
        }) as Promise<{ id: string, correct: boolean, answer?: string, direction?: string, attemptsLeft?: number }>;
      }
      async gameSessionAsync(game: string, player: string): Promise<{ sessionId: string, game: string, status: string, host: string, players: { name: string, score: number }[], expiresAt: string }> {
        return await this._apiRequest("/game/session", {
          method: "post",
          data: { game, player }
        }) as Promise<{ sessionId: string, game: string, status: string, host: string, players: { name: string, score: number }[], expiresAt: string }>;
      }
      async gameMoveAsync(sessionId: string, player: string, action: string, value?: string): Promise<{ sessionId: string, game: string, status: string, host: string, players: { name: string, score: number }[], expiresAt: string, result: string, round?: { prompt: string, attemptsLeft: number } }> {
        const data: { sessionId: string, player: string, action: string, value?: string } = { sessionId, player, action };
        if (value !== undefined) data.value = value;
        return await this._apiRequest("/game/move", {
          method: "post",
          data
        }) as Promise<{ sessionId: string, game: string, status: string, host: string, players: { name: string, score: number }[], expiresAt: string, result: string, round?: { prompt: string, attemptsLeft: number } }>;
      }
  }