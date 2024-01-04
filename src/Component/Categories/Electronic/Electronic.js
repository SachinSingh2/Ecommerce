import React from 'react'
import '../Fashion/Fashion.css'
import { Link } from 'react-router-dom'
import Fridge from '../Electronic/Images/FRIDGE.jpg'
import MicroWave from '../Electronic/Images/microwave.jpg'
import Tv  from '../Electronic/Images/Tv.jpg'

export default function Fashion() {

  return (
    <>
    <div style={{textAlign:"center" , padding:"0px 70px" , color:"black" , margin:"80px 0px" }} className='hrTag' >
    <hr />
    </div>


    {/* ------------------------------------------------------------------Main---------------------------------------- */}
    <div style={{ textAlign: "center" }} className="FashionHeadingAndPara">
        <h1 className="py-3" style={{ color: "rgb(73, 21, 21)", fontWeight: 700  }}>Electronics</h1>

      </div>



      <div style={{textAlign:"center"   }} className="py-5 container FashionContainer">
        <div className="row">
          <div className="col-md-4 my-1">
            <div className="card"   >
              <img className="card-img-top" src={Tv} alt="Card image cap" />
              <div className="card-body">
              <h5 style={{textAlign:"center"}} className="card-title">TV</h5>
                <p style={{fontSize:"15px" , textAlign:"center" , color:"gray"}} className="card-text">
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </p>
                <p style={{ fontSize: "18px", fontWeight: "bold", textAlign: "center", color: "rgb(73, 21, 21)" }}> $39.99</p>

                <div style={{textAlign:"center"}} > <button style={{backgroundColor:" rgb(73, 21, 21)"}} className="btn btn-dark" >Add To Cart</button> </div>

              </div>
            </div>
          </div>



          <div className="col-md-4 my-1">

          <div className="card"   >
              <img className="card-img-top" src={MicroWave} alt="Card image cap" />
              <div className="card-body">
                <h5 style={{textAlign:"center"}} className="card-title">Micro Wave</h5>
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

          <div className="card "  >
              <img className="card-img-top" src={Fridge} alt="Card image cap" />
              <div className="card-body">
              <h5 style={{textAlign:"center"}} className="card-title">Refrigerator</h5>
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
      <Link type="Button" to='/electronics'>
        <button className="LoadMoreButton">Load More  </button>
      </Link>
    </div>
    


    </>
  )
}
