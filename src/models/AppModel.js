/* eslint-disable quotes */
/* eslint-disable class-methods-use-this */
/* eslint-disable spaced-comment */
class Model {
  fetchData(requerString = `js`) {
    return new Promise((resolve, reject) => {
      const QUERY = `https://www.googleapis.com/youtube/v3/search?key=AIzaSyCrwPm4qJkdrxMtmvur79eOQufX1DYFpMw&type=video&part=snippet&maxResults=15&q=${requerString}`;
      fetch(QUERY)
        .then(res => resolve(res.json()))
        .catch(e => reject(e));
    });
  }

  fetchStatistic(id) {
    return new Promise((resolve, reject) => {
      // id,id,id etc...
      const QUERY = `https://www.googleapis.com/youtube/v3/videos?key=AIzaSyCrwPm4qJkdrxMtmvur79eOQufX1DYFpMw&id=${id}&part=snippet,statistics`;
      fetch(QUERY)
        .then(res => resolve(res.json()))
        .catch(e => reject(e));
    });
  }
}

export default Model;
