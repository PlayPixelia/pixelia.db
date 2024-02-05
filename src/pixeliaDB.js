const constructorFunction = require('./constructor');
const setFunction = require('./commands/set');
const getFunction = require('./commands/get');
const deleteFunction = require('./commands/delete');
const getAllFunction = require('./commands/all');
const fetchFunction = require('./commands/fetch');
const hasFunction = require('./commands/has');
const clearFunction = require('./commands/clear');
const addFunction = require('./commands/add');
const subtractFunction = require('./commands/subtract');
const pushFunction = require('./commands/push');

class PixeliaDB {
    constructor(databasePath) {
        const { databasePath: path, database } = constructorFunction(databasePath);
        this.databasePath = path;
        this.database = database;
    }

    set(key, value) {
        setFunction(this.database, this.databasePath, key, value);
        return this;
    }

    get(key) {
        return getFunction(this.database, key);
    }

    delete(key) {
        deleteFunction(this.database, this.databasePath, key);
        return this;
    }

    all() {
        return getAllFunction(this.database);
    }

    fetch(key) {
        return fetchFunction(this.database, key);
    }

    has(key) {
        return hasFunction(this.database, key);
    }

    clear() {
        clearFunction(this.database, this.databasePath);
        return this;
    }

    add(key, value) {
        addFunction(this.database, this.databasePath, key, value);
        return this;
    }

    subtract(key, value) {
        subtractFunction(this.database, this.databasePath, key, value);
        return this;
    }

    push(key, value) {
        pushFunction(this.database, this.databasePath, key, value);
        return this;
    }
}

module.exports = PixeliaDB;
