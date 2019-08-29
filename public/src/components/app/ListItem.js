import Component from '../Component.js';

class ListItem extends Component {

    onRender(dom) {
        const item = this.props.item;
        const onUpdate = this.props.onUpdate;
        const onRemove = this.props.onRemove;
        
        const checkbox = dom.querySelector('.checkbox');
        checkbox.addEventListener('click', () => {
            item.completed = !item.completed;
            onUpdate(item);
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
                <button class="checkbox">
                    Mark ${item.completed ? 'To Do' : 'Done'}
                </button>
                <span class="checkbox">${item.item}</span>
                <button type="button" class="delete">✖</button>
            </li>
            `;
    }
}

export default ListItem;