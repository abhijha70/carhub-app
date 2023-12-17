import { MouseEventHandler } from "react";

export interface CustomeButtonProps {
    title : string,
    containerStyles?:string;
    handelClick?: MouseEventHandler<HTMLButtonElement>;
    btnType?: 'button'| 'submit' ;
    textStyles?:string;
    rightIcon?:string;
    isDisabled?:boolean;
}

export interface SearchManuFacturerProps {
    manufacturer : string;
    setManuFacturer : (manufacturer: string) => void;
}

export interface Carprops {
    city_mpg:number;
    class:string;
    combination_mpg:number;
    cylinders:number;
    displacement:number;
drive:string;
fuel_type:string;
highway_mpg:number;
transmission:string;
year:number;
make : string;
model:string;
}