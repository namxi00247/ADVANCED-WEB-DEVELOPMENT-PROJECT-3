// class LoadUserPage{
//     getMenuBar(){
//         return `<div class="circle-menu-bar">
//         <div class="day-summary-container">
//             <h3>DAY SUMMARY</h3>
//             <div class="day-detailed">
//                 <div class="day-components day-events">
//                     <span style="background-color: #FAF7B9;" class="dot"></span>
//                     <h5>3 EVENTS</h5>
//                 </div>
//                 <div class="day-components day-tasks">
//                     <span style="background-color: #E48888;" class="dot"></span>
//                     <h5>5 TO-DOS</h5>
//                 </div>
    
//             </div>
//         </div>
//         <div class="account-container">
//             <div class="username">
//                 <h5>USERNAME</h5>
//             </div>
//             <div class="mail">
//                 <h5>E-MAIL</h5>
//             </div>
//         </div>
//     </div>` 
//     }
//     getNavbar(){
//         return `<div class="navbar">
//         <div class="logo-container">
//             <img src="/logo.png" alt="">
//         </div>
//         <div style="width: 100%">
//         <div class="NAVBAR search-bar">
            
//             <input placeholder="search for task" type="text">
//             <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-search-heart" viewBox="0 0 16 16">
//                 <path d="M6.5 4.482c1.664-1.673 5.825 1.254 0 5.018-5.825-3.764-1.664-6.69 0-5.018Z"/>
//                 <path d="M13 6.5a6.471 6.471 0 0 1-1.258 3.844c.04.03.078.062.115.098l3.85 3.85a1 1 0 0 1-1.414 1.415l-3.85-3.85a1.007 1.007 0 0 1-.1-.115h.002A6.5 6.5 0 1 1 13 6.5ZM6.5 12a5.5 5.5 0 1 0 0-11 5.5 5.5 0 0 0 0 11Z"/>
//               </svg>
//         </div>
//         <div class="choosen NAVBAR home">
//             <h3>HOME</h3>
//         </div>
//         <div class="NAVBAR favourites">
//             <h3>FAVOURITES</h3>
//             <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-right-circle-fill" viewBox="0 0 16 16">
//                 <path d="M8 0a8 8 0 1 1 0 16A8 8 0 0 1 8 0zM4.5 7.5a.5.5 0 0 0 0 1h5.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3a.5.5 0 0 0 0-.708l-3-3a.5.5 0 1 0-.708.708L10.293 7.5H4.5z"/>
//               </svg>
//         </div>
//         <div class="NAVBAR projects">
//             <h3>PROJECTS</h3>
//             <svg id="openProjects" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-right-circle-fill" viewBox="0 0 16 16">
//                 <path d="M8 0a8 8 0 1 1 0 16A8 8 0 0 1 8 0zM4.5 7.5a.5.5 0 0 0 0 1h5.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3a.5.5 0 0 0 0-.708l-3-3a.5.5 0 1 0-.708.708L10.293 7.5H4.5z"/>
//               </svg>
            
//         </div>

//         <div class="quote-of-the-day">
//             <section id="quotation">
//             </section>
//         </div>
//         </div>
// </div>


// `
//     }
//     getLoadTaskPage(){
//         return  this.getMenuBar() + this.getNavbar() + `
//         <div class="favourite-container">
//         <div class="container">
//             <div class="row">
//                 <div class="col">
//                     <div class="row">
//                         <div class="col-1">
//                             <span style="background-color: #FAF7B9;" class="dot"></span>
//                         </div>
//                         <div class="col-11">
//                             <h3>TASK/DO-DO-LISTS</h3>
//                             <div class="event-description">
//                                 <P>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam feugiat risus magna, a condimentum risus aliquam at. Duis tempus velit.</P>
//                             </div>
//                            <div class="task-sub-tasks">
//                                 <h5>SUB-TASKS</h5>
//                                 <div class="sub-task">
//                                     <div class="row">
//                                         <div class="col-1">
//                                             <div class="square" style="background-color: aqua;"></div>
//                                         </div>
//                                         <div class="col-11"><h6>SUB TASK #1</h6></div>
//                                     </div>
//                                     <div class="row">
//                                         <div class="col-1">
//                                             <div class="square" style="background-color: aqua;"></div>
//                                         </div>
//                                         <div class="col-11"><h6>SUB TASK #1</h6></div>
//                                     </div>
//                                     <button>ADD SUB-TASK</button>
//                                 </div>

//                            </div>
//                         </div>

//                     </div>
//                 </div>
//                 <div class="col">
//                     <div style="height: 4vh" class="row">
//                         <div style="padding-top: 0.5vw; justify-content: center;  align-items: center; display: flex" class="col-1">
//                             <span style="height: 15px; width: 15px; background-color: #000000;" class="dot"></span>
//                         </div>
//                         <div class="col-11">
//                             LOREM IPSUM
//                         </div>
//                     </div>
//                     <div style="height: 4vh;" class="row">
//                         <div style="padding-top: 0.5vw; justify-content: center;  align-items: center; display: flex" class="col-1">
//                             <span style="height: 15px; width: 15px; background-color: #000000;" class="dot"></span>
//                         </div>
//                         <div class="col-11">
//                             LOREM IPSUM
//                         </div>
//                     </div>
//                     <div style="height: 4vh;" class="row">
//                         <div style="padding-top: 0.5vw; justify-content: center;  align-items: center; display: flex" class="col-1">
//                             <span style="height: 15px; width: 15px; background-color: #000000;" class="dot"></span>
//                         </div>
//                         <div class="col-11">
//                             LOREM IPSUM
//                         </div>
//                     </div>
//                     <div style="height: 4vh;" class="row">
//                         <div style="padding-top: 0.5vw; justify-content: center;  align-items: center; display: flex" class="col-1">
//                             <span style="height: 15px; width: 15px; background-color: #000000;" class="dot"></span>
//                         </div>
//                         <div class="col-11">
//                             LOREM IPSUM
//                         </div>
//                     </div>
                    

//                     <div class="task-attachments-links">
//                         <h5>ATTACHMENTS OR LINKS</h5>
//                     </div>
//                     <div class="task-comments-ideas-dump">
//                         <h5>COMMENTS OR IDEA DUMPS</h5>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     </div>
// `
//     }
// }

// var userPage = new LoadUserPage;
// var root = document.getElementById('ROOT');
// root.innerHTML = userPage.getLoadTaskPage();