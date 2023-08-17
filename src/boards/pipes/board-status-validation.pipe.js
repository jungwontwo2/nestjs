"use strict";
exports.__esModule = true;
exports.BoardStatusValidationPipe = void 0;
var common_1 = require("@nestjs/common");
var board_status_enum_1 = require("../board-status.enum");
var BoardStatusValidationPipe = /** @class */ (function () {
    function BoardStatusValidationPipe() {
        this.StatusOption = [
            board_status_enum_1.BoardStatus.PRIVATE,
            board_status_enum_1.BoardStatus.PUBLIC,
        ];
    }
    BoardStatusValidationPipe.prototype.transform = function (value, metadata) {
        value = value.toUpperCase();
        if (!this.isStatusValid(value)) {
            throw new common_1.BadRequestException(value + " isn't in the status option");
        }
        return value;
    };
    BoardStatusValidationPipe.prototype.isStatusValid = function (status) {
        var index = this.StatusOption.indexOf(status);
        return index !== -1;
    };
    return BoardStatusValidationPipe;
}());
exports.BoardStatusValidationPipe = BoardStatusValidationPipe;
