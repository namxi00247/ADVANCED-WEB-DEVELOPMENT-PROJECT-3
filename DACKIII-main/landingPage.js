class LandingPageComponents{
    getHTML(){
        return `
        <div class="landing-container" style=" height: 100vh; margin-bottom: 5vw">
                <div class="col-12 main-col">
                    <div class="row">
                        <div class="col landing-container-left">
                            <div class="row">
                                <div class="social-media-container">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-facebook" viewBox="0 0 16 16">
                                        <path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951z"/>
                                      </svg>
                                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-whatsapp" viewBox="0 0 16 16">
                                        <path d="M13.601 2.326A7.854 7.854 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.933 7.933 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.898 7.898 0 0 0 13.6 2.326zM7.994 14.521a6.573 6.573 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.557 6.557 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592zm3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.729.729 0 0 0-.529.247c-.182.198-.691.677-.691 1.654 0 .977.71 1.916.81 2.049.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232z"/>
                                      </svg>
                                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-instagram" viewBox="0 0 16 16">
                                        <path d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.917 3.917 0 0 0-1.417.923A3.927 3.927 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.916 3.916 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.926 3.926 0 0 0-.923-1.417A3.911 3.911 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0h.003zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599.28.28.453.546.598.92.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.47 2.47 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.478 2.478 0 0 1-.92-.598 2.48 2.48 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233 0-2.136.008-2.388.046-3.231.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92.28-.28.546-.453.92-.598.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045v.002zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92zm-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217zm0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334z"/>
                                      </svg>
                                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-twitch" viewBox="0 0 16 16">
                                        <path d="M3.857 0 1 2.857v10.286h3.429V16l2.857-2.857H9.57L14.714 8V0H3.857zm9.714 7.429-2.285 2.285H9l-2 2v-2H4.429V1.143h9.142v6.286z"/>
                                        <path d="M11.857 3.143h-1.143V6.57h1.143V3.143zm-3.143 0H7.571V6.57h1.143V3.143z"/>
                                      </svg>
                                </div>
                            </div>
                            <div class="row">
                                <img src="logo.png" alt="">
                            </div>
                            <div class="row" style="display: flex; justify-content: center">
                                <div class="landing-container-arrowdown">
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-chevron-double-down" viewBox="0 0 16 16">
                                    <path fill-rule="evenodd" d="M1.646 6.646a.5.5 0 0 1 .708 0L8 12.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z"/>
                                    <path fill-rule="evenodd" d="M1.646 2.646a.5.5 0 0 1 .708 0L8 8.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z"/>
                                  </svg>
                                  </div>
                            </div>
                        </div>
                        <div class="col landing-container-right">
                            <div class="row ">
                                <div class="col-6 landing-container-buttons"><button onclick="OpenLogIn()" class="red-button">LOG IN</button></div>
                                <div class="col-6 landing-container-buttons"><button onclick="OpenSignUp()" class="blue-button">SIGN UP</button></div>
                            </div>
                            <div class="row" style="padding-top: 5vw;">
                                <div class="div landing-container-image-1">
                                    <img src="gettyimages-667018224_wide-e69134a24ff79fd3a338ff83661815c6299e58bd-s1100-c50.jpg" alt="">
                                </div>
                                
                            </div>
                            <div class="row" style="padding-top: 5vw;">
                                <div class="div landing-container-image-1">
                                    <img src="gettyimages-667018224_wide-e69134a24ff79fd3a338ff83661815c6299e58bd-s1100-c50.jpg" alt="">
                                </div>
                                
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        <div class="row about-us-container" id='about-us'>
            <div class="col-1 navbar">
                <div class="navbar">
                    <span class="dot"></span>
                    <span class="dot"></span>
                    <span class="dot"></span>
                </div>

            </div>
            <div class="col-5" style="padding-top: 35vh;">
                <h1>ABOUT US</h1>
                <div class="about-us-des-container">
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque pharetra a dolor sed vestibulum. Cras condimentum ac arcu quis hendrerit. Aenean quis turpis vitae massa vulputate facilisis scelerisque non libero. Nulla vestibulum ultricies laoreet. Duis at porttitor massa. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce accumsan tortor nulla, at consectetur velit rhoncus et. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Vivamus egestas pretium eleifend. Aenean condimentum bibendum fringilla. Sed sed orci at velit sagittis rhoncus ac ut felis.

                        Maecenas vehicula ac orci et ultrices. Curabitur interdum orci ligula, et vestibulum risus placerat sed. Integer quis lorem sapien. Pellentesque vulputate at felis at sagittis. Vestibulum varius arcu elit, sodales consequat lorem gravida at. Vivamus vulputate purus vel rhoncus rhoncus. Praesent finibus velit a sodales blandit. Donec aliquet est sit amet ipsum volutpat, non dignissim sapien semper.
                        </p>
                </div>
            </div>
            <div class="col-6 about-us-container-img">
                <img src="https://www.unitar.my/wp-content/uploads/2022/09/3-Common-Challenges-of-Working-Students-and-Solutions.jpg" alt="">
            </div>
        </div>
        <div class="why-choose-us-container" style="margin: 3vw 0 3vw 0">
            <div class="row">
                <div class="col-1 navbar">
                    <div class="navbar">
                        <span class="dot"></span>
                        <span class="dot"></span>
                        <span class="dot"></span>
                    </div>
                </div>
                <div class="col-11">
                    <h1 style="text-align: right; margin-bottom: 3vw;">WHY CHOOSE GEARUP?</h1>
                    <div class="row">
                    <div class="col-4">
                        <div class="choose-card blue">
                            <img src="happy-african-american-woman-copywriter-working-freelance-project-from-home-businesswoman-using-laptop-searching-information-website-successful-business-online-training-courses-concept_207258-2.webp" alt="">
                            <div class="choose-card-content">
                                <h2>LOREM IPSUM</h2>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam feugiat risus magna, a condimentum risus aliquam at. Duis tempus velit.</p>
                            </div>
                            
                        </div>
                    </div>
                    <div class="col-4">
                        <div class="choose-card red">
                            <img src="happy-african-american-woman-copywriter-working-freelance-project-from-home-businesswoman-using-laptop-searching-information-website-successful-business-online-training-courses-concept_207258-2.webp" alt="">
                            <div class="choose-card-content">
                                <h2>LOREM IPSUM</h2>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam feugiat risus magna, a condimentum risus aliquam at. Duis tempus velit.</p>
                            </div>
                            
                        </div>
                    </div>
                    <div class="col-4">
                        <div class="choose-card yellow">
                            <img src="happy-african-american-woman-copywriter-working-freelance-project-from-home-businesswoman-using-laptop-searching-information-website-successful-business-online-training-courses-concept_207258-2.webp" alt="">
                            <div class="choose-card-content">
                                <h2>LOREM IPSUM</h2>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam feugiat risus magna, a condimentum risus aliquam at. Duis tempus velit.</p>
                            </div>
                            
                        </div>
                    </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="footer">
            <div class="row">
                <div class="col-1 navbar">
                    <div class="navbar">
                        <span class="dot"></span>
                        <span class="dot"></span>
                        <span class="dot"></span>
                    </div>
                </div>
                <div class="col-4">
                    <div class="footer-companyname">
                        <h1>
                            COMPANY NAME
                        </h1>
                        <P>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam feugiat risus magna, a condimentum risus aliquam at. Duis tempus velit.

                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam feugiat risus magna, a condimentum risus aliquam at. Duis tempus velit.

                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam feugiat risus magna, a condimentum risus aliquam at. Duis tempus velit.
                        </P>
                    </div>

                    <!-- <div class="footer-contact">
                        <h1>CONTACT</h1>
                    <div class="contact-box" style="display: flex; flex-direction: row">
                        <div class="col-3" style="display: flex; flex-direction: column; margin-left: 3vw;">
                            <svg style="margin-bottom: 2vw;" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-facebook" viewBox="0 0 16 16">
                                <path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951z"/>
                              </svg>
                              <svg style="margin-bottom: 2vw;" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-facebook" viewBox="0 0 16 16">
                                <path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951z"/>
                              </svg>
                              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-facebook" viewBox="0 0 16 16">
                                <path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951z"/>
                              </svg>
                        </div>
                        <div class="col-9"  style="display: flex; flex-direction: column">
                            <p>LOREM IPSUM</p>
                            <p>LOREM IPSUM</p>
                            <p>LOREM IPSUM</p>
                        </div>
                    </div>
                    </div> -->
                    
                </div>
                <div class="col-7">
                    <div class="row">
                        <div class="col-6 landing-container-buttons"><button  onclick="OpenLogIn()" class="red-button">LOG IN</button></div>
                        <div class="col-6 landing-container-buttons"><button onclick="OpenSignUp()" class="blue-button">SIGN UP</button></div>
                    </div>
                    <div class="row" style="padding-top: 5vw;">
                        <div class="div landing-container-image-2">
                            <img src="gettyimages-667018224_wide-e69134a24ff79fd3a338ff83661815c6299e58bd-s1100-c50.jpg" alt="">
                        </div>
                </div>
            </div>
        </div>`
    }
    getPosition(){
        var scrollContainer = document.getElementById('about-us');
        console.log(scrollContainer)
        scrollContainer.scrollIntoView({behavior: "smooth"});
    }
}

let OpenMoreInfoBtn = document.querySelector('.landing-container-arrowdown')
OpenMoreInfoBtn.addEventListener('click', function(){
    var moreInfo = new LandingPageComponents;
    var html = document.getElementById('main-landing-container')
    html.innerHTML = moreInfo.getHTML();
    moreInfo.getPosition();
})

function OpenLogIn() {
    window.location.href = "LogInPage.html";
}
function OpenSignUp() {
    window.location.href = "SignUpPage.html";
}