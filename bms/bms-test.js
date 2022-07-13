import {batteryIsOk} from './bms-monitor.js'
const Test=()=>{
expect(batteryIsOk(25, 70, 0.7,'english')).to.be.true;
expect(batteryIsOk(50, 85, 0,'german')).to.be.false;
}
