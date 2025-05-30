import FeatureHero from "@/components/common/feature-hero";
import Footer from "@/components/common/footer";
import Header from "@/components/common/header";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Marketplace",
  description: "Support and showcase businesses through our integrated marketplace.",
};

export default function Marketplace() {
    return (
        <div className="marketplace-page">
            <Header />
            <main>
                <FeatureHero feature="marketplace" desc="Support and showcase businesses through our integrated marketplace." />
            </main>
            <Footer />
        </div>
    );
}