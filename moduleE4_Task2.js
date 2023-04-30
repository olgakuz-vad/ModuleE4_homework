function stringInfo(string, obj) {
    return string in obj;
}

const object = {city_A: 2, b: '196'};

console.log(stringInfo('city_A', object));
