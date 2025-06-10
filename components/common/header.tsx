import { NAVLINKS } from "@/lib/constants";
import { Sheet, SheetContent, SheetTitle, SheetTrigger } from "./sheet";
import { cn } from "@/lib/utils";
import { ArrowUpRight, Menu } from "lucide-react";
import { VisuallyHidden } from "@radix-ui/react-visually-hidden";
import Image from "next/image";

export default function Header() {
    return (
        <header className="w-full flex items-center justify-center bg-[#202F36]">
            <div className="w-full max-w-screen-xl flex items-center justify-between py-4 px-10 max-sm:px-5">
                <div>
                    <img src="/fesa.png" alt="logo" height={72} width={72} />
                </div>
                <nav className="max-md:hidden">
                    <ul className="flex gap-7">
                        {NAVLINKS.map(({name, url}) => (
                            <li key={name}>
                                <a href={url} className="font-inter font-medium text-base capitalize text-[#52656D] hover:text-[#DCE6EC]">
                                    {name}
                                </a>
                            </li>
                        ))}
                    </ul>
                </nav>
                <Sheet>
                    <SheetTrigger asChild>
                        <button
                            className={cn(
                                "hidden aspect-square p-1.5 rounded-lg border-2 border-[#37464F] shadow-[0_3px_0_0_#37464F] max-md:flex items-center justify-center",
                                "active:shadow-none active:translate-y-[3px] transition-all duration-100 hover:bg-[#131F24]"
                            )}
                        >
                            <Menu className="text-[#DCE6EC] size-5" />
                        </button>
                    </SheetTrigger>
                    <SheetContent className="md:hidden p-8 pt-20" aria-describedby={undefined}>
                        <VisuallyHidden asChild>
                            <SheetTitle>Mobile Navigation</SheetTitle>
                        </VisuallyHidden>
                        <nav>
                            <ul className="flex flex-col gap-7">
                                {NAVLINKS.map(({name, url}) => (
                                    <li key={name}>
                                        <a href={url} className="w-full group flex items-center justify-between font-inter font-medium text-2xl capitalize text-[#52656D] hover:text-[#DCE6EC]">
                                            <span>{name}</span>
                                            <ArrowUpRight className="size-5 opacity-0 translate-y-1 transition-all duration-100 group-hover:opacity-100 group-hover:translate-y-0"/>
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </nav>
                    </SheetContent>
                </Sheet>
            </div>
        </header>
    )
}