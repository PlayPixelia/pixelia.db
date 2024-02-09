const fs = require("fs");

module.exports = function add(database, databasePath, key, value) {
    if (!key) throw new Error("[HATA] Girilen herhangi bir veri belirtilmemiş.");
    if (typeof key !== "string") throw new TypeError("[HATA] Veri bir string olmalıdır.");

    if (typeof value !== "number" && typeof value !== "object") {
        throw new TypeError("[HATA] Eklenen değer sayı veya obje olmalıdır.");
    }

    if (key.includes('.')) {
        const [parentKey, childKey] = key.split('.');
        if (!database[parentKey] || typeof database[parentKey] !== "object") {
            database[parentKey] = {};
        }
        if (typeof database[parentKey][childKey] === "number") {
            database[parentKey][childKey] += value;
        } else {
            database[parentKey][childKey] = value;
        }
    } else {
        if (typeof database[key] === "number") {
            database[key] += value;
        } else {
            database[key] = value;
        }
    }
    fs.writeFileSync(databasePath, JSON.stringify(database, null, 2));
    return database;
};
