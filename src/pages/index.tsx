import React from "react";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <div className="flex flex-col gap-20 items-center pt-20">
      {/* <div className="section-info">
        {selectedSection === "Basic Resources" && <GroupedData />}
        {selectedSection === "Advanced Resources" && <GroupedData />}
        {selectedSection === "Tools Resources" && <GroupedTools />}
        {selectedSection === "Case Studies & CORE Toolkits" && <CoreToolkit />}
      </div> */}
      <h1> Home..sdfms....</h1>
    </div>
  );
}
