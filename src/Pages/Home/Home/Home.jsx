import React from "react";
import Banner from "../Banner/Banner";
import Works from "../Works/works";
import Services from "../Services/Services";
import Brands from "../Brands/Brands";
import Processing from "../Processing/Processing";
import Dotted from "../DottedLine/Dotted";
import Customer from "../Customer/Customer";
import CustomerPoster from "../CustomerPoster/CustomerPoster";

const Home = () => {
  return (
    <div>
      <Banner></Banner>

      <div className="space-y-30">
        <Works></Works>
        <Services></Services>
        <Brands></Brands>
        <Dotted></Dotted>
        <Processing></Processing>
        <Dotted></Dotted>
        <Customer></Customer>
        <CustomerPoster></CustomerPoster>
      </div>
    </div>
  );
};

export default Home;
