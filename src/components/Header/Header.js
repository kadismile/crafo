import React from "react"
function Header () {
  return (
    <div>
    <header className="pb-md-4 pb-0">
      <div className="header-top">
        
      </div>
      <div className="top-nav top-header sticky-header">
        <div className="container-fluid-lg">
          <div className="row">
            <div className="col-12">
              <div className="navbar-top">
                <button className="navbar-toggler d-xl-none d-inline navbar-menu-button" type="button" data-bs-toggle="offcanvas" data-bs-target="#primaryMenu">
                  <span className="navbar-toggler-icon">
                    <i className="fa-solid fa-bars" />
                  </span>
                </button>
                <a href="index.html" className="web-logo nav-logo">
                  <img src="./assets/images/logo/logo.PNG" className="img-fluid blur-up lazyload" alt="" />
                </a>
                <div className="middle-box">
                  <div className="search-box">
                    <div className="input-group">
                      <input type="search" className="form-control" placeholder="I'm searching for..." aria-label="Recipient's username" aria-describedby="button-addon2" />
                      <button className="btn" type="button" id="button-addon2">
                        <i data-feather="search" />
                      </button>
                    </div>
                  </div>
                </div>
                <div className="rightside-box">
                  <div className="search-full">
                    <div className="input-group">
                      <span className="input-group-text">
                        <i data-feather="search" className="font-light" />
                      </span>
                      <input type="text" className="form-control search-type" placeholder="Search here.." />
                      <span className="input-group-text close-search">
                        <i data-feather="x" className="font-light" />
                      </span>
                    </div>
                  </div>
                  <ul className="right-side-menu">
                    <li className="right-side">
                      <div className="delivery-login-box">
                        <div className="delivery-icon">
                          <div className="search-box">
                            <i data-feather="search" />
                          </div>
                        </div>
                      </div>
                    </li>
                    <li className="right-side">
                      <a href="contact-us.html" className="delivery-login-box">
                        <div className="delivery-icon">
                          <i data-feather="phone-call" />
                        </div>
                        <div className="delivery-detail">
                          <h6>24/7 Delivery</h6>
                          <h5>+91 888 104 2340</h5>
                        </div>
                      </a>
                    </li>
                    <li className="right-side">
                      <a href="wishlist.html" className="btn p-0 position-relative header-wishlist">
                        <i data-feather="heart" />
                      </a>
                    </li>
                    <li className="right-side">
                      <div className="onhover-dropdown header-badge">
                        <button type="button" className="btn p-0 position-relative header-wishlist">
                          <i data-feather="shopping-cart" />
                          <span className="position-absolute top-0 start-100 translate-middle badge">2
                            <span className="visually-hidden">unread messages</span>
                          </span>
                        </button>
                        <div className="onhover-div">
                          <ul className="cart-list">
                            <li className="product-box-contain">
                              <div className="drop-cart">
                                <a href="product-left.html" className="drop-image">
                                  <img src="https://themes.pixelstrap.com/fastkart/assets/images/vegetable/product/1.png" className="blur-up lazyload" alt="" />
                                </a>
                                <div className="drop-contain">
                                  <a href="product-left.html">
                                    <h5>Fantasy Crunchy Choco Chip Cookies</h5>
                                  </a>
                                  <h6><span>1 x</span> $80.58</h6>
                                  <button className="close-button close_button">
                                    <i className="fa-solid fa-xmark" />
                                  </button>
                                </div>
                              </div>
                            </li>
                            <li className="product-box-contain">
                              <div className="drop-cart">
                                <a href="product-left.html" className="drop-image">
                                  <img src="https://themes.pixelstrap.com/fastkart/assets/images/vegetable/product/2.png" className="blur-up lazyload" alt="" />
                                </a>
                                <div className="drop-contain">
                                  <a href="product-left.html">
                                    <h5>Peanut Butter Bite Premium Butter Cookies 600 g
                                    </h5>
                                  </a>
                                  <h6><span>1 x</span> $25.68</h6>
                                  <button className="close-button close_button">
                                    <i className="fa-solid fa-xmark" />
                                  </button>
                                </div>
                              </div>
                            </li>
                          </ul>
                          <div className="price-box">
                            <h5>Total :</h5>
                            <h4 className="theme-color fw-bold">$106.58</h4>
                          </div>
                          <div className="button-group">
                            <a href="cart.html" className="btn btn-sm cart-button">View Cart</a>
                            <a href="checkout.html" className="btn btn-sm cart-button theme-bg-color
                                                text-white">Checkout</a>
                          </div>
                        </div>
                      </div>
                    </li>
                    <li className="right-side onhover-dropdown">
                      <div className="delivery-login-box">
                        <div className="delivery-icon">
                          <i data-feather="user" />
                        </div>
                        <div className="delivery-detail">
                          <h6>Hello,</h6>
                          <h5>My Account</h5>
                        </div>
                      </div>
                      <div className="onhover-div onhover-div-login">
                        <ul className="user-box-name">
                          <li className="product-box-contain">
                            <i />
                            <a href="log-in.html">Log In</a>
                          </li>
                          <li className="product-box-contain">
                            <a href="sign-up.html">Register</a>
                          </li>
                          <li className="product-box-contain">
                            <a href="forgot.html">Forgot Password</a>
                          </li>
                        </ul>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container-fluid-lg">
        <div className="row">
          <div className="col-12">
            <div className="header-nav">
              <div className="header-nav-left">
                <button className="dropdown-category">
                  <i data-feather="align-left" />
                  <span>All Categories</span>
                </button>
                <div className="category-dropdown">
                  <div className="category-title">
                    <h5>Categories</h5>
                    <button type="button" className="btn p-0 close-button text-content">
                      <i className="fa-solid fa-xmark" />
                    </button>
                  </div>
                  <ul className="category-list">
                    <li className="onhover-category-list">
                      <a href="#/" className="category-name">
                        <img src="https://themes.pixelstrap.com/fastkart/assets/svg/1/vegetable.svg" alt="" />
                        <h6>Vegetables &amp; Fruit</h6>
                        <i className="fa-solid fa-angle-right" />
                      </a>
                      <div className="onhover-category-box">
                        <div className="list-1">
                          <div className="category-title-box">
                            <h5>Organic Vegetables</h5>
                          </div>
                          <ul>
                            <li>
                              <a href="#/">Potato &amp; Tomato</a>
                            </li>
                            <li>
                              <a href="#/">Cucumber &amp; Capsicum</a>
                            </li>
                            <li>
                              <a href="#/">Leafy Vegetables</a>
                            </li>
                            <li>
                              <a href="#/">Root Vegetables</a>
                            </li>
                            <li>
                              <a href="#/">Beans &amp; Okra</a>
                            </li>
                            <li>
                              <a href="#/">Cabbage &amp; Cauliflower</a>
                            </li>
                            <li>
                              <a href="#/">Gourd &amp; Drumstick</a>
                            </li>
                            <li>
                              <a href="#/">Specialty</a>
                            </li>
                          </ul>
                        </div>
                        <div className="list-2">
                          <div className="category-title-box">
                            <h5>Fresh Fruit</h5>
                          </div>
                          <ul>
                            <li>
                              <a href="#/">Banana &amp; Papaya</a>
                            </li>
                            <li>
                              <a href="#/">Kiwi, Citrus Fruit</a>
                            </li>
                            <li>
                              <a href="#/">Apples &amp; Pomegranate</a>
                            </li>
                            <li>
                              <a href="#/">Seasonal Fruits</a>
                            </li>
                            <li>
                              <a href="#/">Mangoes</a>
                            </li>
                            <li>
                              <a href="#/">Fruit Baskets</a>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </li>
                    <li className="onhover-category-list">
                      <a href="#/" className="category-name">
                        <img src="https://themes.pixelstrap.com/fastkart/assets/svg/1/cup.svg" alt="" />
                        <h6>Beverages</h6>
                        <i className="fa-solid fa-angle-right" />
                      </a>
                      <div className="onhover-category-box w-100">
                        <div className="list-1">
                          <div className="category-title-box">
                            <h5>Energy &amp; Soft Drinks</h5>
                          </div>
                          <ul>
                            <li>
                              <a href="#/">Soda &amp; Cocktail Mix</a>
                            </li>
                            <li>
                              <a href="#/">Soda &amp; Cocktail Mix</a>
                            </li>
                            <li>
                              <a href="#/">Sports &amp; Energy Drinks</a>
                            </li>
                            <li>
                              <a href="#/">Non Alcoholic Drinks</a>
                            </li>
                            <li>
                              <a href="#/">Packaged Water</a>
                            </li>
                            <li>
                              <a href="#/">Spring Water</a>
                            </li>
                            <li>
                              <a href="#/">Flavoured Water</a>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </li>
                    <li className="onhover-category-list">
                      <a href="#/" className="category-name">
                        <img src="https://themes.pixelstrap.com/fastkart/assets/svg/1/meats.svg" alt="" />
                        <h6>Meats &amp; Seafood</h6>
                        <i className="fa-solid fa-angle-right" />
                      </a>
                      <div className="onhover-category-box">
                        <div className="list-1">
                          <div className="category-title-box">
                            <h5>Meat</h5>
                          </div>
                          <ul>
                            <li>
                              <a href="#/">Fresh Meat</a>
                            </li>
                            <li>
                              <a href="#/">Frozen Meat</a>
                            </li>
                            <li>
                              <a href="#/">Marinated Meat</a>
                            </li>
                            <li>
                              <a href="#/">Fresh &amp; Frozen Meat</a>
                            </li>
                          </ul>
                        </div>
                        <div className="list-2">
                          <div className="category-title-box">
                            <h5>Seafood</h5>
                          </div>
                          <ul>
                            <li>
                              <a href="#/">Fresh Water Fish</a>
                            </li>
                            <li>
                              <a href="#/">Dry Fish</a>
                            </li>
                            <li>
                              <a href="#/">Frozen Fish &amp; Seafood</a>
                            </li>
                            <li>
                              <a href="#/">Marine Water Fish</a>
                            </li>
                            <li>
                              <a href="#/">Canned Seafood</a>
                            </li>
                            <li>
                              <a href="#/">Prawans &amp; Shrimps</a>
                            </li>
                            <li>
                              <a href="#/">Other Seafood</a>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </li>
                    <li className="onhover-category-list">
                      <a href="#/" className="category-name">
                        <img src="https://themes.pixelstrap.com/fastkart/assets/svg/1/breakfast.svg" alt="" />
                        <h6>Breakfast &amp; Dairy</h6>
                        <i className="fa-solid fa-angle-right" />
                      </a>
                      <div className="onhover-category-box">
                        <div className="list-1">
                          <div className="category-title-box">
                            <h5>Breakfast Cereals</h5>
                          </div>
                          <ul>
                            <li>
                              <a href="#/">Oats &amp; Porridge</a>
                            </li>
                            <li>
                              <a href="#/">Kids Cereal</a>
                            </li>
                            <li>
                              <a href="#/">Muesli</a>
                            </li>
                            <li>
                              <a href="#/">Flakes</a>
                            </li>
                            <li>
                              <a href="#/">Granola &amp; Cereal Bars</a>
                            </li>
                            <li>
                              <a href="#/">Instant Noodles</a>
                            </li>
                            <li>
                              <a href="#/">Pasta &amp; Macaroni</a>
                            </li>
                            <li>
                              <a href="#/">Frozen Non-Veg Snacks</a>
                            </li>
                          </ul>
                        </div>
                        <div className="list-2">
                          <div className="category-title-box">
                            <h5>Dairy</h5>
                          </div>
                          <ul>
                            <li>
                              <a href="#/">Milk</a>
                            </li>
                            <li>
                              <a href="#/">Curd</a>
                            </li>
                            <li>
                              <a href="#/">Paneer, Tofu &amp; Cream</a>
                            </li>
                            <li>
                              <a href="#/">Butter &amp; Margarine</a>
                            </li>
                            <li>
                              <a href="#/">Condensed, Powdered Milk</a>
                            </li>
                            <li>
                              <a href="#/">Buttermilk &amp; Lassi</a>
                            </li>
                            <li>
                              <a href="#/">Yogurt &amp; Shrikhand</a>
                            </li>
                            <li>
                              <a href="#/">Flavoured, Soya Milk</a>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </li>
                    <li className="onhover-category-list">
                      <a href="#/" className="category-name">
                        <img src="https://themes.pixelstrap.com/fastkart/assets/svg/1/frozen.svg" alt="" />
                        <h6>Frozen Foods</h6>
                        <i className="fa-solid fa-angle-right" />
                      </a>
                      <div className="onhover-category-box w-100">
                        <div className="list-1">
                          <div className="category-title-box">
                            <h5>Noodle, Pasta</h5>
                          </div>
                          <ul>
                            <li>
                              <a href="#/">Instant Noodles</a>
                            </li>
                            <li>
                              <a href="#/">Hakka Noodles</a>
                            </li>
                            <li>
                              <a href="#/">Cup Noodles</a>
                            </li>
                            <li>
                              <a href="#/">Vermicelli</a>
                            </li>
                            <li>
                              <a href="#/">Instant Pasta</a>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </li>
                    <li className="onhover-category-list">
                      <a href="#/" className="category-name">
                        <img src="https://themes.pixelstrap.com/fastkart/assets/svg/1/biscuit.svg" alt="" />
                        <h6>Biscuits &amp; Snacks</h6>
                        <i className="fa-solid fa-angle-right" />
                      </a>
                      <div className="onhover-category-box">
                        <div className="list-1">
                          <div className="category-title-box">
                            <h5>Biscuits &amp; Cookies</h5>
                          </div>
                          <ul>
                            <li>
                              <a href="#/">Salted Biscuits</a>
                            </li>
                            <li>
                              <a href="#/">Marie, Health, Digestive</a>
                            </li>
                            <li>
                              <a href="#/">Cream Biscuits &amp; Wafers</a>
                            </li>
                            <li>
                              <a href="#/">Glucose &amp; Milk Biscuits</a>
                            </li>
                            <li>
                              <a href="#/">Cookies</a>
                            </li>
                          </ul>
                        </div>
                        <div className="list-2">
                          <div className="category-title-box">
                            <h5>Bakery Snacks</h5>
                          </div>
                          <ul>
                            <li>
                              <a href="#/">Bread Sticks &amp; Lavash</a>
                            </li>
                            <li>
                              <a href="#/">Cheese &amp; Garlic Bread</a>
                            </li>
                            <li>
                              <a href="#/">Puffs, Patties, Sandwiches</a>
                            </li>
                            <li>
                              <a href="#/">Breadcrumbs &amp; Croutons</a>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </li>
                    <li className="onhover-category-list">
                      <a href="#/" className="category-name">
                        <img src="https://themes.pixelstrap.com/fastkart/assets/svg/1/grocery.svg" alt="" />
                        <h6>Grocery &amp; Staples</h6>
                        <i className="fa-solid fa-angle-right" />
                      </a>
                      <div className="onhover-category-box">
                        <div className="list-1">
                          <div className="category-title-box">
                            <h5>Grocery</h5>
                          </div>
                          <ul>
                            <li>
                              <a href="#/">Lemon, Ginger &amp; Garlic</a>
                            </li>
                            <li>
                              <a href="#/">Indian &amp; Exotic Herbs</a>
                            </li>
                            <li>
                              <a href="#/">Organic Vegetables</a>
                            </li>
                            <li>
                              <a href="#/">Organic Fruits</a>
                            </li>
                          </ul>
                        </div>
                        <div className="list-2">
                          <div className="category-title-box">
                            <h5>Organic Staples</h5>
                          </div>
                          <ul>
                            <li>
                              <a href="#/">Organic Dry Fruits</a>
                            </li>
                            <li>
                              <a href="#/">Organic Dals &amp; Pulses</a>
                            </li>
                            <li>
                              <a href="#/">Organic Millet &amp; Flours</a>
                            </li>
                            <li>
                              <a href="#/">Organic Sugar, Jaggery</a>
                            </li>
                            <li>
                              <a href="#/">Organic Masalas &amp; Spices</a>
                            </li>
                            <li>
                              <a href="#/">Organic Rice, Other Rice</a>
                            </li>
                            <li>
                              <a href="#/">Organic Flours</a>
                            </li>
                            <li>
                              <a href="#/">Organic Edible Oil, Ghee</a>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="header-nav-middle">
                <div className="main-nav navbar navbar-expand-xl navbar-light navbar-sticky">
                  <div className="offcanvas offcanvas-collapse order-xl-2" id="primaryMenu">
                    <div className="offcanvas-header navbar-shadow">
                      <h5>Menu</h5>
                      <button className="btn-close lead" type="button" data-bs-dismiss="offcanvas" aria-label="Close" />
                    </div>
                    <div className="offcanvas-body">
                      <ul className="navbar-nav">
                        <li className="nav-item dropdown dropdown-mega">
                          <a className="nav-link dropdown-toggle ps-xl-2 ps-0" href="#/" data-bs-toggle="dropdown">Home</a>
                          <div className="dropdown-menu dropdown-menu-2 dropdown-image">
                            <div className="dropdown-column">
                              <a className="dropdown-item" href="index.html">
                                <img src="https://themes.pixelstrap.com/fastkart/assets/images/theme/1.jpg" className="img-fluid" alt="" />
                                <span>Kartshop</span>
                              </a>
                              <a className="dropdown-item" href="index-2.html">
                                <img src="https://themes.pixelstrap.com/fastkart/assets/images/theme/2.jpg" className="img-fluid" alt="" />
                                <span>Sweetshop</span>
                              </a>
                              <a className="dropdown-item" href="index-3.html">
                                <img src="https://themes.pixelstrap.com/fastkart/assets/images/theme/3.jpg" className="img-fluid" alt="" />
                                <span>Organic</span>
                              </a>
                              <a className="dropdown-item" href="index-4.html">
                                <img src="https://themes.pixelstrap.com/fastkart/assets/images/theme/4.jpg" className="img-fluid" alt="" />
                                <span>Supershop</span>
                              </a>
                              <a className="dropdown-item" href="index-5.html">
                                <img src="https://themes.pixelstrap.com/fastkart/assets/images/theme/5.jpg" className="img-fluid" alt="" />
                                <span>Slicktech</span>
                              </a>
                            </div>
                          </div>
                        </li>
                        <li className="nav-item dropdown">
                          <a className="nav-link dropdown-toggle" href="#/" data-bs-toggle="dropdown">Shop</a>
                          <ul className="dropdown-menu">
                            <li>
                              <a className="dropdown-item" href="shop-category-slider.html">Shop
                                Category Slider</a>
                            </li>
                            <li>
                              <a className="dropdown-item" href="shop-category.html">Shop
                                Category Sidebar</a>
                            </li>
                            <li>
                              <a className="dropdown-item" href="shop-banner.html">Shop Banner</a>
                            </li>
                            <li>
                              <a className="dropdown-item" href="shop-left-sidebar.html">Shop Left
                                Sidebar</a>
                            </li>
                            <li>
                              <a className="dropdown-item" href="shop-list.html">Shop List</a>
                            </li>
                            <li>
                              <a className="dropdown-item" href="shop-right-sidebar.html">Shop
                                Right Sidebar</a>
                            </li>
                            <li>
                              <a className="dropdown-item" href="shop-top-filter.html">Shop Top
                                Filter</a>
                            </li>
                          </ul>
                        </li>
                        <li className="nav-item dropdown">
                          <a className="nav-link dropdown-toggle" href="#/" data-bs-toggle="dropdown">Product</a>
                          <ul className="dropdown-menu">
                            <li>
                              <a className="dropdown-item" href="product-4-image.html">Product
                                4 Image</a>
                            </li>
                            <li>
                              <a href="product-bottom-thumbnail.html" className="dropdown-item">Product Bottom Thumbnail</a>
                            </li>
                            <li>
                              <a href="product-left-thumbnail.html" className="dropdown-item">Product Left Thumbnail</a>
                            </li>
                            <li>
                              <a href="product-left.html" className="dropdown-item">Product
                                Left</a>
                            </li>
                            <li>
                              <a href="product-right-thumbnail.html" className="dropdown-item">Product Right Thumbnail</a>
                            </li>
                            <li>
                              <a href="product-slider.html" className="dropdown-item">Product
                                Slider</a>
                            </li>
                            <li>
                              <a href="product-sticky.html" className="dropdown-item">Product
                                Sticky</a>
                            </li>
                          </ul>
                        </li>
                        <li className="nav-item dropdown dropdown-mega">
                          <a className="nav-link dropdown-toggle ps-xl-2 ps-0" href="#/" data-bs-toggle="dropdown">Mega Menu</a>
                          <div className="dropdown-menu dropdown-menu-2 row g-3">
                            <div className="dropdown-column col-xl-3">
                              <h5 className="dropdown-header">Daily Vegetables</h5>
                              <a className="dropdown-item" href="shop-left-sidebar.html">Beans &amp;
                                Brinjals</a>
                              <a className="dropdown-item" href="shop-left-sidebar.html">Broccoli
                                &amp; Cauliflower</a>
                              <a href="shop-left-sidebar.html" className="dropdown-item">Chilies,
                                Garlic</a>
                              <a className="dropdown-item" href="shop-left-sidebar.html">Vegetables &amp; Salads</a>
                              <a className="dropdown-item" href="shop-left-sidebar.html">Gourd,
                                Cucumber</a>
                              <a className="dropdown-item" href="shop-left-sidebar.html">Herbs &amp;
                                Sprouts</a>
                              <a href="demo-personal-portfolio.html" className="dropdown-item">Lettuce
                                &amp; Leafy</a>
                            </div>
                            <div className="dropdown-column col-xl-3">
                              <h5 className="dropdown-header">Baby Tender</h5>
                              <a className="dropdown-item" href="shop-left-sidebar.html">Beans &amp;
                                Brinjals</a>
                              <a className="dropdown-item" href="shop-left-sidebar.html">Broccoli
                                &amp; Cauliflower</a>
                              <a className="dropdown-item" href="shop-left-sidebar.html">Chilies,
                                Garlic</a>
                              <a className="dropdown-item" href="shop-left-sidebar.html">Vegetables &amp; Salads</a>
                              <a className="dropdown-item" href="shop-left-sidebar.html">Gourd,
                                Cucumber</a>
                              <a className="dropdown-item" href="shop-left-sidebar.html">Potatoes
                                &amp; Tomatoes</a>
                              <a href="shop-left-sidebar.html" className="dropdown-item">Peas &amp;
                                Corn</a>
                            </div>
                            <div className="dropdown-column col-xl-3">
                              <h5 className="dropdown-header">Exotic Vegetables</h5>
                              <a className="dropdown-item" href="shop-left-sidebar.html">Asparagus
                                &amp; Artichokes</a>
                              <a className="dropdown-item" href="shop-left-sidebar.html">Avocados
                                &amp; Peppers</a>
                              <a className="dropdown-item" href="shop-left-sidebar.html">Broccoli
                                &amp; Zucchini</a>
                              <a className="dropdown-item" href="shop-left-sidebar.html">Celery,
                                Fennel &amp; Leeks</a>
                              <a className="dropdown-item" href="shop-left-sidebar.html">Chilies &amp;
                                Lime</a>
                            </div>
                            <div className="dropdown-column dropdown-column-img col-3" />
                          </div>
                        </li>
                        <li className="nav-item dropdown">
                          <a className="nav-link dropdown-toggle" href="#/" data-bs-toggle="dropdown">Blog</a>
                          <ul className="dropdown-menu">
                            <li>
                              <a className="dropdown-item" href="blog-detail.html">Blog Detail</a>
                            </li>
                            <li>
                              <a className="dropdown-item" href="blog-grid.html">Blog Grid</a>
                            </li>
                            <li>
                              <a className="dropdown-item" href="blog-list.html">Blog List</a>
                            </li>
                          </ul>
                        </li>
                        <li className="nav-item dropdown">
                          <a className="nav-link dropdown-toggle" href="#/" data-bs-toggle="dropdown">Pages</a>
                          <ul className="dropdown-menu">
                            <li>
                              <a className="dropdown-item" href="404.html">404</a>
                            </li>
                            <li>
                              <a className="dropdown-item" href="about-us.html">About Us</a>
                            </li>
                            <li>
                              <a className="dropdown-item" href="cart.html">Cart</a>
                            </li>
                            <li>
                              <a className="dropdown-item" href="checkout.html">Checkout</a>
                            </li>
                            <li>
                              <a className="dropdown-item" href="coming-soon.html">Coming Soon</a>
                            </li>
                            <li>
                              <a className="dropdown-item" href="compare.html">Compare</a>
                            </li>
                            <li>
                              <a className="dropdown-item" href="faq.html">Faq</a>
                            </li>
                            <li>
                              <a className="dropdown-item" href="order-success.html">Order
                                Success</a>
                            </li>
                            <li>
                              <a className="dropdown-item" href="order-tracking.html">Order
                                Tracking</a>
                            </li>
                            <li>
                              <a className="dropdown-item" href="otp.html">OTP</a>
                            </li>
                            <li>
                              <a className="dropdown-item" href="search.html">Search</a>
                            </li>
                            <li>
                              <a className="dropdown-item" href="user-dashboard.html">User
                                Dashboard</a>
                            </li>
                            <li>
                              <a className="dropdown-item" href="wishlist.html">Wishlist</a>
                            </li>
                          </ul>
                        </li>
                        <li className="nav-item">
                          <a className="nav-link nav-link-2" href="contact-us.html">Contact</a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
              <div className="header-nav-right">
                
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
    <div className="mobile-menu d-md-none d-block mobile-cart">
      <ul>
        <li className="active">
          <a href="index.html">
            <i className="iconly-Home icli" />
            <span>Home</span>
          </a>
        </li>
        <li className="mobile-category">
          <a href="#/">
            <i className="iconly-Category icli js-link" />
            <span>Category</span>
          </a>
        </li>
        <li>
          <a href="search.html" className="search-box">
            <i className="iconly-Search icli" />
            <span>Search</span>
          </a>
        </li>
        <li>
          <a href="wishlist.html" className="notifi-wishlist">
            <i className="iconly-Heart icli" />
            <span>My Wish</span>
          </a>
        </li>
        <li>
          <a href="cart.html">
            <i className="iconly-Bag-2 icli fly-cate" />
            <span>Cart</span>
          </a>
        </li>
      </ul>
    </div>
  </div>
  )
}

export default Header