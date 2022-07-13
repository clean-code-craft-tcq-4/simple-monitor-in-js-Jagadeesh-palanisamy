const limitStatus_en = {
  lowbreach: 'LOW_BREACH',
  lowwarning: 'LOW_WARNING',
  normal: 'NORMAL',
  highwarning: 'HIGH_WARNING',
  highbreach: 'HIGH_BREACH',
};

const limitStatus_gm = {
  lowbreach: 'VERLETZUNG DES NIEDRIGEN',
  lowwarning: 'WARNUNG ZU NIEDRIGEM',
  normal: 'NORMAL',
  highwarning: 'WARNUNG ZU HOHEM',
  highbreach: 'HOHE VERLETZUNG',
};

let language = '';

const batteryIsOk = (temperature, soc, chargeRate, lang) => {
  language = lang;
  const tempResult = isTemperatureOK(temperature);
  const socResult = isSocOK(soc);
  const chargeResult = isChargeRateOK(chargeRate);
  return tempResult && socResult && chargeResult;
};

const isTemperatureOK = (temperature) => {
  return checkBattery(temperature, 0, 45, 'Temperature');
};

const isSocOK = (soc) => {
  return checkBattery(soc, 20, 80, 'State of Charge');
};

const isChargeRateOK = (chargeRate) => {
  return checkBattery(chargeRate, 0, 0.8, 'Charge Rate');
};

const checkBattery = (toCheck, lowerLimit, upperLimit, statement) => {
  checkWarningLevel(lowerLimit, upperLimit, toCheck);
  if (toCheck >= upperLimit || toCheck <= lowerLimit) {
    printStatement(statement + ' is out of range!');
    return false;
  }
  return true;
};

const checkWarningLevel = (lowerLimit, upperLimit, value) => {
  const WarningLimit = calculateWarningLimit(upperLimit);

  if (lowerLimit > value) {
    setWarningStatement('lowbreach');
  }
  if (lowerLimit <= value && lowerLimit + WarningLimit >= value) {
    setWarningStatement('lowwarning');
  }
  if (
    lowerLimit + WarningLimit <= value &&
    upperLimit - WarningLimit >= value
  ) {
    setWarningStatement('normal');
  }
  if (upperLimit - WarningLimit <= value && value >= upperLimit) {
    setWarningStatement('highwarning');
  }
  if (upperLimit > value) {
    setWarningStatement('highbreach');
  }
};

const calculateWarningLimit = (upperLimit) => {
  return Number((upperLimit * 0.05).toFixed(2));
};

const setWarningStatement = (limit) => {
  if (language === 'english') {
    printStatement(limitStatus_en[limit]);
  }
  if (language === 'german') {
    printStatement(limitStatus_gm[limit]);
  }
};

const printStatement = (statement) => {
  console.log(statement);
};

expect(batteryIsOk(25, 70, 0.7,'english')).to.be.true;
expect(batteryIsOk(50, 85, 0,'german')).to.be.false;
