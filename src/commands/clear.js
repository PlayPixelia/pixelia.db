const fs = require("fs");

module.exports = function clear(database, databasePath) {
    database = {};
    fs.writeFileSync(databasePath, JSON.stringify(database, null, 2));
    return database;
};
