<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="utf-8">
  <meta content="width=device-width, initial-scale=1.0" name="viewport">

  <title>Sherenity Shine</title>
  <meta content="" name="description">
  <meta content="" name="keywords">

  <!-- Favicons -->
  <link href="{{ asset('assets/img/logo/circle-logo.png') }}" rel="icon">
  <link href="{{ asset('assets/img/logo/circle-logo.png') }}" rel="apple-touch-icon">

  <!-- Google Fonts -->
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Open+Sans:ital,wght@0,300;0,400;0,500;0,600;0,700;1,300;1,400;1,500;1,600;1,700&family=Poppins:ital,wght@0,300;0,400;0,500;0,600;0,700;1,300;1,400;1,500;1,600;1,700&family=Source+Sans+Pro:ital,wght@0,300;0,400;0,600;0,700;1,300;1,400;1,600;1,700&display=swap" rel="stylesheet">

  <!-- Vendor CSS Files -->
  <link href="{{ asset('assets/landing/vendor/bootstrap/css/bootstrap.min.css') }}" rel="stylesheet">
  <link href="{{ asset('assets/landing/vendor/bootstrap-icons/bootstrap-icons.css') }}" rel="stylesheet">
  <link href="{{ asset('assets/landing/vendor/aos/aos.css') }}" rel="stylesheet">
  <link href="{{ asset('assets/landing/vendor/glightbox/css/glightbox.min.css') }}" rel="stylesheet">
  <link href="{{ asset('assets/landing/vendor/swiper/swiper-bundle.min.css') }}" rel="stylesheet">

  <!-- Variables CSS Files. Uncomment your preferred color scheme -->
  <link href="{{ asset('assets/landing/css/variables.css') }}" rel="stylesheet">
  <link href="{{ asset('assets/landing/css/variables-blue.css') }}" rel="stylesheet">
  <link href="{{ asset('assets/landing/css/variables-green.css') }}" rel="stylesheet">
  <link href="{{ asset('assets/landing/css/variables-orange.css') }}" rel="stylesheet">
  <link href="{{ asset('assets/landing/css/variables-purple.css') }}" rel="stylesheet">
  <link href="{{ asset('assets/landing/css/variables-red.css') }}" rel="stylesheet">
  <link href="{{ asset('assets/landing/css/variables-pink.css') }}" rel="stylesheet">

  <!-- Template Main CSS File -->
  <link href="{{ asset('assets/landing/css/main-product.css') }}" rel="stylesheet">

  <!-- =======================================================
  * Template Name: HeroBiz
  * Updated: Sep 18 2023 with Bootstrap v5.3.2
  * Template URL: https://bootstrapmade.com/herobiz-bootstrap-business-template/
  * Author: BootstrapMade.com
  * License: https://bootstrapmade.com/license/
  ======================================================== -->
</head>

