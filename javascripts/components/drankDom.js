import { drankModal } from "./drankModal.js";
import { recipe } from "./recipie.js";
import { drankIt } from "./drankIt.js";

/**
 * @param {object} object
 */
const drankDom = (object) => {
  $("#app").append(`
        <div class="card" style="width: 18rem; margin: 5px;">
            <img class="card-img-top" src=${object.image} alt=${object.name}>
            <div class="card-body">
                <h5 class="card-title">${object.name}</h5>
                <div class="card-text">
                    <ul id="recipie-${object.id}">
                    </ul>
                </div>
                <button type="button" class="btn btn-info" data-toggle="modal" data-target="#${object.id}">View Video</button>
                <button type="button" class="btn btn-success" id="drank-${object.id}">Drank It!</button>
            </div>
        </div>
    `);

  recipe("recipie", object.id);
  drankModal("app", object);

  $(`#drank-${object.id}`).on("click", () => {
    drankIt(object);
  });
};

export { drankDom };
