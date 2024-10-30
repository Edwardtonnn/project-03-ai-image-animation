import './style.scss';
import 'bootstrap/dist/css/bootstrap.min.css';

import * as bootstrap from 'bootstrap';
import gsap from 'gsap';




document.querySelector('#app').innerHTML = /*html*/`
<div>
 <!-- Navbar -->
<!-- Navbar -->
<nav class="navbar navbar-dark navbar-expand-lg">
  <div class="container">
    <a class="navbar-brand" href="#">
      <span class="fw-bold text-header">Edwardtonnn</span>
    </a>
    <!-- Toggler button for mobile menu -->
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <!-- Collapsible menu -->
    <div class="collapse navbar-collapse" id="navbarNav">
      <ul class="navbar-nav ms-auto">
        <li class="nav-item">
          <a class="nav-link" href="#">Create</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Iterate</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Repeat</a>
        </li>
      </ul>
    </div>
  </div>
</nav>


<!-- Hero Section -->
<div class="preloader black"></div>
<div class="preloader white">
<div class="loading">
  <span></span>
  <span></span>
  <span></span>
  <span></span>
  <span></span>
</div></div>
<section class="hero">
 <div class="container">
   <div class="row flex-column-reverse flex-md-row">
     <div class="col-lg-6 d-flex flex-column justify-content-center custom-height">
       <h1 class="text-header large text-white">Boundless Spirit</h1>
       <p class="text-white text-small">In this evocative piece, a colossal whale is seen within the confines of a small aquarium, its massive body pressed against glass walls that strain under its sheer magnitude. Photographed with stunning realism, the scene captures the dim glow of subdued lighting, casting reflections that ripple across the water’s surface. The whale’s eye, filled with a haunting melancholy, gazes outward, mirroring the quiet despair of confinement. Surrounded by trivial aquarium decorations—tiny plants and scattered pebbles—the whale’s presence renders them absurd, heightening the tragic contrast of freedom against captivity. This artwork speaks of the silent suffering of bound spirits, inviting us to confront the vastness within that yearns to break free from the limits we impose.</p>
     </div>
     <div class="col-lg-6 my-5 d-flex flex-column justify-content-center ">
     <video class="img-fluid subject" src="/subject.mp4" alt="Whale subject" autoplay loop muted playsinline></video>

     </div>
   </div>
 </div>
</section>
</div>
`
document.addEventListener("DOMContentLoaded", () => {
  const tl = gsap.timeline({
    defaults: {
      duration: 0.5,
      ease: "power2.inOut",
    },
  });

  tl.to(".preloader.white", {
    delay: 2,
    clipPath: "inset(0 100% 0 0)", // Animate white preloader out
  })
  .to(".preloader.black", {
    clipPath: "inset(0 100% 0 0)", // Animate black preloader out
    delay: 0.2, // Small delay for smoother transition
  })
  .fromTo(
    ".text-header, .text-small",
    { clipPath: "inset(100% 0 0 0)" }, // Start with text hidden at bottom
    { clipPath: "inset(0 0 0 0)", duration: 1 } // Reveal text with a slower effect
  ).fromTo(".subject", 
    {opacity:0, scale:0.8},
    {opacity:1, scale:1, duration:2.5}
  )
  ;
});



