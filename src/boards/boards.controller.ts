import { Body, Controller, Delete, Get, Param, Patch, Post, UsePipes, ValidationPipe,ParseIntPipe } from '@nestjs/common';
import { BoardsService } from './boards.service';
import {  BoardStatus } from './board-status.enum';
import { CreateBoardDto } from './dto/create-board.dto';
import { BoardStatusValidationPipe } from './pipes/board-status-validation.pipe';
import { Board } from './board.entity';
import { create } from 'domain';
@Controller('boards')
export class BoardsController {
    constructor(private boardsService:BoardsService){}



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

    @Post()
    @UsePipes(ValidationPipe)
    createBoard(@Body() createBoardDto:CreateBoardDto):Promise<Board>{
        return this.boardsService.createBoard(createBoardDto);
    }
    @Get('/:id')
    getBoardById(@Param('id') id: number):Promise<Board>{
        return this.boardsService.getBoardById(id);
    }

    @Delete('/:id')
    deleteBoard(@Param('id',ParseIntPipe) id):Promise<void>{
        return this.boardsService.deleteBoard(id);
    }

    @Patch('/:id/status')
    updateBoardStatus(
        @Param('id',ParseIntPipe)id:number,
        @Body('status',BoardStatusValidationPipe)status:BoardStatus
    ){
        return this.boardsService.updateBoardStatus(id,status);
    }

    @Get()
    getAllBoards():Promise<Board[]>{
        return this.boardsService.getAllBoards();
    }
}
