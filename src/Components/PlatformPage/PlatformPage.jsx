import React from "react";
import EdgeOperation from "./Section/07_EdgeOperation/EdgeOperation";
import EdgeInfrastructure from "./Section/05_EdgeInfrastructure/EdgeInfrastructure";
import WhyeOps from "./Section/04_WhyEOps/WhyeOps";
import Banner from "./Section/01_Banner/Banner";
import Platform2 from "./Section/02_WhyShodatAI/Platform2";
import { Platform } from "./Section/08_OperationalChallenges/Platform";
import EopsFabric from "./Section/06_eOpsFabric/EopsFabric";
import IntelligentEdge from "./Section/03_IntelligentEdge/IntelligentEdge";

const PlatformPage = () => {
  return (
    <div>
      <Banner />
      <Platform2 />
      <WhyeOps />
      <IntelligentEdge />
      <EdgeInfrastructure />
      <EopsFabric />
      <EdgeOperation />
      <Platform />
    </div>
  );
};

export default PlatformPage;
