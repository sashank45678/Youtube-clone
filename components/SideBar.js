import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const SideBar = () => {
  const store = useSelector((store) => {
    return store.sidebar;
  });

  return (
    store.showsideBar && (
      <div className="py-2 shadow-lg w-44 col-span-2 bg-gray-100 justify-center">
        <div className="px-14 py-2">
        <ul className="space-y-1">
          <Link to="/">
            <li className="px-2 py-1 flex items-center hover:bg-gray-200 rounded">
              <span className="mr-1">🏠</span> Home
            </li>
          </Link>
          <li className="px-2 py-1 flex items-center hover:bg-gray-200 rounded">
            <span className="mr-1">📽️</span> Live
          </li>
          <Link to="/videos">
            <li className="px-2 py-1 flex items-center hover:bg-gray-200 rounded">
              <span className="mr-1">📻</span> Videos
            </li>
          </Link>
          <li className="px-2 py-1 flex items-center hover:bg-gray-200 rounded">
            <span className="mr-1">👀</span> Live
          </li>
        </ul>
        </div>
        <div className="px-0 ml-0">
        <h1 className="font-bold pt-3">Subscriptions</h1>
        <ul className="space-y-1">
          <li className="px-2 py-1 hover:bg-gray-200 rounded">🎶 Music</li>
          <li className="px-2 py-1 hover:bg-gray-200 rounded">🏏Sports</li>
          <li className="px-2 py-1 hover:bg-gray-200 rounded">🎮Gaming</li>
          <li className="px-2 py-1 hover:bg-gray-200 rounded">🎥Movies</li>
        </ul>
        </div>
        <h1 className="font-bold pt-3">Watch Later</h1>
        <ul className="space-y-1">
          <li className="px-2 py-1 hover:bg-gray-200 rounded">🎶 Music</li>
          <li className="px-2 py-1 hover:bg-gray-200 rounded">🏏Sports</li>
          <li className="px-2 py-1 hover:bg-gray-200 rounded">🎮Gaming</li>
          <li className="px-2 py-1 hover:bg-gray-200 rounded">🎥Movies</li>
        </ul>
      </div>
    )
  );
};

export default SideBar;
