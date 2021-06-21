import React from 'react'

 const Header = () => {
    return (
        <>
       <nav className="main-header navbar navbar-expand navbar-dark">
    {/* Left navbar links */}
    <ul className="navbar-nav">
      <li className="nav-item">
        <a className="nav-link" data-widget="pushmenu" href="#"><i class="fas fa-bars text-muted"></i></a>
      </li>
    </ul>
   
    {/* Right navbar links */}
    <ul className="navbar-nav ml-auto">
      {/* Messages Dropdown Menu */}
      
      {/* Notifications Dropdown Menu */}
      <li className="nav-item dropdown">
        <a className="nav-link" data-toggle="dropdown" href="#">
          <i className="fas fa-bell mt-2" />
          <span className="badge navbar-badge"><i class="fas fa-circle text-primary mt-1"></i></span>
        </a>
        <div className="dropdown-menu dropdown-menu-lg dropdown-menu-right">
          <span className="dropdown-item dropdown-header">10 Notifications</span>
          <div className="dropdown-divider" />
          <a href="#" className="dropdown-item">
            <i className="fas fa-envelope mr-2" /> 4 new messages
            <span className="float-right text-muted text-sm">3 mins</span>
          </a>
          <div className="dropdown-divider" />
          <a href="#" className="dropdown-item">
            <i className="fas fa-users mr-2" /> 8 friend requests
            <span className="float-right text-muted text-sm">12 hours</span>
          </a>
          <div className="dropdown-divider" />
          <a href="#" className="dropdown-item">
            <i className="fas fa-file mr-2" /> 3 new reports
            <span className="float-right text-muted text-sm">2 days</span>
          </a>
          <div className="dropdown-divider" />
          <a href="#" className="dropdown-item dropdown-footer">See All Notifications</a>
        </div>
      </li>
       <div className="user-panel text-white">
         <div className="info">
          <p className="">John Bayer</p>
        </div>
        <div className="info">
          <img src="dist/img/user2-160x160.jpg" className="img-circle elevation-2" alt="User Image" />
          <a href="#" className="text-white ml-2"><i className="fas fa-chevron-down"></i></a>
        </div>
      </div> 
    </ul>
  </nav>
        </>
    )
}
export default Header;
