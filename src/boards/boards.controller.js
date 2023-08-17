"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
exports.__esModule = true;
exports.BoardsController = void 0;
var common_1 = require("@nestjs/common");
var BoardsController = /** @class */ (function () {
    function BoardsController(boardsService) {
        this.boardsService = boardsService;
    }
    // @Get()
    // getAllBoard(): Board[]{
    //     return this.boardsService.getAllBoards();
    // }
    // @Post()
    // createBoard(@Body() createBoardDto: CreateBoardDto    ):Board{
    //     return this.boardsService.createBoard(createBoardDto);
    // }
    // @Get('/:id')
    // getBoardById(@Param('id') id:string):Board{
    //     return this.boardsService.getBoardById(id);
    // }
    // @Delete('/:id')
    // deleteBoard(@Param('id')id: string): void{
    //     this.boardsService.deleteBoard(id);
    // }
    // @Patch('/:id/status')
    // updateBoardStatus(
    //     @Param('id') id:string,
    //     @Body('status',BoardStatusValidationPipe) status:BoardStatus,
    // ){
    //     return this.boardsService.updataBoardStatus(id,status);
    // }
    BoardsController.prototype.createBoard = function (createBoardDto) {
        return this.boardsService.createBoard(createBoardDto);
    };
    BoardsController.prototype.getBoardById = function (id) {
        return this.boardsService.getBoardById(id);
    };
    __decorate([
        common_1.Post(),
        common_1.UsePipes(common_1.ValidationPipe),
        __param(0, common_1.Body())
    ], BoardsController.prototype, "createBoard");
    __decorate([
        common_1.Get('/:id'),
        __param(0, common_1.Param('id'))
    ], BoardsController.prototype, "getBoardById");
    BoardsController = __decorate([
        common_1.Controller('boards')
    ], BoardsController);
    return BoardsController;
}());
exports.BoardsController = BoardsController;
