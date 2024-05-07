import React from 'react'
import propTypes from 'prop-types'
export default function Header(props) {
  return (
    <div>
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
  <div className="container-fluid">
    <a className="navbar-brand" href="#">{props.title}</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="#">Create</a>
        </li>
        <li className="nav-item">
          <a className="nav-link active" href="#">Update</a>
        </li>
        <li className="nav-item">
          <a className="nav-link active" href="#">Read</a>
        </li>
      </ul>
      {props.searchBar?<form className="d-flex" role="search">
        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
        <button className="btn btn-outline-success" type="submit">Search</button>
      </form>:" "}
    </div>
  </div>
</nav>
    </div>
  )
}

//sets default prop
Header.defaultProps = {
  //will display Your title here when no title is passed through props
title : "Your title here",
searchBar: true
}
Header.propTypes = {
  title:propTypes.string,
  //isRequired makes passing of searchBar mandatory
  searchBar: propTypes.bool.isRequired
}