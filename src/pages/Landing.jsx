import { useEffect } from "react";

import art from "../assets/art.png";
import phone1 from "../assets/phone.png";


const Landing = () => {

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="max-w-5xl mx-auto">
      <div className="mx-auto lg:min-h-screen">
        <div className="hero min-h-full bg-base-100 my-36">
          <div className="hero-content flex-col lg:flex-row-reverse">
            <div className="">
              <img src={art} alt="A guy watching a movie" className="" />
            </div>
            <div className="max-w-2xl mr-4">
              <h1 className="text-5xl font-bold text-left">Magnolia</h1>
              <p className="py-6 text-left">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
              <button className="btn btn-primary flex justify-end">Get Started — it's free</button>
            </div>
          </div>
        </div>

        {/* <div className="prose my-16 px-2 flex mx-auto">
          <div className="grow ">
            <h2>It's like letterboxd except not really.</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil quibusdam non nisi hic voluptatem. Vel excepturi architecto voluptas dolore aut, recusandae non soluta velit quae nam ipsa libero. Harum, laudantium!</p>
          </div>
          <div className="mockup-phone border-primary mx-auto shrink-0">
            <div className="camera"></div> 
            <div className="display">
              <div className="artboard artboard-demo phone-1">
                <img src={art} alt="" />
              </div>
            </div>
          </div>
        </div> */}

        <div className="bg-base-100 my-36">
          <div className="hero-content flex-col lg:flex-row">
            <div className="max-w-xs max-h-96">
              <img src={phone1} alt="" />
            </div>

            <div className="mr-4 prose">
              <h2 className="font-bold text-left">It's like letterboxd except not really.</h2>
              <p className="py-6 text-left">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Landing;