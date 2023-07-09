import { useEffect } from "react";

import art from "../assets/art.png";
import desktop1 from "../assets/desktop1.png";
import desktop2 from "../assets/desktop2.png";
import desktop3 from "../assets/desktop3.png";


const Landing = () => {

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="max-w-5xl mx-auto">
      <div className="mx-auto lg:min-h-screen">
        <div className="hero min-h-full bg-base-100 mb-36 mt-24">
          <div className="hero-content flex-col lg:flex-row-reverse">
            <div className="">
              <img src={art} alt="A guy watching a movie" />
            </div>
            <div className="max-w-2xl lg:mr-4 text-center lg:text-left">
              <h1 className="text-5xl font-bold">Pellicola</h1>
              <p className="py-6">Inspired by my love of film, Pellicola is a simple movie discovery app to help you hold a conversation with cinephiles who think they're better than everyone else.</p>
              <button className="btn btn-primary lg:mx-auto">
                <a href="/register">Get Started — it's free</a>
              </button>
            </div>
          </div>
        </div>

        <div className="bg-base-100 my-24 px-4 text-center">
          <div className="max-w-xl mx-auto">
            <img src={desktop1} />
          </div>

          <div className="prose mx-auto">
            <h2 className="">It's like Letterboxd except not really</h2>
            <p className="">Choose from a selection of movies that are currently popular, now showing, coming soon, and top-rated.</p>
          </div>
        </div>

        <div className="bg-base-100 my-24 px-4 text-center">
          <div className="max-w-xl mx-auto">
            <img src={desktop2} />
          </div>

          <div className="prose mx-auto">
            <h2>The only information you need</h2>
            <p>Scan through an overview of any movie while being recommended a list of similar movies.</p>
          </div>
        </div>

        <div className="bg-base-100 my-24 px-4 text-center">
          <div className="max-w-xl mx-auto">
            <img src={desktop3} />
          </div>

          <div className="prose mx-auto">
            <h2 className="">Your digital film diary</h2>
            <p className="">Create a list of movies with a certain theme to help you pick a movie to watch according to your current mood.</p>
          </div>
        </div>



      </div>
    </div>
  );
};

export default Landing;