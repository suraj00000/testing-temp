import React from 'react'

function Alret(props) {
  return (
    
  <div style={{height:'40px'}}>
   { props.alret && 
    <div className= {`alert alert-${props.alret.type} alert-dismissible fade show`} role="alert">
    {props.alret.type} : {props.alret.msg}
    <button type="button" className="close" data-dismiss="alert" aria-label="Close">
      <span aria-hidden="true">&times;</span>
    </button>
    </div>}
  </div>

  )
}

export default Alret
