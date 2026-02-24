import React from "react";
{/* "rzp_test_4yosHYDduPYmKN" */}
function About() {
  return (
    <>
      <section className="py-5 bg-light">
        <div className="container">

          {/* ===== Heading ===== */}
          <div className="row justify-content-center mb-5">
            <div className="col-lg-8 text-center">
              <h2 className="display-5 fw-bold">Our Best Offers</h2>
              <p className="text-secondary lead mt-3">
                We deliver top-quality sports gear, accessories, and services
                trusted by professionals and enthusiasts alike.
              </p>
              <hr className="w-25 mx-auto mt-4" />
            </div>
          </div>

          {/* ===== Content ===== */}
          <div className="row align-items-center g-5">

            {/* Image */}
            <div className="col-lg-6">
              <img
                src="https://png.pngtree.com/png-clipart/20250101/original/pngtree-a-collection-of-sports-equipment-including-cricket-player-png-image_18458144.png"
                alt="Sports Equipment"
                className="img-fluid rounded shadow"
              />
            </div>

            {/* Text Content */}
            <div className="col-lg-6">

              {/* Services */}
              <div className="card border-0 shadow-sm mb-4">
                <div className="card-body">
                  <h4 className="card-title mb-3">Our Services</h4>
                  <ul className="list-unstyled row">
                    {[
                      "Tune-Up Services",
                      "Wheel Services",
                      "Brake Services",
                      "Drivetrain Services",
                      "Suspension Services",
                      "Frame Services",
                    ].map((item, index) => (
                      <li key={index} className="col-md-6 mb-2 d-flex align-items-center gap-2">
                        <i className="fa-solid fa-check text-primary"></i>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Accessories */}
              <div className="card border-0 shadow-sm mb-4">
                <div className="card-body">
                  <h4 className="card-title mb-3">Accessory Installation</h4>
                  <ul className="list-unstyled row">
                    {[
                      "Handlebar Tape Installation",
                      "Pedal Installation",
                      "Fender Installation",
                      "Rack & Pannier Installation",
                    ].map((item, index) => (
                      <li key={index} className="col-md-6 mb-2 d-flex align-items-center gap-2">
                        <i className="fa-solid fa-check text-primary"></i>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Button */}
              <a href="#!" className="btn btn-dark px-4 py-2">
                Explore More <i className="fa-solid fa-arrow-right ms-2"></i>
              </a>

            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default About;
