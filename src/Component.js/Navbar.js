import React,{Component} from 'react'
 class  Navbar extends Component {
   render(){
  return (
  <div>
<nav className="navbar navbar-expand-lg navbar-light bg-light">
  <div className="container-fluid">
    <a className="navbar-brand" href="/">TODAY NEWS</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav">
      <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="/Home">Home</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="/About">About</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="/Cricket">Cricket</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="/Bussiness">Bussiness</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="/Sports">Sports</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="/Technology">Technology</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="/Entertainment">Entertainment</a>
        </li>
        
      </ul>
    </div>
  </div>
</nav>
</div>
  );
}
 }

export default Navbar