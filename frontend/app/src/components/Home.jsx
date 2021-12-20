import React from "react";
import './Home.css';

function Home() {
  const url_logo = 'https://www.bancoagrario.gov.co//images/ig2015/logo-banco-agrario-colombia.png';
  return (
    <>
      <div className="body-bg">
        <div className="container">
          <div className="row">
            <div className="col">
              <div className="m-3 ">
                <a href="/">
                  <img src={url_logo} alt="Logo_Banagrario" />
                </a>
              </div>
            </div>
            <div className="col"></div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Home
