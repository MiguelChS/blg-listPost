/// <reference types="react" />
export interface IProps {
    numero: number;
    selectedNum(num: number): void;
    className: string;
}
export declare const Li: ({ numero, selectedNum, className }: IProps) => JSX.Element;
