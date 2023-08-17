"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.typeORMConfig = void 0;
const board_entity_1 = require("../boards/board.entity");
exports.typeORMConfig = {
    type: 'postgres',
    host: 'localhost',
    port: 5432,
    username: 'postgres',
    password: 'postgres',
    database: 'board-app',
    entities: [__dirname + '/../**/*.entity.{js,ts}', board_entity_1.Board],
    synchronize: true,
};
//# sourceMappingURL=typeorm.config.js.map