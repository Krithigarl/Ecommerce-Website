import { Link } from "react-router-dom"


export const Head = () => {
  return (
    <div>

      <div className="container1">
        <div className="logo">
          <img src="./assets/humeira logo.png" />
        </div>
        <div>
          <input className="search" type="text" placeholder="search products" />
        </div>
        <div>
          <p className="p"><span><i className="fa fa-search"></i></span></p>
        </div>
        <div>
        <p className="p1"><Link to="/login"  title="login">
    Login</Link>
      <Link to="/register"  title="register">
      <span>/Register</span></Link></p>
      
          

        </div>
        <div>
          <p className="p2"><span><i className="fa fa-user"></i></span></p>
        </div>
      </div></div>
  )
}
