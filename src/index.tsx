import * as React from 'react';
import { Post, IProps as postProps, enumTypePost } from 'blg-post';
import { Paginado } from './paginado';
import { getListPost } from './service';
import { connect } from 'react-redux';
import './index.scss';
import { Dispatch } from 'redux';
import { loadListPost } from './action';
export * from './action'
export * from './reducer'
export interface IProps {
    match?: {
        params: any
    }
    loadList(data: Array<any>): any
}

export interface IState {
    pagina: number
    maximoPost: number
    listPost: Array<postProps>
}

class ListPostComponent extends React.Component<IProps, IState>{
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
        let category = this.props.match ? this.props.match.params.category : null;
        let lista = await getListPost(category);
        this.setState({ listPost: lista })
        this.props.loadList(lista);
    }

    render() {
        return (
            <div className="blg-listPost">
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

const mapDispacht = (dispatch: any) => {
    return {
        loadList: (data: Array<any>) => {
            dispatch(loadListPost(data));
        }
    }
}
export const ListPost = connect(null, mapDispacht)(ListPostComponent)