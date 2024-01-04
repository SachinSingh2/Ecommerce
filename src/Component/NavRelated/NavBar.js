import React from "react";
import "../../css/Navbar.css";
import SearchBar from "./SearchBar";
import {Link} from 'react-router-dom'

export default function NavBar() {

  const handleOnLogout = ()=>{
    // setIsUserAuth(false)
    window.location.reload()
  }

  return (
    <>
      {/* <!-- Navbar --> */}
      <nav id="NavTop" style={{boxShadow:"none"}} className="navbar UpperNav navbar-expand-lg ">
        {/* <!-- Container wrapper --> */}
        <div className="container-fluid">
          {/* <!-- Toggle button --> */}
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="offcanvas"
            data-bs-target="#offcanvasExample"
            style={{color:"white"}}
            aria-controls="offcanvasExample"
          >
            <i className="fas fa-bars"></i>
          </button>

          {/* <!-- Collapsible wrapper --> */}
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            {/* <!-- Centered Navbar brand --> */}
            <Link className="navbar-brand mx-auto" to="/">
              <h1  style={{marginLeft:"100px" , color:"white"}}>PurePicks</h1>
            </Link>
            <hr />
          </div>

          <div className="IconWhenFull">
          <Link className="navbar-brand mx-auto" to="/">
              <h4 style={{marginLeft:"10px" , color:"white"}} >PurePicks</h4>
            </Link>
          </div>

          {/* <!-- Right elements --> */}
          <div className="d-flex align-items-center">
            {/* <!-- Icon --> */}
            <Link className="link-secondary me-3" to="/cartpage">
              <i style={{color:"white"}} className="fas fa-shopping-cart"></i>
            </Link>

            {/* <!-- Notifications --> */}
            <div className="dropdown">
              <a
                className="link-secondary me-3 dropdown-toggle hidden-arrow"
                href="#"
                id="navbarDropdownMenuLink"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                {/* Search Toggle */}
                <a
                  type="button"
                  data-bs-toggle="offcanvas"
                  data-bs-target="#offcanvasTop"
                  aria-controls="offcanvasTop"
                >
                  <i style={{color:"white"}} className="fas fa-search"></i>
                </a>
              </a>
              <ul
                className="dropdown-menu dropdown-menu-end"
                aria-labelledby="navbarDropdownMenuLink"
              >
                <li>
                  <a className="dropdown-item" href="#">
                    Some news
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    Another news
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    Something else here
                  </a>
                </li>
              </ul>
            </div>

            {/* <!-- Avatar --> */}
            <div className="dropdown">
              <a
                className="dropdown-toggle d-flex align-items-center hidden-arrow"
                href="#"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
<i style={{color:"white"}} className="fas fa-user"></i>
              </a>
              <ul
                className="dropdown-menu dropdown-menu-end"
                aria-labelledby="navbarDropdownMenuAvatar"
              >
                <li>
                  <a className="dropdown-item" href="#">
                    My profile
                  </a>
                </li>
                <li>
                  <Link className="dropdown-item" to="/VendorSignUp">
                    Be a Vendor
                  </Link>
                </li>

                <li>
                  <Link className="dropdown-item" to="/VendorLogin">
                    Add Product
                  </Link>
                </li>




                <li>
                  <a onClick={handleOnLogout} className="dropdown-item" href="#">
                    Logout
                  </a>
                </li>
              </ul>
            </div>
          </div>
          {/* <!-- Right elements --> */}
        </div>

        {/* <!-- Container wrapper --> */}
      </nav>
      

      {/* ----------------------------------------- Navigation here ------------------------------------------------------*/}

      {/* ---------------------------------- */}
      <nav
        style={{ boxShadow: "none" }}
        className="navbar  NavigationBar py-3 navbar-expand-lg "
      >
        {/* <!-- Container wrapper --> */}
        <div className="container-fluid">
          {/* <!-- Toggle button --> */}
          <button
            data-mdb-collapse-init
            className="navbar-toggler"
            type="button"
            data-mdb-target="#navbarCenteredExample"
            aria-controls="navbarCenteredExample"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <i className="fas fa-bars"></i>
          </button>

          {/* <!-- Collapsible wrapper --> */}
          <div
            className="collapse navbar-collapse justify-content-center"
            id="navbarCenteredExample"
          >
            {/* <!-- Left links --> */}
            <ul className="navbar-nav NavigationLinks mb-2 mb-lg-0">
              
              <li className="nav-item">
                <Link to='/gaming' style={{margin:"0px 3px"}} className="nav-link active" aria-current="page" >
                  Gaming
                </Link>
              </li>

              <li className="nav-item">
                <Link to='/electronics' style={{margin:"0px 3px"}} className="nav-link active" aria-current="page" >
                  Electronics
                </Link>
              </li>

              <li className="nav-item">
                <Link to='/skincare' style={{margin:"0px 3px"}} className="nav-link active" aria-current="page" >
                  Skin Care
                </Link>
              </li>

              <li className="nav-item">
                <Link to='/fashion' style={{margin:"0px 3px"}} className="nav-link active" aria-current="page" >
                  Fashion
                </Link>
              </li>

              <li className="nav-item">
                <Link to='/bestSelling' style={{margin:"0px 3px"}} className="nav-link active" aria-current="page" >
                  Best-selling
                </Link>
              </li>

              <li className="nav-item">
                <Link to='/newArrival' style={{margin:"0px 3px"}} className="nav-link active" aria-current="page" >
                  New Arrival
                </Link>
              </li>

            </ul>
            {/* <!-- Left links --> */}
          </div>
          {/* <!-- Collapsible wrapper --> */}
        </div>
        {/* <!-- Container wrapper --> */}
      </nav>

      {/* ----------------------------------------------------------------------------------------------------------------- */}

      {/* Offcanvas for Search */}
      <div
        className="offcanvas offcanvas-top"
        tabIndex="-1"
        id="offcanvasTop"
        aria-labelledby="offcanvasTopLabel"
        style={{ height: "60%" , opacity:"0.9" }}
      >
        <div className="border border-dark offcanvas-body">
          <div className="SearchBox">
            <SearchBar />
          </div>
        </div>
      </div>

      {/* Left canvas */}
      <div
        className="offcanvas offcanvas-start"
        tabIndex="-1"
        id="offcanvasExample"
        aria-labelledby="offcanvasExampleLabel"
      >
        <div className="offcanvas-header">
          <img
            src="https://mdbcdn.b-cdn.net/img/logo/mdb-transaprent-noshadows.webp"
            height="15"
            alt="MDB Logo"
            loading="lazy"
          />

          {/* Cross button */}
          <button
            type="button"
            className="btn-close"
            data-bs-dismiss="offcanvas"
            aria-label="Close"
          ></button>
        </div>

        <div className="offcanvas-body">
          {/* The links tags will be here */}
          <ul className="navbar-nav mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className="nav-link active" aria-current="page" to="/gaming">
                Gaming
              </Link>
            </li>
            <hr />
            <li className="nav-item">
              <Link className="nav-link active" aria-current="page" to="/electronics">
                Electronics
              </Link>
            </li>
            <hr />

            <li className="nav-item">
              <Link className="nav-link active" aria-current="page" to="/skincare">
                Skin Care
              </Link>
            </li>
            <hr />

            <li className="nav-item">
              <Link className="nav-link active" aria-current="page" to="/fashion">
                Fashion
              </Link>
            </li>
            <hr />

            <li className="nav-item">
              <Link className="nav-link active" aria-current="page" to="/bestselling">
                Best-selling
              </Link>
            </li>
            <hr />

            <li className="nav-item">
              <Link className="nav-link active" aria-current="page" to="/newarrival">
                New Arrival
              </Link>
            </li>
            <hr />

            <div className="socialBox p-2">
              {/* <!-- Facebook --> */}
              <i class="mx-2 fa-xl fab fa-facebook-f"></i>

              {/* <!-- Twitter --> */}
              <i class="mx-2 fa-xl fab fa-twitter"></i>

              {/* <!-- Google --> */}
              <i class=" mx-2 fa-xl fab fa-google"></i>

              {/* <!-- Instagram --> */}
              <i class="mx-2 fa-xl fab fa-instagram"></i>
            </div>
          </ul>
        </div>
      </div>
    </>
  );
}
