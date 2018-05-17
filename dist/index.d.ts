/// <reference types="react" />
/// <reference types="react-redux" />
import * as React from 'react';
import { IProps as postProps } from 'blg-post';
import './index.scss';
export * from './action';
export * from './reducer';
export interface IProps {
    match?: {
        params: any;
    };
    loadList(data: Array<any>): any;
    listPost: Array<postProps>;
}
export interface IState {
    pagina: number;
    maximoPost: number;
}
export declare const ListPost: React.ComponentClass<Pick<IProps, "match">> & {
    WrappedComponent: React.ComponentType<IProps>;
};
