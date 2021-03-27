
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
  <button class="secondaryButton">Contribute on GitHub</button>
</div>
`;

app.append(LandingPageSection);

/// application section - events data & content will be appended here
let applicationContainer = document.createElement("div");
applicationContainer.className = "application";

let EVENTS_SECTION = document.createElement("div");
EVENTS_SECTION.className = "section";
EVENTS_SECTION.id = "events-section";

let sectionTitle = document.createElement("h2");
sectionTitle.className = "sectionTitle";
sectionTitle.innerHTML = "All Events";

let eventsContainer = document.createElement("div");
eventsContainer.id = "eventsContainer";

let CardLayer = document.createElement("div");
CardLayer.className = "cardLayer";

fetch('/src/data.json').then((res) => res.json()).then((res) => {         /// This fetching method is only to fetch trending-events

  for (let data in res) {
    if (res[data].tag === "trending") {
      let EventCard = document.createElement("div");
      EventCard.className = "card";
  
      let EventCard_Title = document.createElement("h3");
      EventCard_Title.className = "event-title";
      EventCard_Title.innerHTML = res[data].title;

      let EventCard_Duration = document.createElement("p");
      EventCard.className = "event-duration";
      EventCard_Duration.innerHTML = `${res[data].start} - ${res[data].end}`;

      let EventCard_Mode = document.createElement("p");
      EventCard_Mode.className = "event-mode";
      if (res[data].mode === "online") {
        EventCard_Mode.style.color = "blue";
      } else if (res[data].mode === "offline") {
        EventCard_Mode.style.color = "orange";
      }

      EventCard_Mode.innerHTML = res[data].mode;

      let EventCard_Tag = document.createElement("p");
      EventCard_Tag.className = "event-tag";
      EventCard_Tag.innerHTML = `#${res[data].tag}`;

      let EventCard_Button = document.createElement("button");
      EventCard_Button.className = "primaryButton";
      EventCard_Button.innerHTML = "Register Now";
      EventCard_Button.onclick = function redirectToEventWebsite() {
        window.open(res[data].website);
      }

      EventCard.append(EventCard_Title);
      EventCard.append(EventCard_Duration);
      EventCard.append(EventCard_Mode);
      EventCard.append(EventCard_Tag);
      EventCard.append(EventCard_Button);
      CardLayer.append(EventCard);
    }
  } 
});

eventsContainer.append(CardLayer);


EVENTS_SECTION.append(sectionTitle);
EVENTS_SECTION.append(eventsContainer);

applicationContainer.append(EVENTS_SECTION);


fetch('/src/data.json').then((res) => res.json()).then((res) => {             /// This fetching method is only to fetch upcoming  -events
  for (let data in res) {
    if (res[data].tag === "upcoming") {
      let EventCard = document.createElement("div");
      EventCard.className = "card";

      let EventCard_Title = document.createElement("h3");
      EventCard_Title.className = "event-title";
      EventCard_Title.innerHTML = res[data].title;

      let EventCard_Duration = document.createElement("p");
      EventCard.className = "event-duration";
      EventCard_Duration.innerHTML = `${res[data].start} - ${res[data].end}`;

      let EventCard_Mode = document.createElement("p");
      EventCard_Mode.className = "event-mode";
      if (res[data].mode === "online") {
        EventCard_Mode.style.color = "blue";
      } else if (res[data].mode === "offline") {
        EventCard_Mode.style.color = "orange";
      }

      EventCard_Mode.innerHTML = res[data].mode;

      let EventCard_Tag = document.createElement("p");
      EventCard_Tag.className = "event-tag";
      EventCard_Tag.innerHTML = `#${res[data].tag}`;

      let EventCard_Button = document.createElement("button");
      EventCard_Button.className = "primaryButton";
      EventCard_Button.innerHTML = "Register Now";
      EventCard_Button.onclick = function redirectToEventWebsite() {
        window.open(res[data].website);
      }

      EventCard.append(EventCard_Title);
      EventCard.append(EventCard_Duration);
      EventCard.append(EventCard_Mode);
      EventCard.append(EventCard_Tag);
      EventCard.append(EventCard_Button);
      CardLayer.append(EventCard);
    }
  }
});


app.append(applicationContainer);

document.getElementById("root").appendChild(app);