import React from 'react';

export default function Navbar(props) {
  return (
    <>
        
        <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
        <a className="navbar-brand" href="/">{props.title}</a>
        </nav>
        
    </>
   
  )
}
