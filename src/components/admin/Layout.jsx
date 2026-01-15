import React from 'react'
import { Link, Outlet, useNavigate } from 'react-router-dom'

function Layout() {
  const navigate = useNavigate();

  function handleLogout() {
    localStorage.removeItem("isLoggedIn");
    navigate("/adminlogin");
  }

  return (
    <div className="container-fluid">
      <div className="row">

        {/* Sidebar */}
        <div className="col-lg-2">
          <nav className="d-lg-block sidebar bg-white">
            <div className="position-sticky">
              <div className="list-group list-group-flush mx-3 mt-4">

                <Link to={"/admin"} className="list-group-item list-group-item-action py-2">
                  Main Dashboard
                </Link>

                <Link to={"/admin/addproduct/"} className="list-group-item list-group-item-action py-2">
                  Add Product
                </Link>

                <Link to={"/admin/products"} className="list-group-item list-group-item-action py-2">
                  Products
                </Link>

                <button onClick={handleLogout} className="btn btn-danger mt-3">
                  LOGOUT
                </button>

              </div>
            </div>
          </nav>
        </div>

        {/* Main Content */}
        <div className="col-lg-10">
          <Outlet />
        </div>

      </div>
    </div>
  )
}

export default Layout
