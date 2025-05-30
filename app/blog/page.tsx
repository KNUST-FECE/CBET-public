import FeatureHero from "@/components/common/feature-hero";
import Footer from "@/components/common/footer";
import Header from "@/components/common/header";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Blog",
  description: "Stay connected with the latest news, events, and updates from across the department.",
};

export default function Blogs() {
    return (
        <div className="blog-page">
            <Header />
                <main>
                    <FeatureHero feature="blog" desc="Stay connected with the latest news, events, and updates from across the department." />
                </main>
            <Footer />
        </div>
    );
}