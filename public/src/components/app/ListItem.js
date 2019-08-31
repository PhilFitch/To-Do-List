import Component from '../Component.js';

class ListItem extends Component {

    onRender(dom) {
        const item = this.props.item;
        const onUpdate = this.props.onUpdate;
        const onRemove = this.props.onRemove;
        
        const strike = dom.querySelector('.check-item');
        const checkbox = dom.querySelector('.checkbox');
        checkbox.addEventListener('click', event => {
            event.preventDefault();
            item.completed = !item.completed;
            onUpdate(item);
            item.completed ? strike.classList.add('strike-through') : strike.classList.remove('strike-through');
            // strike.classList.toggle('strike-through');
            // console.log(strike, 'item');
        });


        const deleteButton = dom.querySelector('.delete');
        deleteButton.addEventListener('click', event => {
            event.preventDefault();
            if(confirm(`"${item.item}" all done?`)) {
                onRemove(item);
            }
        });
    }

    setStrikeThrough(item) {
        if(item.completed) {
            return /*html*/`
            <span class="check-item strike-through">${item.item}</span>
            `;
        } else {
            return /*html*/`
            <span class="check-item">${item.item}</span>
            `;
        }
    }
    

    renderHTML() {
        const item = this.props.item;
        const strikeThroughHTML = this.setStrikeThrough(item);
        return /*html*/`
            <li>
                <button class="checkbox">
                    Mark ${item.completed ? 'To Do' : 'Done'}
                </button>
                ${strikeThroughHTML}
                <button type="button" class="delete">✖</button>
            </li>
            `;
    }
}

export default ListItem;