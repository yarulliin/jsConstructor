import {row, col, css} from '../utils'

class Block {
    constructor(value, options) {
        this.value = value
        this.options = options
    }

    toHTML() {
        throw new Error('Метод toHTML должен быть реализован')
    }
}

export class titleBlock extends Block {
    constructor(value, options) {
        super(value, options)
    }

    toHTML() {
        const {tag = 'h1', styles} = this.options
        return row(col(`<${tag}>${this.value}</${tag}>`), css(styles))
    }
}

export class textBlock extends Block {
    constructor(value, options) {
        super(value, options)
    }

    toHTML() {
        return row(col(`<p>${this.value}</p>`), css(this.options.styles))
    }
}

export class columnsBlock extends Block {
    constructor(value, options) {
        super(value, options)
    }

    toHTML() {
        if (typeof this.value === 'object') {
            const html = this.value.map(col).join('')
            return row(html, css(this.options.styles))
        }
        else {
            const html = this.value.split(' ').map(col).join('')
            return row(html, css(this.options.styles))
        }
    }
}

export class imageBlock extends Block {
    constructor(value, options) {
        super(value, options)
    }

    toHTML() {
        const {styles, imageStyles} = this.options
        return row(`<img src="${this.value}" style="${css(imageStyles)}" />`, css(styles))
    }
}