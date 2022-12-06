import { useContext } from 'react';
import { GlobalContext } from '../../Providers/global';
import './style.css';
import axios from 'axios';
import { useState, useEffect } from 'react';
import { toast } from 'react-toastify'

function ContactsList(){

  const { userContext } = useContext(GlobalContext)

  const { userToken } = userContext

  useEffect(()=>{
    axios.get("http://localhost:3000/contacts",{
    headers: {Authorization: `${userToken}`}
  })
    .then((response) => {
      console.log(response);
      setContacts(response.data)
    })
  },[])

  function handleclick(input){
    axios.delete(`http://localhost:3000/contacts/${input}`,{
    headers: {Authorization: `${userToken}`}
  })
    .then((response) => {
      toast.success("Contato deletado com sucesso!");
    })
  };

  const [contacts, setContacts] = useState([])

    console.log(contacts)

  return (
    <>
      <div className="vitrine">
        {contacts.map((contact, index) => (
        <div key={index} className="contact_card">
          <div className="contact_content">
            <span>Nome: {contact.name}</span>
            <span>Email: {contact.email}</span>
            <span>Telefone: {contact.number}</span>
            <button onClick={() => handleclick(contact.id)}>Deletar</button>
          </div>
        </div>))
        }
      </div>
    </>
  );
};

export default ContactsList;