import Component from '../Component.js';

class ListItem extends Component {
    renderHTML() {
        const item = this.props.item;
        return /*html*/`
        <li><input type="checkbox">${item}<button type="button" class="delete">✖</button></li>
        `;
    }
}

export default ListItem;