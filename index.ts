/*
    MIT License

    Copyright (c) 2023 Arth Panchani

    Permission is hereby granted, free of charge, to any person obtaining a copy
    of this software and associated documentation files (the "Software"), to deal
    in the Software without restriction, including without limitation the rights
    to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
    copies of the Software, and to permit persons to whom the Software is
    furnished to do so, subject to the following conditions:

    The above copyright notice and this permission notice shall be included in all
    copies or substantial portions of the Software.

    THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
    IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
    FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
    AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
    LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
    OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
    SOFTWARE.
*/


export enum logTypes {
    TEXT = 'text',
    JSON = 'json',
}

export interface configs {
    switch?: 'on' | 'off',
    type?: logTypes,
    colorized?: boolean,
}

export enum logLevel {
    DEBUG = 'DEBUG',
    INFO = 'INFO',
    SUCCESS = 'SUCCESS',
    WARNING = 'WARNING',
    ERROR = 'ERROR',
}

export interface logInterface {
    level: logLevel,
    message: string,
    data: any,
    trace?: string,
}

export class APDevLogger {
    private configSwitch: 'on' | 'off' = 'on';
    private logType:logTypes = logTypes.TEXT;
    private isColorized: boolean = true;
    private isLineTrace: boolean = true;
    constructor(config?: configs) {
        this.configLogger(config);
    }

    private configLogger (config: configs) {
        if (config?.switch !== undefined) {
            this.configSwitch = config.switch;
        }
        if (config?.type) {
            this.logType = config.type;
        }
        if (config?.colorized !== undefined) {
            this.isColorized = config.colorized;
        }
    }

    private generateLog = (log: logInterface, type: logTypes): logInterface | string => {
        let logString;
        if (type === logTypes.JSON) {
            if (!this.isLineTrace) {
                delete log.trace;
            }
            logString = JSON.stringify(log);
            return logString;
        }
        else {
            let logLevel = log.level.slice();
            for (let i=0; i<8; i++) {
                if (!logLevel[i]) {
                    logLevel = logLevel + ' ';
                }
            }
            logString = logLevel + ' |-| ' + log.message;
            if (this.isLineTrace) {
                logString = logString + ' ' + log.trace;
            }
            if(log?.data) {
                logString = logString + ' |-| ' + JSON.stringify(log.data);
            }
            return logString;
        }
    }

    log (level: logLevel, message: string, data?:any, trace?: string) {
        let logColor;
        if (trace) {
            this.isLineTrace = true;
        }
        else {
            this.isLineTrace = false;
        }
        const log: logInterface = {
            level,
            message,
            data,
            trace,
        }
        switch (level) {
            case logLevel.DEBUG:
                logColor = '\x1b[35m';
                break;
            case logLevel.INFO:
                logColor = '\x1b[34m';
                break;
            case logLevel.SUCCESS:
                logColor = '\x1b[32m';
                break;
            case logLevel.WARNING:
                logColor = '\x1b[33m';
                break;
            case logLevel.ERROR:
                logColor = '\x1b[31m';
                break;
            default:
                logColor = '\x1b[37m';
                break;
        }
        if (this.configSwitch === 'on') {
            if (this.isColorized) {
                if (this.logType === logTypes.JSON) {
                    console.log(`${logColor}${this.generateLog(log, this.logType)}\x1b[0m`);
                }
                else {
                    console.log(`${logColor}>> `,this.generateLog(log, this.logType),'\x1b[0m');
                }
            }
            else {
                if (this.logType === logTypes.JSON) {
                    console.log(this.generateLog(log, this.logType));
                }
                else {
                    console.log('>> ',this.generateLog(log, this.logType));
                }
            }
        }
        else {
            console.log(message);
        }
    }

    printLog (log: logInterface, message: string) {
        let logColor;
        switch (log.level) {
            case logLevel.DEBUG:
                logColor = '\x1b[35m';
                break;
            case logLevel.INFO:
                logColor = '\x1b[34m';
                break;
            case logLevel.SUCCESS:
                logColor = '\x1b[32m';
                break;
            case logLevel.WARNING:
                logColor = '\x1b[33m';
                break;
            case logLevel.ERROR:
                logColor = '\x1b[31m';
                break;
            default:
                logColor = '\x1b[37m';
                break;
        }
        if (this.configSwitch === 'on') {
            if (this.isColorized) {
                if (this.logType === logTypes.JSON) {
                    console.log(`${logColor}${this.generateLog(log, this.logType)}\x1b[0m`);
                }
                else {
                    console.log(`${logColor}>> `,this.generateLog(log, this.logType),'\x1b[0m');
                }
            }
            else {
                if (this.logType === logTypes.JSON) {
                    console.log(this.generateLog(log, this.logType));
                }
                else {
                    console.log('>> ',this.generateLog(log, this.logType));
                }
            }
        }
        else {
            console.log(message);
        }
    }

    debug (message: string, data?:any, trace?: string) {
        this.isLineTrace = trace ? true : false;
        const log: logInterface = {
            level: logLevel.DEBUG,
            message,
            data,
            trace,
        }
        this.printLog(log, message);
    }

    error (message: string, data?:any, trace?: string) {
        this.isLineTrace = trace ? true : false;
        const log: logInterface = {
            level: logLevel.ERROR,
            message,
            data,
            trace,
        }
        this.printLog(log, message);
    }

    warn (message: string, data?:any, trace?: string) {
        this.isLineTrace = trace ? true : false;
        const log: logInterface = {
            level: logLevel.WARNING,
            message,
            data,
            trace,
        }
        this.printLog(log, message);
    }

    info (message: string, data?:any, trace?: string) {
        this.isLineTrace = trace ? true : false;
        const log: logInterface = {
            level: logLevel.INFO,
            message,
            data,
            trace,
        }
        this.printLog(log, message);
    }

    success (message: string, data?:any, trace?: string) {
        this.isLineTrace = trace ? true : false;
        const log: logInterface = {
            level: logLevel.SUCCESS,
            message,
            data,
            trace,
        }
        this.printLog(log, message);
    }
}

export const trace = (): string => {
    const regex = /\((.*):(\d+):(\d+)\)$/
    const match = regex.exec((new Error()).stack!.split("\n")[2]);
    let filepath = match![1];
    let line = match![2];
    return `[ ${filepath} | ${line} ]`;
}
