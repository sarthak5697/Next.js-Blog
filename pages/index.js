import Head from "next/head";
import Image from "next/Image";
import Format from "../layout/format";

//Components imports

import Section1 from "../components/section1.js";
import Section2 from "../components/section2.js";

export default function Home() {
  return (
    <div>
      <Format>
        <Section1></Section1>
        <Section2></Section2>
      </Format>
    </div>
  );
}
