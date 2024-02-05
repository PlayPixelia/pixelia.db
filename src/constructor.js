const fs = require("fs");

module.exports = function constructor(databasePath) {
    if (!databasePath) throw new Error("[HATA] Veritabanı dosya yolu belirtilmemiş. Lütfen bir dosya yolu belirtin. (Örnek: ./database.json)");
    if (typeof databasePath !== "string") throw new TypeError("[HATA] Veritabanı dosya yolu bir string olmalıdır.");

    const database = {};

    if (!fs.existsSync(databasePath)) {
        fs.writeFileSync(databasePath, JSON.stringify(database, null, 2));
    } else {
        try {
            Object.assign(database, JSON.parse(fs.readFileSync(databasePath)));
        } catch (error) {
            throw new Error("[HATA] Veritabanı dosyası okunurken bir hata oluştu. Lütfen dosyanın doğru olduğundan emin olun.");
        }
    }

    return {
        databasePath,
        database
    };
};