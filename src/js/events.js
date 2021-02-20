let cardContainer = document.createElement("div");
cardContainer.className = "card_container";

/// creating DOM elements for card categories
/// this DOM element is for Trending Events Section
let trending_events_container = document.createElement("div");
trending_events_container.className = "card_category";
trending_events_container.id = "trending_events_container";

/// this DOM element is for Upcoming Events Section
let upcoming_events_container = document.createElement("div");
upcoming_events_container.className = "card_category";
upcoming_events_container.id = "upcoming_events_container";

/// this DOM element is for new events/or the events in-general
let new_events = document.createElement("div");
new_events.className = "card_category";
new_events.id = "new-events";

fetch('/src/js/events_list.json')
  .then((res) => res.json())
  .then((res) => {
    

    /// fetching data from
    for (let data in res) {

      /// this is the empty <div> card for events
      let eventCard = document.createElement("div");
      eventCard.className = "event_card";

      let event_title = document.createElement("h3");
      event_title.id = "event-title";
      event_title.innerHTML = res[data].title;

      let event_website = document.createElement("a");
      event_website.id = "event-website";
      event_website.innerHTML = `<a href="${res[data].website}" style="
          text-decoration: none;

      ">${res[data].website}</a>`;

      let event_duration = document.createElement("p");
      event_duration.id = "event-duration";
      event_duration.innerHTML = `<b>${res[data].start}</b> to <b>${res[data].end}</b>`;

      let event_organization = document.createElement("p");
      event_organization.id = "event-organization";
      event_organization.innerHTML = res[data].organization;

      // let tag = res[data].tag;

      let event_mode = document.createElement("p");
      event_mode.id = "event-mode";
      event_mode.innerHTML = res[data].location;

      let learnMoreButton = document.createElement("a");
      learnMoreButton.className = "button";
      learnMoreButton.id = "learn-more-button";
      learnMoreButton.innerHTML =  `Learn More`;

      /// setting up data inside the card
      eventCard.append(event_title);
      eventCard.append(event_website);
      eventCard.append(event_duration);
      eventCard.append(event_organization);
      eventCard.append(event_mode);
      eventCard.append(learnMoreButton);

      if (res[data].tag.toLowerCase() == "trending") {
        /// the data card will be later appended inside the
        /// trending section
        trending_events_container.append(eventCard);
      } else if (res[data].tag.toLowerCase() == "upcoming") {
        /// the data card will be later appended inside the
        /// upcoming section
        upcoming_events_container.append(eventCard);
      } else {
        new_events.append(eventCard);
      }

    }

    // document.getElementById("event-card").ondblclick((MouseEvent) => function(res) {
    //   document.getElementById("root").innerHTML = "clicked!!";
    // });

    cardContainer.append(new_events);
    cardContainer.append(trending_events_container);
    cardContainer.append(upcoming_events_container);

    // document.getElementById("new-events").innerHTML('<h2>New Events</h2>');
    document.getElementById("new-events").appendChild(new_events);
    document.getElementById("trending-events").appendChild(trending_events_container);
    document.getElementById("upcoming-events").appendChild(upcoming_events_container);

  });

document.getElementById("root").appendChild(cardContainer);