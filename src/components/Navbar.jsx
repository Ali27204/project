
import { NavLink } from "react-router-dom";
export default function Navbar(props){
  
    return(
        <>
        

        <div className="row navbarfixed">
          <div className="col-md-4">
            <img className="mt-4 ms-5 logo" src={props.img} alt="" />
          </div>
          <div className="col-md-8  ">
            <ul className="nav float-end mt-4 mx-4 nav-section">
              <li className="nav-item">
                <NavLink  className="nav-link  res"   to="/" style={({isActive}) =>{return {color:isActive?'red':' '}}}>
                  {props.home}
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link res  " to="/About" style={({isActive}) =>{return {color:isActive?'red':' '}}} >
                  {props.about}
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link res"   to="/Services" style={({isActive}) =>{return {color:isActive?'red':' '}}}>
                  {props.service}
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link res"   to="/Project" style={({isActive}) =>{return {color:isActive?'red':' '}}}>
                  {props.project}
                </NavLink>
              </li>

              <li className="nav-item ">
                <NavLink className="nav-link res"   to="/Contact" style={({isActive}) =>{return {color:isActive?'red':' '}}}>
                  {props.contact}
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link menuicon">
               <i className="fa fa-bars" type="button" data-bs-toggle="offcanvas" data-bs-target="#demo" ></i>
                </NavLink>
              </li>
             
              <div class="offcanvas offcanvas-end bg-dark" id="demo">
  <div class="offcanvas-header">
  <img className="mt-4 ms-5 logo" src={props.img} alt="" />
    <button type="button" class="btn-close" data-bs-dismiss="offcanvas"></button>
  </div>
  <div class="offcanvas-body">
  <li className="nav-item">
                <NavLink  className="nav-link"   to="/" style={({isActive}) =>{return {color:isActive?'red':' '}}}>
                  {props.home}
                </NavLink>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/About"  >
                  {props.about}
                </a>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link "   to="/Services" style={({isActive}) =>{return {color:isActive?'red':' '}}}>
                  {props.service}
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link "   to="/Project" style={({isActive}) =>{return {color:isActive?'red':' '}}}>
                  {props.project}
                </NavLink>
              </li>
              <li className="nav-item ">
                <NavLink className="nav-link "   to="/Contact" style={({isActive}) =>{return {color:isActive?'red':' '}}}>
                  {props.contact}
                </NavLink>
              </li>
   
  </div>
</div>
       
              
                  
           
             

            </ul>
          </div>
          
        </div>
        </>
    );
}