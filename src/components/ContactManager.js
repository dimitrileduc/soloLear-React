import {PeopleList} from './PeopleList.js'
import {AddPersonForm} from './AddPersonForm.js'
import { useState } from 'react';



function ContactManager(props) {
  console.log(props)
  const [contacts, setContacts] = useState(props.data);

  function addPerson(name) {
    setContacts([...contacts, name]);
  }

  const contactsSection = (
  <div>
    <AddPersonForm handleSubmit={addPerson} />
    <PeopleList data={contacts} />

  </div>
);
  return (
    <main>
      {contactsSection}

    </main>
  );
}

export {ContactManager};