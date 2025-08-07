export default function LoginModal({isOpen}) {
  if (isOpen == false) {
    return null;
  }
  
  return (
    <div className="bg-black/50 h-full w-full fixed inset-0 z-20 flex items-center justify-center">
      {/* login form */}
      <div className="bg-black/20 w-md border border-gray-700 p-10 rounded-md backdrop-blur-md relative">
        <button className="absolute right-5 top-5 cursor-pointer">
            X
        </button>
        <div className="text-center">
          <h2 className="text-3xl font-bold text-red-600">Sign In</h2>
          <p className="text-gray-200">Welcome Back to Netflix!</p>
        </div>
        <form className="mt-4 space-y-6">
          <div>
            <input
              type="email"
              placeholder="enter your email"
              className="w-full p-4 border border-gray-500 rounded-md bg-gray-800/50 focus:outline-none focus:ring-red-500 focus:ring-2"
            />
          </div>
          <div>
            <input
              type="password"
              placeholder="enter your password"
              className="w-full p-4 border border-gray-500 rounded-md bg-gray-800/50 focus:outline-none focus:ring-red-500 focus:ring-2"
            />
          </div>
          <div className="flex justify-between">
            <div>
              <input type="checkbox" className="mr-2" /> Remember Me
            </div>
            <div>
              <a href="#">Forgot Password?</a>
            </div>
          </div>
          <button className="w-full p-4 bg-red-600 rounded-md font-semibold hover:bg-red-800 transition cursor-pointer">
            Sign In
          </button>
          <p className="text-center">New to netflix? <a href="#" className="font-semibold text-gray-400">Sign Up now.</a></p>
        </form>
      </div>
    </div>
  );
}
