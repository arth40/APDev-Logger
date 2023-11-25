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
apLogger.log(logLevel.DEBUG,'Reaching this checkpoint...',null,trace());
apLogger.log(logLevel.INFO,'User is active now!');
apLogger.log(logLevel.SUCCESS,'Successfully stored Data',{value:123,name:'arth'});
apLogger.log(logLevel.WARNING,'Database connection is down!',null,trace());
apLogger.log(logLevel.ERROR,'Failed to save User data',{value:123,name:'arth'},trace());
````
Param-1: Level of logs <br />
Param-2: Message string/stringify json <br />
Param-3: Extra JSON Data if any - ~~*optional(should be null if want to use Param-4)*~~ <br />
Param-4: If want to add line tracing to logs - ~~*optional*~~ <br />

###
### Text Output
![Text Log Output](https://github.com/arth40/APDev-Logger/assets/59698234/e8b00ece-f64f-467e-a0e0-af286c1b9f6d)


### JSON Output
![JSON Log Output](https://github.com/arth40/APDev-Logger/assets/59698234/cd7e6ef3-5917-4597-a30c-24eebef5fcab)



###
## Thanks for using !
Give Your feedbacks and suggest something that I can build to make JavaScript easier for developers.
