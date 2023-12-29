// BUG: CHANGING PROJECTS
// import SAVEDATABASE from "./SAVE_API.js";

let current_user = JSON.parse(window.localStorage.getItem('currentUser'))
let current_user_email = current_user[1]
let all_Data = JSON.parse(window.localStorage.getItem('userAPI'))
console.log(all_Data)


for (i of all_Data) {

  if (i.personal_info.email == current_user_email){
    var SAMPLE_API = i
  }
}
console.log(SAMPLE_API)

class LoadUserPage{
    constructor(API){
        this.dataUse = API;
    }
    
    getNavBar()
    {
        let username = this.dataUse.personal_info.username;
        return(
            `<div class="container-fluid">
            <a class="navbar-brand">USER PAGE</a>
            <button style="background: #C3ECF9; height: 2vw;" onclick="LogOut()" class = 'blue-button'>LOG OUT</button>
            <p>Welcome Back ${username}</p>
          </div>`
        )
    }
    getToDo(){
        var TodoHTML = ``;
        let index = 0;
        // const choosen_project = Object.entries(this.dataUse.projects);
        // console.log(Object.entries(choosen_project[keyPRJ][parseInt(1)]), keyPRJ);

        let count = 0
        if (count == 0){
            TodoHTML +=  `<div class="row" style="margin-top: 10px;">`  
        }
        for (const [key, value] of Object.entries(this.dataUse.to_dos)){
          console.log(key, value)
            var TodoSub = ``;
                for (const[key1, value1] of Object.entries(value.sub_tasks)){
                  console.log(value1)

                  if (value1.checked === false){
                    TodoSub += `<li style="background-color : ${value.color}" class="list-group-item"><input onclick='HandleCheckBoxChange(${index}, "${value1.name}")' style = "margin-right: 1vw" type="checkbox">${value1.name}</li>`
                  } else {
                    TodoSub += `<li style="background-color : ${value.color}" class="list-group-item"><input checked onclick='HandleCheckBoxChange(${index}, "${value1.name}")' style = "margin-right: 1vw" type="checkbox">${value1.name}</li>`
                  }
                    
                }
    
                TodoHTML += `<div style="background-color : ${value.color}" index = "${index}" class="card" style="width: 18rem;">
                <div class="card-body" style = "flex: none">
                    <h5 class="card-title">${value.task_name}</h5>
                    <p class="card-text">${value.description}</p>
                </div>
                <ul class="list-group list-group-flush">
                    ${TodoSub}
                    <div style = "padding-left: 10px; width: 100%" id="addNewSub${index}"></div>
                </ul>
                <div class="card-body card-body1">
                    <div value="${index}" class="add-subtask">
                    <button onclick="addSubTask(${index})" class="addTaskBtn blue" value="${index}" href="#" >ADD SUB TASK</button>
                    </div>
                    <div value="${index}" class="del-card">
                    <button onclick="deleteTask(${key})" value="${key}"  class= "deleteTaskBtn red"  href="#" class="card-link">DELETE TASK</button></div>
                    </div>
    
                </div>
                `
            index = index + 1
        }

        if(count == 2){
            TodoHTML +=`</div>`
            count = 0;
        }
        count ++;

  

        return(`
        ${TodoHTML}
        <button onclick="addNewTask()" id="addnewtask" style="border: 0; height: 35px; width: 35px; background-color: white"><svg xmlns="http://www.w3.org/2000/svg" width="35" height="35" fill="currentColor" class="bi bi-file-plus" viewBox="0 0 16 16">
        <path d="M8.5 6a.5.5 0 0 0-1 0v1.5H6a.5.5 0 0 0 0 1h1.5V10a.5.5 0 0 0 1 0V8.5H10a.5.5 0 0 0 0-1H8.5V6z"/>
        <path d="M2 2a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V2zm10-1H4a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1z"/>
      </svg></button>
      
      <div id="addnewtaskdiv"></div>`)
    }

    updateKeys(){
      let API = this.dataUse;
      for (i in Object.keys(API.to_dos).length){
        console.log(i)
      }
    }

    loadToDoList(){
        var displayTask = document.getElementById('display-task')
        displayTask.innerHTML = userPage.getToDo();
    }

