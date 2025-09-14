const Profile = ({ user, onGenerateQuotes }) => {

  return (
    <div className="relative top-20">
      <div className="bg-white m-2 md:ml-5 rounded-lg border-4 border-double border-yellow-400 max-w-lg px-2 md:px-5">
        <h2 className="pt-2 pb-1 text-lg sm:text-xl md:text-2xl font-semibold underline text-red-500">User Details :</h2>
        <p className="sm:text-lg md:text-xl font-semibold text-gray-700">Name : {user.name}</p>
        <p className="pt-1 pb-2 sm:text-lg md:text-xl font-semibold text-gray-700">Email : {user.email}</p>
      </div>
      <div className="mt-5 flex justify-center lg:justify-start lg:ml-6">
        <button onClick={onGenerateQuotes}
          className="bg-cyan-500 text-white font-bold px-4 py-2 rounded-lg border-white border-2 hover:bg-cyan-600 sm:text-lg sm:px-10">
          Generate Quotes</button>
      </div>
    </div>
  );
};

export default Profile;
