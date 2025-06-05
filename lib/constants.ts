import BiomedSvg from "@/components/svgs/biomed-svg";
import BlogSvg from "@/components/svgs/blog-svg";
import ComputerSvg from "@/components/svgs/computer-svg";
import ElectricalSvg from "@/components/svgs/electrical-svg";
import MarketSvg from "@/components/svgs/market-svg";
import ResourceSvg from "@/components/svgs/resource-svg";
import TelecomSvg from "@/components/svgs/telecom-svg";

export const NAVLINKS = [
    { name: "home", url: "/" },
    { name: "resources", url: "/resources" },
    { name: "marketplace", url: "/marketplace" },
    { name: "blog", url: "/blog" }
];

export const FEATURES = [
    { 
        name: "resources", 
        desc: "Access a growing library of lecture notes and academic resources.",
        svg: ResourceSvg, 
        url: "/resources", 
        bg1: "#58A700", 
        bg2: "#58CC02" 
    },
    { 
        name: "marketplace", 
        desc: "A support and showcase businesses through our integrated marketplace.", 
        svg: MarketSvg, 
        url: "/marketplace", 
        bg1: "#2575DD", 
        bg2: "#1CB0F6" 
    },
    { 
        name: "blog", 
        desc: "Stay connected with the latest news and events from across the department.", 
        svg: BlogSvg, 
        url: "/blog", 
        bg1: "#EB4335", 
        bg2: "#FF4945" 
    }
];

export const RESOURCES = [
    {
        name: "computer",
        img: "/aces.jpg",
        url: "/resources/computer"
    },
    {
        name: "biomed",
        img: "/bess.jpg",
        url: "/resources/biomed"
    },
    {
        name: "electrical",
        img: "/eleesa.jpg",
        url: "/resources/electrical"
    },
    {
        name: "telecom",
        img: "/tesa.jpg",
        url: "/resources/telecom"
    },
]

export const LEVELS = [
    { course: "computer", lvl: "100", id: "6792cb413373bb6d0f835075" },
    { course: "computer", lvl: "200", id: "6792cb413373bb6d0f835075" },
    { course: "computer", lvl: "300", id: "6792cb413373bb6d0f835075" },
    { course: "computer", lvl: "400", id: "6792cb413373bb6d0f835075" },
    { course: "biomed", lvl: "100", id: "6792cb413373bb6d0f835075" },
    { course: "biomed", lvl: "200", id: "6792cb413373bb6d0f835075" },
    { course: "biomed", lvl: "300", id: "6792cb413373bb6d0f835075" },
    { course: "biomed", lvl: "400", id: "6792cb413373bb6d0f835075" },
    { course: "electrical", lvl: "100", id: "6792cb413373bb6d0f835075" },
    { course: "electrical", lvl: "200", id: "6792cb413373bb6d0f835075" },
    { course: "electrical", lvl: "300", id: "6792cb413373bb6d0f835075" },
    { course: "electrical", lvl: "400", id: "6792cb413373bb6d0f835075" },
    { course: "telecom", lvl: "100", id: "6792cb413373bb6d0f835075" },
    { course: "telecom", lvl: "200", id: "6792cb413373bb6d0f835075" },
    { course: "telecom", lvl: "300", id: "6792cb413373bb6d0f835075" },
    { course: "telecom", lvl: "400", id: "6792cb413373bb6d0f835075" },
]