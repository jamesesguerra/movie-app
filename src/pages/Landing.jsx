
const Landing = () => {
  return (
    <>
        <div className="hero min-h-full bg-base-100 mt-6">
            <div className="hero-content flex-col lg:flex-row-reverse">
                {/* <img src="https://placeimg.com/260/400/arch" className="max-w-sm rounded-lg shadow-2xl" /> */}
                <div className="mockup-phone">
                    <div className="camera"></div> 
                    <div className="display">
                        <div className="artboard artboard-demo phone-1">Hi.</div>
                    </div>
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