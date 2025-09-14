import { useLoaderData } from "react-router"

const Favourites = () => {

  const favorites = useLoaderData();

  return (
    <div className="relative top-20">
      <h2 className="text-center text-xl sm:text-2xl lg:text-3xl font-bold underline text-red-500 mb-5 mt-3">Favorite Quotes</h2>
      <div className="flex justify-center">
        <div className="m-2 md:ml-5 text-gray-900 grid sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:mx-5 xl:grid-cols-4 pb-5">
          {
            favorites.map((favorite) => (
              <div className="bg-gradient-to-bl from-gray-300 to-gray-50 border-4 border-white mt-3 shadow-lg rounded-lg max-w-sm mx-auto" key={favorite._id}>
                <div className="mx-3 mb-8">
                  <p className="mt-2 text-gray-800 font-medium lg:text-lg">{favorite.quote}</p>
                  <p className="mt-2 text-gray-800 text-center">--------------------------</p>
                  <p className="mt-2 text-green-600 font-medium lg:text-lg"><span className="text-red-600">Author</span> : {favorite.author}</p>
                </div>
              </div>
            ))
          }
        </div>
      </div>
    </div>
  )
}

export default Favourites