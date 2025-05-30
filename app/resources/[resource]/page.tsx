import Footer from "@/components/common/footer";
import Header from "@/components/common/header";
import FileSvg from "@/components/svgs/file-svg";
import FolderSvg from "@/components/svgs/folder-svg";
import { LEVELS } from "@/lib/constants";
import { getfolderDetail, getResources } from "@/lib/queries";
import { IQuery, IResource} from "@/lib/types";
import { cn } from "@/lib/utils";
import { ArrowLeft, ArrowRight, Dot, Download, LucideIcon } from "lucide-react";
import Link from "next/link";
import { notFound } from "next/navigation";

export default async function Resource(props: IQuery) {
  const {resource} = await props.params;
  const {lvl = "100", folder} = await props.searchParams;

  const levelID = LEVELS.filter((item) => item.course == resource && item.lvl == lvl).at(0)?.id;
  const activeFolder = folder? folder as string : levelID as string;

  const folderDetail = (await getfolderDetail(activeFolder))[0];

  if(!folderDetail) notFound();
  const resources = await getResources(activeFolder);

  const prevFolder = folder? folderDetail.parentID.at(-1): activeFolder; //if folder searchparam is set, then prevFolder is legal
  const isPrevOrigin = prevFolder === levelID; //if prevFolder is equal to levelID then go back to origin so folder in url is undefined

  const courses: {[key: string]: string} = { 
    "computer": "computer",
    "biomed": "biomedical",
    "electrical": "electrical",
    "telecom": "telecommunication"
  };

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
                <ul className="flex items-center space-x-4">
                  {LEVELS.filter((item) => item.course === resource).map((item) => (
                    <li key={item.lvl}>
                      <Link 
                        href={`/resources/${resource}?lvl=${item.lvl}`}
                        className={cn(
                          "font-feather text-sm text-[#FFFFFF] space-x-1 flex px-4 py-2",
                          "rounded-xl border-2 border-[#37464F] shadow-[0_3px_0_0_#37464F] active:shadow-none active:translate-y-[3px] transition-all duration-100", 
                          item.lvl === lvl && "bg-[#5acc0217] text-[#58CC02] border-[#58CC02] shadow-[#58CC02]",
                        )}
                      >
                        <span>lvl</span>
                        <span>{item.lvl}</span>
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
                <div className={cn("px-7 py-5 border-b-2 border-[#37464F] flex items-center space-x-4", !resources.length && "border-0")}>
                  <ActionLink 
                    icon={ArrowLeft} 
                    disable={!folder}
                    url={`/resources/${resource}?lvl=${lvl}${!isPrevOrigin? `&folder=${prevFolder}`: ""}`} 
                  />
                  <h2 className="text-white font-feather text-xl">
                    {folder && folder != levelID? (<>{folderDetail.name}</>) : (<>level {lvl}</>)}
                  </h2>
                </div>
                <div>
                  <ul>
                    {resources.map((item) => (
                      <li key={item.id} className="border-t-2 first:border-t-0 border-[#37464F]">
                        <ResourceCard {...item} url={`/resources/${resource}?lvl=${lvl}`} />
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

function InfoCard({ name, total }: { name: string; total: number }) {
  return (
    <p className="font-inter font-semibold text-sm text-[#52656D]">
      {total === 0 ? `no ${name}s` : `${total} ${name}${total > 1 ? "s" : ""}`}
    </p>
  );
}

function ActionLink(props: { icon: LucideIcon, url: string, disable?: boolean, download?: boolean, target?: string }) {
  return (
    <Link 
      href={props.disable? "": props.url} 
      download={props.download}
      target={props.target}
      className={cn(
        "size-8 rounded-lg border-2 border-[#37464F] shadow-[0_3px_0_0_#37464F] flex items-center justify-center",
        "active:shadow-none active:translate-y-[3px] transition-all duration-100 hover:bg-[#131F24]",
        props.disable && "opacity-50 pointer-events-none"
      )}
    >
      <props.icon className="text-white size-4"/>
    </Link>
  )
}

function ResourceCard({ id, name, type, folderCount, fileCount, fileUrl, url }: IResource & { url?: string }) {
  const isFile = type === "file";
  return (
    <div className="px-7 py-5 flex items-center justify-between">
      <div className="flex items-center space-x-4">
        {isFile ? <FileSvg /> : <FolderSvg />}
        <div className="flex items-center space-x-7">
          <h4 className="font-feather text-base text-[#DCE6EC] capitalize">{name}</h4>
          {!isFile && (
            <div className="flex items-center">
              <InfoCard name="folder" total={folderCount || 0} />
              <Dot className="text-[#52656D] size-8" />
              <InfoCard name="file" total={fileCount || 0} />
            </div>
          )}
        </div>
      </div>
      {isFile ? (
        <ActionLink url={fileUrl as string} icon={Download} download target="_blank" />
      ) : (
        <ActionLink url={`${url}&folder=${id}`} icon={ArrowRight} />
      )}
    </div>
  );
}