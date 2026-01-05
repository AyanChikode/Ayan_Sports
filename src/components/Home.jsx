import React from "react";

function Home() {
  return (
    <>
    
    <div
      id="carouselExampleControls"
      className="carousel slide"
      data-bs-ride="carousel" 
    >
      <h1 className="text-center bg-info">Hello</h1>
      <div className="carousel-inner">
        <div className="carousel-item active">
          <img src="/cricket1.png" className="d-block w-100" alt="1" />
        </div>

        <div className="carousel-item">
          <img src="/football.png" className="d-block w-100" alt="2" />
        </div>

        <div className="carousel-item">
          <img src="/Tennis.png" className="d-block w-100" alt="3" />
        </div>
      </div>

      <button
        className="carousel-control-prev"
        type="button"
        data-bs-target="#carouselExampleControls"
        data-bs-slide="prev"
      >
        <span className="carousel-control-prev-icon"></span>
      </button>

      <button
        className="carousel-control-next"
        type="button"
        data-bs-target="#carouselExampleControls"
        data-bs-slide="next"
      >
        <span className="carousel-control-next-icon"></span>
      </button>
    </div>
   <div className="container">
  <div className="row">
    
    <div className="col-lg-4">
      <img
        src="/kohli.png"
        alt=""
        className="img-fluid ms-5 mt-5 mb-5"
        style={{ width: "500px", height: 585 }}
      />
    </div>

    <div className="col-lg-4">
      <img
        src="/ronaldo.png"
        alt=""
        className="img-fluid ms-5 mt-5 mb-5"
        style={{ width: "500px" }}
      />
    </div>
     <div className="col-lg-4">
      <img
        src="/nadal.png"
        alt=""
        className="img-fluid ms-5 mt-5 mb-5"
        style={{ width: "500px", height: 585}}
      />
    </div>

  </div>
</div>

   
    </>
    
  );
}

export default Home;
