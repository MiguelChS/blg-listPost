import * as React from 'react';
import { render } from 'react-dom';
import { ListPost, IProps } from '../src';

const lista = []

for (let i = 0; i < 21; i++) {
    lista.push(
        {
            urlImage: "http://demo.shapedtheme.com/kotha-pro-html/assets/images/post-thumb-1.jpg",
            dateString: "Octubre 13, 2017",
            detalle: {
                categoria: `${i}`,
                descripcion: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua...",
                title: "ADVENTURE TO TRAVEL LONELY",
                linkPost: "#"
            }
        }
    )
}

render(
    <ListPost
        listPost={lista}
    />,
    document.getElementById('app'));