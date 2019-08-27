import Component from '../Component.js';
import ListItem from './ListItem.js;'

class List extends Component {

    onRender(dom) {
        const items = this.props.items;

        items.forEach(item => {
            const props = { item: item };
            const listItem = new ListItem(props);
            const listItemDOM = listItem.renderDOM();
            dom.appendChild(listItemDOM);
        });
    }

    renderHTML() {
        return /*html*/`
            <ul class="items"></ul>
        `;
    }
}

export default List;