import React from 'react'

const Navbar = () => {
  return (
   <>
   <nav ="navbar navbar-expand-lg navbar-light bg-body-tertiary">
  
  <div ="container-fluid">
    
    <button
      data-mdb-collapse-init
      ="navbar-toggler"
      type="button"
      data-mdb-target="#navbarSupportedContent"
      aria-controls="navbarSupportedContent"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
      <i ="fas fa-bars"></i>
    </button>

    
    <div ="collapse navbar-collapse" id="navbarSupportedContent">
      
      <a ="navbar-brand mt-2 mt-lg-0" href="#">
        <img
          src="https://mdbcdn.b-cdn.net/img/logo/mdb-transaprent-noshadows.webp"
          height="15"
          alt="MDB Logo"
          loading="lazy"
        />
      </a>
      
      <ul ="navbar-nav me-auto mb-2 mb-lg-0">
        <li ="nav-item">
          <a ="nav-link" href="#">Dashboard</a>
        </li>
        <li ="nav-item">
          <a ="nav-link" href="#">Team</a>
        </li>
        <li ="nav-item">
          <a ="nav-link" href="#">Projects</a>
        </li>
      </ul>
      
    </div>
    

    
    <div ="d-flex align-items-center">

      <a ="text-reset me-3" href="#">
        <i ="fas fa-shopping-cart"></i>
      </a>


      <div ="dropdown">
        <a
          data-mdb-dropdown-init
          ="text-reset me-3 dropdown-toggle hidden-arrow"
          href="#"
          id="navbarDropdownMenuLink"
          role="button"
          aria-expanded="false"
        >
          <i ="fas fa-bell"></i>
          <span ="badge rounded-pill badge-notification bg-danger">1</span>
        </a>
        <ul
          ="dropdown-menu dropdown-menu-end"
          aria-labelledby="navbarDropdownMenuLink"
        >
          <li>
            <a ="dropdown-item" href="#">Some news</a>
          </li>
          <li>
            <a ="dropdown-item" href="#">Another news</a>
          </li>
          <li>
            <a ="dropdown-item" href="#">Something else here</a>
          </li>
        </ul>
      </div>
      <div ="dropdown">
        <a
          data-mdb-dropdown-init
          ="dropdown-toggle d-flex align-items-center hidden-arrow"
          href="#"
          id="navbarDropdownMenuAvatar"
          role="button"
          aria-expanded="false"
        >
          <img
            src="https://mdbcdn.b-cdn.net/img/new/avatars/2.webp"
            ="rounded-circle"
            height="25"
            alt="Black and White Portrait of a Man"
            loading="lazy"
          />
        </a>
        <ul
          ="dropdown-menu dropdown-menu-end"
          aria-labelledby="navbarDropdownMenuAvatar"
        >
          <li>
            <a ="dropdown-item" href="#">My profile</a>
          </li>
          <li>
            <a ="dropdown-item" href="#">Settings</a>
          </li>
          <li>
            <a ="dropdown-item" href="#">Logout</a>
          </li>
        </ul>
      </div>
    </div>
  </div>
</nav>
</>
  )
}

export default Navbar
