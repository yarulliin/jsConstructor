import {block} from '../utils'
import {titleBlock, textBlock, columnsBlock, imageBlock} from './blocks'

export class Sidebar {
    constructor(selector, updateCallback) {
        this.$el = document.querySelector(selector)
        this.update = updateCallback

        this.init()
    }

    init() {
        this.$el.insertAdjacentHTML('beforeend', this.template)
        this.$el.addEventListener('submit', this.addBlock.bind(this))
    }

    get template() {
        return [
            block('title'),
            block('text'),
            block('columns')
        ].join('')
    }

    addBlock(event) {
        event.preventDefault()

        const type = event.target.name
        const value = event.target.value.value
        const styles = event.target.styles.value

        const newBlock = type === 'title'
        ? new titleBlock(value, {styles})
        : type === 'text' ? new textBlock(value, {styles})
        : type === 'columns' ? new columnsBlock(value, {styles})
        : type === 'image' ? new imageBlock(value, {styles}) : ''

        this.update(newBlock)

        event.target.value.value = ''
        event.target.styles.value = ''
    }
}

