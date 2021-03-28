
/// header section
let app = document.createElement("div");
app.className = "page";

let header = document.createElement("div");
header.className = "header";
header.innerHTML = `
<a href="" class="logo">Events.find</a>
<div class="options">
  <a href="index.htm" class="header_option">Home</a>
  <a href="https://www.github.com/yashsehgal/events.find" class="header_option" target="_blank">GitHub</a>
</div>
`;

document.getElementById("header").appendChild(header);


/// landing page section
let LandingPageSection = document.createElement("div");
LandingPageSection.id = "landing-section";
LandingPageSection.innerHTML = `
<h2 class="headline">Here to help you to search for Events 🔍</h2>
<p class="description" style="text-align: center;">Simply Search for Upcoming, Trending Events</p>
<div class="button-layer">
  <button class="primaryButton">Search Events</button>
  <button class="secondaryButton" onclick="window.open('https://www.github.com/yashsehgal/events.find/');">Contribute on GitHub</button>
</div>
`;

app.append(LandingPageSection);

/// application section - events data & content will be appended here
let applicationContainer = document.createElement("div");
applicationContainer.className = "application";

let EVENTS_SECTION = document.createElement("div");
EVENTS_SECTION.className = "section";
EVENTS_SECTION.id = "events-section";

EVENTS_SECTION.innerHTML = `
    <div class="eventsLayer">
      <div class="eventCard">
        <h3 class="title">ACCELERATING DEVELOPMENT AND DEPLOYMENT OF OPEN SOURCE</h3>
        <p class="duration">08/10/20 - 09/10/20</p>
        <p class="mode">Online</p>
        <p class="tags">#trending</p>
        <button class="primaryButton" onclick="window.open('https://www.opensourceindia.in');">Register Now</button>
      </div>
      <div class="eventCard">
        <h3 class="title">ACCELERATING DEVELOPMENT AND DEPLOYMENT OF OPEN SOURCE</h3>
        <p class="duration">08/10/20 - 09/10/20</p>
        <p class="mode">Online</p>
        <p class="tags">#trending</p>
        <button class="primaryButton" onclick="window.open('https://www.opensourceindia.in');">Register Now</button>
      </div>
      <div class="eventCard">
        <h3 class="title">ACCELERATING DEVELOPMENT AND DEPLOYMENT OF OPEN SOURCE</h3>
        <p class="duration">08/10/20 - 09/10/20</p>
        <p class="mode">Online</p>
        <p class="tags">#trending</p>
        <button class="primaryButton" onclick="window.open('https://www.opensourceindia.in');">Register Now</button>
      </div>
    </div>
    <div class="eventsLayer">
      <div class="eventCard">
        <h3 class="title">ACCELERATING DEVELOPMENT AND DEPLOYMENT OF OPEN SOURCE</h3>
        <p class="duration">08/10/20 - 09/10/20</p>
        <p class="mode">Online</p>
        <p class="tags">#trending</p>
        <button class="primaryButton" onclick="window.open('https://www.opensourceindia.in');">Register Now</button>
      </div>
      <div class="eventCard">
        <h3 class="title">ACCELERATING DEVELOPMENT AND DEPLOYMENT OF OPEN SOURCE</h3>
        <p class="duration">08/10/20 - 09/10/20</p>
        <p class="mode">Online</p>
        <p class="tags">#trending</p>
        <button class="primaryButton" onclick="window.open('https://www.opensourceindia.inn');">Register Now</button>
      </div>
      <div class="eventCard">
        <h3 class="title">ACCELERATING DEVELOPMENT AND DEPLOYMENT OF OPEN SOURCE</h3>
        <p class="duration">08/10/20 - 09/10/20</p>
        <p class="mode">Online</p>
        <p class="tags">#trending</p>
        <button class="primaryButton" onclick="window.open('https://www.opensourceindia.in');">Register Now</button>
      </div>
    </div>
    <div class="eventsLayer">
      <div class="eventCard">
        <h3 class="title">ACCELERATING DEVELOPMENT AND DEPLOYMENT OF OPEN SOURCE</h3>
        <p class="duration">08/10/20 - 09/10/20</p>
        <p class="mode">Online</p>
        <p class="tags">#trending</p>
        <button class="primaryButton" onclick="window.open('https://www.opensourceindia.in');">Register Now</button>
      </div>
      <div class="eventCard">
        <h3 class="title">ACCELERATING DEVELOPMENT AND DEPLOYMENT OF OPEN SOURCE</h3>
        <p class="duration">08/10/20 - 09/10/20</p>
        <p class="mode">Online</p>
        <p class="tags">#trending</p>
        <button class="primaryButton" onclick="window.open('https://www.opensourceindia.in');">Register Now</button>
      </div>
      <div class="eventCard">
        <h3 class="title">ACCELERATING DEVELOPMENT AND DEPLOYMENT OF OPEN SOURCE</h3>
        <p class="duration">08/10/20 - 09/10/20</p>
        <p class="mode">Online</p>
        <p class="tags">#trending</p>
        <button class="primaryButton" onclick="window.open('https://www.opensourceindia.in');">Register Now</button>
      </div>
    </div>
`;

applicationContainer.append(EVENTS_SECTION);

app.append(applicationContainer);

let notification = document.createElement("div");
notification.className = "notification";
notification.innerHTML = `
<h2 class="notification-title">Want to Contribute to this Project?</h2>
<p class="notification-description">This is just a personal project of mine, but if you want to help/contribute, you are invited! Let's do some work together</p>
<button class="secondaryButton_Notification" onclick="window.open('https://www.github.com/yashsehgal/events.find/')">Check Source Code on GitHub</button>
`;

app.appendChild(notification);


document.getElementById("root").appendChild(app);