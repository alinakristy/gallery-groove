import { NavLink } from "react-router-dom";
import "../App.css"

function NavBar() {
    return (
        <div>       
            <header id="masthead" className="s-header">

        <div className="s-header__branding">
            <p className="site-title">
                <a href="index.html" rel="home">Gallery Groove.</a>
            </p>
        </div>

        <div class="row s-header__navigation">

            <nav class="s-header__nav-wrap">

                <h3 class="s-header__nav-heading">Navigate to</h3>

                <ul class="s-header__nav">
                    <li class="current-menu-item"><a href="index.html" title="">Home</a></li>
                    <li class="has-children">
                        <a href="#0" title="" class="">Categories</a>
                        <ul class="sub-menu">
                            <li><a href="category.html">Design</a></li>
                            <li><a href="category.html">Lifestyle</a></li>
                            <li><a href="category.html">Inspiration</a></li>
                            <li><a href="category.html">Work</a></li>
                            <li><a href="category.html">Health</a></li>
                            <li><a href="category.html">Photography</a></li>
                        </ul>
                    </li>
                    <li class="has-children">
                        <a href="#0" title="" class="">Blog</a>
                        <ul class="sub-menu">
                            <li><a href="single-standard.html">Standard Post</a></li>
                            <li><a href="single-video.html">Video Post</a></li>
                            <li><a href="single-audio.html">Audio Post</a></li>
                        </ul>
                    </li>
                    <li><a href="styles.html" title="">Styles</a></li>
                    <li><a href="about.html" title="">About</a></li>
                    <li><a href="contact.html" title="">Contact</a></li>
                </ul> /* end s-header__nav */

            </nav>

        </div> 

        <div class="s-header__search">

            <div class="s-header__search-inner">
                <div class="row">

                    <form role="search" method="get" class="s-header__search-form" action="#">
                        <label>
                            <span class="u-screen-reader-text">Search for:</span>
                            <input type="search" class="s-header__search-field" placeholder="Search for..." value="" name="s" title="Search for:" autocomplete="off" />
                        </label>
                        <input type="submit" class="s-header__search-submit" value="Search" /> 
                    </form>

                    <a href="#0" title="Close Search" class="s-header__search-close">Close</a>

                </div> 
            </div> 

        </div> 
        <a class="s-header__menu-toggle" href="#0"><span>Menu</span></a>
        <a class="s-header__search-trigger" href="#">
            <svg width="24" height="24" fill="none" viewBox="0 0 24 24">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M19.25 19.25L15.5 15.5M4.75 11C4.75 7.54822 7.54822 4.75 11 4.75C14.4518 4.75 17.25 7.54822 17.25 11C17.25 14.4518 14.4518 17.25 11 17.25C7.54822 17.25 4.75 14.4518 4.75 11Z"></path>
            </svg>
        </a>

    </header> 
    </div> 
     );
}

export default NavBar;


// import logo from "../assets/logo4.png"

// function NavBar() {
//     return (
//         <nav className="navbar navbar-expand-lg bg-body-tertiary w-100 py-0">
//             <div className="container-fluid px-1" id="nav">

//                 <a className="navbar-brand py-0" href="#">
//                     <img src={logo} alt="Bootstrap" width="70" height="65" />
//                 </a>

//                 <button
//                     className="navbar-toggler"
//                     type="button"
//                     data-bs-toggle="collapse"
//                     data-bs-target="#navbarSupportedContent"
//                     aria-controls="navbarSupportedContent"
//                     aria-expanded="false"
//                     aria-label="Toggle navigation"
//                 >
//                     <span className="navbar-toggler-icon"></span>
//                 </button>
//                 <div className="collapse navbar-collapse" id="navbarSupportedContent">
//                     <ul className="navbar-nav me-auto mb-2 mb-lg-0">
//                         <li className="nav-item col-5">
//                             <NavLink className={({ isActive }) => isActive ? 'nav-link active fw-bold' : 'nav-link'} to="/" end>Home</NavLink>
//                         </li>
//                         <li className="nav-item col-5">
//                             <NavLink className={({ isActive }) => isActive ? 'nav-link active fw-bold' : 'nav-link'} to="/about" end>About</NavLink>
//                         </li>
//                         <li className="nav-item col-5">
//                             <NavLink className={({ isActive }) => isActive ? 'nav-link active fw-bold' : 'nav-link'} to="/view" end>View</NavLink>
//                         </li>
//                         <li className="nav-item col-5">
//                             <NavLink className={({ isActive }) => isActive ? 'nav-link active fw-bold' : 'nav-link'} to="/details" end>Details</NavLink>
//                         </li>
//                     </ul>
//                 </div>
//             </div>
//         </nav>
