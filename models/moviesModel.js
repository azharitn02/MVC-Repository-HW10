const pool = require("../config");

class Movie {
  //
  static findMovies = async (next) => {
    //
    const findQuery = `SELECT * FROM movies`;

    try {
      const data = await pool.query(findQuery);
      return data.rows;
    } catch (err) {
      next(err);
    }
  };

  static findById = async (id, next) => {
    //
    const findQuery = `SELECT * FROM movies WHERE movies.id = $1`;

    try {
      const data = await pool.query(findQuery, [id]);
      return data.rows[0];
    } catch (err) {
      next(err);
    }
  };

  static createMovie = async (params, next) => {
    try {
      const { id, title, genres, year } = params;
      const insertQuery = `
        INSERT INTO movies (id,title,genres,year)
          VALUES
            ($1,$2,$3,$4)
              RETURNING *
      `;

      const data = await pool.query(insertQuery, [id, title, genres, year]);
      return data.rows[0];
    } catch (err) {
      next(err);
    }
  };

  static updateMovie = async (id, params, next) => {
    try {
      const { title, genres, year } = params;
      const updateQuery = `
        UPDATE movies
        SET title = $1,
            genres = $2,
            year = $3
        WHERE id = $4
        RETURNING *
      `;
      const data = await pool.query(updateQuery, [title, genres, year, id]);
      return data.rows[0];
    } catch (err) {
      next(err);
    }
  };

  static deleteMovie = async (id, next) => {
    try {
      const deleteQuery = `DELETE FROM movies WHERE id = $1 RETURNING *`;
      const data = await pool.query(deleteQuery, [id]);
      return data.rows[0];
    } catch (err) {
      next(err);
    }
  };
}

module.exports = Movie;
