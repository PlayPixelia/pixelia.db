const fs = require("fs");

module.exports = function set(database, databasePath, key, value) {
    if (!key) throw new Error("[HATA] Girilen herhangi bir veri belirtilmemiş.");
    if (typeof key !== "string") throw new TypeError("[HATA] Veri bir string olmalıdır.");

    if (value === undefined) throw new Error("[HATA] Girilen herhangi bir veri belirtilmemiş.");

    if (key.includes('.')) {
        const [parentKey, childKey] = key.split('.');
        if (!database[parentKey] || typeof database[parentKey] !== "object") {
            database[parentKey] = {};
        }
        database[parentKey][childKey] = value;
    } else {
        database[key] = value;
    }

    fs.writeFileSync(databasePath, JSON.stringify(database, null, 2));
    return database;
};
