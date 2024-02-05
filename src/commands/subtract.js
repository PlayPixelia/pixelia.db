const fs = require("fs");

module.exports = function subtract(database, databasePath, key, value) {
    if (!key) throw new Error("[HATA] Girilen herhangi bir veri belirtilmemiş.");
    if (typeof key !== "string") throw new TypeError("[HATA] Veri bir string olmalıdır.");

    if (typeof value === "number") {
        database[key] = (database[key] || 0) - value;
    } else if (typeof value === "object" && value !== null) {
        if (!database[key]) {
            database[key] = {};
        }
        for (const subKey in value) {
            if (value.hasOwnProperty(subKey)) {
                if (typeof value[subKey] === "number") {
                    database[key][subKey] = (database[key][subKey] || 0) - value[subKey];
                } else {
                    throw new TypeError("[HATA] Çıkarılan değerler sayı olmalıdır.");
                }
            }
        }
    } else {
        throw new TypeError("[HATA] Çıkarılan değer sayı veya obje olmalıdır.");
    }

    fs.writeFileSync(databasePath, JSON.stringify(database, null, 2));
    return database;
};
