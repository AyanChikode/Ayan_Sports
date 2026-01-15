import React from "react";

function Home() {
  return (
    <>
      {/* ===== HERO CAROUSEL ===== */}
      <div
        id="carouselExampleControls"
        className="carousel slide"
        data-bs-ride="carousel"
      >
        <div className="carousel-inner">

          <div className="carousel-item active">
            <img
              src="/assets/images/cricket1.png"
              className="d-block w-100 carousel-img"
              alt="Cricket"
            />
          </div>

          <div className="carousel-item">
            <img
              src="/assets/images/football.png"
              className="d-block w-100 carousel-img"
              alt="Football"
            />
          </div>

          <div className="carousel-item">
            <img
              src="/assets/images/Tennis.png"
              className="d-block w-100 carousel-img"
              alt="Tennis"
            />
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

      {/* ===== SECTION TITLE ===== */}
      <div className="text-center py-5 bg-dark text-light">
        <h1 className="fw-bold">Legendary Sports Icons</h1>
        <p className="text-muted">Cricket · Football · Tennis</p>
      </div>

      {/* ===== PLAYERS SECTION ===== */}
      <div className="container my-5">
        <div className="row g-4">

          {/* Kohli */}
          <div className="col-lg-4 col-md-6">
            <div className="card shadow-lg border-0 text-center">
              <img
                src="/assets/images/kohli.png"
                className="card-img-top player-img"
                alt="Virat Kohli"
              />
              <div className="card-body">
                <h5 className="card-title">Virat Kohli</h5>
                <p className="text-muted">Cricket Legend</p>
              </div>
            </div>
          </div>

          {/* Ronaldo */}
          <div className="col-lg-4 col-md-6">
            <div className="card shadow-lg border-0 text-center">
              <img
                src="/assets/images/ronaldo.png"
                className="card-img-top player-img"
                alt="Cristiano Ronaldo"
              />
              <div className="card-body">
                <h5 className="card-title">Cristiano Ronaldo</h5>
                <p className="text-muted">Football Superstar</p>
              </div>
            </div>
          </div>

          {/* Nadal */}
          <div className="col-lg-4 col-md-6">
            <div className="card shadow-lg border-0 text-center">
              <img
                src="/assets/images/nadal.png"
                className="card-img-top player-img"
                alt="Rafael Nadal"
              />
              <div className="card-body">
                <h5 className="card-title">Rafael Nadal</h5>
                <p className="text-muted">Tennis Champion</p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </>
  );
}

export default Home;
