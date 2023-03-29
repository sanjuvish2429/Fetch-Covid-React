import React, { useEffect, useState } from 'react';


const CovidComponent = () => {
  const [data,setData]=useState([]);
  const getCovidData = async () => {
    const res = await fetch('https://api.rootnet.in/covid19-in/stats/latest');
    const resultData = await res.json()
    console.log(resultData.data.regional);
    setData(resultData.data.regional);
  }

  useEffect(() => {
      getCovidData();
  }, []);


  return (
    <>
      <div className='container-fluid mt-2'>
        <div className='main-heading'>
          <h1 className='mb-3 text-center bg-primary rounded-pill '> <span className="fw-bold sans-serif">INDIA </span>COVID-19 REPORT</h1>
      </div>

      <div className='table-responsive bg-info'>
        <table className='table table-hover'>
          <thead className='table-danger'>
            <tr>
              <th>STATE</th>
              <th>CONFIRMED (INDIAN)</th>
              <th>CONFIRMED (FOREIGN)</th>
              <th>DISCHARGED</th>
              <th>DEATHS</th>
              <th>TOTAL</th>
            </tr>
          </thead>
          <tbody>
          {
            data.map((currentElement,index)=>{
              return(
                <tr key={index}>
              <th>{currentElement.loc}</th>
              <td>{currentElement.confirmedCasesIndian}</td>
              <td>{currentElement.confirmedCasesForeign}</td>
              <td>{currentElement.discharged}</td>
              <td>{currentElement.deaths}</td>
              <td>{currentElement.totalConfirmed}</td>
            </tr>     
            )
            })
          }
          </tbody>
        </table>
        <footer>
        <div class="top">
                Back to top
            </div>
            <div/>
                <div class="main">
                    <div>
                        <div class="title">Get to Know Us</div>
                        <div>About Us</div>
                        <div>Career Release</div>
                        <div>Press Release</div>
                      
                    </div>
                    <div>
                        <div class="title">Connect with US</div>
                        <div>Facebook</div>
                        <div>Twitter</div>
                        <div>Instagram</div>
                    </div>
                    <div>
                        <div class="title">Countries</div>
                        <div>India</div>
                        <div>US</div>
                        <div>Ukraine </div>
                        <div>Italy</div>
                        
                    </div>
                    <div>
                        <div class="title">Let us Help You</div>
                        <div>COVID-19</div>
                        <div>Your Account</div>
                        
                        <div>100% Test</div>
                       
                        <div>Covid Test Kit</div>
                        <div>Help </div>   
                </div>
            </div>
        </footer>
      </div>

      </div>
    </>
  )
}

export default CovidComponent