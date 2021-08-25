import axios from 'axios';
const url = '/ARC/data/index08252021.json';
export default {
  fetchArticleList(callback) {
    axios.get(url).then((res) => {
      if (callback) {
        callback(res);
      }
    });
  },
};
