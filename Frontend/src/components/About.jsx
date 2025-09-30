import React from "react"; 
import { Link } from "react-router-dom";
 import { HiOutlineArrowRight } 
 from "react-icons/hi"; const About = () => { return ( <> <section className="about" id="about"> 
 <div className="container"> 
  <div className="banner"> <div className="top"> 
    <h1 className="heading">ABOUT US</h1> 
    <p>The only thing we're serious about is food.</p> </div> 
    <p className="mid"> Welcome to Smart Dine, where innovation meets exceptional dining experiences. 
      At Smart Dine, we are committed to transforming the way people discover, 
      reserve, and enjoy their favorite restaurants. 
      Our platform seamlessly integrates technology with the hospitality industry, offering a smarter, more efficient way to dine. 
      Whether you're booking a table, exploring curated menus, or placing an order, we ensure a seamless and enjoyable experience. 
      Why Choose Smart Dine? Effortless Reservations - Book your table with ease, anytime, anywhere. Seamless Ordering - Browse menus, place orders, and enjoy a hassle-free experience. 
      Exclusive Offers - Access special promotions and loyalty rewards. With Smart Dine, dining is no longer just a necessity—it's an experience. 
      Join us in redefining modern dining and discover the smarter way to enjoy great food. Experience convenience. Experience Smart Dine. 
      </p> {/*} <Link to={"/"}> Explore Menu{" "} <span> <HiOutlineArrowRight /> </span> </Link>*/} 
      </div> 
      <div className="banner"> 
        <img src="about.png" alt="about" /> 
        </div> 
        </div> 
        </section> </> ); }; 
 export default About;