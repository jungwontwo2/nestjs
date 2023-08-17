"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.AppModule = void 0;
var common_1 = require("@nestjs/common");
var boards_module_1 = require("./boards/boards.module");
var typeorm_config_1 = require("./configs/typeorm.config");
var dist_1 = require("@nestjs/typeorm/dist");
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        common_1.Module({
            imports: [
                dist_1.TypeOrmModule.forRoot(typeorm_config_1.typeORMConfig),
                boards_module_1.BoardsModule
            ]
        })
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;
