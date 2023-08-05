# APDev Logger
This logger is made by a developer for the developers to make their logging experience beautiful.

### Installing the package

    npm install apdev-logger

### Steps to use
#### Step-1 : Initialize a class object
````
import {APDevLogger, trace, logCategory, logTypes} from  './lib';
const  apLogger  =  new  APDevLogger({type:  logTypes.TEXT,  colorized:true,  switch:  'on'});
````
**type:** logTypes.JSON | logTypes.TEXT ( default: TEXT ) - ~~*optional*~~
**colorized:** true | false [default: true] - ~~*optional*~~
**switch:** 'on' | 'off' [default: 'on'] (In case you want to use regular console logs) - ~~*optional*~~ 

#### Step-2 : Use the instance
````
apLogger.log(logCategory.DEBUG,'Reaching this checkpoint...',trace());
apLogger.log(logCategory.INFO,'User is active now!');
apLogger.log(logCategory.SUCCESS,'Successfully stored Data');
apLogger.log(logCategory.WARNING,'Database connection is down!',trace());
apLogger.log(logCategory.ERROR,'Failed to save User data',trace());
````
Param-1: Category of logs
Param-2: Message string / stringify json
Param-3: If want to add line tracing to logs - ~~*optional*~~


### Text Output
![Text Log Output](https://github.com/arth40/APDev-Logger/assets/59698234/70fd2868-0b38-403d-9e56-ac7c18a77490)

### JSON Output
![JSON Log Output](https://github.com/arth40/APDev-Logger/assets/59698234/4ab07f53-5d3b-4c35-ae94-bb41181f9dc3)


## Thanks for using !
Give Your feedbacks and suggest something that I can build to make JavaScript easier for developers.
