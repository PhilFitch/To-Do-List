import Component from '../Component.js';
import Header from './Header.js';
import List from './List.js';
import { getItems } from '../../services/list-items-api.js';

class App extends Component {

    onRender(dom) {
        const header = new Header({ title: 'To Do List' });
        dom.prepend(header.renderDOM());

        const list = new List({ items: [] });
        const listDiv = dom.querySelector('#list');
        listDiv.appendChild(list.renderDOM());

        getItems().then(items => {
            list.update({ items });
        });

        let newItem = dom.querySelector('.new-item');

        newItem.addEventListener('text', event => {
            event.preventDefault();

            //text, not just cursor?
            
            dom.querySelector('#add').disabled = false;
        });

        let addItem = dom.querySelector('#add');

        addItem.addEventListener('submit', event => {
            event.preventDefault();

            //capture text?
            //add to db and dom

            this.disabled = true;
            dom.querySelector('.new-item').textContent
        });
    }

    renderHTML() {
        return /*html*/`
            <main>
                <div id="list"></div>
                <section>
                    <button id="add" type="submit" disabled>Add:</button>
                    <input type="text" class="new-item" placeholder="<enter task>">
                </section>
            </main>
        `;
    }


}

export default App;