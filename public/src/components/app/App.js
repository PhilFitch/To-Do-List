import Component from '../Component.js';
import Header from './Header.js';
import List from './List.js';
import { getItems } from '../../services/list-items-api.js';
import Form from '../Form.js';

class App extends Component {
    onRender(dom) {
        console.log('hello');
        const header = new Header({ title: 'To Do List' });
        dom.prepend(header.renderDOM());

        const list = new List({ items: [] });
        const listDiv = dom.querySelector('#list');
        listDiv.appendChild(list.renderDOM());
        console.log(listDiv);

        // getItems().then(items => {
        //     list.update({ items });
        // });

        const form = new Form();
        dom.appendChild(form.renderDOM());



    }

    renderHTML() {
        return /*html*/`
            <main>
                <div id="list"></div>
            </main>
        `;
    }


}

export default App;