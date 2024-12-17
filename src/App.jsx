import { Outlet, useLocation, useParams } from "react-router";
import { Navigation, Search } from "./components/index";

function formatPathname(pathname) {
  return pathname.replace(/[/\-]/g, " ").trim();
}

export default function App() {
  let location = useLocation();
  let pathname = location.pathname;
  let formattedPathname = formatPathname(pathname);
  return (
    <div className="grid grid-cols-[300px_minmax(900px,_1fr)] overflow-hidden">
      <div className="h-screen">
        <Navigation />
      </div>
      <div className="h-screen">
        <div className="h-20 grid grid-cols-[minmax(50px,_1fr)_400px_150px] content-center">
          <h1 className="text-3xl font-bold px-20 self-center text-[#0d5051]">
            {formattedPathname}
          </h1>
          {/* <Search
            placeholder="Search by Title, content, or tags..."
            className="elevation"
          /> */}
        </div>
        <Outlet />
      </div>
    </div>
  );
}
