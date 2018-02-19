import * as React from 'react';

export interface IProps {
    numero: number
    selectedNum(num: number): void
    className: string
}


export const Li = ({ numero, selectedNum, className }: IProps) => {
    return (
        <li className={className} onClick={() => selectedNum(numero)}>
            <a href="javascript:void(0)">{numero}</a>
        </li>
    )
}