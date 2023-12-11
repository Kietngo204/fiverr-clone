import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";

const SellingLeft = () => {
  return (
    <div className="w-1/2 max-w-xl">
      <h2 className="pb-6 text-[32px] font-bold">The best part? Everything.</h2>
      <ul>
        <li className="pb-6">
          <h6 className="pb-2 flex items-center text-lg font-bold">
            <CheckCircleOutlineIcon
              sx={{ color: "#7A7D85", marginRight: "8px", fontSize: "30px" }}
            />
            Stick to your budget
          </h6>
          <p className="text-[18px] text-[#62646a] leading-[26px]">
            Find the right service for every price point. No hourly rates, just
            project-based pricing.
          </p>
        </li>
        <li className="pb-6">
          <h6 className="pb-2 flex items-center text-lg font-bold">
            <CheckCircleOutlineIcon
              sx={{ color: "#7A7D85", marginRight: "8px", fontSize: "30px" }}
            />
            Get quality work done quickly
          </h6>
          <p className="text-[18px] text-[#62646a] leading-[26px]">
            Hand your project over to a talented freelancer in minutes, get
            long-lasting results.
          </p>
        </li>
        <li className="pb-6">
          <h6 className="pb-2 flex items-center text-lg font-bold">
            <CheckCircleOutlineIcon
              sx={{ color: "#7A7D85", marginRight: "8px", fontSize: "30px" }}
            />
            Pay when you're happy
          </h6>
          <p className="text-[18px] text-[#62646a] leading-[26px]">
            Upfront quotes mean no surprises. Payments only get released when
            you approve.
          </p>
        </li>
        <li className="pb-6">
          <h6 className="pb-2 flex items-center text-lg font-bold">
            <CheckCircleOutlineIcon
              sx={{ color: "#7A7D85", marginRight: "8px", fontSize: "30px" }}
            />
            Count on 24/7 support
          </h6>
          <p className="text-[18px] text-[#62646a] leading-[26px]">
            Our round-the-clock support team is available to help anytime,
            anywhere.
          </p>
        </li>
      </ul>
    </div>
  );
};

export default SellingLeft;
