/// <reference types="react" />
import * as React from 'react';
import { IProps as postProps } from 'blg-post';
import './index.scss';
export interface IProps {
}
export interface IState {
    pagina: number;
    maximoPost: number;
    listPost: Array<postProps>;
}
export declare class ListPost extends React.Component<IProps, IState> {
    constructor(props: IProps);
    paginaSelecionada: (numPage: number) => void;
    renderPost: () => JSX.Element[];
    componentDidMount(): Promise<void>;
    render(): JSX.Element;
}
