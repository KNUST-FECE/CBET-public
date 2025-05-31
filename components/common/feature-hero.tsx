
export default function FeatureHero({ feature, desc }:{ feature: string, desc: string }) {
    return (
        <section className="w-full flex justify-center bg-[#202F36]">
          <div className="w-full max-w-screen-xl py-28 max-sm:py-16 max-xs:py-12 px-10 max-sm:p-5 space-y-6 max-xl:space-y-5">
            <h1 className="space-y-2 max-lg:space-y-1 font-feather text-6xl max-lg:text-5xl max-sm:text-4xl text-[#FFFFFF]">{feature}</h1>
            <p className="font-inter font-normal text-xl max-sm:text-lg text-[#DCE6EC] max-w-screen-sm">{desc}</p>
          </div>
        </section>
    )
}