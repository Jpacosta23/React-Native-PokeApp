import { getPokemon } from "../services";

/**
 * Get a single Pokemon
 * @param {Number} id
 * @param {Function} dispatch
 */
const getPokemonDetail = async (id, dispatch) => {
  dispatch({ type: "IS_LOADING", payload: true });
  try {
    const pokemon = await getPokemon(id);
    dispatch({ type: "GET_POKEMON", payload: pokemon });
  } catch (error) {
    dispatch({ type: "SHOW_ERROR", payload: error });
  } finally {
    dispatch({ type: "IS_LOADING", payload: false });
  }
};

/**
 *Delete Pokemon information from store
 * @param {Function} dispatch
 */
const deletePokemonDetail = (dispatch) => {
  dispatch({ type: "IS_LOADING", payload: true });
  try {
    dispatch({ type: "RESET_POKEMON", payload: null });
  } catch (error) {
    dispatch({ type: "SHOW_ERROR", payload: error });
  } finally {
    dispatch({ type: "IS_LOADING", payload: false });
  }
};

/**
 * Add pokemon to pokebag
 * @param {Array} pokemon
 * @param {Function} dispatch
 */
const capturePokemon = (pokemon, dispatch) => {
  try {
    dispatch({ type: "CAPTURE_POKEMON", payload: pokemon });
  } catch (error) {
    dispatch({ type: "SHOW_ERROR", payload: error });
  }
};

/**
 *Delete pokemon from pokebag
 * @param {Array} pokemon
 * @param {Function} dispatch
 */
const releasePokemon = (pokemon, dispatch) => {
  try {
    dispatch({ type: "RELEASE_POKEMON", payload: pokemon });
  } catch (error) {
    dispatch({ type: "SHOW_ERROR", payload: error });
  }
};

/**
 *
 * @param {Array} pokemon
 * @param {Function} dispatch
 */
const addPokemonToPokedex = (pokemon, dispatch) => {
  try {
    dispatch({ type: "REGISTER_POKEMON", payload: pokemon });
  } catch (error) {
    dispatch({ type: "SHOW_ERROR", payload: error });
  }
};

export {
  getPokemonDetail,
  deletePokemonDetail,
  capturePokemon,
  releasePokemon,
  addPokemonToPokedex,
};
