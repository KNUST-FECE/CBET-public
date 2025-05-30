import { NAVLINKS } from "@/lib/constants";

export default function Header() {
    return (
        <header className="w-full flex items-center justify-center bg-[#202F36]">
            <div className="w-full max-w-screen-xl flex items-center justify-between py-6 px-10">
                <div>
                    <h1 className="font-feather text-[#FFFFFF] text-4xl">cbet</h1>
                </div>
                <nav>
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
            </div>
        </header>
    )
}