
const {expect} = require('chai');

function batteryIsOk(temperature, soc, charge_rate) {
  return (checkBattery(temperature, 0, 45, "Temperature") 
				&& checkBattery(soc, 20, 80, "State of Charge") 
				&& checkBattery(charge_rate, 0, 0.8, "Charge Rate"));
}

function checkBattery(toCheck,lowerLimit,upperLimit,checkName) {
		if (toCheck >= upperLimit || toCheck <= lowerLimit ) {
			System.out.println(checkName +" is out of range!");
			return false;
		}
		return true;
	}

Test();
