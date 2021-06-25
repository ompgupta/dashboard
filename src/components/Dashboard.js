import React from 'react'
import  Linechart from './Linechart';
import Piechart from './Piechart';
import chaitbox from '../../src/chaitbox.png';

const Dashboard = () => {
  return (
    <>
      <div className="content-wrapper bg-dark">
        {/* Content Header (Page header) */}
        <div className="content-header">
          <div className="container-fluid">
            <div className="row mb-2">
              <div className="col-md-7">
                <h1 className="m-0 text-white">Dashboard</h1>
                <p>Monday <span className="text-primary">02 July 2021</span></p>
              </div>{/* /.col */}
              <div className="col-md-5">

                {/* SEARCH FORM */}
                <form className="form-inline ml-5 pl-5">
                  <button className="btn btn-primary font-weight-bold">+Add</button>
                  <div className="input-group input-group-sm ml-3">
                    <div className="input-group-append">
                      <button className="btn btn-navbar" type="submit">
                        <i className="fas fa-search text-muted" />
                      </button>
                      <input className="form-control form-control-navbar bg-dark border-dark" type="search" placeholder="Search for Application here"
                      />

                    </div>
                  </div>
                </form>
              </div>{/* /.col */}
            </div>{/* /.row */}
          </div>{/* /.container-fluid */}
        </div>
        {/* /.content-header */}
        {/* Main content */}
        <section className="content">
          <div className="container-fluid">
            <div className="row">
              {/* +++++++++1 component********************* */}
              <div className="col-md-8">
                {/* ******* 1st row******** */}
                <div className="row">
                  <div className="col-md-4">
                    <div className="small-box p-3">
                      <p>Total Applications<i className="fas fa-ellipsis-h ml-5 pl-1"></i></p>
                      <h3>7956</h3>
                      <i class="fas fa-external-link-alt"><span className="ml-2">+3.9%</span></i>
                      <div className="inner"><div class="progress1 purple"> <span class="progress-left"> <span class="progress-bar"></span> </span> <span class="progress-right"> <span class="progress-bar"></span> </span>
                        <h5>+70%</h5>
                      </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-4">
                  <div className="small-box p-3">
                      <p>Shortlisted Candinate<i className="fas fa-ellipsis-h ml-4 pl-0"></i></p>
                      <h3>4658</h3>
                      <i className="fas fa-external-link-alt text-primary"><span className="ml-2">+3.9%</span></i>
                      <div className="inner"><div class="progress1 blue"> <span class="progress-left"> <span class="progress-bar"></span> </span> <span class="progress-right"> <span class="progress-bar"></span> </span>
                        <h5 className="text-primary">+60%</h5>
                      </div>
                      </div>
                    </div>
                  </div>

                  <div className="col-md-4">
                  <div className="small-box p-3">
                      <p>Total Applications<i className="fas fa-ellipsis-h ml-5 pl-0"></i></p>
                      <h3>1051</h3>
                      <i className="fas fa-external-link-alt text-danger"><span className="ml-2">+3.9%</span></i>
                      <div className="inner"><div class="progress1 red"> <span class="progress-left"> <span class="progress-bar"></span> </span> <span class="progress-right"> <span class="progress-bar"></span> </span>
                        <h5 className="text-danger">+40%</h5>
                      </div>
                      </div>
                    </div>
                  </div>
                </div>
                {/* ******* 2nd row******** */}
                <div className="row">
                  <div className="col-md-8 two_row">
                  <div className="card w-100">
                    
          <div className="card-body bg-dark text-white w-100 pr-5 pb-5" style={{border:'1px solid grey'}}>
            <p>Application Received<span className="ml-5 year">This Year</span> 
            <span className="pl-3">This Week</span><span  className="pl-3"><i class="fas fa-folder"></i></span><span  className="pl-3"><i class="fas fa-ellipsis-v"></i></span></p>
        <Linechart/>
      
          </div>{/* /.card-body */}
        </div>
                  </div>
                  <div className="col-md-4">
                  <div className="card-body bg-dark" style={{border:'1px solid gray'}}>
                    <h6>Total Applications</h6>
                 <ul className="">
                  <li className="text-primary"><p>Application</p><div class="progress">
  <div class="progress-bar w-50" role="progressbar" ></div>
</div></li>
<li className="text-warning"><p>Start Limited</p><div class="progress">
  <div class="progress-bar w-75 bg-warning" role="progressbar"></div>
</div></li>
<li className="text-danger"><p>Arrange</p><div class="progress">
  <div class="progress-bar bg-danger" role="progressbar" style={{width:"35%"}}></div>
</div></li>
<li className="text-info"><p>On Hold</p><div class="progress">
  <div class="progress-bar w-75 bg-info" role="progressbar" ></div>
</div></li>
                 </ul>

                  </div>
                  </div>
                </div>
                {/* ******* 3 row******** */}
                <div className="row">
                  <div className="col-md-8 mt-3 3rd_row">
                  <div className="card w-100">
                    <div className="card-body bg-dark text-white w-100 pb-4" style={{border:'1px solid grey'}}>
                      <p>Referals and Campaign State <span className=' text-danger ml-4'><i className="far fa-paper-plane"></i>40 Campaign sent in total</span><br /><span className="float-right">Campaign sent in last month</span></p>
                     <div className="campaign d-flex w-100 pt-4">
                     <div className="campaign_div">
                       <h7>User's</h7><br />
                       <i class="fas fa-external-link-alt">+3.59%</i>
                       <h5>7956</h5>
                     </div>
                     <div className="campaign_div">
                       <h7>Referals</h7>
                       <br />
                       <i class="fas fa-external-link-alt">+9.01%</i>
                       <h5>0662</h5>
                     </div>
                     <div className="campaign_div">
                       <h7>Share</h7><br />
                       <i class="fas fa-external-link-alt">+39.8%</i>
                       <h5>1478</h5>
                     </div>
                     <div className="campaign_div" style={{border:'none'}}>
                       <h7>Application</h7><br />
                       <i class="fas fa-external-link-alt">12.0%</i>
                       <h5>0564</h5>
                     </div>
                     </div>
                     <div className="btn_group pt-4 d-flex">
                       <button className='btn btn-primary'>Start a new Champigon now</button>
                       <button className='btn btn-danger ml-4'>Pause All Running</button>
                     </div>
                      </div>
                      </div>
                  </div>
                  <div className="col-md-4 mt-3 pie_div">
                   <div className="card-body pb-4" style={{border:'1px solid grey'}}>
                     <p>Open Position<i class="fas fa-ellipsis-h pl-5 ml-3"></i></p>
                     <div className="pie_div1">
                   <Piechart />
                   </div>
                   </div>
                  </div>
                </div>
              </div>
              {/* +++++++2nd component********** */}
              <div className="col-md-4 px-2" style={{border:'1px solid grey', overflow:'hidden'}}>
                <div className="card-body text-center">
                <h6>Hello John Bayer,</h6>
                <p>You Have 8 New Applications Today!</p>
                <img src={chaitbox} alt="" width="300" height='150' />
                </div>
                <div className="card-bod mt-3">
                  <h6 className="ml-2">New Applicants<i class="fas fa-chevron-right float-right mr-3"></i></h6>
                  <div className="list_div">
                    <ul className="nav nav-treeview">
                      <li className="nav-item w-100 mt-4 pt-3">
                       <i class="far fa-user-circle fa-2x mt-1"></i>
                         <span className="user_name">Rosie Metts <br />
                         <p >examples</p></span>                       
                       <i class="fas fa-phone-alt fa-1x float-right mt-2 pr-2"></i>
                       <i class="fas fa-comment float-right mr-3 mt-2"></i>
                      </li>
                      <li className="nav-item w-100 mt-4 pt-3">
                       <i class="far fa-user-circle fa-2x mt-1"></i>
                         <span className="user_name">James Scott <br />
                         <p >examples</p></span>                       
                       <i class="fas fa-phone-alt fa-1x float-right mt-2 pr-2"></i>
                       <i class="fas fa-comment float-right mr-3 mt-2"></i>
                      </li>
                      <li className="nav-item w-100 mt-4 pt-3">
                       <i class="far fa-user-circle fa-2x mt-1"></i>
                         <span className="user_name">Jamie Lauerson<br />
                         <p >examples</p></span>                       
                       <i class="fas fa-phone-alt fa-1x float-right mt-2 pr-2"></i>
                       <i class="fas fa-comment float-right mr-3 mt-2"></i>
                      </li>
                      <li className="nav-item w-100 mt-4 pt-3">
                       <i class="far fa-user-circle fa-2x mt-1"></i>
                         <span className="user_name">Elizabeth Hurton <br />
                         <p >examples</p></span>                       
                       <i class="fas fa-phone-alt fa-1x float-right mt-2 pr-2"></i>
                       <i class="fas fa-comment float-right mr-3 mt-2"></i>
                      </li>
                      <li className="nav-item w-100 mt-4 pt-3">
                       <i class="far fa-user-circle fa-2x mt-1"></i>
                         <span className="user_name">Danny Watson<br />
                         <p >examples</p></span>                       
                       <i class="fas fa-phone-alt fa-1x float-right mt-2 pr-2"></i>
                       <i class="fas fa-comment float-right mr-3 mt-2"></i>
                      </li>
                      <li className="nav-item w-100 mt-4 pt-3">
                       <i class="far fa-user-circle fa-2x mt-1"></i>
                         <span className="user_name">Reha Scarlett<br />
                         <p >examples</p></span>                       
                       <i class="fas fa-phone-alt fa-1x float-right mt-2 pr-2"></i>
                       <i class="fas fa-comment float-right mr-3 mt-2"></i>
                      </li>
                      
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* /.content */}
      </div>
    </>
  )
}
export default Dashboard;