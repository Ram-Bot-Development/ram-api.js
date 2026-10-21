
import axios from "axios";
import {ExecuteLocalLogger as ExecuteLogger } from "./ExecuteLocalLogger";



var logger = new ExecuteLogger("Ram Bot Development");
  export class ExtendedEndpoints {
    private retryAfter;
    private retry;
    private baseURL;
    private version;
    private headers;
   
    
   
    constructor(apikey: string, version = "v15", retryAfter = 60000, retry = 6) {
      logger = new ExecuteLogger("Ram Bot Development");
        this.retryAfter = retryAfter;
        this.retry = retry;
        this.baseURL = "https://api.rambot.xyz"
        this.version = version;
        this.headers = {"api-key": apikey};
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
           params?: {}
}
    ) {
      
        return new Promise(async (resolve, reject) => {

           _options = _options || {};
          
           const supportedVersions = ["v15"];
           const outdatedVersions = ["v14"];
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
            const requestedVersion = this.version || "v15";
            const versionNumber = parseInt(String(requestedVersion).replace(/\D/g, ""), 10);
            if (versionNumber >= 16) return reject("This is not supported past v15 use normal endpoint for v16+")
      
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
                method: "get",
                url: `/${requestedVersion}/` + endpoint,
                params: _options.params || {},
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
                "get",
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
    
  }