import PropTypes from 'prop-types'; // Import PropTypes

const Navbar = ({setCategory}) => {
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
  <div className="container-fluid">
    <a className="navbar-brand" href="#"><span className="badge bg-light text-dark fs-4">The BUZZ</span></a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNavDropdown">
      <ul className="navbar-nav">
        <li className="nav-item">
          <div className="nav-link" onClick={()=>setCategory("Headlines")}>Headlines</div>
        </li>
        <li className="nav-item">
          <div className="nav-link" onClick={()=>setCategory("Technology")}>Technology</div>
        </li>
        <li className="nav-item">
          <div className="nav-link" onClick={()=>setCategory("Business")}>Business</div>
        </li>
        <li className="nav-item">
          <div className="nav-link" onClick={()=>setCategory("Health")}>Health</div>
        </li>
        <li className="nav-item">
          <div className="nav-link" onClick={()=>setCategory("Sports")}>Sports</div>
        </li>
        <li className="nav-item">
          <div className="nav-link" onClick={()=>setCategory("Entertainment")}>Entertainment</div>
        </li>
        <li className="nav-item dropdown">
          <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Made by The Method
          </a>
          <ul className="dropdown-menu">
            <li><a className="dropdown-item" href="#">Website Templates</a></li>
            <li><a className="dropdown-item" href="#">AI solutions</a></li>
            <li><a className="dropdown-item" href="#">Founder</a></li>
          </ul>
        </li>
      </ul>
    </div>
  </div>
</nav>
  )
}


Navbar.propTypes = {
    setCategory: PropTypes.func.isRequired, // Add prop validation
  };
export default Navbar;