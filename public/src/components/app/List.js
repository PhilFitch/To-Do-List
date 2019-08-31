import Component from '../Component.js';
import ListItem from './ListItem.js';

class List extends Component {

    onRender(list) {
        const items = this.props.items;
        const onUpdate = this.props.onUpdate;
        const onRemove = this.props.onRemove;

        items.forEach(item => {
            const listItem = new ListItem({ item, onUpdate, onRemove, });
            list.appendChild(listItem.renderDOM());
        });
    }

    renderHTML() {
        return /*html*/`
            <ul class="items"></ul>
        `;
    }
}

export default List;