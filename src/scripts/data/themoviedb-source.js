import API_ENDPOINT from '../globals/api-endpoint';

class TheMovieDbSource {
  static async nowPlayingMovies() {
    const respose = await fetch(API_ENDPOINT.NOW_PLAYING);
    const responseJson = await respose.json();
    return responseJson.results;
  }

  static async upcomingMovies() {
    const respose = await fetch(API_ENDPOINT.UPCOMING);
    const responseJson = await respose.json();
    return responseJson.results;
  }

  static async detailMovie(id) {
    const respose = await fetch(API_ENDPOINT.DETAIL(id));
    return respose.json();
  }
}

export default TheMovieDbSource;
