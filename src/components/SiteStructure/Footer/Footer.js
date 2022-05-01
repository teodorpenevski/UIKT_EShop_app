import React from "react";
import classes from "./Footer.module.css";

const Footer = () => {
  return (
    // <div className={classes.container}>
    //   <div class="row">
    //     <div class="col-md-3 col-lg-4 col-xl-3">
    //       <h5>About us</h5>

    //       <p class="mb-0">
    //         Team 14.
    //         <br />
    //         This project was developed on the subject Management IKT Project.
    //         The backend of the application is made in Java Spring, and the
    //         frontend is made in Rect.
    //       </p>
    //     </div>

    //     <div class="col-md-2 col-lg-2 col-xl-2 mx-auto">
    //       <h5>Made by</h5>

    //       <ul class="list-unstyled">
    //         <li>Marija Mateska</li>
    //         <li>Mario Stojchevski</li>
    //         <li>Teodor Panevski</li>
    //         <li>Monika Maneva</li>
    //         <li>Sara Veskoska</li>
    //         <li>Darko Skerlevski</li>
    //         <li>Bojan Gjoreski</li>
    //         <li>Stefan Petrovski</li>
    //         <li>Teodor Cvetkovski</li>
    //         <li>Ivan Jordanov</li>
    //       </ul>
    //     </div>

    //     <div class="col-md-3 col-lg-2 col-xl-2 mx-auto">
    //       <h5>Links to the projects</h5>

    //       <ul class="list-unstyled">
    //         <li>
    //           <a href="https://github.com/MarioStojcevski/UIKT_EShop">
    //             Backend
    //           </a>
    //         </li>
    //         <li>
    //           <a href="https://github.com/teodorpenevski/UIKT_EShop_app">
    //             Frontend
    //           </a>
    //         </li>
    //       </ul>
    //     </div>
    //   </div>
    // </div>

    <div className={classes.container}>
      <div className={classes.first}>
        <h5>About us</h5>
        <div>
          Team 14.
          <br />
          This project was developed for subject ICT Project Management. Backend of the application is made in Java Spring and  frontend is made in Rect.
        </div>
      </div>
      <div className={classes.second}>
        <h5>Made by</h5>
        <p>[181017] Marija Mateska</p>
        <p>[181164] Mario Stojchevski</p>
        <p>[181069] Teodor Panevski</p>
        <p>[181130] Monika Maneva</p>
        <p>[183077] Sara Veskoska</p>
        <p>[183049] Darko Skerlevski</p>
        <p>[185060] Bojan Gjoreski</p>
        <p>[173159] Stefan Petrovski</p>
        <p>[181271] Teodor Cvetkovski</p>
        <p>[181122] Ivan Jordanov</p>
      </div>
      <div className={classes.third}>
        <h5>Links to the project</h5>
        <a href="https://github.com/MarioStojcevski/UIKT_EShop">Backend</a>
        <br />
        <a href="https://github.com/teodorpenevski/UIKT_EShop_app">Frontend</a>
      </div>
    </div>
  );
};

export default Footer;
