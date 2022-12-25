import React from "react";
import { ImFacebook, ImInstagram, ImYoutube } from "react-icons/im";
import Link from "next/link";
import Newsletter from "./_child/newsletter.js";

function footer() {

  const bg = {
      backgroundImage : "url('/images/Rectangle 22.png')",
      backgroundRepeat : 'repeat',
      // backgroundPosition : "bottom left"
  }
  return (
        <footer className="bg-gray-50" style={bg}>
          <Newsletter></Newsletter>
           <div className="container mx-auto flex justify-center py-12">
      <div className="py-5">
        <div className="flex gap-6 justify-center">
        <Link href={"/"}>
              <a>
                <ImFacebook color="#888888" />
              </a>
            </Link>
            <Link href={"/"}>
              <a>
                <ImInstagram color="#888888" />
              </a>
            </Link>
            <Link href={"/"}>
              <a>
                <ImYoutube color="#888888" />
              </a>
            </Link>
        </div>
        <p className="py-5 text-gray-400">Copyright @2022 All right</p>
        <p className="text-gray-400 text-center">Terms & Conditions</p>
      </div>
    </div>
        </footer>
    )
}

export default footer;