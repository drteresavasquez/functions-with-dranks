import { getDrankRecipe } from "./../helpers/data/dranksData.js";

/**
 * @param {string}  selector
 * @param {integer} id
 */
const recipe = (selector, id) => {
  $(`#${selector}-${id}`).html("");

  getDrankRecipe(id).recipe.forEach((item) => {
    $(`#${selector}-${id}`).append(`
            <li>${item}</li>
        `);
  });
};

export { recipe };