<body>

  <!-- ======= Header ======= -->
  <header id="header" class="header fixed-top" data-scrollto-offset="0">
    <div class="container-fluid d-flex align-items-center justify-content-between">

      <a href="/" class="logo d-flex align-items-center scrollto me-auto me-lg-0">
        <!-- Uncomment the line below if you also wish to use an image logo -->
        {{-- <img src="{{ asset('assets/img/logo/title-logo.png') }}" alt=""> --}}
        <h1 style="background: #254336; color: #B7B597; padding: 5px; border-radius:10px;">Sherenity Shine</h1>
      </a>

      <nav id="navbar" class="navbar">
        <ul>
          <li><a class="nav-link scrollto" href="/#hero">Home</a></li>
          <li><a class="nav-link scrollto" href="/#partnership">Partnership</a></li>
          <li><a class="nav-link scrollto" href="/#product">Product</a></li>
          <li><a class="nav-link scrollto" href="/#testimonials">Testimonials</a></li>
          <li><a class="nav-link scrollto" href="/#contact">Contact</a></li>
          @if (empty(auth()->user()))
              <li> <a class="btn-getstarted scrollto" href="/login">Get Started</a> </li>
          @else
              <li>            
                  <a href="#">
                      <i class="bi bi-cart-fill"></i>
                  </a>
              </li>
              <li>
                  <a class="btn-getstarted" href="/profile">
                      {{auth()->user()->name}}
                      {{-- <img src="{{ asset('assets/img/icon.jpg') }}" style="border-radius: 50%; width:25px; margin-right: 10px"> Keluar --}}
                  </a>
              </li>
          @endif

        </ul>
        <i class="bi bi-list mobile-nav-toggle d-none"></i>
      </nav><!-- .navbar -->
    </div>
  </header><!-- End Header -->

  <!-- ======= Hero Section ======= -->
  <section id="hero" class="hero carousel  carousel-fade" data-bs-ride="carousel" data-bs-interval="5000">

    <div class="carousel-inner">
      <div class="carousel-item active">
        <div class="container">
          <div class="row justify-content-center gy-6">

            <div class="col-lg-5 col-md-8">
              <img src="{{ asset('assets/landing/img/hero-carousel/hero-carousel-1.svg') }}" alt="" class="img-fluid img">
            </div>

            <div class="col-lg-9 text-center">
              <h2>Welcome to HeroBiz</h2>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
              <a href="#featured-services" class="btn-get-started scrollto ">Get Started</a>
            </div>

          </div>
        </div>
      </div><!-- End Carousel Item -->

      <div class="carousel-item">
        <div class="container">
          <div class="row justify-content-center gy-6">

            <div class="col-lg-5 col-md-8">
              <img src="{{ asset('assets/landing/img/hero-carousel/hero-carousel-2.svg') }}" alt="" class="img-fluid img">
            </div>

            <div class="col-lg-9 text-center">
              <h2>At vero eos et accusamus</h2>
              <p>Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus. Temporibus autem quibusdam et aut officiis debitis aut.</p>
              <a href="#featured-services" class="btn-get-started scrollto ">Get Started</a>
            </div>

          </div>
        </div>
      </div><!-- End Carousel Item -->

      <div class="carousel-item">
        <div class="container">
          <div class="row justify-content-center gy-6">

            <div class="col-lg-5 col-md-8">
              <img src="{{ asset('assets/landing/img/hero-carousel/hero-carousel-3.svg') }}" alt="" class="img-fluid img">
            </div>

            <div class="col-lg-9 text-center">
              <h2>Temporibus autem quibusdam</h2>
              <p>Beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt omnis iste natus error sit voluptatem accusantium.</p>
              <a href="#featured-services" class="btn-get-started scrollto ">Get Started</a>
            </div>

          </div>
        </div>
      </div><!-- End Carousel Item -->
    </div>

    <a class="carousel-control-prev" href="#hero" role="button" data-bs-slide="prev">
      <span class="carousel-control-prev-icon bi bi-chevron-left" aria-hidden="true"></span>
    </a>

    <a class="carousel-control-next" href="#hero" role="button" data-bs-slide="next">
      <span class="carousel-control-next-icon bi bi-chevron-right" aria-hidden="true"></span>
    </a>

    <ol class="carousel-indicators"></ol>

  </section><!-- End Hero Section -->

  <main id="main">

    <!-- ======= Featured Services Section ======= -->
    <section id="featured-services" class="featured-services">
      <div class="container">

        <div class="row justify-content-center gy-4">

            @foreach ($kategori as $item)                
            <div class="col-xl-2 col-md-3 d-flex" data-aos="zoom-out">
              <div class="service-item">
                <h6><a href="/our-product/{{ $item->id }}" class="stretched-link">{{ $item->nama_kategori }}</a></h6>
              </div>
            </div><!-- End Service Item -->
            @endforeach

        </div>

      </div>
    </section><!-- End Featured Services Section -->

    <!-- ======= Clients Section ======= -->
    <section id="partnership" class="clients">
      <div class="container" data-aos="zoom-out">
        <div class="section-header">
            <h2>Our Partnership</h2>
            <p> Bekerja sama dengan {{ count($brand) }} brand ternama. </p>
          </div>
        <div class="clients-slider swiper">
          <div class="swiper-wrapper align-items-center">
            @foreach ($brand as $item)
                <div class="swiper-slide">
                    <img src="{{ asset('assets/img/pabrik/'.$item->logo) }}" alt="{{ $item->logo }}" style="width: 100px; height: 100px; border: 1px solid black" class="img-fluid" >
                </div>
            @endforeach
          </div>
        </div>

      </div>
    </section><!-- End Clients Section -->

    <!-- ======= Services Section ======= -->
    <section id="product" class="services">
      <div class="container" data-aos="fade-up">

        <div class="section-header">
          <h2>Our Best Seller Product</h2>
          <p> Produk terlaris di Bulan Ini </p>
        </div>

        <div class="row gy-5">

          @foreach ($produk as $item)
          <div class="col-xl-4 col-md-6" data-aos="zoom-in" data-aos-delay="200">
            <div class="service-item">
              <div class="img">
                <img src="{{ asset('assets/img/produk/'.$item->foto_produk) }}" alt="{{ $item->foto_produk }}" class="img-fluid">
              </div>
              <div class="details position-relative">
                <a href="#test">
                    <div class="icon">
                    <i class="bi bi-cart-fill"></i>
                    </div>
                </a>
            {{-- <a href="#" class="stretched-link"> --}}
                <h3>{{ $item->nama_produk }}</h3>
            {{-- </a> --}}
                <div class="d-flex justify-content-between align-items-center" >
                    <p>Rp. {{ $item->harga }}</p> 
                    <p>20 Terjual</p>
                </div>
                <div class="d-flex justify-content-between align-items-center" >
                    <a class="checkout" href="/payment-product/{{ $item->id }}"> beli sekarang </a>
                    <a class="checkout2" href="/detail-product/{{ $item->id }}"> >> </a>
                </div>
            </div>
            </div>
          </div><!-- End Service Item -->
          @endforeach

        </div>

        <div class="text-center py-5">
            <a class="product" href="/our-product" >Telusuri Produk Lainnya >></a>
        </div>

      </div>
    </section><!-- End Services Section -->

    <!-- ======= Testimonials Section ======= -->
    <section id="testimonials" class="testimonials">
      <div class="container" data-aos="fade-up">

        <div class="section-header">
          <h2></h2>
        </div>

        <div class="testimonials-slider swiper">
          <div class="swiper-wrapper">

            @foreach ($ulasan_sistem as $item)                
              <div class="swiper-slide">
                <div class="testimonial-item">
                  @if ($item->user->profile != null)
                    <img src="{{ asset('assets/img/user/' .$item->user->profile) }}" class="testimonial-img" alt="{{ $item->user->profile }}">
                  @else
                    <img src="{{ asset('assets/img/logo/icon-profile.jpeg') }}" class="testimonial-img" alt="profile-user">
                  @endif
                  <h3>{{ $item->user->name }}</h3>
                  <div class="stars">
                    @if ($item->rating == 5)
                      <i class="bi bi-star-fill"></i><i class="bi bi-star-fill"></i><i class="bi bi-star-fill"></i><i class="bi bi-star-fill"></i><i class="bi bi-star-fill"></i>
                    @elseif ($item->rating == 4)
                      <i class="bi bi-star-fill"></i><i class="bi bi-star-fill"></i><i class="bi bi-star-fill"></i><i class="bi bi-star-fill"></i>
                    @elseif ($item->rating == 3)
                      <i class="bi bi-star-fill"></i><i class="bi bi-star-fill"></i><i class="bi bi-star-fill"></i>
                    @elseif ($item->rating == 2)
                      <i class="bi bi-star-fill"></i><i class="bi bi-star-fill"></i>
                    @elseif ($item->rating == 1)
                      <i class="bi bi-star-fill"></i>
                    @endif
                  </div>
                  <p>
                    <i class="bi bi-quote quote-icon-left"></i>
                    {{ $item->ulasan }}
                    <i class="bi bi-quote quote-icon-right"></i>
                  </p>
                </div>
              </div><!-- End testimonial item -->
            @endforeach

          </div>
          <div class="swiper-pagination"></div>
        </div>

      </div>
    </section><!-- End Testimonials Section -->

    <!-- ======= Contact Section ======= -->
    <section id="contact" class="contact">
      <div class="container">

        <div class="section-header">
          <h2>Contact Us</h2>
          <p>Ea vitae aspernatur deserunt voluptatem impedit deserunt magnam occaecati dssumenda quas ut ad dolores adipisci aliquam.</p>
        </div>

      </div>

      <div class="map">
        <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d12097.433213460943!2d-74.0062269!3d40.7101282!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xb89d1fe6bc499443!2sDowntown+Conference+Center!5e0!3m2!1smk!2sbg!4v1539943755621" frameborder="0" allowfullscreen></iframe>
      </div><!-- End Google Maps -->

      <div class="container">

        <div class="row gy-5 gx-lg-5">

          <div class="col-lg-4">

            <div class="info">
              <h3>Get in touch</h3>
              <p>Et id eius voluptates atque nihil voluptatem enim in tempore minima sit ad mollitia commodi minus.</p>

              <div class="info-item d-flex">
                <i class="bi bi-geo-alt flex-shrink-0"></i>
                <div>
                  <h4>Location:</h4>
                  <p>A108 Adam Street, New York, NY 535022</p>
                </div>
              </div><!-- End Info Item -->

              <div class="info-item d-flex">
                <i class="bi bi-envelope flex-shrink-0"></i>
                <div>
                  <h4>Email:</h4>
                  <p>info@example.com</p>
                </div>
              </div><!-- End Info Item -->

              <div class="info-item d-flex">
                <i class="bi bi-phone flex-shrink-0"></i>
                <div>
                  <h4>Call:</h4>
                  <p>+1 5589 55488 55</p>
                </div>
              </div><!-- End Info Item -->

            </div>

          </div>

          <div class="col-lg-8">
            <form action="forms/contact.php" method="post" role="form" class="php-email-form">
              <div class="row">
                <div class="col-md-6 form-group">
                  <input type="text" name="name" class="form-control" id="name" placeholder="Your Name" required>
                </div>
                <div class="col-md-6 form-group mt-3 mt-md-0">
                  <input type="email" class="form-control" name="email" id="email" placeholder="Your Email" required>
                </div>
              </div>
              <div class="form-group mt-3">
                <input type="text" class="form-control" name="subject" id="subject" placeholder="Subject" required>
              </div>
              <div class="form-group mt-3">
                <textarea class="form-control" name="message" placeholder="Message" required></textarea>
              </div>
              <div class="my-3">
                <div class="loading">Loading</div>
                <div class="error-message"></div>
                <div class="sent-message">Your message has been sent. Thank you!</div>
              </div>
              <div class="text-center"><button type="submit">Send Message</button></div>
            </form>
          </div><!-- End Contact Form -->

        </div>

      </div>
    </section><!-- End Contact Section -->

  </main><!-- End #main -->

  <!-- ======= Footer ======= -->
  <footer id="footer" class="footer">

    <div class="footer-legal text-center">
      <div class="container d-flex flex-column flex-lg-row justify-content-center justify-content-lg-between align-items-center">

        <div class="d-flex flex-column align-items-center align-items-lg-start">
          <div class="copyright">
            &copy; Copyright <strong><span>HeroBiz</span></strong>. All Rights Reserved
          </div>
          <div class="credits">
            <!-- All the links in the footer should remain intact. -->
            <!-- You can delete the links only if you purchased the pro version. -->
            <!-- Licensing information: https://bootstrapmade.com/license/ -->
            <!-- Purchase the pro version with working PHP/AJAX contact form: https://bootstrapmade.com/herobiz-bootstrap-business-template/ -->
            Designed by <a href="https://bootstrapmade.com/">BootstrapMade</a>
          </div>
        </div>

        <div class="social-links order-first order-lg-last mb-3 mb-lg-0">
          <a href="#" class="twitter"><i class="bi bi-twitter"></i></a>
          <a href="#" class="facebook"><i class="bi bi-facebook"></i></a>
          <a href="#" class="instagram"><i class="bi bi-instagram"></i></a>
          <a href="#" class="google-plus"><i class="bi bi-skype"></i></a>
          <a href="#" class="linkedin"><i class="bi bi-linkedin"></i></a>
        </div>

      </div>
    </div>

  </footer><!-- End Footer -->

  <a href="#" class="scroll-top d-flex align-items-center justify-content-center"><i class="bi bi-arrow-up-short"></i></a>

  <div id="preloader"></div>

  <!-- Vendor JS Files -->
  <script src="{{ asset('assets/landing/vendor/bootstrap/js/bootstrap.bundle.min.js') }}"></script>
  <script src="{{ asset('assets/landing/vendor/aos/aos.js') }}"></script>
  <script src="{{ asset('assets/landing/vendor/glightbox/js/glightbox.min.js') }}"></script>
  <script src="{{ asset('assets/landing/vendor/isotope-layout/isotope.pkgd.min.js') }}"></script>
  <script src="{{ asset('assets/landing/vendor/swiper/swiper-bundle.min.js') }}"></script>
  <script src="{{ asset('assets/landing/vendor/php-email-form/validate.js') }}"></script>

  <!-- Template Main JS File -->
  <script src="{{ asset('assets/landing/js/main.js') }}"></script>

</body>

</html>