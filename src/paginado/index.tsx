import * as React from 'react';
import './index.css'
import { paginado, active } from './index.css';
import { Li } from './li';

export interface IProps {
    cantPagina: number
    pageSelected(numPage: number): void
}

export interface IState {
    pageSeled: number
}

export class Paginado extends React.Component<IProps, IState>{

    constructor(props: IProps) {
        super(props);
        this.state = {
            pageSeled: 1
        }

    }

    pageSelected = (numPage: number) => {
        if (numPage == this.state.pageSeled) return;
        this.props.pageSelected(numPage);
        this.setState({ pageSeled: numPage })
    }

    pageNext = () => {
        if ((this.state.pageSeled + 1) > this.props.cantPagina) return;
        this.pageSelected((this.state.pageSeled + 1))
    }

    pagePrevie = () => {
        if ((this.state.pageSeled - 1) < 1) return;
        this.pageSelected((this.state.pageSeled - 1))
    }

    renderNumber = (): Array<JSX.Element> => {
        let arrayNumPage: Array<JSX.Element> = [];
        let num = (this.props.cantPagina - this.state.pageSeled) > 5 ? this.state.pageSeled : (this.props.cantPagina - 5);
        num = num < 1 ? 1 : num;
        let cantidad = 0;
        while (num <= this.props.cantPagina && cantidad < 6) {
            arrayNumPage.push(
                <Li
                    key={num}
                    numero={num}
                    selectedNum={this.pageSelected}
                    className={num == this.state.pageSeled ? active : ''}
                />
            )
            num++;
            cantidad++;
        }
        return arrayNumPage;
    }

    render() {
        return (
            <div className={`${paginado} clearfix`}>
                <ul className="pagination text-left">
                    <li onClick={this.pagePrevie}>
                        <a href="javascript:void(0)">
                            <i className="fa fa-angle-double-left"></i>
                        </a>
                    </li>
                    {this.renderNumber()}
                    <li onClick={this.pageNext}>
                        <a href="javascript:void(0)">
                            <i className="fa fa-angle-double-right">
                            </i>
                        </a>
                    </li>
                </ul>
            </div>
        )
    }
}