import React from 'react'

const CreateHAbit = () => {
  return (
  <>
  <form>
  <div className="form-row">
    <div className="form-group col-md-6">
      <label lablefo"inputEmail4">Email</label>
      <input type="email" className="form-control" id="inputEmail4" placeholder="Email"></input>
    </div>
    <div className="form-group col-md-6">
      <label lablefo"inputPassword4">Password</label>
      <input type="password" className="form-control" id="inputPassword4" placeholder="Password">
      </input> </div>
  </div>
  <div className="form-group">
    <label lablefo"inputAddress">Address</label>
    <input type="text" className="form-control" id="inputAddress" placeholder="1234 Main St">
    </input> </div>
  <div className="form-group">
    <label lablefo"inputAddress2">Address 2</label>
    <input type="text" className="form-control" id="inputAddress2" placeholder="Apartment, studio, or floor">
    </input></div>
  <div className="form-row">
    <div className="form-group col-md-6">
      <label lablefo"inputCity">City</label>
      <input type="text" className="form-control" id="inputCity"></input>
    </div>
    <div className="form-group col-md-4">
      <label lablefo"inputState">State</label>
      <select id="inputState" className="form-control">
        <option selected>Choose...</option>
        <option>...</option>
      </select>
    </div>
    <div className="form-group col-md-2">
      <label lablefo"inputZip">Zip</label>
      <input type="text" className="form-control" id="inputZip"></input>
    </div>
  </div>
  <div className="form-group">
    <div className="form-check">
      <input className="form-check-input" type="checkbox" id="gridCheck"></input>
      <label className="form-check-label" lablefo"gridCheck">
        Check me out
      </label>
    </div>
  </div>
  <button type="submit" className="btn btn-primary">Sign in</button>
</form>
</>
  )
}

export default CreateHAbit