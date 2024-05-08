import React from 'react'
import '../MyComponents/Todos.css'
import propTypes from 'prop-types'

export default function Todos(porps) {
  return (
    <>
    <h1 className='AboutHeading'>About....</h1>
    <p className='Discription'>       A CRUD app is a specific type of software application that revolves around four fundamental operations:

Create: This operation allows you to add new data to your application. For instance, in a library management app, you can create a new book record.
Read: The read operation lets you retrieve data from your database. It doesn't alter data; it simply displays it. You can query your database to fetch all records (e.g., all books in the library) or specific records based on criteria (e.g., vegan recipes).

Update: With the update operation, you can modify existing data. For example, you might update a book's details (e.g., change the author or update the publication year).

Delete: The delete operation allows you to remove data from your database. If you want to remove a book from your library, this operation handles it.             </p>

<hr/>
<hr/>
<div class="mb-3">
  <label for="exampleFormControlInput1" class="form-label">Email address</label>
  <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="name@example.com" value={user.email}/>
</div>
<div class="mb-3">
  <label for="exampleFormControlTextarea1" class="form-label">Enter Data</label>
  <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
  <button className='create'>Create</button>
</div>

<h2>empty <span class="badge text-bg-secondary"><button id='DeleteButton'>Delete</button> <button id='EditButton'>Edit</button></span></h2>

    </>
  )
}