    reloadUserPage(){
        console.log(SAMPLE_API)

        let current_user = JSON.parse(window.localStorage.getItem('currentUser'))
        let current_user_email = current_user[1]
        let all_Data = JSON.parse(window.localStorage.getItem('userAPI'))
        console.log(all_Data)


        for (i in all_Data) {

          if (all_Data[i].personal_info.email == current_user_email){
            all_Data[i] = SAMPLE_API
          }
        }

        console.log(all_Data)

        localStorage.setItem('userAPI', JSON.stringify(all_Data));
        var navbar = document.getElementById('navbar');
        var displayTask = document.getElementById('display-task')
        navbar.innerHTML = userPage.getNavBar();
        displayTask.innerHTML = userPage.getToDo();
        
        var file=document.createElement('script')
        file.setAttribute("type","text/javascript")
        file.setAttribute("src", "SAVE_API.js")
    }
}

var userPage = new LoadUserPage(SAMPLE_API);
userPage.reloadUserPage(SAMPLE_API);
userPage.updateKeys();


const addNewTask = () => {
    var addnewtaskdiv = document.getElementById('addnewtaskdiv');
    addnewtaskdiv.innerHTML = `
    <input id="newTaskName" style="margin-top: 1vw; padding-left: 1vw; padding-right: 1vw;  width: 80%" type="text" placeholder="ENTER TASK NAME">
    <div>
    <input name="importanttask" type="radio" id="newTaskImportant" label="IMPORTANT?">
    <label>IMPORTANT?</label>
    </div>
    <input id="newTaskDes" style="margin-top: 1vw; padding-left: 1vw; padding-right: 1vw;  width: 80%" type="text" placeholder="ENTER TASK DESCRIPTION">
    <div>
    <button onclick="NewTask()" id="newProjectEnterbtn" class="blue" style="width: 20%; margin-top: 1vw; border: 0;">ENTER</button>`
}

const NewTask = () => {
    const choosen_project = Object.entries(SAMPLE_API.to_dos)

    if (document.querySelector('input[name="importanttask"]:checked')){
      SAMPLE_API.to_dos[`${(Object.keys((choosen_project))).length + 1}`] = {
        task_name: `${document.getElementById('newTaskName').value}`,
        description: `${document.getElementById('newTaskDes').value}`,
        color: '#FAF7B9',
        to_do: {},
        sub_tasks: {}
}
    } else {
      SAMPLE_API.to_dos[`${(Object.keys((choosen_project))).length + 1}`] = {
        task_name: `${document.getElementById('newTaskName').value}`,
        description: `${document.getElementById('newTaskDes').value}`,
        color: 'white',
        to_do: {},
        sub_tasks: {}
}
    }
    

    var userPage = new LoadUserPage(SAMPLE_API);
    userPage.reloadUserPage(SAMPLE_API.current_project_index);
}


function addSubTask(index){
    const addSubTask = document.querySelectorAll(".add-subtask")
    console.log(index, addSubTask)
    addSubTask[index].addEventListener("click", function(e) {
        if(event.srcElement.className = "addTaskBtn"){
            let i = e.srcElement.value;
            var addnewsubdiv = document.getElementById(`addNewSub${index}`);
            // console.log(i, index, keyPRJ)
            addnewsubdiv.innerHTML = `<input id="newSubTaskName${index}" style="margin-top: 1vw; padding-left: 1vw; padding-right: 1vw;  width: 80%" type="text" placeholder="ENTER TASK NAME">
            <button onclick="EnterSubTask(${i}, ${index})" id="newProjectEnterbtn" class="blue" style="width: 20%; margin-top: 0.5vw; border: 0; margin-bottom: 0.5vw">ENTER</button>`
        }
    })

   
}

// delete task 
function deleteTask(index){
    const delTask = document.querySelectorAll(".del-card")
    console.log(delTask)
    // delTask[index].addEventListener("click", function(e){
      if (Object.keys(SAMPLE_API.to_dos).length == 1) {
        SAMPLE_API.to_dos = {

        }
        var userPage = new LoadUserPage(SAMPLE_API);
        userPage.reloadUserPage();
      } else {
        console.log(SAMPLE_API.to_dos[index], index)
      delete SAMPLE_API.to_dos[index] 
      var userPage = new LoadUserPage(SAMPLE_API);
      userPage.reloadUserPage();
      console.log(Object.keys(SAMPLE_API.to_dos).length)
      }
      
      
    
}

