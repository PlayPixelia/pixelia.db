const fs = require("fs");

module.exports = function constructor(options) {
    if (!options || !options.databasePath) {
        throw new Error("[HATA] Veritabanı dosya yolu belirtilmemiş. Lütfen bir dosya yolu belirtin. (Örnek: './database.json')");
    }
    if (typeof options.databasePath !== "string") {
        throw new TypeError("[HATA] Veritabanı dosya yolu bir string olmalıdır.");
    }

    this.databasePath = options.databasePath;
    this.database = {};

    if (!fs.existsSync(this.databasePath)) {
        fs.writeFileSync(this.databasePath, JSON.stringify(this.database, null, 2));
    } else {
        try {
            Object.assign(this.database, JSON.parse(fs.readFileSync(this.databasePath)));
        } catch (error) {
            throw new Error("[HATA] Veritabanı dosyası okunurken bir hata oluştu. Lütfen dosyanın doğru olduğundan emin olun.");
        }
    }

    return this;
};