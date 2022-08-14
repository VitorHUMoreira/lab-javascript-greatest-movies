// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?

function getAllDirectors(moviesArray) {
  const allDirectors = moviesArray.map((element) => {
    return element.director;
  });
  return allDirectors;
}

function getUniqueDirectors(getAllDirectors) {
  let uniqueDirectors = [];
  getAllDirectors.forEach((element) => {
    if (!uniqueDirectors.includes(element)) {
      uniqueDirectors.push(element);
    }
  });
  return uniqueDirectors;
}

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(moviesArray) {
  const dramaSpielberg = moviesArray.filter((element) => {
    return (
      element.director === "Steven Spielberg" && element.genre.includes("Drama")
    );
  });
  return dramaSpielberg.length;
}

// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(moviesArray) {
  const scoreAvg = moviesArray.reduce((acc, element) => {
    return (acc + element.score) / moviesArray.length;
  }, 0);
  return +scoreAvg.toFixed(2);
}

// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(moviesArray) {
  const dramaMovies = moviesArray.filter((element) => {
    return element.genre.includes("Drama");
  });
  const dramaAvg = dramaMovies.reduce((acc, element) => {
    return (acc + element.score) / dramaMovies.length;
  }, 0);
  return +dramaAvg.toFixed(2);
}

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(moviesArray) {
  const moviesByYear = [...moviesArray];

  moviesByYear.sort((a, b) => {
    if (a.year === b.year) {
      return ("" + a.title).localeCompare(b.title);
    } else {
      return a.year - b.year;
    }
  });

  return moviesByYear;
}

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(moviesArray) {
  let moviesByTitle = [...moviesArray];

  moviesByTitle.sort((a, b) => ("" + a.title).localeCompare(b.title));

  // PQ NAO POSSO FAZER TUDO ISSO EM UMA LINHA ???

  moviesByTitle = moviesByTitle.slice(0, 20).map((element) => {
    return element.title;
  });

  return moviesByTitle;
}

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes(moviesArray) {
  let auxMovies = [...moviesArray];

  let minutes = auxMovies.map((element) => {
    if (
      !isNaN(+element.duration.charAt(3)) &&
      !isNaN(+element.duration.charAt(4))
    ) {
      return (
        +element.duration.charAt(0) * 60 +
        +element.duration.charAt(3) * 10 +
        +element.duration.charAt(4)
      );
    } else if (
      !isNaN(+element.duration.charAt(3)) &&
      isNaN(+element.duration.charAt(4))
    ) {
      return +element.duration.charAt(0) * 60 + +element.duration.charAt(3);
    } else {
      return +element.duration.charAt(0) * 60;
    }
  });

  minutes.forEach((element, index) => {
    auxMovies[index].duration = element;
  });

  return auxMovies;
}

// BONUS - Iteration 8: Best yearly score average - Best yearly score average
function bestYearAvg(moviesArray) {
  if (!moviesArray.length) {
    return null;
  }

  let yearAvg = [...moviesArray];

  yearAvg.sort((a, b) => a.year - b.year);

  let yearAndRate = { year: 0, rate: 0 };

  yearAvg.forEach((element, i) => {
    if (yearAvg[i + 1] !== undefined && element.year === yearAvg[i + 1].year) {
      if (yearAndRate.rate < (element.score + yearAvg[i + 1].score) / 2) {
        yearAndRate.year = element.year;
        yearAndRate.rate = (element.score + yearAvg[i + 1].score) / 2;
      }
      if (
        yearAvg[i + 2] !== undefined &&
        element.year === yearAvg[i + 2].year
      ) {
        if (
          yearAndRate.rate <
          (element.score + yearAvg[i + 1].score + yearAvg[i + 2].score) / 3
        ) {
          yearAndRate.year = element.year;
          yearAndRate.rate =
            (element.score + yearAvg[i + 1].score + yearAvg[i + 2].score) / 3;
        }
        if (
          yearAvg[i + 3] !== undefined &&
          element.year === yearAvg[i + 3].year
        ) {
          if (
            yearAndRate.rate <
            (element.score +
              yearAvg[i + 1].score +
              yearAvg[i + 2].score +
              yearAvg[i + 3].score) /
              4
          ) {
            yearAndRate.year = element.year;
            yearAndRate.rate =
              (element.score +
                yearAvg[i + 1].score +
                yearAvg[i + 2].score +
                yearAvg[i + 3].score) /
              4;
          }
          if (
            yearAvg[i + 4] !== undefined &&
            element.year === yearAvg[i + 4].year
          ) {
            if (
              yearAndRate.rate <
              (element.score +
                yearAvg[i + 1].score +
                yearAvg[i + 2].score +
                yearAvg[i + 3].score +
                yearAvg[i + 4].score) /
                5
            ) {
              yearAndRate.year = element.year;
              yearAndRate.rate =
                (element.score +
                  yearAvg[i + 1].score +
                  yearAvg[i + 2].score +
                  yearAvg[i + 3].score +
                  yearAvg[i + 4].score) /
                5;
            }
          }
        }
      }
    }
  });

  return `The best year was ${
    yearAndRate.year
  } with an average score of ${+yearAndRate.rate.toFixed(2)}`;
}

console.log(bestYearAvg(movies));
