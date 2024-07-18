import FrameComponent1 from "./FrameComponent1";
import GSTInfo from "./GSTInfo";
import FrameComponent from "./FrameComponent";
import FrameComponent2 from "./FrameComponent2";

const GST = () => {
  return (
    <div className="w-full relative bg-white overflow-hidden flex flex-col items-start justify-start gap-[100px] leading-[normal] tracking-[normal] mq450:gap-[25px] mq950:gap-[50px]">
      <section className="self-stretch flex flex-col items-start justify-start gap-[80px] max-w-full mq450:gap-[20px] mq950:gap-[40px]">
        <FrameComponent2 />
        <div className="self-stretch flex flex-row items-start justify-center py-0 pr-[21px] pl-5 box-border max-w-full">
          <GSTInfo />
        </div>
      </section>
      <section className="self-stretch flex flex-col items-end justify-start py-0 px-0 box-border gap-[80px] max-w-full mq450:gap-[20px] mq950:gap-[40px]">
        <FrameComponent1 />
        {/* <FrameComponent /> */}
      </section>
    </div>
  );
};

export default GST;
