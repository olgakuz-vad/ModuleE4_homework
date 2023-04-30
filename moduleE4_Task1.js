function showOwnProp(someObj) {
    console.log(`\n   Все ключи и значения только собственных свойств: `);
    for (let key in someObj) {
        if (someObj.hasOwnProperty(key)) {
            console.log(`key ${key} , value ${someObj[key]}`);
        }
    }
}

const student = {
    city: 'Moskow',
    university: 'MGU',
};
const girl = Object.create(student);
girl.city = 'Kemerovo';

// only own properties
showOwnProp(student);
// own and proto properties

