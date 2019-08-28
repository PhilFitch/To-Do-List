import Component from '../Component.js';
import { link } from 'fs';

class ListItem extends Component {
    onRender(dom) {
        let checkbox = dom.querySelector('input.checkbox');
        
        checkbox.addEventListener('change', event => {
            event.preventDefault();

            if(this.checked) {
                this.classList.add('strike-through');
            } else {
                this.classList.remove('strike-through');
            }
        });
        
        let deleteButton = dom.querySelector('button.delete');

        deleteButton.addEventListener('click', event => {
            event.preventDefault();

            //remove from dom and db
        });
    }

    renderHTML() {
        const item = this.props.item;
        return /*html*/`
        <li><input type="checkbox" class="checkbox">${item}<button type="button" class="delete">✖</button></li>
        `;
    }
}

export default ListItem;