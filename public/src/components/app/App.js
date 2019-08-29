import Component from '../Component.js';
import Header from './Header.js';
import Form from '../Form.js';
import List from './List.js';
import { getItems, addItem, updateItem, removeItem, } from '../../services/list-items-api.js';

class App extends Component {

    onRender(dom) {
       
        const header = new Header({ title: 'To Do List' });
        dom.prepend(header.renderDOM());

        const main = dom.querySelector('main')

        const listDiv = dom.querySelector('#list');
        
        const list = new List({
            items: [],
            onUpdate: item => {
                return updateItem(item)
                    .then(updated => {
                        const items = this.state.items;
                        const index = items.indexOf(item);
                        items.splice(index, 1, updated);

                        list.update({ items });
                    });
            },
            onRemove: item => {
                return removeItem(item.id)
                    .then(() => {
                        const items = this.state.items;
                        const index = items.indexOf(item);
                        items.splice(index, 1);

                        list.update({ items });
                    })
            }
        });
        listDiv.appendChild(list.renderDOM());
        
        
            
        const form = new Form({
            onAdd: item => {
                return addItem(item)
                    .then(saved => {
                        const items = this.state.items;
                        items.push(saved);
                        list.update({ items });
                    });
            }
        });
        main.appendChild(form.renderDOM());

        getItems({ showAll: true })
            .then(items => {
                this.state.items = items;
                list.update({ items });
            })
            .catch(err => {
                console.log(err);
            });

    }

    renderHTML() {
        return /*html*/`
            <div>
                <main>
                    <div id="list"></div>
                </main>
            </div>
        `;
    }


}

export default App;