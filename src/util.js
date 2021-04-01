import axios from 'axios';
const url = '/ARC/data/index04012021.json';
export default {
  fetchArticleList(callback) {
    axios.get(url).then((res) => {
      if (callback) {
        callback(res);
      }
    });
  },
};
