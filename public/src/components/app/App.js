import Component from '../Component.js';
import Header from './Header.js';

class App extends Component {

    onRender(dom) {
        const header = new Header();
        dom.prepend(header.renderDOM());
    }

    renderHTML() {
        return /*html*/`
            <main>
                <div id="list"></div>
                <section>
                    <button type=button>Add:</button>
                <input type="text" placeholder="<enter task>">
                </section>
            </main>
        `;
    }
}

export default App;