function EnterSubTask(index){
    const choosen_project = Object.entries(SAMPLE_API.to_dos)
    // console.log(usedObject[index][1].sub_tasks)
    console.log(Object.entries(SAMPLE_API.to_dos)[index][1].sub_tasks, index, SAMPLE_API.to_dos);

    choosen_project[index][1].sub_tasks[`${document.getElementById(`newSubTaskName${index}`).value}`] = {
                name : `${document.getElementById(`newSubTaskName${index}`).value}`,
                checked: false,
            }
        console.log( SAMPLE_API)
        var userPage = new LoadUserPage(SAMPLE_API);
        userPage.reloadUserPage();
    }


function HandleCheckBoxChange(index, name){
  const choosen_project = Object.entries(SAMPLE_API.to_dos)
  console.log(choosen_project)
  if (choosen_project[index][1].sub_tasks[`${name}`].checked == false){
    choosen_project[index][1].sub_tasks[`${name}`] = {
      name : name,
      checked : true,
    }
    console.log( SAMPLE_API)
    var userPage = new LoadUserPage(SAMPLE_API);
    userPage.reloadUserPage();
  } else {
    choosen_project[index][1].sub_tasks[`${name}`] = {
      ame : name,
      checked : false,
    }
    console.log( SAMPLE_API)
    var userPage = new LoadUserPage(SAMPLE_API);
    userPage.reloadUserPage();
  }
 
}

function LogOut(){
  window.localStorage.setItem('currentUser', JSON.stringify([]))
  window.location.href = 'LandingPage.html'
}

// calendar
const calendar = document.querySelector(".calendar"),
  date = document.querySelector(".date"),
  daysContainer = document.querySelector(".days"),
  prev = document.querySelector(".prev"),
  next = document.querySelector(".next"),
  todayBtn = document.querySelector(".today-btn"),
  gotoBtn = document.querySelector(".goto-btn"),
  dateInput = document.querySelector(".date-input"),
  eventDay = document.querySelector(".event-day"),
  eventDate = document.querySelector(".event-date"),
  eventsContainer = document.querySelector(".events"),
  addEventBtn = document.querySelector(".add-event"),
  addEventWrapper = document.querySelector(".add-event-wrapper "),
  addEventCloseBtn = document.querySelector(".close "),
  addEventTitle = document.querySelector(".event-name "),
  addEventFrom = document.querySelector(".event-time-from "),
  addEventTo = document.querySelector(".event-time-to "),
  addEventSubmit = document.querySelector(".add-event-btn ");

let today = new Date();
let activeDay;
let month = today.getMonth();
let year = today.getFullYear();

const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];



const eventsArr = [];
// getEvents();


//function to add days in days with class day and prev-date next-date on previous month and next month days and active on today
function initCalendar() {
  const firstDay = new Date(year, month, 1);
  const lastDay = new Date(year, month + 1, 0);
  const prevLastDay = new Date(year, month, 0);
  const prevDays = prevLastDay.getDate();
  const lastDate = lastDay.getDate();
  const day = firstDay.getDay();
  const nextDays = 7 - lastDay.getDay() - 1;

  date.innerHTML = months[month] + " " + year;

  let days = "";

  for (let x = day; x > 0; x--) {
    days += `<div class="day prev-date">${prevDays - x + 1}</div>`;
  }

  for (let i = 1; i <= lastDate; i++) {
    //check if event is present on that day
    let event = false;
    SAMPLE_API.events.forEach((eventObj) => {
      if (
        eventObj.day === i &&
        eventObj.month === month + 1 &&
        eventObj.year === year
      ) {
        event = true;
      }
    });
    if (
      i === new Date().getDate() &&
      year === new Date().getFullYear() &&
      month === new Date().getMonth()
    ) {
      activeDay = i;
      // getActiveDay(i);
      updateEvents(i);
      if (event) {
        days += `<div class="day today active event">${i}</div>`;
      } else {
        days += `<div class="day today active">${i}</div>`;
      }
    } else {
      if (event) {
        days += `<div class="day event">${i}</div>`;
      } else {
        days += `<div class="day ">${i}</div>`;
      }
    }
  }

  for (let j = 1; j <= nextDays; j++) {
    days += `<div class="day next-date">${j}</div>`;
  }
  daysContainer.innerHTML = days;
  addListner();
}

