import TheMovieDbSource from '../../data/themoviedb-source';

const Upcoming = {
  async render() {
    return `
        <h2>Upcoming Page</h2>
            `;
  },

  async afterRender() {
    const movie = await TheMovieDbSource.upcomingMovies();
    console.log(movie);
  },
};

export default Upcoming;
