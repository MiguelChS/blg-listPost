import * as React from 'react';
import { Post, IProps as postProps, enumTypePost } from 'blg-post';
import { Paginado } from './paginado'

export interface IProps {

}
const lista: Array<postProps> = []

for (let i = 0; i < 21; i++) {
    lista.push(
        {
            urlImage: "http://demo.shapedtheme.com/kotha-pro-html/assets/images/post-thumb-1.jpg",
            dateString: "Octubre 13, 2017",
            detalle: {
                categoria: `${i}`,
                descripcion: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua...",
                title: "ADVENTURE TO TRAVEL LONELY",
                linkPost: "#",
                typePost: enumTypePost.PREPOST
            }
        }
    )
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

    componentDidMount() {
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