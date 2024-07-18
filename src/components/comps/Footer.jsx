import PropTypes from "prop-types";
import "../css/Footer.css";

const Footer = ({ className = "" }) => {
  return (
    <footer
      className={`self-stretch bg-lavender overflow-hidden flex flex-col items-start py-10 px-[10rem] box-border max-w-full  text-left text-xl text-darkslateblue font-satoshi-variable ${className}`}
    >
      <div className="w-full max-w-6xl flex flex-col md:flex-row justify-between gap-10 md:gap-5">
        <div className="w-full max-w-lg flex flex-col items-start justify-start gap-6">
          <div className="flex flex-col items-start justify-start gap-2">
            <h2 className="text-3xl ">SHISHIR & Co.</h2>
            <h3 className="text-2xl ">Chartered Accountants</h3>
          </div>
          <div className="text-lg font-semibold">Financial Advisors</div>
          <div className="flex flex-col items-start justify-start gap-2">
            <p className="font-medium">Shop No. 01, KBC Tower, Paidleganj</p>
            <p className="font-medium">
              Chowraha, OPP Rajbansi Hospital, Gorakhpur
            </p>
            <p className="font-medium">
              <b>Branches:</b> Lucknow, Maharajganj & Deoria
            </p>
          </div>
          <div className="text-sm font-medium">
            <p>Shishirandco01@gmail.com | +91-7499264357, 0551-3561840</p>
          </div>
        </div>
        <div className="w-full max-w-lg flex flex-col items-start md:items-end justify-start gap-6">
          <b className="text-xl pr-20">Solutions</b>
          <ul className="list-none p-0 m-0">
            <li className="mb-1">Direct Taxation</li>
            <li className="mb-1">Business Advisory</li>
            <li className="mb-1">GST Filling</li>
            <li className="mb-1">Corporate Advisory</li>
            <li className="mb-1">Consulting</li>
            <li className="mb-1">Audit & Assurance</li>
          </ul>
        </div>
      </div>
      <div className="w-full flex flex-col items-start justify-start gap-3 mt-5">
        <img
          className="max-w-full overflow-hidden"
          loading="lazy"
          alt=""
          src="/vector-9.svg"
        />
        <div className="text-sm">{`© 2024 Shishir & Co. All rights reserved.`}</div>
      </div>
    </footer>
  );
};

Footer.propTypes = {
  className: PropTypes.string,
};

export default Footer;
