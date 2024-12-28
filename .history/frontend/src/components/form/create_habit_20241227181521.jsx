import React from 'react'

const CreateHAbit = () => {
  return (
  <>
  <form>
  <div ="form-row">
    <div ="form-group col-md-6">
      <label for="inputEmail4">Email</label>
      <input type="email" ="form-control" id="inputEmail4" placeholder="Email"></input>
    </div>
    <div ="form-group col-md-6">
      <label for="inputPassword4">Password</label>
      <input type="password" ="form-control" id="inputPassword4" placeholder="Password">
      </input> </div>
  </div>
  <div ="form-group">
    <label for="inputAddress">Address</label>
    <input type="text" ="form-control" id="inputAddress" placeholder="1234 Main St">
    </input> </div>
  <div ="form-group">
    <label for="inputAddress2">Address 2</label>
    <input type="text" ="form-control" id="inputAddress2" placeholder="Apartment, studio, or floor">
    </input></div>
  <div ="form-row">
    <div ="form-group col-md-6">
      <label for="inputCity">City</label>
      <input type="text" ="form-control" id="inputCity"></input>
    </div>
    <div ="form-group col-md-4">
      <label for="inputState">State</label>
      <select id="inputState" ="form-control">
        <option selected>Choose...</option>
        <option>...</option>
      </select>
    </div>
    <div ="form-group col-md-2">
      <label for="inputZip">Zip</label>
      <input type="text" ="form-control" id="inputZip"></input>
    </div>
  </div>
  <div ="form-group">
    <div ="form-check">
      <input ="form-check-input" type="checkbox" id="gridCheck"></input>
      <label ="form-check-label" for="gridCheck">
        Check me out
      </label>
    </div>
  </div>
  <button type="submit" ="btn btn-primary">Sign in</button>
</form>
</>
  )
}

export default CreateHAbit
