import { useEffect } from "react"

import PublicNavbar from "../components/PublicNavbar"
import Footer from "../components/Footer"

const NotFound = () => {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])  

  return (
    <>
        <PublicNavbar />
        <div className="hero min-h-screen">
            <div className="hero-content text-center">
                <div className="max-w-md">
                <h1 className="text-5xl font-bold">Looks like you've found the doorway to the great nothing.</h1>
                <p className="py-6">But don't worry, you can find plenty of other things on the homepage.</p>
                <button className="btn btn-primary">Take me there!</button>
                </div>
            </div>
        </div>
        <Footer />
    </>
  )
}

export default NotFound