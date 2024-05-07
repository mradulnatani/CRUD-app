import React from 'react'

export default function Todos(porps) {
  return (
    <>
    <h1>About....</h1>
    <span>       A CRUD app is a specific type of software application that revolves around four fundamental operations:

Create: This operation allows you to add new data to your application. For instance, in a library management app, you can create a new book record.
Read: The read operation lets you retrieve data from your database. It doesn't alter data; it simply displays it. You can query your database to fetch all records (e.g., all books in the library) or specific records based on criteria (e.g., vegan recipes).

Update: With the update operation, you can modify existing data. For example, you might update a book's details (e.g., change the author or update the publication year).

Delete: The delete operation allows you to remove data from your database. If you want to remove a book from your library, this operation handles it.             </span>

<hr/>
<hr/>
    <div className= "Container">
      <form>
        Enter gmail id :<input type='text' className='mailid'/>
        <br/><br/>
        Enter data to be entered : <input type='text' className='inputdata'/>
        <br/><br/>
        <button id='create'>Create</button>
      </form>     
    </div>
    </>
  )
}

