import * as React from 'react';
import { Post, IProps as postProps } from 'blg-post';
import { Paginado } from './paginado'

export interface IProps {
    listPost: Array<postProps>
}

export interface IState {
    pagina: number
    maximoPost: number
}

export class ListPost extends React.Component<IProps, IState>{
    constructor(props: IProps) {
        super(props);
        this.state = {
            pagina: 0,
            maximoPost: 10
        }
    }

    paginaSelecionada = (numPage: number) => {
        this.setState({ pagina: (numPage - 1) })
    }

    renderPost = (): Array<JSX.Element> => {
        let listPost: Array<JSX.Element> = [];
        let max = ((this.state.pagina + 1) * 5) > this.props.listPost.length ? this.props.listPost.length : ((this.state.pagina + 1) * 5)
        for (let i = (this.state.pagina * 5); i < max; i++) {
            listPost.push(
                <Post key={i} {...this.props.listPost[i]} />
            )
        }
        return listPost;
    }

    render() {
        return (
            <div>
                <div>
                    {this.renderPost()}
                </div>
                <Paginado
                    cantPagina={Math.ceil((this.props.listPost.length / 5))}
                    pageSelected={this.paginaSelecionada}
                />
            </div>
        )
    }
}