import image from './assets/image.png'
import {titleBlock, textBlock, columnsBlock, imageBlock} from './classes/blocks'

export const model = [
    new titleBlock('Конструктор сайтов', {
        tag: 'h2',
        styles: {
            background: 'linear-gradient(to right, #ff0099, #493240)',
            color: '#fff',
            'text-align': 'center',
            padding: '1.5rem'
        }
    }),
    new textBlock('Some text', {
        styles: {
            background: 'linear-gradient(to left, #8e2de2, #4a00e0)',
            color: '#fff',
            'text-align': 'center',
            padding: '1rem',
            'font-weight': 'bold'
        }
    }),
    new columnsBlock(['first str', 'second str', 'third str'], {
        styles: {
            color: 'blue',
            'text-align': 'center',
            padding: '5rem',
            border: '1px solid'
        }
    }),
    new imageBlock(image, {
        styles: {
            padding: '2rem 0',
            display: 'flex',
            'justify-content': 'center'
        },
        imageStyles: {
            width: '35%',
            height: 'auto'
        }
    })
]