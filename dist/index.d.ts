/// <reference types="react" />
import * as React from 'react';
import { IProps as postProps } from 'blg-post';
export interface IProps {
    listPost: Array<postProps>;
}
export interface IState {
    pagina: number;
    maximoPost: number;
}
export declare class ListPost extends React.Component<IProps, IState> {
    constructor(props: IProps);
    paginaSelecionada: (numPage: number) => void;
    renderPost: () => JSX.Element[];
    render(): JSX.Element;
}
