const fs = require("fs");

module.exports = function set(database, databasePath, key, value) {
    if (!key) throw new Error("[HATA] Girilen herhangi bir veri belirtilmemiş.");
    if (typeof key !== "string") throw new TypeError("[HATA] Veri bir string olmalıdır.");

    if (value === undefined) throw new Error("[HATA] Girilen herhangi bir veri belirtilmemiş.");

    if (!database[key]) {
        database[key] = value;
    } else if (typeof database[key] === "object" && value !== null && !Array.isArray(value)) {
        database[key] = { ...database[key], ...value };
    } else {
        throw new TypeError(`[HATA] Eklemek istediğiniz veri zaten mevcut.`);
    }

    fs.writeFileSync(databasePath, JSON.stringify(database, null, 2));
    return database;
};
