import { useNavigate } from "react-router-dom";
import notFound from "../../assets/Images/NotFound/404_mob_new.png";
type TNotFoundProps = {
  title: string;
  url: string;
  btnName:string
};
export default function NotFound({ title, url,btnName }: TNotFoundProps) {
  let navigate = useNavigate();
  return (
    <div className="h-screen flex flex-col justify-center items-center">
      <img src={notFound} alt="404" />
      <div className="space-y-5 text-center ">
        <h3 className="text-7xl">Not Found</h3>
        <h6 className="text-lg">{title}</h6>

        <button
          onClick={() => {
            navigate(url);
          }}
          className="bg-foshia hover:bg-pink-600 rounded-full h-12 w-60 text-white font-semibold uppercase"
        >
          {btnName}
        </button>
      </div>
    </div>
  );
}
