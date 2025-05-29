import BlogSvg from "@/components/svgs/blog-svg";
import MarketSvg from "@/components/svgs/market-svg";
import ResourceSvg from "@/components/svgs/resource-svg";

export const NAVLINKS = [
    { name: "home", url: "/" },
    { name: "resources", url: "/resources" },
    { name: "marketplace", url: "/marketplace" },
    { name: "blog", url: "/blogs" }
];

export const FEATURES = [
    { name: "resources", desc: "Access a growing library of lecture notes and academic.", svg: ResourceSvg, url: "/resources", bg1: "#58A700", bg2: "#58CC02" },
    { name: "marketplace", desc: "A support and showcase businesses through our integrated marketplace.", svg: MarketSvg, url: "/marketplace", bg1: "#2575DD", bg2: "#1CB0F6" },
    { name: "blogs", desc: "Stay connected with the latest news, events, and updates from across the department.", svg: BlogSvg, url: "/blogs", bg1: "#EB4335", bg2: "#FF4945" },
]