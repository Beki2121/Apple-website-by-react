import React from 'react'
import image404 from '../../../assets/404.jpg'
import { useNavigate } from "react-router-dom"; 

function Four04() {

    const navigate = useNavigate();

  return (
    <div>
      <section
        className="internal-page-wrapper"
        style={{
          backgroundImage: `url(${image404})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          height: "80vh",
        }}
      >
        <div className="container">
          <div className="row h-100 align-items-center justify-content-center text-center">
            <div className="col-12 mt-5 pt-5">
              {/* <h1 className="font=weight-bold">
                404 <br /> The page you're looking for can't be found
              </h1> */}
              
              <br />
              <br />
             
              <button onClick={() => navigate("/")}>Go Home</button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Four04