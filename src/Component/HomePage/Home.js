import React from "react";
import "../../css/Home.css";
import GamingImg from "../../Images/Gaming.jpg";
import Clothes from "../../Images/Fashion.jpg";
import NewElectro from "../../Images/Electronics.jpg";
import Skincare from "../../Images/SkinCare.jpg";
import Skin from "../Categories/SkinCare/Skin";
import Fashion from "../Categories/Fashion/Fashion";
import Gaming from "../Categories/Gaming/Gaming";
import Electronic from '../Categories/Electronic/Electronic'
import Features from "../Features";

export default function Home() {
  return (
    <>


    
      <div sty className="CrouselDiv container-fluid my-2">
        {/* -----------------------------------Starts */}

        <div
          id="carouselExampleAutoplaying"
          className="carousel slide"
          data-bs-ride="carousel"
        >
          <div className="carousel-inner innerCrousel">
            <div className="CrouselDivImageBox carousel-item active">
              <img src={Clothes} alt="slider-1" />
            </div>

            <div className="CrouselDivImageBox carousel-item">
              <img src={NewElectro} alt="slider-2" />
            </div>

            <div className="CrouselDivImageBox carousel-item">
              <img src={Skincare} alt="slider-3" />
            </div>

            <div className="CrouselDivImageBox carousel-item">
              <img src={GamingImg} alt="slider-3" />
            </div>
          </div>
          <button
            className="carousel-control-prev"
            type="button"
            data-bs-target="#carouselExampleAutoplaying"
            data-bs-slide="prev"
          >
            <span
              className="carousel-control-prev-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button
            className="carousel-control-next"
            type="button"
            data-bs-target="#carouselExampleAutoplaying"
            data-bs-slide="next"
          >
            <span
              className="carousel-control-next-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>

        {/* -----------------------------------End */}
      </div>

      {/* ------------------------------------------------------------Grid Products----------------------------------------------------------------  */}

      <div className="container GridBox my-5">
        <div style={{ textAlign: "center" }} className="CategoriesHandle">
          <h1 style={{color:"rgb(73, 21, 21)"}} className="CategoriesHeading">CATEGORIES</h1>
        </div>

        <div className="row my-5">
          <div className="col-md-6 ">
            <div className="row">
              {/* First */}
              <div className="ProductImageCard col-md-6 p-1">
                <div className="ProductImageDiv">
                  <img
                    width="100%"
                    style={{ borderRadius: "2px" }}
                    src="https://images.unsplash.com/photo-1556227834-09f1de7a7d14?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                    alt="SkinCare"
                  />
                  <div
                    className="ProductAboutDiv  p-2"
                    style={{ textAlign: "start" }}
                  >
                    <p>
                      Keeping our skin glowing by optimizing hydration, barrier
                      function and cell turnover, and minimizing irritation;
                      Helping to repair past superficial damage to skin..
                    </p>
                  </div>
                </div>
              </div>

              {/* Second */}

              <div className="col-md-6 p-1 ProductImageCard">
                <div className="ProductImageDiv">
                  <img
                    width="100%"
                    style={{ borderRadius: "2px" }}
                    src="https://images.unsplash.com/photo-1603252109303-2751441dd157?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                    alt="Fashion"
                  />

                  <div
                    className="ProductAboutDiv  p-2"
                    style={{ textAlign: "start" }}
                  >
                    <p>
                      Fashion products can be mass marketed, niche, traditional,
                      handcrafted, or reused. They can also include fast moving
                      products and traditional crafts
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Third */}
          <div className="col-md-6  ">
            <div className="row my-3">
              <div className="col-md-6 p-2 ProductImageCard2">
                <div className="ProductImageDiv2">
                  {" "}
                  <img
                    width="100%"
                    style={{ borderRadius: "2px" }}
                    src="https://images.unsplash.com/photo-1629732097571-b042b35aa3ed?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                    alt=""
                  />
                  <div
                    className="ProductAboutDiv2  p-2"
                    style={{ textAlign: "start" }}
                  >
                    <p>
                      Fashion products can be mass marketed, niche, traditional,
                      handcrafted, or reused. They can also include fast moving
                      products and traditional crafts
                    </p>
                  </div>
                </div>
              </div>

              {/* Fourth */}

              <div className="col-md-6 p-2 ProductImageCard2">
                <div className="ProductImageDiv2">
                  {" "}
                  <img
                    width="100%"
                    style={{ borderRadius: "2px" }}
                    src="https://images.unsplash.com/photo-1649515530664-7a3150983c7e?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                    alt=""
                  />
                  <div
                    className="ProductAboutDiv2  p-2"
                    style={{ textAlign: "start" }}
                  >
                    <p>
                    Electronic Product means a manufactured item or device, or part of such a product, that has an electronic circuit. 
                    </p>
                  </div>
                </div>
              </div>

              {/* Fifth */}

              <div className="col-md-6 p-2 ProductImageCard2">
                <div className="ProductImageDiv2">
                  {" "}
                  <img
                    width="100%"
                    style={{ borderRadius: "2px" }}
                    src="https://images.unsplash.com/photo-1603302576837-37561b2e2302?q=80&w=2068&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                    alt=""
                  />
                  <div
                    className="ProductAboutDiv2  p-2"
                    style={{ textAlign: "start" }}
                  >
                    <p>
                    Gaming Product means any intangible asset, good or interest that can be bought or sold or otherwise is the subject of an activity constituting a Gaming Business
                    </p>
                  </div>
                </div>
              </div>

              {/* Sixth */}

              <div className="col-md-6 p-2 ProductImageCard2">
                <div className="ProductImageDiv2">
                  {" "}
                  <img
                    width="100%"
                    style={{ borderRadius: "2px" }}
                    src="https://images.unsplash.com/photo-1486401899868-0e435ed85128?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                    alt=""
                  />
                  <div
                    className="ProductAboutDiv2  p-2"
                    style={{ textAlign: "start" }}
                  >
                    <p>
                    Gaming Product means any intangible asset, good or interest that can be bought or sold or otherwise is the subject of an activity constituting a Gaming Business
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>



{/* -------------------------------------------------------------------------Skin-Care-Product------------------------------------------------------------- */}
<Skin/>

{/*----------------------------------------------------------- Fashion Products */}
<Fashion/>

{/* -------------------------------------------Gaming */}
<Gaming/>

{/* ------Elctrioncs */}
<Electronic/>


<Features/>


    </>
  );
}
