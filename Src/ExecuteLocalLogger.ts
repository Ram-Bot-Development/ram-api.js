import { Logger } from "@classycrafter/super-logger";

const logger = new Logger({name: "Logger", timezone: "America/New_York", tzformat: 12, writelogs: false, colored: true, custom: {
    character: "*",
    gray: "#bbbbbb",
    namecolor: "#ff0000",
    processcolor: "#ff6400",
    titlecolor: "#00ff78",
    textcolor: "#00ff8f",
    datecolor: "#00a6ff"
  }, colors: {
    grey: '#bbbbbb',
    gray: '#4C4C4C',
    blue: '#48ACF8',
    loggernamecolor: '#F2C5E0',
    processcolor: '#D43790',  info: {
      color: '#59E77D',
      dark: '#11cc37',
      background: '#D2EED9',
      highlight: false,
  },
  debug: {
      color: '#68E3DF',
      dark: '#13aba4',
      background: '#D5F5F4',
      highlight: false,
  },
  warn: {
      color: '#F2D349',
      dark: '#c9a81b',
      background: '#FAEFBB',
      highlight: false,
  },
  error: {
      color: '#F6545C',
      dark: '#dc222c',
      background: '#FACBCD',
      highlight: false,
  },
  fatal   : {
      color: '#F71111',
      dark: '#9b0000',
      background: '#FAACAC',
      highlight: true,
  }}})

export class ExecuteLocalLogger {


    constructor(name: string) {
        logger.name = name;
        
    }
    async errorAsync(msg: string, processName?: string) {
        logger.error(msg, processName ? processName : undefined);
    }
    async infoAsync(msg: string, processName?: string) {
        logger.info(msg, processName ? processName : undefined)
    }
    async warnAsync(msg: string, processName?: string) {
        logger.warn(msg, processName ? processName : undefined)
    }
    async fatalAsync(msg: string, processName?: string) {
        logger.fatal(msg, processName ? processName : undefined)
    }
}
