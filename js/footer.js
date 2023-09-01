

//Information section before footer

document.addEventListener('DOMContentLoaded', function() {
    // Target the headerContainer element
    var infoContainer = document.getElementById('infoId');

    // Your header content
    var infoHTML = `<div class="container">
    <div class="row">
      <div class="col-md-4">
        <div class="info_contact">
          <h4>
            Address
          </h4>
          <div class="contact_link_box">
            <a href="https://maps.app.goo.gl/gkoetve3QmooHjsb8">
              <i class="fa fa-map-marker" aria-hidden="true"></i>
              <span>
                13/203-205, Meat Market Street, Daknipet, Madanapalle, Andhra Pradesh 517325
              </span>
            </a>
            <a href="">
              <i class="fa fa-phone" aria-hidden="true"></i>
              <span>
                +91 7842 100 948
              </span>
            </a>
            <a href="">
              <i class="fa fa-envelope" aria-hidden="true"></i>
              <span>
                contact@altarizsolutions.com
              </span>
            </a>
          </div>
        </div>
        <div class="info_social">
          <a href="https://www.facebook.com/people/Altariz-Solutions-Pvt-Ltd/100084903571428/">
            <i class="fa fa-facebook" aria-hidden="true"></i>
          </a>
          <a href="https://www.linkedin.com/company/altariz-solutions/">
            <i class="fa fa-linkedin" aria-hidden="true"></i>
          </a>
          <a href=" https://www.instagram.com/altarizsolutions/">
            <i class="fa fa-instagram" aria-hidden="true"></i>
          </a>
        </div>
      </div>
      <div class="col-md-4">
        <div class="info_link_box">
          <h4>
            Links
          </h4>
          <div class="info_links">
            <a class="  " href="index.html">
              <img src="images/nav-bullet.png" alt="">
              Home
            </a>
            <a class="" href="training.html">
              <img src="images/nav-bullet.png" alt="">
              Training
            </a>
            <a class="" href="development.html">
              <img src="images/nav-bullet.png" alt="">
              Development
            </a>
            <a class="" href="recruitment.html">
              <img src="images/nav-bullet.png" alt="">
              Recruitment
            </a>
            <a class="" href="contact.html">
              <img src="images/nav-bullet.png" alt="">
              Contact
            </a>
            <a class="" href="career.html">
              <img src="images/nav-bullet.png" alt="">
              Career
            </a>
          </div>
        </div>
      </div>
      <div class="col-md-4">
        <div class="info_detail">
          <h4>
            Info
          </h4>
          <p>Join us today and see the difference we can make in growing your organization. Let Altariz Solutions lead you on your digital transformation journey, making your future brighter and more innovative.
            
          </p>
        </div>
      </div>
      <!-- <div class="col-md-3 mb-0">
        <h4>
          Subscribe
        </h4>
        <form action="#">
          <input type="text" placeholder="Enter email" />
          <button type="submit">
            Subscribe
          </button>
        </form>
      </div> -->
    </div>
  </div>`;

    // Inject the header HTML into the headerContainer
    infoContainer.innerHTML = infoHTML;
});


//Footer Section
document.addEventListener('DOMContentLoaded', function() {
  // Target the headerContainer element
  var footerContainer = document.getElementById('footerId');

  // Your header content
  var footerHTML = ` <div class="container">
  <p>
    &copy; <span id="displayYear"></span> All Rights Reserved By
    <a href="index.html">AltaRiz Solutions Private Ltd</a>
  </p>
</div>`;

  // Inject the header HTML into the headerContainer
  footerContainer.innerHTML = footerHTML;
});