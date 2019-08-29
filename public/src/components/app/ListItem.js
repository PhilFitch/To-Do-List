import Component from '../Component.js';

class ListItem extends Component {

    onRender(dom) {
        const item = this.props.item;
        const onUpdate = this.props.onUpdate;
        const onRemove = this.props.onRemove;

        const checkbox = dom.querySelector('.checkbox');
        checkbox.addEventListener('change', event => {
            event.preventDefault();

            if(this.checked) {
                this.classList.add('strike-through');
                item.completed = true;
                onUpdate(item);
            } else {
                this.classList.remove('strike-through');
                item.completed = false;
                onUpdate(item);
            }
        });
        
        const deleteButton = dom.querySelector('.delete');
        deleteButton.addEventListener('click', () => {
            if(confirm(`"${item.item}" all done?`)) {
                onRemove(item);
            }
        });
    }

    renderHTML() {
        const item = this.props.item;

        return /*html*/`
        <li>
            <input type="checkbox" class="checkbox">${item}
            <button type="button" class="delete">✖</button>
        </li>
        `;
    }
}

export default ListItem;