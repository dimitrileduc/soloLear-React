
import './App.css';
import {ContactManager} from './components/ContactManager.js'


const contacts = ["James Smith", "Thomas Anderson", "Bruce Wayne"];


const contactManagerSection = (
  <section>
    <ContactManager data={contacts} />
  </section>

);

function App() {
  return (
    <main>
      {contactManagerSection}

    </main>
  );
}

export default App;
