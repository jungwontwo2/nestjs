"use strict";
exports.__esModule = true;
exports.typeORMConfig = void 0;
exports.typeORMConfig = {
    type: 'postgres',
    host: 'localhost',
    port: 5432,
    username: 'postgres',
    password: 'postgres',
    database: 'board-app',
    entities: [__dirname + '/../**/&.entity.{js,ts}'],
    synchronize: true
};
