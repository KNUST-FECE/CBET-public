import FeatureHero from "@/components/common/feature-hero";
import Footer from "@/components/common/footer";
import Header from "@/components/common/header";
import CircleCheckSvg from "@/components/svgs/circle-check-svg";
import { RESOURCES } from "@/lib/constants";
import { ChevronRight } from "lucide-react";
import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Resources",
  description: "Access a growing library of lecture notes and academic resources.",
};

export default function Resources() {
  const levels = [ "100", "200", "300", "400" ];

  return (
    <div className="resources-page">
      <Header />
      <main>
        <FeatureHero feature="resources" desc="Access a growing library of lecture notes and academic resources." />
        <section className="w-full flex justify-center">
          <div className="w-full max-w-screen-xl py-28 max-sm:py-16 max-xs:py-12 px-10 max-sm:px-5">
            <ul className="w-full grid grid-cols-4 max-xl:grid-cols-2 max-md:grid-cols-1 gap-5 max-sm:gap-8">
              {RESOURCES.map((item) => (
                <li key={item.name} className="w-full rounded-2xl bg-[#202F36] border-2 border-[#37464F] shadow-[0_4px_0_0_#37464F] p-8 space-y-7">
                  <Image src={item.img} alt={item.name} height={64} width={64} className="rounded-xl" />
                  <h3>
                    <Link href={item.url} className="font-feather text-xl text-[#FFFFFF] hover:underline">{item.name}</Link>
                  </h3>
                  <ul className="grid max-xl:grid-cols-2 max-sm:grid-cols-1 gap-4">
                    {levels.map((lvl) => (
                      <li key={lvl}>
                        <Link href={`${item.url}?lvl=${lvl}`} className="group flex justify-between items-center">
                          <div className="flex space-x-4">
                            <CircleCheckSvg className="size-6"/>
                            <span className="font-inter font-semibold capitalize tracking-wide text-base text-[#DCE6EC] group-hover:underline">Level {lvl}</span>
                          </div>
                          <ChevronRight className="size-4 stroke-1 text-[#DCE6EC] opacity-0 group-hover:opacity-100 transition-opacity ease-in duration-100"/>
                        </Link>
                      </li>
                    ))}
                  </ul>
                </li>
              ))}
            </ul>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}