import { useSelector } from "react-redux";

const LoadingScreen = () => {
  const isLoading = useSelector((state) => state.loadingPage.isLoading);

  if (!isLoading) return null;

  return (
    <div className="fixed top-0 left-0 w-full h-full flex justify-center items-center bg-gray-900 z-50">
      <div className="relative">
        {/* Spinner (Over the Text) */}
        <div className="absolute inset-0 flex justify-center items-center">
          <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-blue-500"></div>
        </div>

        {/* Loading Text (Under Spinner) */}
        <div className=" animate-pulse text-white text-2xl font-semibold relative">
          Loading...
        </div>
      </div>
    </div>
  );
};

export default LoadingScreen;