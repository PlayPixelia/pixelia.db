const fs = require("fs");

module.exports = function push(database, databasePath, key, value) {
    if (!key) throw new Error("[HATA] Girilen herhangi bir veri belirtilmemiş.");
    if (typeof key !== "string") throw new TypeError("[HATA] Veri bir string olmalıdır.");

    if (value === undefined) throw new Error("[HATA] Girilen herhangi bir değer belirtilmemiş.");

    if (key.includes('.')) {
        const [parentKey, childKey] = key.split('.');
        if (!database[parentKey] || typeof database[parentKey] !== "object") {
            database[parentKey] = {};
        }

        if (!Array.isArray(database[parentKey][childKey])) {
            database[parentKey][childKey] = [];
        }
        database[parentKey][childKey].push(value);
    } else {
        if (!Array.isArray(database[key])) {
            database[key] = [];
        }
        database[key].push(value);
    }

    fs.writeFileSync(databasePath, JSON.stringify(database, null, 2));
    return database;
};
