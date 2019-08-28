import Component from './Component.js';

class Form extends Component {
    onRender(dom) {
        const onAdd = this.props.onAdd;
        let form = dom.querySelector('#item-entry');
        const input = dom.querySelector('input[name=new-item]');
        const error = dom.querySelector('p.error');

        form.addEventListener('submit', event => {
            event.preventDefault();
            const newItem = { item: input.value };

            error.textContent = '';
            
            onAdd(newItem) 
                .then(() => {
                    form.reset();
                    
                })
                .catch(err => {
                    error.textContent = err;
                });
        
            dom.querySelector('#add').disabled = false;
        });
    }

    renderHTML() {
        return /*html*/`
        <section>
            <form id="item-entry">
                <button id="add" type="submit" disabled>Add:</button>
                <input type="text" name="new-item" placeholder="<enter task>" required>
            </form>
            <p class="error></>
        </section>
        `;
    }
}   

export default Form;
