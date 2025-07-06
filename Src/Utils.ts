import axios from "axios";
import {ExecuteLocalLogger as ExecuteLogger } from "./ExecuteLocalLogger";
import { DemoEndpoints } from "./Demo";

var logger = new ExecuteLogger("Ram Bot Development");
const latestVersion = "v16";

const supportedVersions = ["v16"];
const outdatedVersions = ["v13", "v14", "v15"];
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
  "v12"
];



export class Utils {
    constructor() {
      logger = new ExecuteLogger("Ram Bot Development");
    }
    async pingAsync(): Promise<{ping: string}> {
 
    
       return new Promise(async (resolve, reject) => {
          await axios
            .get(`/ping`, {
              headers: {
                "Content-Type": "application/json",
              },
              baseURL: `https://api.rambot.xyz/basic/v12/utils`,
            })
            .then(async function (res) {
              resolve(res.data);
            })
            .catch(async (error) => {
              reject("Ping Failed! " + error);
            });
        });
      }
      async customAsync(endpoint: string, accessLevel = "demo", _options: {version?: string, params?: {}, headers?: {}}): Promise<any> {
        return new Promise(async (resolve, reject) => {
         
         let requestedVersion = `${_options.version}` || latestVersion;
    
          if (supportedVersions.includes(requestedVersion)) {
          } else if (outdatedVersions.includes(requestedVersion)) {
            logger.warnAsync(
              `${requestedVersion} is outdated please update to the latest ${supportedVersions[0]}`, "ram-api.js"
            );
          } else if (notsupported.includes(requestedVersion)) {
            logger.errorAsync(`${requestedVersion} is no longer supported`, "ram-api.js");
            return reject("Check console");
          }

          const basicVersions = ["v0", "v1", "v2", "v3", "v4", "v5", "v6", "v7", "v8", "v9", "v10", "v11", "v12", "v13"]

       

          if(accessLevel === "basic" && !basicVersions.includes(requestedVersion) ) {
            logger.errorAsync("Basic endpoints where removed in v14 and above!", "ram-api");

            return reject("ram-api ran into a error")
          }

          
          if(accessLevel === "demo" && requestedVersion !== latestVersion ) {
            logger.errorAsync(`Demo Doesn't support older versions you must use the latest ${latestVersion}!`, "ram-api");

            return reject("ram-api ran into a error")
          }
    
          let baseURL = "NULL";
    
          if (accessLevel === "normal") {
            baseURL = `https://api.rambot.xyz/${requestedVersion}`;
          } else if (accessLevel === "extended") {
            baseURL = `https://api.rambot.xyz/extended/${requestedVersion}`;
          } else if (accessLevel === "demo") {
            baseURL = "https://api.rambot.xyz/demo";
          } else if (accessLevel === "pro") {
            baseURL = `https://api.rambot.xyz/pro/${requestedVersion}`;
          } else if (accessLevel === "basic") {
            baseURL = `https://api.rambot.xyz/basic/${requestedVersion}`;
          }
    
          try {
            const response = await axios({
              method: "get",
              url: endpoint,
              params: _options.params || {},
              baseURL: baseURL,
              headers: _options.headers || {},
            });
    
            resolve(response.data);

    
                
            } catch (error: any) {
            
            if (error.response) {
                let err = `Status: ${error.response.status} | Error: ${error.response.statusText}`;
            logger.errorAsync(err, "ram-api");
            logger.errorAsync(error, "ram-api.js");
            reject(error);
            
            } else {
                console.log(error);
                logger.fatalAsync(
                  `Unhandled Error running ${baseURL + endpoint}. Please report to the developers the error logged into your console!`, "ram-api.js"
                );
                
            }
            
          }
        });
      }

      async VersionCheck( version?: string, retryAfter = 60000, retry = 6) {
    
        if(!version) {
            version = latestVersion
            logger.warnAsync("Version not provide in VersionCheck So using the latest version", "ram-api.js")
        }

        new DemoEndpoints(retryAfter, retry).versionInfoAsync(version).then(data => {
            if(data.outdated) {
                if(data.supported) {
                    logger.warnAsync(`${data.version} is outdated but is still supported latest is ${data.latest}`, "ram-api.js");

                    return
                }
                    logger.errorAsync(`${data.version} is outdated and is no longer supported please update to latest ${data.latest}`, "ram-api.js")
                return
            }

            if(data.latest === version) {
                logger.infoAsync("You're Up to date", "ram-api.js")
            } else {
                logger.fatalAsync("Error fetching provided version", "ram-api")
            }
        }).catch(err => {})

        

            
                
            
        }

        
      
}