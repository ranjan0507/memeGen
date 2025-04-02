import React from "react";
import { Link } from "react-router-dom";

const Generate = () => {
  return (
    <div className=" bg-dark text-white flex flex-col items-center justify-start pt-24">
      <div className="text-center">
        <h1 className="text-5xl font-bold text-purple-400 mb-4">Welcome to MemeGen</h1>
        <p className="text-lg text-gray-300 max-w-md pt-10 ml-4">
          MemeGen is your ultimate meme creation tool. Add your own touch to
          trending memes or create hilarious custom memes to share with friends
          and family.
        </p>
      </div>

      <div className="mt-16 mr-6">
        <Link to="/create" className="bg-purple-500 hover:bg-purple-600 text-white py-3 px-8 rounded-lg text-xl">
          Create Meme
        </Link>
      </div>
      <div className="absolute bottom-4 text-gray-400 text-sm mr-10">
        <p>Unleash your creativity with MemeGen!</p>
      </div>
    </div>
  );
};

export default Generate;