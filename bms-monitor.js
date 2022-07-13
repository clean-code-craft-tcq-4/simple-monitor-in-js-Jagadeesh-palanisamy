const {expect} = require('chai');
let language = '';

const batteryIsOk = (temperature, soc, chargeRate ,lang)=> {
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
	
	
	  
	  const calculateWarningLimit = (upperLimit) =>{
	    return Number((upperLimit * 0.05).toFixed(2))  ;
	  }
	
   const setWarningStatement=(limit)=>{
       if(language==='english'){
		     printStatement(limitStatus_en[limit])
		  }
		  if(language==='german'){
		     printStatement(limitStatus_gm[limit])
		  }
    }
	
	
	
		const printStatement = (statement) =>{
	  console.log(statement)
	}
	
// batteryIsOk(25, 80, 0.7)
batteryIsOk(50, 50, 0,'german')
