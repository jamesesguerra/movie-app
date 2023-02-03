import { useEffect } from "react";


const Landing = () => {

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="">
      <div className="mx-auto lg:min-h-screen">
        <div className="hero min-h-full bg-base-100 my-36">
          <div className="hero-content flex-col lg:flex-row-reverse">
            <div className="mockup-window border border-base-300">
              <div className="px-36 md:px-64 lg:px-64 py-32 border-t border-base-300">Welcome!</div>
            </div>  
            <div className="max-w-2xl mr-4">
              <h1 className="text-5xl font-bold text-left">Sample Movie App</h1>
              <p className="py-6 text-left">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
              <button className="btn btn-primary flex justify-end">Get Started — it's free</button>
            </div>
          </div>
        </div>

        <div className="prose container mx-auto my-16 px-2">
          <h1 className='text-center'></h1>
        </div>
      </div>
    </div>
  );
};

export default Landing;