import svg from "../assets/icon-paid.svg";

function PricingRight() {
  return (
    <div>
      <img src={svg} alt="" />
      <h2>Dive right in</h2>
      <p>
        {" "}
        Ready for the big time? Our paid plan will help you take your business
        to the next level.
      </p>
      <h1>$25.00 /month</h1>
      <h4> Custom domain</h4>
      <h4>Advanced analytics and reports</h4>
      <h4> High marketplace visibility</h4>
      <h4>5% fee per transaction</h4>
    </div>
  );
}

export default PricingRight;
