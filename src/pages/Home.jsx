import { Link } from "react-router"

const HomePage = () => {
  return (
    <div className="relative top-20 bg-white border-4 border-double border-red-400 mx-2 mt-5 md:mx-auto max-w-3xl rounded-lg">
      <h2 className="py-3 text-center text-gray-600 text-xl sm:text-2xl md:text-3xl font-bold p-2"><span className="text-red-500">QuoteCraft</span> delivers beautifully curated <span className="text-green-500">quotes</span> to inspire your day!!</h2>
      <p className="py-3 text-center text-gray-600 text-xl sm:text-2xl md:text-3xl font-bold"><span className="text-cyan-500">Discover</span> fresh perspectives with every <Link to="/login" className="text-green-500">click!</Link></p>
      <p className="py-3 text-center text-gray-600 text-xl sm:text-2xl md:text-3xl font-bold pb-5">Ready for daily inspiration? <Link to="/login" className="text-cyan-500">Login</Link> or <Link to="/register" className="text-cyan-500">Register</Link></p>
    </div>
  )
}

export default HomePage