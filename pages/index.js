import Head from "next/head";
import Format from "../layout/format";

//Components imports

import Section1 from "../components/section1.js";
import Section2 from "../components/section2.js";
import Section3 from "../components/section3.js";
import Section4 from "../components/section4.js";

export default function Home() {
  return (
    <div>
      <Format>
        <Section1></Section1>
        <Section2></Section2>
        <Section3></Section3>
        <Section4></Section4>
      </Format>
    </div>
  );
}
