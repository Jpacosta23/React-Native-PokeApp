import { getPokemon } from "../services";

/**
 * Get a single Job
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

const capturePokemon = (pokemon, dispatch) => {
  try {
    dispatch({ type: "CAPTURE_POKEMON", payload: pokemon });
  } catch (error) {
    dispatch({ type: "SHOW_ERROR", payload: error });
  }
};

const releasePokemon = (pokemon, dispatch) => {
  try {
    dispatch({ type: "RELEASE_POKEMON", payload: pokemon });
  } catch (error) {
    dispatch({ type: "SHOW_ERROR", payload: error });
  }
};

export {
  getPokemonDetail,
  deletePokemonDetail,
  capturePokemon,
  releasePokemon,
};
