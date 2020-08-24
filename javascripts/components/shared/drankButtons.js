import { randomDrankDom } from "./../randomDrankDom.js";
import { allDranks } from "./../allDranks.js";

const buttons = ["Random", "All"];

const drankButtons = () => {
  $("#buttons").html("");
  $("#buttons").html("<h2>It's 5:00 Somewhere!</h2>")
  buttons.forEach((button) => {
    $("#buttons").append(
      `<button id="${button}" type="button" class="btn btn-primary m-2">${button} Dranks</button>`
    );
    addEvents(button);
  });
};

const addEvents = (button) => {
  switch (button) {
    case "Random":
      $(`#${button}`).on("click", randomDrankDom);
      break;
    case "All":
      $(`#${button}`).on("click", allDranks);
      break;
  }
};

export { drankButtons };
