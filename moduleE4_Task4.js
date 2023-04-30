function Equipment(name) {
    this.name = name;
    this.watt_W = undefined;
    this.work = false;
}

Equipment.prototype.getWatt_W = function() {
    let power = this.work ? this.watt_W : 0;
    console.log(`${this.name} Мощность потребления ${power} W`);
    return power;
}

Equipment.prototype.showProperty = function() {
    console.log(`${this.name.toUpperCase()} :`);
    for (let key in this) {
        if (typeof this[key] != 'function') {
            console.log(`${key} : ${this[key]}`);
        }
    }
}

Equipment.prototype.turnOn = function() {
    this.work = true;
    console.log(`\n${this.name.toUpperCase()} включен`);
}

Equipment.prototype.turnOff = function() {
    this.work = false;
    console.log(`\n${this.name.toUpperCase()} выключен`);
}

function registry(equipments) {
    console.log(`\n   Устройство: `);
    for (let equipment in equipments) {
        console.log();
        equipments[equipment].showProperty();
    }
    console.log('....');
}

function powerConsumption(equipments) {
    let power_consumption = 0;
    console.log(`\n   Мощность потребления:\n`);
    for (let equipment in equipments) {
        power_consumption += equipments[equipment].getWatt_W();
    }
    console.log(`.....\n   Потребление мощности в настоящий момент: ${power_consumption} W`);
}

function Computer(name, watt_W, graphics, cpu, sleepMode) {
    this.name = name;
    this.watt_W = watt_W;
    this.graphics = graphics;
    this.cpu = cpu;
    this.sleepMode = true;
}

function Lamp(name, watt_W, work_half) {
    this.name = name;
    this.watt_W = watt_W;
    this.work_half = true;
}

Computer.prototype = new Equipment();
Lamp.prototype = new Equipment();

Computer.prototype.sleep_mode = function () {
    this.sleepMode = true;
    console.log(`\n${this.name.toUpperCase()} Компьютер в спящем режиме`);
}

Computer.prototype.turnOn = function() {
    this.work = true;
    this.sleepMode = false;
    console.log(`\n${this.name.toUpperCase()} Копьютер работает`);
}

Computer.prototype.turnOff = function() {
    this.work = false;
    this.sleepMode = true;
    console.log(`\n${this.name.toUpperCase()} Компьютер неработает`);
}

Computer.prototype.getWatt_W = function() {
    let power = this.work ? this.watt_W : 0;
    power = this.sleepMode ? Math.round(power * 0.2) : power;
    console.log(`${this.name} Потребления Комьютера ${power} W`);
    return power;
}

const equipments = {};
equipments.apple = new Computer(
    'Mac_Pro',
    23,
    'AMD Radeon Pro 580X с 8 ГБ',
    'Intel Xeon W-3223',
    true,
);
equipments.lamp = new Lamp('Lamp', 7);

equipments.apple.turnOn();
equipments.lamp.turnOn();

registry(equipments);
powerConsumption(equipments);

equipments.apple.turnOff();
equipments.lamp.turnOn();
powerConsumption(equipments);

equipments.apple.turnOn();
equipments.lamp.turnOff();
powerConsumption(equipments);

equipments.apple.sleep_mode();
powerConsumption(equipments);