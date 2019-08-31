import Component from './Component.js';

class Form extends Component {

    onRender(dom) {
        const onAdd = this.props.onAdd;
        const form = dom.querySelector('#item-entry');
        const input = dom.querySelector('input[name=new-item]');
        const error = dom.querySelector('p.error');

        form.addEventListener('submit', event => {
            event.preventDefault();
            const newItem = { 
                item: input.value,
            };
            error.textContent = '';
            
            onAdd(newItem) 
                .then(() => {
                    form.reset();
                    document.activeElement.blur();
                })
                .catch(err => {
                    error.textContent = err;
                });
        
            // dom.querySelector('#add').disabled = false;
        });
    }

    renderHTML() {
        return /*html*/`
        <section>
            <form id="item-entry">
            <input name="new-item" placeholder="<enter task>" required>
            <button id="add" type="submit">Add:</button>
            </form>
            <p class="error"></p>
        </section>
        `;
    }
}   

export default Form;
