const fs = require("fs");

module.exports = function push(database, databasePath, key, value) {
    if (!key) throw new Error("[HATA] Girilen herhangi bir veri belirtilmemiş.");
    if (typeof key !== "string") throw new TypeError("[HATA] Veri bir string olmalıdır.");

    if (value === undefined) throw new Error("[HATA] Girilen herhangi bir değer belirtilmemiş.");

    if (!database[key]) {
        database[key] = [value];
    } else if (Array.isArray(database[key])) {
        database[key].push(value);
    } else {
        throw new TypeError(`[HATA] Girilen veri başka bir türde bir değere sahiptir ve bir diziye öğe eklenemez.`);
    }

    fs.writeFileSync(databasePath, JSON.stringify(database, null, 2));
    return database;
};
