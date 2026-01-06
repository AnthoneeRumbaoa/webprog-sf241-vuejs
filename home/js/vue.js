const { createApp } = Vue;

createApp({
    data() {
        return {
            originalContent: `
                <nav class="navbar navbar-expand-lg fixed-top custom-navbar">
                    <div class="container">
                        <a class="navbar-brand fw-bold" href="#">@amrumbaoa</a>
                        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
                            <span class="navbar-toggler-icon" style="filter: invert(1);"></span> 
                        </button>
                        <div class="collapse navbar-collapse" id="navbarNav">
                            <ul class="navbar-nav ms-auto text-center">
                                <li class="nav-item"><a class="nav-link" href="#home">Home</a></li>
                                <li class="nav-item"><a class="nav-link" href="#skills">About</a></li>
                                <li class="nav-item"><a class="nav-link" href="#collection">Collection</a></li>
                                <li class="nav-item"><a class="nav-link" href="#contact">Contact</a></li>
                            </ul>
                        </div>
                    </div>
                </nav>

                <main>
                    <section id="home" class="hero d-flex align-items-center min-vh-100">
                        <div class="container">
                            <div class="row align-items-center flex-column-reverse flex-lg-row">
                                <div class="col-lg-6 hero-text mt-5 mt-lg-0">
                                    <h1 class="display-1 fw-bold">Anthonee <br> Rumbaoa</h1>
                                    <h3 class="role-text mb-4">I am an <span class="typing-text">Aspiring Visual Artist</span><span class="cursor">|</span></h3>
                                    <p class="lead text-secondary mb-5">
                                        Focusing on graphics design, photography, visual storytelling through various mediums, and filmmaking. 
                                        I express emotions and ideas into captivating images and narratives, bridging raw creativity with cinematic dreams. <br>
                                        <em>(Still trying to get 10 hours of sleep as of 2026.)</em>
                                    </p>
                                    <div class="hero-buttons">
                                        <a href="#skills" class="btn btn-white rounded-pill px-4 py-2 me-3">My Portfolio</a>
                                    </div>
                                </div>
                                <div class="col-lg-6 text-center">
                                    <div class="image-container">
                                        <img src="DSC08430-removebg.png" alt="Anthonee Profile" class="img-fluid main-photo">
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>

                    <section id="skills" class="py-5">
                        <div class="container">
                            <h2 class="mb-5 fw-bold text-white">What I Do</h2>
                            <div class="row g-4">
                                <div class="col-md-6"><div class="dark-card p-4 h-100"><i class="fas fa-palette fa-2x mb-3 text-white"></i><h4>Graphic Design</h4><p class="text-secondary">Crafting visual identities, posters, and digital art.</p></div></div>
                                <div class="col-md-6"><div class="dark-card p-4 h-100"><i class="fas fa-camera fa-2x mb-3 text-white"></i><h4>Photography & Filmmaking</h4><p class="text-secondary">Capturing moments and telling stories through the lens.</p></div></div>
                                <div class="col-md-6"><div class="dark-card p-4 h-100"><i class="fas fa-graduation-cap fa-2x mb-3 text-white"></i><h4>Academic Background</h4><p class="text-secondary">Studying Computer Science specializing Cyber Security @ APC.</p></div></div>
                                <div class="col-md-6"><div class="dark-card p-4 h-100"><i class="fas fa-headphones fa-2x mb-3 text-white"></i><h4>Interest</h4><p class="text-secondary">Fueled by R&B music, sports, and night drives.</p></div></div>
                            </div>
                        </div>
                    </section>

                    <section id="collection" class="py-5">
                        <div class="container">
                            <h2 class="mb-4 fw-bold text-white">The Archive</h2>
                            <div class="photo-scroller">
                                <div class="photo-item"><img src="1.jpg" alt="1"></div>
                                <div class="photo-item"><img src="2.jpg" alt="2"></div>
                                <div class="photo-item"><img src="3.jpg" alt="3"></div>
                                <div class="photo-item"><img src="4.jpg" alt="4"></div>
                                <div class="photo-item"><img src="5.jpg" alt="5"></div>
                                <div class="photo-item"><img src="6.jpg" alt="6"></div>
                                <div class="photo-item"><img src="7.jpg" alt="7"></div>
                                <div class="photo-item"><img src="8.jpg" alt="8"></div>
                                <div class="photo-item"><img src="9.jpg" alt="9"></div>
                            </div>
                        </div>
                    </section>

                    <section id="contact" class="py-5 mb-5">
                        <div class="container">
                            <div class="contact-box text-center">
                                <h2 class="fw-bold text-white mb-3">Let's Create Together</h2>
                                <div class="btn btn-white static rounded-pill px-5 py-3 fw-bold mb-4">
                                    <i class="fas fa-envelope me-2"></i> amrumbaoa@student.apc.edu.ph
                                </div>
                            </div>
                        </div>
                    </section>
                </main>
            `
        }
    }
}).mount('#app');