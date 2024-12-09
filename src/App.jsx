
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './App.css'
import { faLocationDot } from '@fortawesome/free-solid-svg-icons'
import { faFacebook, faInstagram, faLinkedin, faTwitter, faYoutube } from '@fortawesome/free-brands-svg-icons'





function App() {


  return (
    <>
      <div className='main '>
        <div className='back'>
          <div className='header bg-transparent d-flex justify-content-around' style={{ width: '100%' }}>
            <div className='mt-4'>
              <h1 className='text-white' style={{ fontSize: '18px' }}>Get the App</h1>
            </div>
            <div className='d-flex justify-content-around text-white mt-4'>
              <a className='text-white mx-3' style={{ textDecoration: 'none' }} href="#">Investors Reactions</a>
              <a className='text-white mx-3' style={{ textDecoration: 'none' }} href="#">Add Restaurant</a>
              <a className='text-white mx-3' style={{ textDecoration: 'none' }} href="#">Log in</a>
              <a className='text-white mx-3' style={{ textDecoration: 'none' }} href="#">Sign in</a>
            </div>
          </div>
          <div className="container-fluid text-white py-5 mt-4">
            <div className="container">
              {/* Title and Subtitle */}
              <div className="text-center">
                <h1 style={{ fontSize: '80px' }} className="fw-bold">Zomato</h1>
                <p style={{ fontSize: '40px' }}>Discover the best food & drinks in Kochi</p>
              </div>
              {/* Search Bar Section */}
              <div className="row justify-content-center mt-4">
                <div className="col-md-6" >
                  <div className="input-group " style={{ height: '50px', width: '100%' }}>
                    {/* Location Icon */}
                    <span className="input-group-text bg-white text-danger">
                      <FontAwesomeIcon icon={faLocationDot} />
                    </span>

                    <input
                      type="text"
                      className="form-control"
                      placeholder="Kochi"
                    />

                    <input
                      type="text"
                      className="form-control"
                      placeholder="Search for restaurant, cuisine, or a dish"
                    />

                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>


      {/* cards */}
      <div className="container my-5">
        <div className="row ">
          <div className='col-md-1'></div>
          {/* Order Online Card */}
          <div className="col-md-5">
            <div className="card custom-card">
              <div className="image-container">
                <img
                  src="https://www.unileverfoodsolutions.com.sg/en/we-are-chefs-supporting-chefs/jcr:content/parsys/set1/row5/span6right/textimage_copy_32770/image.transform/jpeg-optimized/image.1573138758622.jpg" // Replace with your actual image
                  className="card-img-top"
                  alt="Order Online"
                />
              </div>
              <div className="card-body">
                <h5 className="card-title">Order Online</h5>
                <p className="card-text">Stay home and order to your doorstep</p>
              </div>
            </div>
          </div>
          {/* Dining Card */}
          <div className="col-md-5">
            <div className="card custom-card">
              <div className="image-container">
                <img
                  src="https://www.unileverfoodsolutions.com.sg/en/we-are-chefs-supporting-chefs/jcr:content/parsys/set1/row5/span6right/textimage_copy_32770/image.transform/jpeg-optimized/image.1573138758622.jpg" // Replace with your actual image
                  className="card-img-top"
                  alt="Dining"
                />
              </div>
              <div className="card-body ">
                <h5 className="card-title">Dining</h5>
                <p className="card-text">
                  View the city's favourite dining venues
                </p>
              </div>
            </div>
          </div>
          <div className='col-md-1'></div>
        </div>
      </div>

      {/* collections */}
      <div className="container my-5">
        {/* Section Heading */}
        <div className="d-flex justify-content-between align-items-center mb-4">
          <div>
            <h2 className="fw-bold">Collections</h2>
            <p className="text-muted">
              Explore curated lists of top restaurants, cafes, pubs, and bars in Kochi, based on trends
            </p>
          </div>
          <a href="#" className="text-danger fw-bold text-decoration-none">
            All collections in Kochi &gt;
          </a>
        </div>

        {/* Collection Cards */}
        <div className="row g-4">
          {/* Card 1 */}
          <div className="col-md-3 col-sm-6">
            <div className="card collection-card">
              <img
                src="https://i.pinimg.com/originals/51/36/b3/5136b3f1bc0a3bebff70d017347c6aa7.jpg"
                className="card-img-top"
                alt="8 Places for Art Lovers"
              />
              <div className="card-img-overlay d-flex flex-column justify-content-end">
                <h5 className="text-white fw-bold">8 Places for Art Lovers</h5>
                <p className="text-white mb-0">7 Places ▸</p>
              </div>
            </div>
          </div>

          {/* Card 2 */}
          <div className="col-md-3 col-sm-6">
            <div className="card collection-card">
              <img
                src="https://i.pinimg.com/originals/51/36/b3/5136b3f1bc0a3bebff70d017347c6aa7.jpg"
                className="card-img-top"
                alt="Great Cafes"
              />
              <div className="card-img-overlay d-flex flex-column justify-content-end">
                <h5 className="text-white fw-bold">Great Cafes</h5>
                <p className="text-white mb-0">11 Places ▸</p>
              </div>
            </div>
          </div>

          {/* Card 3 */}
          <div className="col-md-3 col-sm-6">
            <div className="card collection-card">
              <img
                src="https://i.pinimg.com/originals/51/36/b3/5136b3f1bc0a3bebff70d017347c6aa7.jpg"
                className="card-img-top"
                alt="6 Places for Authentic Kuzhimandhi"
              />
              <div className="card-img-overlay d-flex flex-column justify-content-end">
                <h5 className="text-white fw-bold">6 Places for Authentic Kuzhimandhi</h5>
                <p className="text-white mb-0">5 Places ▸</p>
              </div>
            </div>
          </div>

          {/* Card 4 */}
          <div className="col-md-3 col-sm-6">
            <div className="card collection-card">
              <img
                src="https://i.pinimg.com/originals/51/36/b3/5136b3f1bc0a3bebff70d017347c6aa7.jpg"
                className="card-img-top"
                alt="5 Must-visit Legendary Places"
              />
              <div className="card-img-overlay d-flex flex-column justify-content-end">
                <h5 className="text-white fw-bold">5 Must-visit Legendary Places</h5>
                <p className="text-white mb-0">5 Places ▸</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* popular locations */}
      <div className="container my-5">
        <h2 className="mb-4">Popular localities in and around <span>Kochi</span></h2>
        <div className="row g-3">
          {/* Locality Cards */}
          <div className="col-md-4 col-sm-6">
            <div className="border rounded px-3 py-4 locality-card">
              <div className="d-flex justify-content-between align-items-center">
                <h5 className=" mb-0">Kakkanad</h5>
                <span className="text-danger fw-bold">&gt;</span>
              </div>
              <p className="text-muted mt-2 mb-0">509 places</p>
            </div>
          </div>
          <div className="col-md-4 col-sm-6">
            <div className="border rounded px-3 py-4 locality-card">
              <div className="d-flex justify-content-between align-items-center">
                <h5 className=" mb-0">Edappally</h5>
                <span className="text-danger fw-bold">&gt;</span>
              </div>
              <p className="text-muted mt-2 mb-0">395 places</p>
            </div>
          </div>
          <div className="col-md-4 col-sm-6">
            <div className="border rounded px-3 py-4 locality-card">
              <div className="d-flex justify-content-between align-items-center">
                <h5 className=" mb-0">Fort Kochi</h5>
                <span className="text-danger fw-bold">&gt;</span>
              </div>
              <p className="text-muted mt-2 mb-0">162 places</p>
            </div>
          </div>
          <div className="col-md-4 col-sm-6">
            <div className="border rounded px-3 py-4 locality-card">
              <div className="d-flex justify-content-between align-items-center">
                <h5 className=" mb-0">Panampilly Nagar</h5>
                <span className="text-danger fw-bold">&gt;</span>
              </div>
              <p className="text-muted mt-2 mb-0">121 places</p>
            </div>
          </div>
          <div className="col-md-4 col-sm-6">
            <div className="border rounded px-3 py-4 locality-card">
              <div className="d-flex justify-content-between align-items-center">
                <h5 className=" mb-0">MG Road</h5>
                <span className="text-danger fw-bold">&gt;</span>
              </div>
              <p className="text-muted mt-2 mb-0">132 places</p>
            </div>
          </div>
          <div className="col-md-4 col-sm-6">
            <div className="border rounded px-3 py-4 locality-card">
              <div className="d-flex justify-content-between align-items-center">
                <h5 className=" mb-0">Kacheripady</h5>
                <span className="text-danger fw-bold">&gt;</span>
              </div>
              <p className="text-muted mt-2 mb-0">157 places</p>
            </div>
          </div>
          <div className="col-md-4 col-sm-6">
            <div className="border rounded px-3 py-4 locality-card">
              <div className="d-flex justify-content-between align-items-center">
                <h5 className=" mb-0">Palarivattom</h5>
                <span className="text-danger fw-bold">&gt;</span>
              </div>
              <p className="text-muted mt-2 mb-0">182 places</p>
            </div>
          </div>
          <div className="col-md-4 col-sm-6">
            <div className="border rounded px-3 py-4 locality-card">
              <div className="d-flex justify-content-between align-items-center">
                <h5 className=" mb-0">Vyttila</h5>
                <span className="text-danger fw-bold">&gt;</span>
              </div>
              <p className="text-muted mt-2 mb-0">171 places</p>
            </div>
          </div>
          <div className="col-md-4 col-sm-6">
            <div className="border rounded px-3 py-4 locality-card d-flex flex-column justify-content-center align-items-center">
              <h5 className="mb-2 text-center">See More</h5>
              <span className="text-danger fw-bold fs-6">▼</span> {/* Downward arrow */}
            </div>
          </div>
        </div>
      </div>

      {/* get app */}
      <div className="container my-5">
        {/* Outer wrapper with additional padding */}
        <div className="row align-items-center px-3">
          {/* Image Section */}
          <div className="col-md-6 text-center">
            <img
              src="https://b.zmtcdn.com/data/o2_assets/ce5bc038a8a2d4f8f24465c8826182af1726501431.png" // Replace with the actual image link or local path
              alt="Zomato App Preview"
              className="img-fluid"
              style={{ width: '400px' }}
            />
          </div>

          {/* Text and Form Section */}
          <div className="col-md-6">
            <h2 className="mb-3">Get the Zomato app</h2>
            <p className="mb-4">
              We will send you a link, open it on your phone to download the app.
            </p>

            <form>
              <div className="mb-3">
                <div className="form-check form-check-inline">
                  <input
                    className="form-check-input"
                    type="radio"
                    name="contactMethod"
                    id="emailOption"
                    value="email"
                    defaultChecked
                  />
                  <label className="form-check-label" htmlFor="emailOption">
                    Email
                  </label>
                </div>
                <div className="form-check form-check-inline">
                  <input
                    className="form-check-input"
                    type="radio"
                    name="contactMethod"
                    id="phoneOption"
                    value="phone"
                  />
                  <label className="form-check-label" htmlFor="phoneOption">
                    Phone
                  </label>
                </div>
              </div>

              <div className="input-group mb-3">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Email or Phone"
                  required
                />
                <button type="submit" className="btn rounded btn-danger ms-3">
                  Share App Link
                </button>
              </div>
            </form>

            <div className="mt-4">
              <p>Download app from</p>
              <div className="d-flex">
                <a href="https://play.google.com/store" target="_blank" rel="noopener noreferrer">
                  <img
                    src="https://b.zmtcdn.com/data/webuikit/23e930757c3df49840c482a8638bf5c31556001144.png" // Replace with Google Play badge image URL
                    alt="Google Play Store"
                    className="me-2"
                    style={{ height: "40px" }}
                  />
                </a>
                <a href="https://www.apple.com/app-store/" target="_blank" rel="noopener noreferrer">
                  <img
                    src="https://b.zmtcdn.com/data/webuikit/9f0c85a5e33adb783fa0aef667075f9e1556003622.png" // Replace with App Store badge image URL
                    alt="Apple App Store"
                    style={{ height: "40px" }}
                  />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Explore option */}
      <div className="container my-5">
        <div className='row'>

          <div className="col-md-1"></div>
          <div className="col-md-10">
            <h2 className="mb-4">Explore options near me</h2>
            <div className="accordion" id="exploreAccordion">
              {/* Accordion Item 1 */}
              <div className="accordion-item mb-3 rounded">
                <h2 className="accordion-header" id="headingOne">
                  <button
                    className="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapseOne"
                    aria-expanded="false"
                    aria-controls="collapseOne"
                  >
                    Popular Cuisines Near Me
                  </button>
                </h2>
                <div
                  id="collapseOne"
                  className="accordion-collapse collapse"
                  aria-labelledby="headingOne"
                  data-bs-parent="#exploreAccordion"
                >
                  <div className="accordion-body">
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident, ipsam accusantium. Sit quia nisi explicabo et debitis voluptates dicta nam, ut maxime ipsam rerum esse? Cumque labore nisi minima provident.</p>
                  </div>
                </div>
              </div>

              {/* Accordion Item 2 */}
              <div className="accordion-item mb-3 rounded">
                <h2 className="accordion-header" id="headingTwo">
                  <button
                    className="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapseTwo"
                    aria-expanded="false"
                    aria-controls="collapseTwo"
                  >
                    Popular Restaurant Types Near Me
                  </button>
                </h2>
                <div
                  id="collapseTwo"
                  className="accordion-collapse collapse"
                  aria-labelledby="headingTwo"
                  data-bs-parent="#exploreAccordion"
                >
                  <div className="accordion-body">
                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eius eos non odit molestias tempora aut magni dolorum nobis dolorem voluptatem rerum hic ipsum illum iste beatae quidem, debitis ea totam.</p>
                  </div>
                </div>
              </div>

              {/* Accordion Item 3 */}
              <div className="accordion-item mb-3 rounded">
                <h2 className="accordion-header" id="headingThree">
                  <button
                    className="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapseThree"
                    aria-expanded="false"
                    aria-controls="collapseThree"
                  >
                    Top Restaurant Chains
                  </button>
                </h2>
                <div
                  id="collapseThree"
                  className="accordion-collapse collapse"
                  aria-labelledby="headingThree"
                  data-bs-parent="#exploreAccordion"
                >
                  <div className="accordion-body">
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam eaque doloribus ullam, animi vel saepe magni placeat repudiandae porro! Repellat, iste nemo praesentium quis autem vitae porro cumque amet culpa.</p>
                  </div>
                </div>
              </div>

              {/* Accordion Item 4 */}
              <div className="accordion-item mb-3 rounded">
                <h2 className="accordion-header" id="headingFour">
                  <button
                    className="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapseFour"
                    aria-expanded="false"
                    aria-controls="collapseFour"
                  >
                    Cities We Deliver To
                  </button>
                </h2>
                <div
                  id="collapseFour"
                  className="accordion-collapse collapse"
                  aria-labelledby="headingFour"
                  data-bs-parent="#exploreAccordion"
                >
                  <div className="accordion-body">
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda, ipsam reprehenderit dolorum aut fuga labore amet, modi molestiae, enim repellendus asperiores praesentium excepturi deserunt accusantium quae. Aspernatur deserunt vero inventore.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-1"></div>
        </div>


        {/* Accordion Section */}

      </div>

      {/* conact */}
      <div>
      {/* Footer Section */}
      <footer className="mt-5 bg-light pt-4 pb-2">
        <div className="container">
          <div className="row">
            {/* Grid System for Spacing */}
            <div className="col-1"></div>
            <div className="col-10">
              <div className="row align-items-center mb-4">
                {/* Zomato Logo */}
                <div className="col-md-6">
                  <h4 className="fw-bold fs-1">Zomato</h4>
                </div>

                {/* Country and Language Buttons */}
                <div className="col-md-6 text-md-end">
                  <select className="form-select form-select-sm d-inline-block me-2" style={{ width: "120px" }}>
                    <option>India</option>
                    <option>USA</option>
                    <option>UK</option>
                  </select>
                  <select className="form-select form-select-sm d-inline-block" style={{ width: "120px" }}>
                    <option>English</option>
                    <option>Hindi</option>
                    <option>French</option>
                  </select>
                </div>
              </div>

              {/* Social Links Section */}
              <div className="row text-md-end mb-3">
                <div className="col">
                  <span className="me-3">Follow us on:</span>
                  <FontAwesomeIcon className='me-2' icon={faLinkedin} size="sm" />
                  <FontAwesomeIcon className='me-2' icon={faInstagram} size="sm" />
                  <FontAwesomeIcon className='me-2' icon={faTwitter} size="sm" />
                  <FontAwesomeIcon className='me-2' icon={faYoutube} size="sm" />
                  <FontAwesomeIcon className='me-2' icon={faFacebook} size="sm" />
                </div>
              </div>

              {/* App Store & Play Store Buttons */}
              <div className="row text-md-end mb-4">
                <div className="col flex">
                  <img
                    src="https://b.zmtcdn.com/data/webuikit/23e930757c3df49840c482a8638bf5c31556001144.png"
                    alt="Download on Google Play"
                    style={{ width: "150px" }}
                    className="me-2"
                  />
                  <img
                    src="https://b.zmtcdn.com/data/webuikit/9f0c85a5e33adb783fa0aef667075f9e1556003622.png"
                    alt="Download on App Store"
                    style={{ width: "150px" }}
                  />
                </div>
              </div>

              {/* Links Section */}
              <div className="row">
                <div className="col-md-2">
                  <h6 className="fw-bold">ABOUT ZOMATO</h6>
                  <ul className="list-unstyled">
                    <li>Who We Are</li>
                    <li>Blog</li>
                    <li>Work With Us</li>
                    <li>Investor Relations</li>
                    <li>Report Fraud</li>
                    <li>Press Kit</li>
                    <li>Contact Us</li>
                  </ul>
                </div>
                <div className="col-md-2">
                  <h6 className="fw-bold">ZOMAVERSE</h6>
                  <ul className="list-unstyled">
                    <li>Zomato</li>
                    <li>Blinkit</li>
                    <li>District</li>
                    <li>Feeding India</li>
                    <li>Hyperpure</li>
                    <li>Zomaland</li>
                    <li>Weather Union</li>
                  </ul>
                </div>
                <div className="col-md-2">
                  <h6 className="fw-bold">FOR RESTAURANTS</h6>
                  <ul className="list-unstyled">
                    <li>Partner With Us</li>
                    <li>Apps For You</li>
                  </ul>
                </div>
                <div className="col-md-2">
                  <h6 className="fw-bold">LEARN MORE</h6>
                  <ul className="list-unstyled">
                    <li>Privacy</li>
                    <li>Security</li>
                    <li>Terms</li>
                  </ul>
                </div>
              </div>

              {/* Footer Bottom */}
              <div className="text-center mt-4">
                <p className="text-muted small">
                  By continuing past this page, you agree to our Terms of Service, Cookie Policy, Privacy Policy, and Content Policies.
                  <br />
                  &copy; 2024 Zomato Ltd. All rights reserved.
                </p>
              </div>
            </div>
            <div className="col-1"></div>
          </div>
        </div>
      </footer>
    </div>



    </>
  )
}

export default App
