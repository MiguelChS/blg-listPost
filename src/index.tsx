import * as React from 'react';
import { Post, IProps as postProps } from 'blg-post';
import { Paginado } from './paginado';
import { getListPost } from './service';
import { connect } from 'react-redux';
import './index.scss';
import { loadListPost } from './action';
export * from './action'
export * from './reducer'
export interface IProps {
    match?: {
        params: any
    }
    loadList(data: Array<any>): any,
    listPost: Array<postProps>
}

export interface IState {
    pagina: number
    maximoPost: number
}

class ListPostComponent extends React.Component<IProps, IState>{
    constructor(props: IProps) {
        super(props);
        this.state = {
            pagina: 0,
            maximoPost: 5
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
    
    async BuscarData(){
        let category = this.props.match ? this.props.match.params.category : null;
        let lista = await getListPost(category);
        this.props.loadList(lista);
    }

    render() {
        this.BuscarData();
        return (
            <div className="blg-listPost">
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

const mapDispacht = (dispatch: any) => {
    return {
        loadList: (data: Array<any>) => {
            dispatch(loadListPost(data));
        }
    }
}
const mapStateToProps = (state: any) => {
    return {
        listPost: state.listPost
    }
}

export const ListPost = connect(mapStateToProps, mapDispacht)(ListPostComponent)