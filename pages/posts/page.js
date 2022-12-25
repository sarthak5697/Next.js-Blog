import Format from "../../layout/format";
import Author from "../../components/_child/author.js";
import Image from "next/image";
import Related from "../../components/_child/related";

export default function Page() {
  return (
    <Format>
      <section className="container mx-auto md:px-2 py-16 w-1/2">
        <div className="flex justify-center">
          <Author></Author>
        </div>
        <div className="post py-10">
          <h1 className="font-bold text-4xl text-center pb-5">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam a
          </h1>
          <p className="text-gray-500 text-xl text-center">
            Vivamus luctus in lectus sit amet suscipit. Praesent nec
            sodalesVivamus luctus in lectus sit amet suscipit. Praesent nec
            sodales
          </p>
          <div className="py-10">
            <Image src={"/images/post.jpg"} width={900} height={600}></Image>
          </div>
          <div className="content text-gray-600 text-lg flex flex-col gap-4">
            <p>
              sodalesVivamus luctus in lectus sit amet suscipit. Praesent nec
              sodales sodales Vivamus luctus in lectus sit amet suscipit. Praesent nec
              sodales
            </p>
            <p>
              sodalesVivamus luctus in lectus sit amet suscipit. Praesent nec
              sodales sodales Vivamus luctus in lectus sit amet suscipit. Praesent nec
              sodales
            </p>
            <p>
              sodalesVivamus luctus in lectus sit amet suscipit. Praesent nec
              sodales sodales Vivamus luctus in lectus sit amet suscipit. Praesent nec
              sodales
            </p>
            <p>
              sodalesVivamus luctus in lectus sit amet suscipit. Praesent nec
              sodales sodales Vivamus luctus in lectus sit amet suscipit. Praesent nec
              sodales
            </p>
          </div>
        </div>
        <Related></Related>
      </section>
    </Format>
  );
}
