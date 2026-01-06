import React from 'react'

function Cricket() {
  return (
    <>
    <h1>Cricket</h1>
    
    <div className="container-fluid">
      <div className="row">
        <div className='col-lg-2'>
          <div className='card shadow'>
            <div className='card- body text-center'>
              <h3 href="Home" className='card-title mt-3'>Sports</h3>
              <a href="Home" className='card-title'><button>Circket</button><br/></a><br/>
              <a href="Home" className='card-title'><button>Football</button></a><br/>
              <a href="Home" className='card-title'><button>Tennis</button></a>
            </div>
          </div>
        </div>
        <div className="col-lg-2">
          <div className="card shadow">
            <div className="card-body text-center ">
              <img
              src="SGbat3.png"
              className="card-img-top"
              alt="Card"
              
            />
              <p className="card-text"><i class="fa-solid fa-indian-rupee-sign"></i>2100</p>
            </div>
          </div>
        </div>
        <div className="col-lg-2">
          <div className="card shadow">
            <div className="card-body text-center">
               <img
              src="SGbat2.png"
              className="card-img-top"
              alt="Card"
            />
              <span className="card-title">SG Sierra Plus Kashmir Willow Cricket Bat</span>
              <p className="card-text" ><i class="fa-solid fa-indian-rupee-sign"></i>1599.00</p>
            </div>
          </div>
        </div>

        <div className="col-lg-2">
          <div className="card shadow">
            <div className="card-body text-center">
               <img
              src="SGbat1.png"
              className="card-img-top"
              alt="Card"
             
            />
              <h5 className="card-title">Card 3</h5>
              <p className="card-text">Responsive Design</p>
            </div>
          </div>
        </div>

      </div>
    </div>
    </>
  )
}
//  <div className="container d-flex justify-content-center align-items-center vh-100">
//         <div className="card shadow p-4" style={{ width: "350px" }}>
//           <h3 className="text-center mb-4 text-dark">Login</h3>

//           <form onSubmit={handleSubmit}>
//             <div className="mb-3">
//               <label className="form-label text-dark">Name</label>
//               <input
//                 id="name"
//                 className="form-control"
//                 placeholder="Enter Name"
//                 onChange={handleChange}
//               />
//             </div>

//             <div className="mb-3">
//               <label className="form-label text-dark">Password</label>
//               <input
//                 id="password"
//                 type="password"
//                 className="form-control"
//                 placeholder="Enter password"
//                 onChange={handleChange}
//               />
//             </div>

//             <button type="submit" className="btn btn-dark w-100">
//               Login
//             </button>
//           </form>
//         </div>
//       </div>
export default Cricket