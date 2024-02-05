module.exports = function fetchKey(database, key) {
    if (!key) throw new Error("[HATA] Girilen herhangi bir veri belirtilmemiş.")
    if (typeof key !== "string") throw new TypeError("[HATA] Veri bir string olmalıdır.");

    return database[key] || null;
};
