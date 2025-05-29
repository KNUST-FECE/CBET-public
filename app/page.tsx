import { ChevronRight } from "lucide-react";
import BlogSvg from "@/components/svgs/blog-svg";
import ResourceSvg from "@/components/svgs/resource-svg";
import MarketSvg from "@/components/svgs/market-svg";
import Header from "@/components/common/header";
import Footer from "@/components/common/footer";
import { FEATURES } from "@/lib/constants";

export default function Home() {

  return (
    <div className="home-page">
      <Header className="bg-[#202F36]" />
      <main className="w-full">
        <section className="w-full flex justify-center bg-[#202F36]">
          <div className="w-full max-w-screen-xl py-28 px-10 space-y-6">
            <h4 className="font-inter text-base font-semibold tracking-tight uppercase text-[#52656D]">an online platform for</h4>
            <div className="space-y-2">
              <h1 className="font-feather text-6xl text-[#FFFFFF] space-x-6">
                <span>computer</span>
                <span className=" opacity-50">biomed</span>
                <span className=" opacity-50">electrical</span>
                <span className=" opacity-50">telecom</span>
              </h1>
              <h1 className="font-feather text-6xl text-[#FFFFFF]">
                engineering.
              </h1>
            </div>
            <p className="font-inter font-normal text-base text-[#DCE6EC] max-w-screen-md">Access a growing library of lecture notes and academic resources, support and showcase student-led businesses through our integrated marketplace, and stay connected with the latest news, events, and updates from across the department.</p>
          </div>
        </section>
        <section className="w-full flex justify-center">
          <div className="w-full max-w-screen-xl py-28 px-10">
            <ul className="w-full flex justify-between space-x-5">
              {FEATURES.map((item) => (
                <li 
                  key={item.name} 
                  className="relative w-full rounded-2xl bg-gradient-to-br from-[#FFFFFF] p-8 space-y-14"
                  style={{
                    background: `linear-gradient(to bottom right, ${item.bg1}, ${item.bg2})`
                  }}
                >
                  <div className="space-y-7">
                    <h2 className="font-feather text-2xl text-[#FFFFFF]">{item.name}</h2>
                    <p className="font-inter font-semibold text-sm text-[#FFFFFF]">{item.desc}</p>
                  </div>
                  <div>
                    <a href={item.url} className="font-inter uppercase text-[#FFFFFF] text-sm font-semibold flex items-center">
                      view {item.name}
                      <ChevronRight className="text-[#FFFFFF] ml-1 size-4"/>
                    </a>
                  </div>
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