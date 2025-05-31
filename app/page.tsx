import { ChevronRight } from "lucide-react";
import Header from "@/components/common/header";
import Footer from "@/components/common/footer";
import { FEATURES } from "@/lib/constants";
import Typewriter from "@/components/common/typewriter";

export default function Home() {

  return (
    <div className="home-page">
      <Header />
      <main>
        <section className="w-full flex justify-center bg-[#202F36]">
          <div className="w-full max-w-screen-xl py-28 max-sm:py-16 max-xs:py-12 px-10 max-sm:p-5 space-y-6 max-xl:space-y-5">
            <h4 className="font-inter text-lg max-sm:text-sm font-bold max-sm:font-semibold tracking-wide uppercase text-[#52656D]">an online platform for</h4>
            <div className="space-y-2 max-lg:space-y-1 font-feather text-6xl max-lg:text-5xl max-sm:text-4xl max-xs:text-3xl text-[#FFFFFF]">
              <h1 className="space-x-6">
                <Typewriter />
              </h1>
              <h1>
                Engineering.
              </h1>
            </div>
            <p className="font-inter font-normal text-xl max-sm:text-lg text-[#DCE6EC] max-w-screen-sm">
              Explore lecture notes, support student businesses, and stay updated on department news and events.
            </p>
          </div>
        </section>
        <section className="w-full flex justify-center">
          <div className="w-full max-w-screen-xl py-28 max-sm:py-16 max-xs:py-12 px-10 max-sm:px-5">
            <ul className="w-full grid grid-cols-3 max-xl:grid-cols-2 max-md:grid-cols-1 gap-5 max-md:gap-7">
              {FEATURES.map((item) => (
                <li 
                  key={item.name} 
                  className="relative w-full rounded-2xl bg-gradient-to-br from-[#FFFFFF] p-8 max-sm:p-7 flex flex-col gap-y-14 max-xl:last:col-span-2 max-md:last:col-span-1"
                  style={{
                    background: `linear-gradient(to bottom right, ${item.bg1}, ${item.bg2})`
                  }}
                >
                  <item.svg className="absolute right-10 bottom-0" />
                  <div className="space-y-7">
                    <h2 className="font-feather text-2xl text-[#FFFFFF]">{item.name}</h2>
                    <p className="font-inter font-semibold text-sm text-[#FFFFFF]">{item.desc}</p>
                  </div>
                  <div>
                    <a href={item.url} className="font-inter uppercase text-[#FFFFFF] text-sm font-semibold flex items-center">
                      view
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