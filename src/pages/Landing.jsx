
const Landing = () => {
  return (
    <>
        <div className="hero min-h-full bg-base-100 my-36">
            <div className="hero-content flex-col lg:flex-row-reverse">
                {/* <div className="mockup-phone">
                    <div className="camera"></div> 
                    <div className="display">
                        <div className="artboard artboard-demo phone-1">
                            <h1>Hello, world!</h1>
                        </div>
                    </div>
                </div> */}
                <div className="mockup-window border border-base-300">
                    <div className="px-36 md:px-64 lg:px-64 py-32 border-t border-base-300">Hello!</div>
                </div>  
                <div className="max-w-2xl mr-4">
                    <h1 className="text-5xl font-bold text-left">Lorem Ipsum Dolor</h1>
                    <p className="py-6 text-left">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                    <button className="btn btn-primary flex justify-end">Get Started — it's free</button>
                </div>
            </div>
        </div>

        <div className="prose container mx-auto my-16 px-2">
            <h1 className='text-center'>it's like letterboxd except not really</h1>
        </div>
    </>
  )
}

export default Landing