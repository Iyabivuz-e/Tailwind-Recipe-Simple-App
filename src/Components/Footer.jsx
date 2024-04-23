import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import FacebookIcon from "@mui/icons-material/Facebook";

const Footer = () => {
  return (
    <div className="max-w-[1520px] px-4 py-2 m-auto bg-[#24262b]">
      <div className="py-16 px-4 grid lg:grid-cols-3 gap-8 text-gray-300">
        <div>
          <h1 className="text-3xl w-full text-orange-500 font-bold">DioEats</h1>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nihil,
            adipisci sunt. Perferendis molestiae, fugiat omnis quod architecto
            vel ab, facilis unde doloribus error, mollitia numquam.
          </p>
          <div className="flex justify-between md:w-[75%] my-6">
            <GitHubIcon size={30} />
            <LinkedInIcon size={30} />
            <FacebookIcon size={30} />
          </div>
        </div>
      </div>
      {/* <h1>Footer</h1> */}
    </div>
  );
};

export default Footer;
