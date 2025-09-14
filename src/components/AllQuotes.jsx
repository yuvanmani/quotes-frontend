import { toast } from "react-toastify";
import quoteService from "../services/quoteService"
import { useNavigate } from "react-router";

const AllQuotes = ({ notes }) => {

  const navigate = useNavigate();

  const handleFavorite = async (quote, author) => {

    // handle save favorite logic here
    await quoteService.saveFavorites({ quote, author })
      .then((response) => {
        toast.success(response.data.message);

        // navigate to favorites page
        navigate("/dashboard/favorites");
      })
      .catch((error) => {
        toast.error(error.response.data.message);
      })
  }

  return (
    <div className="relative top-20">
      <h2 className="text-center text-xl sm:text-2xl lg:text-3xl font-bold underline text-red-500 mb-5 mt-7">Inspirational Quotes</h2>
      <div className="flex justify-center">
        <div className="m-2 md:ml-5 text-gray-900 grid sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:mx-5 xl:grid-cols-4 pb-5">
          {
            notes.map((note) => (
              <div className="bg-gradient-to-bl from-gray-300 to-gray-50 border-4 border-white mt-3 shadow-lg rounded-lg max-w-sm mx-auto" key={note.quote}>
                <div className="mx-3 mb-8">
                  <p className="mt-2 text-gray-800 font-medium lg:text-lg">{note.quote}</p>
                  <p className="mt-2 text-gray-800 text-center">--------------------------</p>
                  <p className="mt-2 text-green-600 font-medium lg:text-lg"><span className="text-red-600">Author</span> : {note.author}</p>
                </div>
                <div className="flex justify-center mb-5">
                  <button className="bg-cyan-500 text-white font-bold px-4 py-2 border-white border-2 rounded-lg hover:bg-cyan-600"
                    onClick={() => handleFavorite(note.quote, note.author)}>Add to Favorites</button>
                </div>
              </div>
            ))
          }
        </div>
      </div>
    </div>
  );
};

export default AllQuotes;
