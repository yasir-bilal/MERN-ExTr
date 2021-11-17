import React, { useState } from 'react';
import Form from '../Form/Form'



function Popup() {
  const [showForm, setShowForm] = useState(false);
  const openForm = () => {
    setShowForm(!showForm);
  }


  return (
      
    <div>
        
      <form>
        <button style={{color: "red"}} fullWidth onClick={openForm}>Click me</button>
      </form>

      {showForm && (
         <Form/>
      )}
    </div>
  )
}

export default Popup;