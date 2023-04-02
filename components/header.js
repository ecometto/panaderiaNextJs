import { useState } from "react"

function Header() {

  // const [show, setShow] = useState("navbar-collapse collapse show")
  
  function toggle(e){
    var coll = document.querySelector('.collapse')
    coll.classList.value==="navbar-collapse collapse show" ?
   coll.classList.remove('show'):""
  }
  return (
  
    <header id="inicio1" className=" fondo fixed-top bg-light">
      <div className="float-start ">
        <img id="logo" className="" src="img/logo.jpg" alt="" width="80px" height="60px" />
      </div>


      <nav className="navbar navbar-expand-md navbar-light ">
        <div className="container-fluid">
          <a className="navbar-brand text-light" href="#">Dulce Catalina</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          
          <div  onClick={toggle} className="navbar-collapse collapse" id="navbarNav">
            <ul  className="navbar-nav ml-auto">
              <li className="nav-item mx-4">
                <a className="nav-link fw-bold text-light" href="#nosotros">Nosotros</a>
              </li>
              <li className="nav-item mx-4">
                <a className="nav-link fw-bold text-light " href="#productos">Productos</a>
              </li>
              <li className="nav-item mx-4">
                <a className="nav-link fw-bold text-light" href="#sucursales">Sucursales</a>
              </li>
              <li className="nav-item mx-4">
                <a className="nav-link fw-bold text-light " href="#contacto">Contacto</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>

    </header>

  )
}

export default Header