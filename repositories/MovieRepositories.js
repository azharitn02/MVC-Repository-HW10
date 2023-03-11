const Movie = require("../models/moviesModel.js");

class MovieRepository {
  //
  static findMovies = async (next) => {
    //
    try {
      const data = await Movie.findMovies(next);
      return data;
    } catch (err) {
      next(err);
    }
  };

  static findById = async (id, next) => {
    //
    try {
      const data = await Movie.findById(id, next);
      return data;
    } catch (err) {
      next(err);
    }
  };

  static createMovie = async (params, next) => {
    try {
      return Movie.createMovie(params, next);
    } catch (err) {
      next(err);
    }
  };

  static updateMovie = async (id, params, next) => {
    try {
      const data = await Movie.updateMovie(id, params, next);
      return data;
    } catch (err) {
      next(err);
    }
  };

  static deleteMovie = async (id, next) => {
    try {
      const data = await Movie.deleteMovie(id, next);
      return data;
    } catch (err) {
      next(err);
    }
  };
}

module.exports = MovieRepository;
