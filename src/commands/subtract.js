const fs = require("fs");

module.exports = function subtract(database, databasePath, key, value) {
    if (!key) throw new Error("[HATA] Girilen herhangi bir veri belirtilmemiş.");
    if (typeof key !== "string") throw new TypeError("[HATA] Veri bir string olmalıdır.");

    if (typeof value !== "number") {
        throw new TypeError("[HATA] Eklenen değer sayı olmalıdır.");
    }

    if (key.includes('.')) {
        const [parentKey, childKey] = key.split('.');
        if (!database[parentKey] || typeof database[parentKey] !== "object") {
            database[parentKey] = {};
        }

        if (typeof database[parentKey][childKey] !== "number") {
            database[parentKey][childKey] = 0;
        }
        database[parentKey][childKey] -= value;
    } else {
        if (typeof database[key] !== "number") {
            throw new TypeError(`[HATA] Girdiğiniz veri bir sayı olmalıdır.`);
        }
        database[key] -= value;
    }

    fs.writeFileSync(databasePath, JSON.stringify(database, null, 2));
    return database;
};
