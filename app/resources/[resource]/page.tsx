import Footer from "@/components/common/footer";
import Header from "@/components/common/header";
import FileSvg from "@/components/svgs/file-svg";
import FolderSvg from "@/components/svgs/folder-svg";
import { IQuery, IResources } from "@/lib/types";
import { cn } from "@/lib/utils";
import { ArrowLeft, Dot, Download, LucideIcon } from "lucide-react";
import Link from "next/link";
import { JSX } from "react";

export default async function Resource(props: IQuery) {
  const {resource} = await props.params;
  const {lvl = "100"} = await props.searchParams;

  const levels = [ "100", "200", "300", "400" ];
  const courses: {[key: string]: string} = { 
    "computer": "computer",
    "biomed": "biomedical",
    "electrical": "electrical",
    "telecom": "telecommunication"
  };

  const resources:IResources[] = [
    { type: "folder", title: "Semester 1", id: "123", totalFolder: 7, totalFiles: 0 },
    { type: "folder", title: "Semester 2", id: "123", totalFolder: 5, totalFiles: 3 },
    { type: "file", title: "sample data file", id: "123", totalFolder: 0, totalFiles: 0 },
  ]

  return (
    <div className="resource-page">
      <Header />
        <main>
          {/* hero section */}
          <section className="w-full flex justify-center bg-[#202F36]">
            <div className="w-full max-w-screen-xl py-28 px-10 space-y-10">
              <div className="space-y-3">
                <h4 className="font-feather text-base font-semibold tracking-tight uppercase text-[#52656D]">resources</h4>
                <h1 className="font-feather text-6xl text-[#FFFFFF]"> {courses[resource]} engineering.</h1>
              </div>
              <nav>
                <ul className="flex items-center space-x-6">
                  {levels.map((level) => (
                    <li key={level}>
                      <Link 
                        href={`/resources/${resource}?lvl=${level}`} 
                        className={cn(
                          "font-feather text-base text-[#FFFFFF] space-x-1 flex px-4 py-2",
                          "rounded-xl border-2 border-[#37464F] shadow-[0_3px_0_0_#37464F] active:shadow-none active:translate-y-[3px] transition-all duration-100", 
                          level === lvl && "bg-[#5acc0217] text-[#58CC02] border-[#58CC02] shadow-[#58CC02]",
                        )}
                      >
                        <span>lvl</span>
                        <span>{level}</span>
                      </Link>
                    </li>
                  ))}
                </ul>
              </nav>
            </div>
          </section>
          {/* title section */}
          <section className="w-full flex justify-center">
            <div className="w-full max-w-screen-xl py-28 px-10">
              <div className="w-full max-w-screen-lg my-0 mx-auto rounded-2xl border-2 border-[#37464F]">
                <div className="px-7 py-5 border-b-2 border-[#37464F] flex items-center space-x-4">
                  <ActionButton icon={ArrowLeft} />
                  <h2 className="text-white font-feather text-xl">level {lvl}</h2>
                </div>
                <div>
                  <ul>
                    {resources.map((item) => (
                      <li key={item.title} className="border-t-2 first:border-t-0 border-[#37464F]">
                        <ResourceCard {...item} />
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </section>
        </main>
      <Footer />
    </div>
  );
}

function InfoCard({name, total}: {name: string, total: number}) {
  return (
    <p className="font-inter font-semibold text-sm text-[#52656D]">
      {total < 1 ? (
        <span>no {name}s</span>
      ): total == 1 ? (
        <span>{total} {name}</span>
      ): (
        <span>{total} {name}s</span>
      )}
    </p>
  )
}

function ActionButton(props: { icon: LucideIcon }) {
  return (
    <button className="size-8 rounded-lg border-2 border-[#37464F] shadow-[0_3px_0_0_#37464F] flex items-center justify-center active:shadow-none active:translate-y-[3px] transition-all duration-100 hover:bg-[#131F24]">
      <props.icon className="text-white size-4"/>
    </button>
  )
}

function ResourceCard(props: IResources) {
  return (
    <div className="px-7 py-5 flex items-center justify-between">
      <div className="flex items-center space-x-4">
        {props.type === "file" ? <FileSvg /> : <FolderSvg />}
        <div className="flex items-center space-x-7">
          <h4 className="font-feather text-base text-[#DCE6EC]">{props.title}</h4>
          {props.type === "folder" ? (
            <div className="flex items-center">
              <InfoCard name="folder" total={props.totalFolder || 0} />
              <Dot className="text-[#52656D] size-8" />
              <InfoCard name="file" total={props.totalFiles || 0} />
            </div>
          ): (<></>)}
        </div>
      </div>
      <ActionButton icon={Download} />
    </div>
  )
}