//function to add month and year on prev and next button
function prevMonth() {
  month--;
  if (month < 0) {
    month = 11;
    year--;
  }
  initCalendar();
}

function nextMonth() {
  month++;
  if (month > 11) {
    month = 0;
    year++;
  }
  initCalendar();
}

prev.addEventListener("click", prevMonth);
next.addEventListener("click", nextMonth);

initCalendar();

//function to add active on day
function addListner() {
  const days = document.querySelectorAll(".day");
  days.forEach((day) => {
    day.addEventListener("click", (e) => {
      // getActiveDay(e.target.innerHTML);
      updateEvents(Number(e.target.innerHTML));
      activeDay = Number(e.target.innerHTML);
      days.forEach((day) => {
        day.classList.remove("active");
      });
      if (e.target.classList.contains("prev-date")) {
        prevMonth();
        setTimeout(() => {
          const days = document.querySelectorAll(".day");
          days.forEach((day) => {
            if (
              !day.classList.contains("prev-date") &&
              day.innerHTML === e.target.innerHTML
            ) {
              day.classList.add("active");
            }
          });
        }, 100);
      } else if (e.target.classList.contains("next-date")) {
        nextMonth();
        setTimeout(() => {
          const days = document.querySelectorAll(".day");
          days.forEach((day) => {
            if (
              !day.classList.contains("next-date") &&
              day.innerHTML === e.target.innerHTML
            ) {
              day.classList.add("active");
            }
          });
        }, 100);
      } else {
        e.target.classList.add("active");
      }
    });
  });
}

todayBtn.addEventListener("click", () => {
  today = new Date();
  month = today.getMonth();
  year = today.getFullYear();
  initCalendar();
});

dateInput.addEventListener("input", (e) => {
  dateInput.value = dateInput.value.replace(/[^0-9/]/g, "");
  if (dateInput.value.length === 2) {
    dateInput.value += "/";
  }
  if (dateInput.value.length > 7) {
    dateInput.value = dateInput.value.slice(0, 7);
  }
  if (e.inputType === "deleteContentBackward") {
    if (dateInput.value.length === 3) {
      dateInput.value = dateInput.value.slice(0, 2);
    }
  }
});

gotoBtn.addEventListener("click", gotoDate);

function gotoDate() {
  console.log("here");
  const dateArr = dateInput.value.split("/");
  if (dateArr.length === 2) {
    if (dateArr[0] > 0 && dateArr[0] < 13 && dateArr[1].length === 4) {
      month = dateArr[0] - 1;
      year = dateArr[1];
      initCalendar();
      return;
    }
  }
  alert("Invalid Date");
}


function updateEvents(date) {
  let events = "";
  SAMPLE_API.events.forEach((event) => {
    if (
      date === event.day &&
      month + 1 === event.month &&
      year === event.year
    ) {
      event.events.forEach((event) => {
        events += `<div class="event" style ="display: flex; flex-direction: row">
            <div class="title">
              <i class="fas fa-circle"></i>
              <h3 class="event-title">${event.title}</h3>
            </div>
            <div class="event-time">
              <span class="event-time">${event.time}</span>
            </div>
        </div>`;
      });
    }
  });
  // if (events === "") {
  //   events = `<div class="no-event">
  //           <h3>No Events</h3>
  //       </div>`;
  // }
  eventsContainer.innerHTML = events;
  // saveEvents();
}

//function to add event
addEventBtn.addEventListener("click", () => {
  addEventWrapper.classList.toggle("active");
});

addEventCloseBtn.addEventListener("click", () => {
  addEventWrapper.classList.remove("active");
});

document.addEventListener("click", (e) => {
  if (e.target !== addEventBtn && !addEventWrapper.contains(e.target)) {
    addEventWrapper.classList.remove("active");
  }
});

