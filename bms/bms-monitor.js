import {checkWarningLevel} from './bms-warning.js'
import {Test} from './bms-test.js'
let language = '';
export const batteryIsOk = (temperature, soc, chargeRate ,lang)=> {
language = lang;
const tempResult = isTemperatureOK(temperature);
const socResult =  isSocOK(soc); 
const chargeResult = isChargeRateOK(chargeRate);
 return tempResult&&socResult&&chargeResult
}
const isTemperatureOK = (temperature) =>{
  return checkBattery(temperature, 0, 45, "Temperature")
}
const isSocOK = (soc) =>{
  return checkBattery(soc, 20, 80, "State of Charge")
  
}
const isChargeRateOK = (chargeRate) =>{
  return checkBattery(chargeRate, 0, 0.8, "Charge Rate")
}
 const checkBattery = (toCheck,lowerLimit,upperLimit,statement) => {
        checkWarningLevel(lowerLimit,upperLimit,toCheck);
    if (toCheck >= upperLimit || toCheck <= lowerLimit ) {
	   	printStatement(statement +" is out of range!");
    return false;
		}
		return true;
	}
 
  export const setWarningStatement=(limit)=>{
       if(language==='english'){
		     printStatement(limitStatus_en[limit])
		  }
		  if(language==='german'){
		     printStatement(limitStatus_gm[limit])
		  }
    }
	export const printStatement = (statement) =>{
	  console.log(statement)
	}
 Test();
