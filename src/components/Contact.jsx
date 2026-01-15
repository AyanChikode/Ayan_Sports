import React from "react";

function Contact() {
  return (
    <>
      <section className="bg-light py-5">
        <div className="container">
          <div className="row g-5 align-items-center">

            {/* ===== LEFT CONTENT ===== */}
            <div className="col-lg-6">
              <h2 className="fw-bold mb-3">Get in Touch</h2>
              <p className="lead text-secondary mb-5">
                We’d love to hear from you. Reach out to us anytime using the
                details below or send us a message.
              </p>

              {/* Address */}
              <div className="d-flex mb-4">
                <i className="fa-solid fa-location-dot fa-2x text-primary me-4"></i>
                <div>
                  <h5>Address</h5>
                  <p className="text-secondary mb-0">
                    8014 Edith Blvd NE, Albuquerque, New York, USA
                  </p>
                </div>
              </div>

              {/* Phone & Email */}
              <div className="row mb-4">
                <div className="col-md-6 d-flex mb-3 mb-md-0">
                  <i className="fa-solid fa-phone fa-2x text-primary me-4"></i>
                  <div>
                    <h5>Phone</h5>
                    <a href="tel:+15057922430" className="text-secondary text-decoration-none">
                      (505) 792-2430
                    </a>
                  </div>
                </div>

                <div className="col-md-6 d-flex">
                  <i className="fa-solid fa-envelope fa-2x text-primary me-4"></i>
                  <div>
                    <h5>Email</h5>
                    <a href="mailto:demo@yourdomain.com" className="text-secondary text-decoration-none">
                      demo@yourdomain.com
                    </a>
                  </div>
                </div>
              </div>

              {/* Hours */}
              <div className="d-flex">
                <i className="fa-solid fa-clock fa-2x text-primary me-4"></i>
                <div>
                  <h5>Opening Hours</h5>
                  <p className="mb-1 text-secondary">
                    <strong>Mon – Fri:</strong> 9am – 5pm
                  </p>
                  <p className="text-secondary">
                    <strong>Sat – Sun:</strong> 9am – 2pm
                  </p>
                </div>
              </div>
            </div>

            {/* ===== CONTACT FORM ===== */}
            <div className="col-lg-6">
              <div className="bg-white p-4 p-md-5 rounded shadow">
                <form>
                  <div className="mb-3">
                    <label htmlFor="fullname" className="form-label">
                      Full Name <span className="text-danger">*</span>
                    </label>
                    <input type="text" className="form-control" id="fullname" required />
                  </div>

                  <div className="row">
                    <div className="col-md-6 mb-3">
                      <label htmlFor="email" className="form-label">
                        Email <span className="text-danger">*</span>
                      </label>
                      <input type="email" className="form-control" id="email" required />
                    </div>

                    <div className="col-md-6 mb-3">
                      <label htmlFor="phone" className="form-label">Phone</label>
                      <input type="tel" className="form-control" id="phone" />
                    </div>
                  </div>

                  <div className="mb-3">
                    <label htmlFor="subject" className="form-label">
                      Subject <span className="text-danger">*</span>
                    </label>
                    <input type="text" className="form-control" id="subject" required />
                  </div>

                  <div className="mb-4">
                    <label htmlFor="message" className="form-label">
                      Message <span className="text-danger">*</span>
                    </label>
                    <textarea className="form-control" id="message" rows="4" required></textarea>
                  </div>

                  <button className="btn btn-dark w-100 py-2" type="submit">
                    Send Message
                  </button>
                </form>
              </div>
            </div>

          </div>
        </div>
      </section>
    </>
  );
}

export default Contact;
