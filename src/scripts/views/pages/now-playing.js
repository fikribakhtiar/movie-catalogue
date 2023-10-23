import TheMovieDbSource from '../../data/themoviedb-source';

const NowPlaying = {
  async render() {
    return `
      <h2>Now Playing Page</h2>
          `;
  },

  async afterRender() {
    const movie = await TheMovieDbSource.nowPlayingMovies();
    console.log(movie);
  },
};

export default NowPlaying;
