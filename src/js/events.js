fetch("events_list.json")
  .then((res) => res.json())
  .then((res) => {
    let cardContainer = document.getElementsByClassName("event_cards")[0];
    for (let data in res) {

      let emptyDiv = document.createElement("div");
      emptyDiv.className = "empty_div";
      
      let eventCard = document.createElement("div");
      eventCard.className = "event_card";
      
      let eventTitle = document.createElement("div");
      
      let heading = document.createElement("h3");
      heading.innerText = res[data].title;
      heading.className = "event_title";
      
      eventTitle.appendChild(heading);
      
      let startDate = document.createElement("span");
      startDate.className = "date";
      startDate.innerHTML = `<b>Starts:</b> ${res[data].start}`;
      
      let endDate = document.createElement("span");
      endDate.className = "date";
      endDate.innerHTML = `<b>Ends:</b> ${res[data].end}`;
      
      let eventDetails = document.createElement("div");
      eventDetails.className = "event_details";
      
      let eventLink = document.createElement("a");
      
      Object.assign(eventLink, {
        href: `https://${res[data].website}`,
        target: "_blank",
        rel: "noopener noreferrer",
        className: "btn btn-primary link",
      });
      
      let link = document.createElement("h6");
      link.innerText = "More Info";
      
      eventLink.appendChild(link);
      
      let organisation = document.createElement("p");
      organisation.innerHTML = `<b>Organisation: ${res[data].organisation}`;
      
      let loc = document.createElement("h5");
      loc.className = "location";
      loc.innerText = res[data].location;
      
      eventDetails.append(startDate, endDate, organisation, loc, eventLink);
      eventCard.append(eventTitle, eventDetails);
      emptyDiv.appendChild(eventCard);
      cardContainer.appendChild(emptyDiv);
    }
  });