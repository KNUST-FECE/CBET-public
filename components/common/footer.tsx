import { NAVLINKS } from "@/lib/constants";

export default function Footer() {
    return (
        <footer className="w-full flex items-center justify-center">
            <div className="w-full max-w-screen-xl px-10 py-6 flex justify-center">
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
        </footer>
    )
}