//function to add event to eventsArr
addEventSubmit.addEventListener("click", () => {
  const eventTitle = addEventTitle.value;
  const eventTimeFrom = addEventFrom.value;
  const eventTimeTo = addEventTo.value;
  if (eventTitle === "" || eventTimeFrom === "" || eventTimeTo === "") {
    alert("Please fill all the fields");
    return;
  }

  //check correct time format 24 hour
  const timeFromArr = eventTimeFrom.split(":");
  const timeToArr = eventTimeTo.split(":");
  if (
    timeFromArr.length !== 2 ||
    timeToArr.length !== 2 ||
    timeFromArr[0] > 23 ||
    timeFromArr[1] > 59 ||
    timeToArr[0] > 23 ||
    timeToArr[1] > 59
  ) {
    alert("Invalid Time Format");
    return;
  }

  const timeFrom = convertTime(eventTimeFrom);
  const timeTo = convertTime(eventTimeTo);

  //check if event is already added
  let eventExist = false;
  SAMPLE_API.events.forEach((event) => {
    if (
      event.day === activeDay &&
      event.month === month + 1 &&
      event.year === year
    ) {
      event.events.forEach((event) => {
        if (event.title === eventTitle) {
          eventExist = true;
        }
      });
    }
  });
  if (eventExist) {
    alert("Event already added");
    return;
  }
  const newEvent = {
    title: eventTitle,
    time: timeFrom + " - " + timeTo,
  };
  console.log(newEvent);
  console.log(activeDay);
  let eventAdded = false;
  if (SAMPLE_API.events.length > 0) {
    SAMPLE_API.events.forEach((item) => {
      if (
        item.day === activeDay &&
        item.month === month + 1 &&
        item.year === year
      ) {
        item.events.push(newEvent);
        eventAdded = true;
      }
    });
  }

  if (!eventAdded) {
    SAMPLE_API.events.push({
      day: activeDay,
      month: month + 1,
      year: year,
      events: [newEvent],
    });
  }

  console.log(SAMPLE_API.events);
  addEventWrapper.classList.remove("active");
  addEventTitle.value = "";
  addEventFrom.value = "";
  addEventTo.value = "";
  updateEvents(activeDay);
  const activeDayEl = document.querySelector(".day.active");
  if (!activeDayEl.classList.contains("event")) {
    activeDayEl.classList.add("event");
  }
  var userPage = new LoadUserPage(SAMPLE_API);
  userPage.reloadUserPage();
});

eventsContainer.addEventListener("click", (e) => {
  if (e.target.classList.contains("event")) {
    if (confirm("Are you sure you want to delete this event?")) {
      const eventTitle = e.target.children[0].children[1].innerHTML;
      SAMPLE_API.events.forEach((event) => {
        if (
          event.day === activeDay &&
          event.month === month + 1 &&
          event.year === year
        ) {
          event.events.forEach((item, index) => {
            if (item.title === eventTitle) {
              event.events.splice(index, 1);
            }
          });
          //if no events left in a day then remove that day from eventsArr
          if (event.events.length === 0) {
            SAMPLE_API.events.splice(SAMPLE_API.events.indexOf(event), 1);
            //remove event class from day
            const activeDayEl = document.querySelector(".day.active");
            if (activeDayEl.classList.contains("event")) {
              activeDayEl.classList.remove("event");
            }
          }
        }
      });
      updateEvents(activeDay);
    }
  }
  var userPage = new LoadUserPage(SAMPLE_API);
  userPage.reloadUserPage();
});

//function to save events in local storage
function saveEvents() {
  
}

//function to get events from local storage
function getEvents() {
  //check if events are already saved in local storage then return event else nothing
  // if (localStorage.getItem("events") === null) {
  //   return;
  // }
  // eventsArr.push(...JSON.parse(localStorage.getItem("events")));
  
}

function convertTime(time) {
  //convert time to 24 hour format
  let timeArr = time.split(":");
  let timeHour = timeArr[0];
  let timeMin = timeArr[1];
  let timeFormat = timeHour >= 12 ? "PM" : "AM";
  timeHour = timeHour % 12 || 12;
  time = timeHour + ":" + timeMin + " " + timeFormat;
  return time;
}

