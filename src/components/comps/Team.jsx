import "../css/Team.css";
import Footer from "./Footer";
import Navbar from "./Navbar";
import TeamGrid from "./TeamGrid";

export default function Team() {
  return (
    <>
      {/* <Navbar /> */}
      <div id="team">
        <div className=" Team-cont flex flex-col flex-wrap justify-center items-center mt-16">
          <div className="head  mt-20 mb-32 px-8 font-bold flex flex-wrap justify-center items-center font1">
            <div className="mr-4 text-[70px]">Meet</div>
            <div className="mr-4 text-[70px]">Our</div>
            <div className="mr-4 text-[70px]">Team</div>
          </div>
          <div>
            <TeamGrid />
          </div>
        </div>
      </div>
      {/* <Footer /> */}
    </>
  );
}
