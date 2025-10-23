// This directive tells Next.js that this is a CLIENT component
// Client components can use React hooks like useState, useEffect, and browser APIs
"use client";

// Import necessary dependencies
import Footer from "@/components/Footer";
import Header from "@/components/Header"; // @ is an alias for src directory
import { ArrowLeft, Calendar, Clock, Heart, Play, Plus, Star } from "lucide-react"; // Icons from lucide-react
import { useParams, useRouter } from "next/navigation"; // Hook to get URL parameters
import { useState } from "react"; // Hook for managing component state

// IMPORT SHARED DATA
// Instead of duplicating movie data, we import it from a central location
// This is a best practice - "Single Source of Truth"
import { movies } from "@/data/movies"; // Import movies array from data file

// Main component for the movie detail page
export default function MovieDetailPage() {


    // HOOK 1: useParams() - Gets the dynamic route parameter from URL
    // If URL is /movies/tt26581740, params.id se will be "tt26581740"
    const params = useParams();

    // HOOK 2: useRouter() - Allows us to navigate programmatically
    const router = useRouter();

    // HOOK 3: useState() - Manages the "isFavorite" state
    // Initial value is false, setIsFavorite is the function to update it
    const [isFavorite, setIsFavorite] = useState(true);

    // Find the movie that matches the ID from the URL
    // .find() returns the first element that matches the condition
    const movie = movies.find((m) => m.id === params.id);


    // Handle case where movie is not found
    // This is called "early return" pattern - exit early if condition not met
    if (!movie) {
        return (
            <div className="min-h-screen flex items-center justify-center">
                <div className="text-center">
                    <h1 className="text-3xl font-bold text-red-600 mb-4">Movie Not Found</h1>
                    <button
                        onClick={() => router.push("/movies")}
                        className="px-6 py-3 bg-red-600 hover:bg-red-700 rounded transition-colors"
                    >
                        Back to Movies
                    </button>
                </div>
            </div>
        );
    }

    // Function to toggle favorite status
    // This demonstrates how to update state with the opposite boolean value
    // const toggleFavorite = () => {
    //     setIsFavorite(!isFavorite); // ! means "not" - so if true, becomes false and vice versa
    // };

    const toggleFavorite = () => {
        setIsFavorite(!isFavorite);
    };




    return (
        <div className="w-full min-h-screen">
            {/* Include the header component */}
            <Header />


            {/*
        HERO SECTION with backdrop image
        Uses relative positioning to allow absolute positioned overlay
      */}
            <div className="relative w-full h-[50vh] md:h-[70vh]">
                {/*
          Background image using inline styles
          Alternative to Next.js Image component for background images
        */}
                <div
                    className="absolute inset-0 bg-cover bg-center"
                    style={{ backgroundImage: `url(${movie.backdrop})` }}
                >
                    {/*
            Gradient overlay - creates fade effect from transparent to black
            This makes text readable over the image
          */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent" />
                </div>

                {/*
          Back button - positioned absolutely in top-left
          z-10 ensures it appears above the backdrop
        */}
                <button
                    onClick={() => router.back()} // Goes back to previous page in history
                    className="absolute top-24 left-4 z-10 flex items-center gap-2 px-4 py-2 bg-black/70 hover:bg-black rounded-md transition-all backdrop-blur-sm"
                >
                    <ArrowLeft className="w-5 h-5" />
                    <span>Back</span>
                </button>
            </div>

            {/*
        MAIN CONTENT SECTION
        negative margin (mt) pulls content up to overlap with hero section
      */}
            <div className="max-w-7xl mx-auto px-4 -mt-32 relative z-10">
                {/*
          FLEX CONTAINER - Creates responsive layout
          Default: column (stacked) on mobile
          md:flex-row = row layout on medium screens and up
        */}
                <div className="flex flex-col md:flex-row gap-8">
                    {/*
            LEFT SIDE - Movie Poster
            flex-shrink-0 prevents poster from shrinking in flex layout
          */}
                    <div className="flex-shrink-0">
                        <img
                            src={movie.image}
                            alt={movie.title}
                            className="w-full md:w-80 rounded-lg shadow-2xl"
                        />
                    </div>

                    {/* RIGHT SIDE - Movie Information */}
                    <div className="flex-1">
                        {/* Title */}
                        <h1 className="text-4xl md:text-5xl font-bold mb-4">{movie.title}</h1>

                        {/*
              META INFORMATION ROW
              Flex container with items centered vertically
              Wraps on small screens (flex-wrap)
            */}
                        <div className="flex flex-wrap items-center gap-4 mb-6 text-gray-300">
                            {/* Year with Calendar icon */}
                            <div className="flex items-center gap-1">
                                <Calendar className="w-4 h-4" />
                                <span>{movie.year}</span>
                            </div>

                            {/* Duration with Clock icon */}
                            <div className="flex items-center gap-1">
                                <Clock className="w-4 h-4" />
                                <span>{movie.duration}</span>
                            </div>

                            {/* Rating badge with special styling */}
                            <div className="px-3 py-1 border border-gray-500 rounded text-sm">
                                {movie.rating}
                            </div>

                            {/*
                Star rating with icon
                Uses template literal to insert vote_average into string
              */}
                            <div className="flex items-center gap-1">
                                <Star className="w-4 h-4 fill-yellow-500 text-yellow-500" />
                                <span>{movie.vote_average}/10</span>
                            </div>
                        </div>

                        {/*
              GENRES
              Maps over genre array to create individual badges
              Each badge needs a unique "key" prop for React's reconciliation
            */}
                        <div className="flex flex-wrap gap-2 mb-6">
                            {movie.genre.map((g) => (
                                <span
                                    key={g} // Unique key is required for list items
                                    className="px-4 py-2 bg-red-600/20 text-red-500 rounded-full text-sm font-medium"
                                >
                                    {g}
                                </span>
                            ))}
                        </div>

                        {/* ACTION BUTTONS ROW */}
                        <div className="flex flex-wrap gap-4 mb-8">
                            {/* Play button - primary action */}
                            <button className="flex items-center gap-2 px-8 py-3 bg-red-600 hover:bg-red-700 rounded-md font-semibold transition-colors">
                                <Play className="w-5 h-5" />
                                Play Now
                            </button>

                            {/* Add to List button */}
                            <button className="flex items-center gap-2 px-6 py-3 bg-gray-800 hover:bg-gray-700 rounded-md transition-colors">
                                <Plus className="w-5 h-5" />
                                My List
                            </button>

                            {/*
                Favorite button with conditional styling
                Uses ternary operator: condition ? ifTrue : ifFalse
                fill-red-500 makes the heart solid when favorite is true
              */}
                            <button
                                onClick={toggleFavorite}
                                className={`flex items-center gap-2 px-6 py-3 rounded-md transition-all ${isFavorite
                                    ? "bg-red-600 hover:bg-red-700"
                                    : "bg-gray-800 hover:bg-gray-700"
                                    }`}
                            >
                                <Heart
                                    className={`w-5 h-5 ${isFavorite ? "fill-red-500" : ""
                                        }`}
                                />
                                {/* Conditional text rendering */}
                                {isFavorite ? "Favorited" : "Favorite"}
                            </button>
                        </div>

                        {/* DESCRIPTION SECTION */}
                        <div className="mb-8">
                            <h2 className="text-2xl font-semibold mb-3">Overview</h2>
                            <p className="text-gray-300 leading-relaxed">{movie.description}</p>
                        </div>

                        {/*
              ADDITIONAL INFO GRID
              Grid layout with 1 column on mobile, 2 on medium screens
            */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            {/* Director info */}
                            <div>
                                <h3 className="text-lg font-semibold mb-2 text-gray-400">Director</h3>
                                <p className="text-white">{movie.director}</p>
                            </div>

                            {/* Cast info - joins array with commas */}
                            <div>
                                <h3 className="text-lg font-semibold mb-2 text-gray-400">Cast</h3>
                                <p className="text-white">{movie.cast.join(", ")}</p>
                            </div>
                        </div>
                    </div>
                </div>

                {/*
          SIMILAR MOVIES SECTION (placeholder)
          This would typically fetch related movies from an API
        */}
                <div className="mt-16 mb-8">
                    <h2 className="text-2xl font-bold mb-6">More Like This</h2>
                    <div className="text-gray-400 text-center py-12 bg-gray-900/50 rounded-lg">
                        Similar movies would appear here
                    </div>
                </div>
            </div>

            {/* Footer component */}
            <Footer />
        </div>
    );
}