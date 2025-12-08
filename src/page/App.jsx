import DataImage from "../data";
import { Link } from "react-router-dom";

function App() {
  return (
    <>
      {/* Hero Section */}
      <div className="hero grid md:grid-cols-2 items-center pt-10 xl:gap-0 gap-6 grid-cols-1">
        <div>
          <div className="flex items-center gap-3 mb-6 bg-zinc-800 w-fit p-4 rounded-2xl">
            <img
              src={DataImage.HeroImage}
              alt="Hero Image"
              className="w-10 rounded-md"
            />
            <q>Tidur lah sebelum, Di tidurkan.💤💤😴</q>
          </div>
          <h1 className="text-4xl/tight font-bold mb-6">
            {" "}
            Hi, Saya Yuli Dwi Kurniawan{" "}
          </h1>
          <p className=" text-base/loose mb-6 opacity-50 text-justify ">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.{""}
          </p>
          <div className="flex items-center sm:gap-4 gap-2">
            <Link
              to=""
              className="bg-violet-600 p-4 rounded-2xl hover:bg-violet-600"
            >
              Download CV <i className="ri-download-line"></i>
            </Link>
            <Link
              to="/proyek"
              className="bg-zinc-700 p-4 rounded-2xl hover:bg-zinc-700"
            >
              Lihat Proyekan <i className="ri-arrow-right-line ri-lg"></i>
            </Link>
          </div>
        </div>
        <img
          src={DataImage.HeroImage}
          alt="Hero Image"
          className="w-[500px] md:ml-auto"
        />
      </div>


      {/* Tentang Section */}
      <div className="tentang mt-32 py-10">
        <div className="xl:w-2/3 lg:w-3/4 w-full mx-auto p-7 bg-zinc-800 rounded-lg">
          <img
            src={DataImage.HeroImage}
            alt="Image"
            className="w-12 rounded-md  mb-10 sm:hidden"
          />
          <p className="text-base/loose mb-10">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged. It was popularised in the 1960s
            with the release of Letraset sheets containing Lorem Ipsum passages,
            and more recently with desktop publishing software like Aldus
            PageMaker including versions of Lorem Ipsum.
          </p>
          <div className="flex items-center justify-between">
            <img
              src={DataImage.HeroImage}
              alt="Image"
              className="w-12 rounded-md sm:block hidden"
            />
            <div className="flex items-center gap-6">
              <div>
                <h1 className="text-4xl mb-1">
                  5<span className="text-blue-700">+</span>
                </h1>
                <p>Proyek</p>
              </div>
              <div>
                <h1 className="text-4xl mb-1">
                  2<span className="text-blue-700">+</span>
                </h1>
                <p>Pengalaman</p>
              </div>
            </div>
          </div>
        </div>
      </div>

    </>
  );
}

export default App;
