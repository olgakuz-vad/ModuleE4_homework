class Equipment {
    constructor(name) {
        this.name = name;
        this.watt_W = undefined;
        this.work = false;
    }

    getWatt_W() {
        let power = this.work ? this.watt_W : 0;
        console.log(`${this.name} Мощность потребления ${power} W`);
        return power;
    }

    showProperty() {
        console.log(`${this.name.toUpperCase()} :`);
        for (let key in this) {
            if (typeof this[key] != 'function') {
                console.log(`${key} : ${this[key]}`);
            }
        }
    }

    turnOn() {
        this.work = true;
        console.log(`\n${this.name.toUpperCase()} включен`);
    }

    turnOff() {
        this.work = false;
        console.log(`\n${this.name.toUpperCase()} выключен`);
    }
    sleep_mode() {
        this.sleepMode = true;
        console.log(`\n${this.name.toUpperCase()} Компьютер в спящем режиме`);
    }
}

class EquipmentRegistry {
    constructor() {}

    registry() {
        console.log(`\n   Устройство: `);
        for (let equipment in this) {
            console.log();
            this[equipment].showProperty();
        }
        console.log('___');
    }

    powerConsumption() {
        let power_consumption = 0;
        console.log(`\n   Мощность потребления:\n`);
        for (let equipment in this) {
            power_consumption += this[equipment].getWatt_W();
        }
        console.log(`....\n   Потребление мощности в настоящий момент: ${power_consumption} W`);
    }
}

class Computer extends Equipment {
    constructor(name, watt_W, graphics, cpu, sleepMode) {
        super(name, watt_W);
        this.watt_W = watt_W;
        this.graphics = graphics;
        this.cpu = cpu;
        this.sleepMode = true;
    }

    sleep_mode() {
        super.sleep_mode();
        this.sleepMode = true;
    }

    turnOn() {
        super.turnOn();
        this.work = true;
    }

    turnOff() {
        super.turnOff();
        this.work = false;
    }

    getWatt_W() {
        let power = this.work ? this.watt_W : 0;
        power = this.sleepMode ? Math.round(power * 0.2) : power;
        console.log(`${this.name} Потребления Комьютера ${power} W`);
        return power;
    }
}

class Lamp extends Equipment {
    constructor(name, watt_W, light) {
        super(name, watt_W);
        this.watt_W = watt_W;
        this.light = light;
    }
}

const equipments = new EquipmentRegistry();
equipments.apple = new Computer(
    'Mac_Pro',
    23,
    'AMD Radeon Pro 580X с 8 ГБ',
    'Intel Xeon W-3223',
    true,
    );
equipments.lamp = new Lamp('Lamp', 7, 'light blue');

equipments.apple.turnOn();
equipments.lamp.turnOn();

equipments.registry();
equipments.powerConsumption();

equipments.apple.turnOff();
equipments.lamp.turnOn();
equipments.powerConsumption();

equipments.apple.turnOn();
equipments.lamp.turnOff();
equipments.powerConsumption();

equipments.apple.sleep_mode();
equipments.powerConsumption();