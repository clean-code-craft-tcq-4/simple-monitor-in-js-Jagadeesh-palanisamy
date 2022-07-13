const {expect} = require('chai');
const batteryIsOk = (temperature, soc, chargeRate)=> {
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

 checkBattery = (toCheck,lowerLimit,upperLimit,statement) => {
		if (toCheck >= upperLimit || toCheck <= lowerLimit ) {
		printStatement(statement);
	  return false;
		}
		return true;
	}
	
	const printStatement = (statement) =>{
	  console.log(statement +" is out of range!")
	}
	
	
expect(batteryIsOk(25, 70, 0.7)).to.be.true;
expect(batteryIsOk(50, 85, 0)).to.be.false;
