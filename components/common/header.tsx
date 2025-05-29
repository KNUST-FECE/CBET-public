import { NAVLINKS } from "@/lib/constants";
import { cn } from "@/lib/utils";

export default function Header({className}:{className: string}) {
    return (
        <header className={cn("w-full flex items-center justify-center", className)}>
            <div className="w-full max-w-screen-xl flex items-center justify-between py-6">
            <div>
                <h1 className="font-feather text-[#FFFFFF] text-4xl">cbet</h1>
            </div>
            <nav>
                <ul className="flex gap-7">
                    {NAVLINKS.map(({name, url}) => (
                        <li key={name}>
                            <a href={url} className="font-inter font-medium text-[#52656D] hover:text-[#DCE6EC] text-base capitalize">{name}</a>
                        </li>
                    ))}
                </ul>
            </nav>
            </div>
        </header>
    )
}