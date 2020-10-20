const getObjectProperty = (o, path, defaultValue) => {
    const keys = path.split('.');
    let current = o;
    while (keys.length > 0) {
        const key = keys.shift();
        if (key in current) {
            current = current[key];
        } else {
            return defaultValue;
        }
    }
    return current;
} 

const obj = {
    "pupa": {
        "lupa": {
            "beep": 'boop',
        },
        "foo": 'bar',
    },
};

console.log(getObjectProperty(obj, "pupa.lupa"));
console.log(getObjectProperty(obj, "pupa.lupa.beep"));
console.log(getObjectProperty(obj, "pupa.foo"));
console.log(getObjectProperty(obj, "pupa.ne.tuda"));
console.log(getObjectProperty(obj, "pupa.ne.tuda", true));
console.log(getObjectProperty(obj, "pupa.ne.tuda", "Default Value"));