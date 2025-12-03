import DataImage from "./data";

function App() {
  return (
    <>
      <div className="hero grid md:grid-cols-2 items-center pt-10 xl:gap-0 gap-6 grid-cols-1">
        <div>
          <div className="flex items-center gep-3 mb-6 bg-zinc-800 w-fit p-4 rounded-2xl">
            <img
              src={DataImage.HeroImage}
              alt="Hero Image"
              className="w-10 rouded-md"
            />
            <q>Tidur lah sebelum, Di tidurkan.💤💤😴</q>
          </div>
          <h1 className="text-4xl/tight font-bold mb-6">
            {" "}
            Hi, Saya Yuli Dwi Kurniawan{" "}
          </h1>
          <p className=" text-base/loose mb-6 opacity-50 text-justify ">
            Saya adalah seorang front-end webdevloper junior, saya masih di
            tahap belajar. Bahasa yang aku kuasai untuk sekarang yaitu Html,
            Css, Js aku juga pernah mencoba beberapa framework seperti vue.js,
            react.js untuk front-endnya untuk css aku pernah memakai tailwind
            dan bootstrap untuk back-endnya php. Aku juga bisa menggunakan
            bahasa lain yaitu python, beberapa proyek belajar ku menggunakan
            python seperti membuat bot Discord dan Data analyst. Aku sedang
            berproses menuju seorang programers sukses{""}
          </p>
          <div className="flex items-center sm:gap-4 gap-2">
            <a href="#" className="bg-violet-600 p-4 rounded-2xl hover:bg-violet-600">
              Download CV <i className="ri-download-line"></i>
            </a>
            <a href="#" className="bg-violet-600 p-4 rounded-2xl hover:bg-violet-600">
              Lihat Proyekan <i className="ri-arrow-right-line ri-lg"></i>
            </a>
          </div>
        </div>
        <img
          src={DataImage.HeroImage}
          alt="Hero Image"
          className="w-[500px] md:ml-auto"
        />
      </div>
    </>
  );
}

export default App;
