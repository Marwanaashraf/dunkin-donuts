import logo from "../../assets/Images/logo/dd_nav_logo.svg";
import appStore from "../../assets/Images/Footer/AppStore.png";
import googlePlay from "../../assets/Images/Footer/GooglePlayStore.png";

import {
  FacebookIcon,
  InstaIcon,
  TickTockIcon,
  XIcon,
  YoutubeIcon,
} from "../../Icons/media/media";

let mediaList = [
  {
    icon: <FacebookIcon className="w-6 h-6" />,
    path: "https://www.facebook.com/DunkinEG/?brand_redir=6979393237#",
    color: "hover:bg-blue-600",
  },
  {
    icon: <InstaIcon className="w-6 h-6" />,
    path: "https://www.instagram.com/dunkin/?hl=en",
    color: "hover:bg-pink-600",
  },
  {
    icon: <i className="fa-brands fa-x-twitter"></i>,
    path: "https://x.com/dunkindonuts?lang=en",
    color: "hover:bg-black",
  },
  {
    icon: <YoutubeIcon className="w-6 h-6" />,
    path: "https://www.youtube.com/user/dunkindonuts#",
    color: "hover:bg-red-600",
  },
  {
    icon: <i className="fa-brands fa-tiktok"></i>,
    path: "https://www.tiktok.com/@dunkin",
    color: "hover:bg-black",
  },
];
export default function Footer() {
  return (
    <footer className="bg-slate-50 dark:bg-slate-900 mt-10 py-8 p-3">
      <div className="contain p-3">
        <div className="grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 gap-8 ">
          <div className="space-y-2">
            <img className="w-48" src={logo} alt="logo" />
            <p className="my-3">Dunkin’ is one of the world’s leading coffee and baked goods chains, famous for its donuts and freshly brewed coffee.</p>
          </div>

          {/* socia media */}
          <div>
            <h2 className="text-main text-4xl font-bold">Follow Us</h2>
            <div className="flex space-x-2 my-3">
              {mediaList.map((ele, i) => {
                return (
                  <div
                  key={i}
                    onClick={() => {
                      window.open(`${ele.path}`, "_blank");
                    }}
                    className={`social-media ${ele.color} `}
                  >
                    {ele.icon}
                  </div>
                );
              })}
            </div>
          </div>

          {/* Download App */}
          <div>
            <h2 className="text-main text-4xl font-bold">Download App</h2>
            <div className="flex  space-x-2 my-3">
              <a
                className="cursor-pointer"
                href="https://apps.apple.com/us/app/dunkin/id1056813463"
                target="_blank"
              >
                {" "}
                <img className="w-36" src={appStore} alt="AppStore" />
              </a>
              <a
                className="cursor-pointer"
                href="https://play.google.com/store/apps/details?id=com.dunkinbrands.otgo&hl=en.html"
                target="_blank"
              >
                {" "}
                <img className="w-36" src={googlePlay} alt="googlePlay" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
