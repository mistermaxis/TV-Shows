const searchMysteryTvShowsURL = 'https://api.tvmaze.com/search/shows?q=mystery';
const MysteryTvShowsBaseURL = 'https://api.tvmaze.com/shows/';
const getTvShows = async () => {
  const results = await fetch(searchMysteryTvShowsURL);
  const tvshows = await results.json();
  return tvshows;
};
const getTvShowById = async (id) => {
  const result = await fetch(MysteryTvShowsBaseURL + id);
  const tvShow = await result.json();
  return tvShow;
};
export { getTvShows, getTvShowById };