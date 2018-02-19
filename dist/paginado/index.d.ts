/// <reference types="react" />
import * as React from 'react';
import './index.css';
export interface IProps {
    cantPagina: number;
    pageSelected(numPage: number): void;
}
export interface IState {
    pageSeled: number;
}
export declare class Paginado extends React.Component<IProps, IState> {
    constructor(props: IProps);
    pageSelected: (numPage: number) => void;
    pageNext: () => void;
    pagePrevie: () => void;
    renderNumber: () => JSX.Element[];
    render(): JSX.Element;
}
