import axios from 'axios';
import store from "../store";

const prefix = process.env.NODE_ENV === 'production' && process.env.SERVER_URL ? process.env.SERVER_URL : "";
export default {
  async getAll() {
    try {
      store.dispatch({type: 'GET_ALL_PATHS_PENDING'})
      const paths = await axios
          .get(prefix + `/api/paths/mobile`)
          .then(res => res.data);
          store.dispatch({type: 'GET_ALL_PATHS_FULFILLED'})
          return paths || [];
    } catch (err) {
      console.log(err);
      store.dispatch({type: 'GET_ALL_PATHS_REJECTED', payload: err})
    }
  },
  saveOne: async (path) => {
    let res = await axios.post(prefix + `/api/path`, path);
    return res.data || {};
  },
  editOne: async (path, id) => {
    let res = await axios.put(prefix + `/api/path`, path, {
      params: {
        id: id
      }
    });
    return res.data || {};
  },
  deleteOne: async (id) => {
    let res = await axios.delete(prefix + `/api/path`,{
      params: {
        id: id
      }
    });
    return res.data || {};
  },
  async snapPath(coords, radius) {
    try {
      store.dispatch({type: 'SNAP_PATH_PENDING'})
      const snappedPath = await axios
          .get(prefix + `/api/path/snap`, {
            params: {
              coords: coords,
              radius: radius
            }})
          .then(res => res.data);
      store.dispatch({type: 'SNAP_PATH_FULFILLED'})
      return snappedPath || [];
    } catch (err) {
      console.log(err);
      store.dispatch({type: 'SNAP_PATH_REJECTED', payload: err})
    }
  },
  getOne: async (id) => {
    let res = await axios.get(prefix + `/api/path`, {
      params: {
        id: id
      }
    });
    return res.data || {};
  }
}
