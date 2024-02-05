const fs = require("fs");

module.exports = function deleteKey(database, databasePath, key) {
    if (!key) throw new Error("[HATA] Girilen herhangi bir veri belirtilmemiş.")
    if (typeof key !== "string") throw new TypeError("[HATA] Veri bir string olmalıdır.");

    delete database[key];
    fs.writeFileSync(databasePath, JSON.stringify(database, null, 2));
    return database;
};
