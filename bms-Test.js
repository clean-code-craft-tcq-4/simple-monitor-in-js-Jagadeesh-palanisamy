import {batteryIsOk} from './bms-monitor'
const Test=()=>{
expect(batteryIsOk(25, 70, 0.7)).to.be.true;
expect(batteryIsOk(50, 85, 0)).to.be.false;
}

