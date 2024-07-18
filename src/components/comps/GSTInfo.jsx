import PropTypes from "prop-types";

const GSTInfo = ({ className = "" }) => {
  return (
    <div
      className={`w-[1257px] flex flex-col items-start justify-start gap-[52px] max-w-full text-center text-21xl text-midnightblue font-satoshi-variable mq700:gap-[26px] ${className}`}
    >
      <div className="self-stretch flex flex-col items-start justify-start gap-[32px] mq700:gap-[16px]">
        <h1 className="m-0 self-stretch h-[54px] relative text-inherit font-bold font-inherit inline-block mq450:text-5xl mq950:text-13xl">
          Let’s Know More About GST
        </h1>
        <div className="self-stretch h-[243px] relative text-xl leading-[22.4px] text-justify inline-block mq450:text-base mq700:h-[30vh] mq450:h-[40vh]">
          <p className="m-0">
            <b>GST: A Comprehensive Indirect Tax Reform</b>
          </p>
          <p className="m-0 font-medium">&nbsp;</p>
          <p className="m-0 font-medium">
            The Goods and Services Tax (GST) is a comprehensive, multi-stage,
            destination-based tax levied on the supply of goods and services in
            India. Introduced on July 1, 2017, GST replaced multiple indirect
            taxes levied by the central and state governments. GST aims to
            create a common national market, improve tax compliance, and reduce
            the overall tax burden on consumers. It has simplified the tax
            structure, making it easier for businesses to comply with tax laws.
          </p>
          <p className="m-0 font-medium">&nbsp;</p>
          <p className="m-0 font-medium">
            The GST Council, chaired by the Union Finance Minister and
            comprising state finance ministers, is responsible for making
            recommendations on various aspects of GST, including tax rates,
            exemptions, and rules.
          </p>
        </div>
      </div>
      <div className="self-stretch flex flex-col items-start justify-start gap-[32px] mq700:gap-[16px]">
        <h1 className="m-0 self-stretch h-[54px] relative text-inherit font-bold font-inherit inline-block mq450:text-5xl mq950:text-13xl">
          Is Your Organisation GST Ready?
        </h1>
        <div className="self-stretch relative text-xl font-medium text-left inline-block min-h-[216px] mq450:text-base">
          <p className="m-0">{`Such a significant tax overhaul would change how business has traditionally been conducted in India. The implementation of the new law would present your organization with additional obstacles. `}</p>
          <p className="m-0">&nbsp;</p>
          <p className="m-0">
            In addition to requiring individuals to comprehend the law, the
            corporations would also need to devote a great deal of time and
            effort to their information technology department.
          </p>
          <p className="m-0">&nbsp;</p>
          <p className="m-0">
            Your cash flow, profitability, and tax compliance will all be
            impacted by GST.
          </p>
        </div>
      </div>
      <div className="self-stretch flex flex-col items-start justify-start gap-[32px] mq700:gap-[16px] mq450:h-[50vh]">
        <h1 className="m-0 self-stretch h-[54px] relative text-inherit font-bold font-inherit inline-block mq450:text-5xl mq950:text-13xl">
          How We Help You In Your GST Matters
        </h1>
        <div className="self-stretch h-[243px] relative text-xl leading-[22.4px] font-medium text-justify inline-block mq450:text-base">
          <p className="m-0">{`The Goods and Services Tax (GST) marks a significant shift for Indian businesses. While it promises a more streamlined business environment, it also brings new hurdles to navigate. At Shishir & Co., we can help you navigate this transition seamlessly.`}</p>
          <p className="m-0">&nbsp;</p>
          <p className="m-0">
            Our team of experienced Chartered Accountants, Company
            Secretaries, and Lawyers are well-versed in the ever-changing
            complexities of the GST law. We offer comprehensive training for
            your employees and can assist with any necessary IT upgrades to
            ensure your business is fully compliant.
          </p>
          <p className="m-0">&nbsp;</p>
          <p className="m-0">{`Let Shishir & Co. be your partner in maximizing the benefits of GST and minimizing disruption. Focus on your core business while we handle the tax complexities.`}</p>
        </div>
      </div>
    </div>
  );
};

GSTInfo.propTypes = {
  className: PropTypes.string,
};

export default GSTInfo;
