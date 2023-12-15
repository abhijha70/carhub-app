import { MouseEventHandler } from "react";

export interface CustomeButtonProps {
    title : string,
    containerStyles?:string;
    handelClick?: MouseEventHandler<HTMLButtonElement>
}