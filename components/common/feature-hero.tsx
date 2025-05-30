
export default function FeatureHero({ feature, desc }:{ feature: string, desc: string }) {
    return (
        <section className="w-full flex justify-center bg-[#202F36]">
          <div className="w-full max-w-screen-xl py-28 px-10 space-y-7">
            <h1 className="font-feather text-6xl text-[#FFFFFF]">{feature}</h1>
            <p className="font-inter font-normal text-lg text-[#DCE6EC] max-w-screen-md">{desc}</p>
          </div>
        </section>
    )
}