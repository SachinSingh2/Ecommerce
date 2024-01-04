import React from "react";
import '../SkinCare/SkinCategory.css'
import SkinCare1 from '../../Categories/SkinCare/Images/SkinCare1.png'
import SkinCare2 from '../../Categories/SkinCare/Images/SkinCare2.png'
import SkinCare3 from '../../Categories/SkinCare/Images/SkinCare3.jpg'
import {Link} from 'react-router-dom'

export default function Skin() {
  return (
    <>
      <div style={{ textAlign: "center" }} className="SkinCareHeadingAndPara">
        <h1 className="py-3" style={{ color: "rgb(73, 21, 21)", fontWeight: 700  }}>SKIN CARE</h1>

      </div>



      <div style={{textAlign:"center"   }} className="py-5 container SkinCareContainer">
        <div className="row">
          <div className="col-md-4 my-1">
            <div className="card" >
              <img className="card-img-top" src={SkinCare1} alt="Card image cap" />
              <div className="card-body">
              <h5 style={{textAlign:"center"}} className="card-title">Body Wash</h5>
                <p style={{fontSize:"15px" , textAlign:"center" , color:"gray"}} className="card-text">
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </p>
                <p style={{ fontSize: "18px", fontWeight: "bold", textAlign: "center", color: "rgb(73, 21, 21)" }}>
      $49.99
    </p>
                <div style={{textAlign:"center"}} > <button style={{backgroundColor:" rgb(73, 21, 21)"}} className="btn btn-dark" >Add To Cart</button> </div>

              </div>
            </div>
          </div>



          <div className="col-md-4 my-1">

          <div className="card" >
              <img className="card-img-top" src={SkinCare2} alt="Card image cap" />
              <div className="card-body">
                <h5 style={{textAlign:"center"}} className="card-title"> Moisturizer</h5>
                <p style={{fontSize:"15px" , textAlign:"center" , color:"gray"}} className="card-text">
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </p>
                <p style={{ fontSize: "18px", fontWeight: "bold", textAlign: "center", color: "rgb(73, 21, 21)" }}>
      $49.99
    </p>
                <div style={{textAlign:"center"}} > <button style={{backgroundColor:" rgb(73, 21, 21)"}} className="btn btn-dark" >Add To Cart</button> </div>
              </div>
            </div>

          </div>




          <div className="col-md-4 my-1">

          <div className="card " >
              <img className="card-img-top" src={SkinCare3} alt="Card image cap" />
              <div className="card-body">
              <h5 style={{textAlign:"center"}} className="card-title">Perfume</h5>
                <p style={{fontSize:"15px" , textAlign:"center" , color:"gray"}} className="card-text">
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </p>
                <p style={{ fontSize: "18px", fontWeight: "bold", textAlign: "center", color: "rgb(73, 21, 21)" }}>
      $49.99
    </p>  
                <div style={{textAlign:"center"}} > <button style={{backgroundColor:" rgb(73, 21, 21)"}} className="btn btn-dark" >Add To Cart</button> </div>
              </div>
            </div>

          </div>
        </div>
      </div>


      {/* Show More Button */}
      <div className="ShowMoreBtn my-4 container">
      <Link type="Button" to='/skincare'>
        <button className="LoadMoreButton">Load More  </button>
      </Link>
    </div>
    </>
  );
}
