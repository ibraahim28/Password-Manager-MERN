const Signup = () => {

  const userSignup = async (e) => {
    
  }

  return (
    <div className="w-screen h-screen bg-gray-800 text-white flex justify-center items-center">
      <form
        className="bg-gray-700 p-8 rounded-lg shadow-lg w-full max-w-md"
        action=""
      >
        <h2 className="text-2xl mb-6 text-center">Sign Up</h2>
        <div className="mb-4">
          <label className="block mb-2" htmlFor="username">
            Username:
          </label>
          <input
            className="w-full p-2 rounded bg-gray-600 text-white"
            type="text"
            name="username"
            placeholder="Spongebob"
          />
        </div>
        <div className="mb-4">
          <label className="block mb-2" htmlFor="email">
            Email:
          </label>
          <input
            className="w-full p-2 rounded bg-gray-600 text-white"
            type="email"
            name="email"
            placeholder="spongebob@example.com"
          />
        </div>
        <div className="mb-4">
          <label className="block mb-2" htmlFor="password">
            Password:
          </label>
          <input
            className="w-full p-2 rounded bg-gray-600 text-white"
            type="password"
            name="password"
            placeholder="********"
          />
        </div>

        <button
          className="w-full p-2 mt-4 bg-blue-500 rounded hover:bg-blue-700"
          type="submit"
        >
          Sign Up
        </button>
      </form>
    </div>
  );
};

export default Signup;
