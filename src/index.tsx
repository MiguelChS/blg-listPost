import * as React from 'react';
import { Post, IProps as postProps, enumTypePost } from 'blg-post';
import { Paginado } from './paginado';
import { getListPost } from './service';

export interface IProps {

}

export interface IState {
    pagina: number
    maximoPost: number
    listPost: Array<postProps>
}

export class ListPost extends React.Component<IProps, IState>{
    constructor(props: IProps) {
        super(props);
        this.state = {
            pagina: 0,
            maximoPost: 10,
            listPost: []
        }
    }

    paginaSelecionada = (numPage: number) => {
        this.setState({ pagina: (numPage - 1) })
    }

    renderPost = (): Array<JSX.Element> => {
        let listPost: Array<JSX.Element> = [];
        let max = ((this.state.pagina + 1) * 5) > this.state.listPost.length ? this.state.listPost.length : ((this.state.pagina + 1) * 5)
        for (let i = (this.state.pagina * 5); i < max; i++) {
            listPost.push(
                <Post key={i} {...this.state.listPost[i]} />
            )
        }
        return listPost;
    }

    async componentDidMount() {
        let lista = await getListPost();
        this.setState({ listPost: lista })
    }

    render() {
        return (
            <div>
                <div>
                    {this.renderPost()}
                </div>
                <Paginado
                    cantPagina={Math.ceil((this.state.listPost.length / 5))}
                    pageSelected={this.paginaSelecionada}
                />
            </div>
        )
    }
}