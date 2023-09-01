// Wait for the document to finish loading
document.addEventListener('DOMContentLoaded', function() {
    // Target the headerContainer element
    var headerContainer = document.getElementById('headerId');

    // Your header content
    var headerHTML = `<div class="container-fluid">
    <nav class="navbar navbar-expand-lg custom_nav-container">
      <a class="navbar-brand" href="index.html">
        <span><img src="images/logo.svg"></span>
      </a>

      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class=""> </span>
      </button>

      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav  ml-auto">
          <li class="nav-item active">
            <a class="nav-link headerBtn" href="index.html">Home<span class="sr-only">(current)</span></a>
          </li>
          <li class="nav-item">
            <a class="nav-link headerBtn" href="training.html">Training</a>
          </li>
          <li class="nav-item">
            <a class="nav-link headerBtn" href="development.html">Development</a>
          </li>
          <li class="nav-item">
            <a class="nav-link headerBtn" href="recruitment.html">Recruitment</a>
          </li>
          <li class="nav-item">
            <a class="nav-link headerBtn" href="contact.html">Contact</a>
          </li>
          <li class="nav-item">
          
            <a class="nav-link headerBtnc" href="career.html">Career</a>
            
          </li>
        </ul>
        <div class="quote_btn-container">
          <!-- <form class="form-inline">
            <button class="btn   nav_search-btn" type="submit">
              <i class="fa fa-search" aria-hidden="true"></i>
            </button>
          </form> -->
          <!-- <a href="">
            <i class="fa fa-phone" aria-hidden="true"></i>
            <span>
              Call : +01 123455678990
            </span>
          </a> -->
        </div>
      </div>
    </nav>
  </div>`;

    // Inject the header HTML into the headerContainer
    headerContainer.innerHTML = headerHTML;
});
