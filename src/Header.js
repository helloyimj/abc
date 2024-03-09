import React from 'react';
import { Link } from 'react-router-dom';
import "./reset.css";
import "./Header.css";
import $ from 'jquery'

function Header(props) {
  $(function(){
    $("#menu ul li").on("mouseenter",function(){
     $("#menubox").stop().slideDown(500);
    });

    $("#menu").on("mouseleave",function(){
      $("#menubox").stop().slideUp(500);
    });
  });
    return (
        <>
            {/* <Link to="/">
                <h1>헤더부분</h1>
            </Link> */}

<h1>
<Link className="logo" to="/">
            LOGO
          </Link> 
  </h1>        
          <nav id="menu">
          <ul className="menu">
            <li>
              <Link className="main" to='/sub1'>
                MENU1
              </Link>
            </li>
            <li>
            <Link className="main" to='/sub2'>
                MENU2
              </Link>
            </li>
            <li>
            <Link className="main" to='/sub3'>
                MENU3
              </Link>
            </li>
            <li>
            <Link className="main" to='/sub4'>
                MENU4
              </Link>
            </li>
          </ul> 
          <div id="menubox">
            fullmenu<br/>
            fullmenu<br/>
            fullmenu<br/>
            fullmenu
          </div>
          </nav>     
        </>
    );
}

export default Header;