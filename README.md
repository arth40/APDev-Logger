# APDev Logger
This logger is made by a developer for the developers to make their logging experience beautiful.

### Installing the package

    npm install apdev-logger

###
### Steps to use
#### Step-1 : Initialize a class object
````
import {APDevLogger, trace, logLevel, logTypes} from "apdev-logger";;
const  apLogger  =  new  APDevLogger({type:  logTypes.TEXT,  colorized:true,  switch:  'on'});
````
**type:** logTypes.JSON | logTypes.TEXT ( default: TEXT ) - ~~*optional*~~ <br />
**colorized:** true | false [default: true] - ~~*optional*~~ <br />
**switch:** 'on' | 'off' [default: 'on'] (In case you want to use regular console logs) - ~~*optional*~~ <br />

#### Step-2 : Use the instance
````
apLogger.log(logLevel.DEBUG,'Reaching this checkpoint...',trace());
apLogger.log(logLevel.INFO,'User is active now!');
apLogger.log(logLevel.SUCCESS,'Successfully stored Data');
apLogger.log(logLevel.WARNING,'Database connection is down!',trace());
apLogger.log(logLevel.ERROR,'Failed to save User data',trace());
````
Param-1: Level of logs <br />
Param-2: Message string / stringify json <br />
Param-3: If want to add line tracing to logs - ~~*optional*~~ <br />

###
### Text Output
![Text Log Output](https://github.com/arth40/APDev-Logger/assets/59698234/e8b00ece-f64f-467e-a0e0-af286c1b9f6d)


### JSON Output
![JSON Log Output](https://github.com/arth40/APDev-Logger/assets/59698234/3ec84dd3-6d7d-4dee-ad73-cd00225ced59)



###
## Thanks for using !
Give Your feedbacks and suggest something that I can build to make JavaScript easier for developers.
