import { IsInt, IsOptional } from "class-validator";

export class HelloDto {
  @IsOptional()
  @IsInt()
  id:number;
}