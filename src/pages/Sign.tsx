import Header from "src/components/Header";
import Sign from "src/components/Sign";
import Footer from "src/components/Footer";

const Signup = () => {
  return (
    <>
      <header className="w-full flex justify-between fixed bg-white-300 shadow-md w-full flex justify-between z-10 transition-all duration-300">
        <Header menu="flex" />
      </header>
      <div className="w-full h-10" style={{ minHeight: "140px" }} />
      <div className="flex flex-wrap justify-center min-h-[calc(100vh_-_140px_-_96px)]">
        {/* 140px: header, 96px: footer */}
        <Sign />
        <div className="w-full h-10" style={{ minHeight: "40px" }} />
      </div>
      <Footer menu="flex" />
    </>
  );
};

export default Signup;
