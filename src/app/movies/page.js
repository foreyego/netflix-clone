"use client";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import { TvMinimalPlay, Filter, Twitter, Youtube } from "lucide-react";
import MovieCard from "@/components/MovieCard";
import { useEffect, useState } from "react";
import { movies } from "@/data/movies";

export default function MoviePage() {
  const [searchQuery, setSearchQuery] = useState(""); 
  const [movieList, setMovieList] = useState([...movies]);
  const [selectedGenre, setSelectedGenre] = useState("");
  const [sortBy, setSortBy] = useState("");

  useEffect(() => {
      filterAndSortMovies();
  }, [searchQuery, selectedGenre, sortBy]);


  const allGenres = [];
  movies.forEach(
    movie => {
      movie.genre.forEach(
        g => {
          if (!allGenres.includes(g)){
            allGenres.push(g);
          }
        }
      );
    }
  );
  console.log(allGenres);

  const filterAndSortMovies = () => {
    let results = [...movies];
    if (searchQuery) {
      results = results.filter(
        movie => movie.title.toLowerCase().includes(searchQuery.toLowerCase())
      )
    }

    if (selectedGenre) {
      results = results.filter(
        movie => movie.genre.includes(selectedGenre)
      )
    }

    if (sortBy) {
      // .sort() modifies the array in place based on compare function
      // Compare function: negative = a before b, positive = b before a, 0 = same
      results = results.sort((a, b) => {
        switch (sortBy) {
          case "year":
            // Sort by year (newest first)
            // Subtracting gives: if b.year > a.year, result is positive, b comes first
            return b.year - a.year;

          case "rating":
            // Sort by rating (highest first)
            return b.vote_average - a.vote_average;

          case "a-z":
            // Sort alphabetically A-Z
            // localeCompare is the proper way to sort strings alphabetically
            // returns negative if a comes before b, positive if b comes before a
            return a.title.localeCompare(b.title);

          case "z-a":
            // Sort alphabetically Z-A (reverse of A-Z)
            return b.title.localeCompare(a.title);

          default:
            // No sorting
            return 0;
        }
      });
    }

    setMovieList(results);

  }
  
  return (
    <div className="w-full pt-30">
      <Header />
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex gap-2 items-center ml-2">
          <TvMinimalPlay className="h-10 w-10 text-red-600" />
          <h1 className="text-2xl font-bold mb-2">Movies</h1>
        </div>
        {/*search bar*/}
        <div className="mt-4 mb-4">
          <input className="w-full bg-gray-900 text-white py-3 pl-12 pr-4 rounded-md focus:outline-none focus:ring-2 focus:ring-red-600 transition-all" type="text" placeholder="Search movies" onChange={(e) => setSearchQuery(e.target.value)} />
        </div>

        {/*filters*/}
        <div className="flex flex-col gap-6 items-start text-xl bg-gray-900 p-4 mt-2 rounded-md md:flex-row md:items-center">
          <div className="flex items-center gap-2">
            <Filter className="h-5 w-5" />
            <p>Filters:</p>
          </div>
          <select onChange={(e) => setSelectedGenre(e.target.value)} className="bg-gray-800 py-3 px-5 w-full md:w-auto">
            <option value="">All Genres</option>
            {
              allGenres.map(
                genre =>
                  (
                    <option value={genre} key={genre}>{genre}</option>
                  )
              )
            }
            </select>

          <select onChange={(e) => setSortBy(e.target.value)}
          className="bg-gray-800 py-3 px-5 w-full md:w-auto" value={sortBy}>
            <option value="year">Release Year</option>
            <option value="a-z">A-Z</option>
            <option value="z-a">Z-A</option>
            <option value="rating">Ratings</option>
          </select>
        </div>
        <div className="grid grid-cols-2 gap-3 mt-4 sm:grid-cols-3 sm:gap-4 md:grid-cols-4 lg:grid-cols-6 ">
          {movieList.map((m) => (
            <div key={m.id} className="w-full">
              <MovieCard
                id={m.id}
                title={m.title}
                duration={m.duration}
                description={m.description}
                image={m.image}
                vote_average={m.vote_average}
              />
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
}
