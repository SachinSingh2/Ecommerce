import React from 'react'
import '../Fashion/Fashion.css'
import { Link } from 'react-router-dom'
import jeans from '../Fashion/Images/Jeans2.png'
import shirt from '../Fashion/Images/Shirt2.png'
import Jacket from '../Fashion/Images/Jacket.png'

export default function Fashion() {

  return (
    <>
    <div style={{textAlign:"center" , padding:"0px 70px" , color:"black" , margin:"80px 0px" }} className='hrTag' >
    <hr />
    </div>


    {/* ------------------------------------------------------------------Main---------------------------------------- */}
    <div style={{ textAlign: "center" }} className="FashionHeadingAndPara">
        <h1 className="py-3" style={{ color: "rgb(73, 21, 21)", fontWeight: 700  }}>FASHION</h1>

      </div>



      <div style={{textAlign:"center"   }} className="py-5 container FashionContainer">
        <div className="row">
          <div className="col-md-4 my-1">
            <div className="card"   >
              <img className="card-img-top" src={Jacket} alt="Card image cap" />
              <div className="card-body">
              <h5 style={{textAlign:"center"}} className="card-title">Shirt</h5>
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

          <div className="card"   >
              <img className="card-img-top" src={shirt} alt="Card image cap" />
              <div className="card-body">
                <h5 style={{textAlign:"center"}} className="card-title"> Jeans</h5>
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
              <img className="card-img-top" src={jeans} alt="Card image cap" />
              <div className="card-body">
              <h5 style={{textAlign:"center"}} className="card-title">Jacket</h5>
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
      <Link type="Button" to='/fashion'>
        <button className="LoadMoreButton">Load More  </button>
      </Link>
    </div>
    


    </>
  )
}
