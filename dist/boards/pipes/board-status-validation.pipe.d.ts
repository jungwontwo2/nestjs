import { ArgumentMetadata, PipeTransform } from "@nestjs/common";
import { BoardStatus } from "../board-status.enum";
export declare class BoardStatusValidationPipe implements PipeTransform {
    readonly StatusOption: BoardStatus[];
    t: any;
    transform(value: any, metadata: ArgumentMetadata): any;
    private isStatusValid;
}
