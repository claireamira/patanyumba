import React from "react";
import slide1 from "../assets/slide1.jpg"
import slide2 from "../assets/slide2.jpg"
import slide3 from "../assets/slide3.jpg"

const HomePageCard = () =>{
return(
    <>
        <div className="carousel-container">
            <div id="carouselExample" className="carousel slide">
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <img src={slide1} className="d-block w-100" alt="..."/>
                    </div>
                    <div className="carousel-item">
                        <img src={slide2} className="d-block w-100" alt="..."/>
                    </div>
                    <div className="carousel-item">
                        <img src={slide3} className="d-block w-100" alt="..."/>
                    </div>
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>
        </div>
        <div className="footer bg-light p-4">
        <div className="container">
          <div className="row">
            <div className="col-md-6 mb-3">
                        <ol class="list-group list-group-numbered">
                            <li class="list-group-item d-flex justify-content-between align-items-start">
                                <div class="ms-2 me-auto">
                                    <div class="fw-bold">Buy Affordable Houses</div>
                                </div>
                                <span class="badge text-bg-primary rounded-pill">6</span>
                            </li>
                            <li class="list-group-item d-flex justify-content-between align-items-start">
                                <div class="ms-2 me-auto">
                                    <div class="fw-bold">Add houses to catalogue</div>
                                </div>
                                <span class="badge text-bg-primary rounded-pill">20</span>
                            </li>
                            <li class="list-group-item d-flex justify-content-between align-items-start">
                                <div class="ms-2 me-auto">
                                    <div class="fw-bold">View Description of houses</div>
                                </div>
                                <span class="badge text-bg-primary rounded-pill">14</span>
                            </li>
                        </ol>
            </div>
            <div className="col-md-6 mb-3">
              <div className="mb-3">
                <label
                  htmlFor="exampleFormControlInput1"
                  className="form-label"
                >
                  Email address
                </label>
                <input
                  type="email"
                  className="form-control"
                  id="exampleFormControlInput1"
                  placeholder="name@gmail.com"
                />
              </div>
              <div className="mb-3">
                <label
                  htmlFor="exampleFormControlTextarea1"
                  className="form-label"
                >
                  Leave a comment
                </label>
                <textarea
                  className="form-control"
                  id="exampleFormControlTextarea1"
                  rows="3"
                ></textarea>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-light text-center py-3">
          <span className="text-muted">&copy; 2024 Your Company. All rights reserved.</span>
        </div>
      </div>
    </>
)
}

export default HomePageCard