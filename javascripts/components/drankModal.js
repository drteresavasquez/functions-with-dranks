import { modal } from './shared/modalDom.js';

/**
 * @param {string} selector
 * @param {object} object
 */
const drankModal = (selector, object) => {
    $(`#${selector}`).append(modal(object, object.video))
}

export { drankModal }