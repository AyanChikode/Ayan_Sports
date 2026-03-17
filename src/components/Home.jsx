import React from "react";
import "./Home.css";

function Home() {
  return (
    <>
      {/* ===== HERO CAROUSEL ===== */}
      <div
id="carouselExampleControls"
className="carousel slide"
data-bs-ride="carousel"
data-bs-interval="2000"
>

<div className="carousel-inner">

<div className="carousel-item active">
<img
src="https://t4.ftcdn.net/jpg/07/26/62/19/360_F_726621932_OyC1fforp6EH8V9APDDqO9S1MiIIPrs5.jpg"
className="d-block w-100 carousel-img"
alt="Cricket"
/>
</div>

<div className="carousel-item">
<img
src="https://media.istockphoto.com/id/177427917/photo/close-up-of-red-cricket-ball-and-bat-sitting-on-grass.jpg?s=612x612&w=0&k=20&c=DcorerbBUeDNTfld3OclgHxCty4jih2yDCzipffX6zw="
className="d-block w-100 carousel-img"
alt="Football"
/>
</div>

<div className="carousel-item">
<img
src="https://t3.ftcdn.net/jpg/05/10/55/58/360_F_510555809_gSP39J8OgWzaMf21CTnqV7CTXU12rP3K.jpg"
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

      {/* ===== TITLE ===== */}
      <div className="text-center py-5 bg-dark text-light">
        <h1 className="fw-bold">Legendary Sports Icons</h1>
        <p className="text-muted">Cricket · Football · Tennis</p>
      </div>

      {/* ===== PLAYERS ===== */}
      <div className="container my-5">
        <div className="row g-4">

          {/* Virat Kohli */}
          <div className="col-lg-4 col-md-6">
            <div className="card player-card">
              <img
                src="https://i.pinimg.com/236x/11/13/11/111311c76e6078fbf0c6a511c5f8c2b7.jpg"
                className="card-img-top player-img"
                alt="Virat Kohli"
              />
              <div className="card-body">
                <h5 className="card-title">Virat Kohli</h5>
                <p className="text-muted">Cricket</p>
                <p>
                    Former captain of the Indian cricket team and one of the greatest modern batsmen, 
                    known for his aggressive style and consistency in all formats.
                </p>
              </div>
            </div>
          </div>

          {/* Cristiano Ronaldo */}
          <div className="col-lg-4 col-md-6">
            <div className="card player-card">
              <img
                src="https://media.crictracker.com/media/featureimage/2021/04/MS-Dhoni-World-Cup-2011.jpg"
                className="card-img-top player-img"
                alt="Cristiano Ronaldo"
              />
              <div className="card-body">
                <h5 className="card-title">MS Dhoni</h5>
                <p className="text-muted">Cricket</p>
                <p className="text-muted">
                  Legendary Indian captain who led India to the 2007 T20 World Cup, 
                  2011 ODI World Cup, and 2013 Champions Trophy, famous for his calm finishing ability.
                </p>
              </div>
            </div>
          </div>

          {/* Rohit Sharma */}
          <div className="col-lg-4 col-md-6">
            <div className="card player-card">
              <img
                src="https://goyahills.com/wp-content/uploads/2025/03/rohit-sharma.jpg"
                className="card-img-top player-img"
                alt="Rohit Sharma"
              />
              <div className="card-body">
                <h5 className="card-title">Rohit Sharma</h5>
                <p className="text-muted">Cricket</p>
                <p>
                  Indian cricket captain famous for elegant batting and
                  record-breaking double centuries in ODI cricket.
                </p>
              </div>
            </div>
          </div>

          {/* Rafael Nadal */}
          <div className="col-lg-4 col-md-6">
            <div className="card player-card">
              <img
                src="https://media.gettyimages.com/id/2156157054/photo/india-1983-cricket-world-cup-winners.jpg?s=594x594&w=gi&k=20&c=6zAPEqzcZZ1uarUTShRVpmkSfoIHIHM_IvSO5tyJsEY="
                className="card-img-top player-img"
                alt="Rafael Nadal"
              />
              <div className="card-body">
                <h5 className="card-title">Kapil Dev</h5>
                <p className="text-muted">Cricket</p>
                <p>
                  India’s first World Cup–winning captain who led the team to victory in the 1983 Cricket World Cup,
                   inspiring a new era of Indian cricket.
                </p>
              </div>
            </div>
          </div>

          {/* Lionel Messi */}
          <div className="col-lg-4 col-md-6">
            <div className="card player-card">
              <img
                src="https://i.pinimg.com/736x/22/e8/64/22e86453ecf0b4f62c3ba7a80711ac56.jpg"
                className="card-img-top player-img"
                alt="Lionel Messi"
              />
              <div className="card-body">
                <h5 className="card-title">Sachin Tendulkar</h5>
                <p className="text-muted">Cricket</p>
                <p>
                  Known as the “Master Blaster ”, 
                  he holds records for the most runs and centuries in international cricket.
                </p>
              </div>
            </div>
          </div>

          {/* Novak Djokovic */}
          <div className="col-lg-4 col-md-6">
            <div className="card player-card">
              <img
                src="https://data1.ibtimes.co.in/en/full/645926/yuvraj-singh.jpg?h=450&l=50&t=40"
                className="card-img-top player-img"
                alt="Novak Djokovic"
              />
              <div className="card-body">
                <h5 className="card-title">Yuvraj Singh</h5>
                <p className="text-muted">Cricket</p>
                <p>
                 Indian all-rounder and hero of the 2011 World Cup, 
                 famous for hitting six sixes in an over in the 2007 T20 World Cup.
                </p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </>
  );
}

export default Home;