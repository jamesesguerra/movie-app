import { Link } from "react-router-dom"

const CarouselTitle = ({ title }) => {

  const urlMapping = {
    'Popular': '/popular',
    'Now Showing': '/now-showing',
    'Coming Soon': '/coming-soon',
    'Top-rated': '/top-rated'
  }

  return (
    <h2 className='text-2xl py-4 font-serif'>{ title } <Link to={urlMapping[title]}><span className="link link-hover link-primary text-base pl-2 font-sans">View All</span></Link></h2>
  )
}

export default CarouselTitle