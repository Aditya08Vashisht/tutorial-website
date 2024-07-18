import CardHoverEffectDemo from "./Hover-effect";
import "../css/Team.css";

export default function Services() {
  return (
    <div className="Services-cont Team-cont flex flex-col flex-wrap justify-center items-center">
      <div
        className="head font-bold flex font1 flex-wrap items-center justify-center px-8"
        id="services"
      >
        <div className="mr-4 text-[70px]">Our</div>
        <div className="text-[70px]">Services</div>
      </div>
      <CardHoverEffectDemo />
    </div>
  );
}
