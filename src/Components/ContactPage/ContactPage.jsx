import React from "react";
import ParaGraph from "./Section/02_Para/ParaGraph";
import Contact1 from "./Section/01_Contact_1/Contact1";
import MapAddress from "./Section/03_Map/MapAddress";
import RequestForm from "./Section/04_Request/RequestForm";
Contact1;
const ContactPage = () => {
  return (
    <div>
      <Contact1 /> <ParaGraph />
      <div className="font-sans  text-[27px]  leading-[40.5px] mb-4 mt-4 items-center px-6 ml-4">
        Contact our solution advisers. Leave your information below and we will
        give you a callback.
      </div>
      <div className="md:flex md:flex-row md:justify-center">
        <div className="md:w-5/12">
          <RequestForm />
        </div>
        <div className="md:w-8/12 ">
          <MapAddress />
        </div>
      </div>
    </div>
  );
};

export default ContactPage;