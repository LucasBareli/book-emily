import Header from "../../components/Header/header";
import Hero from "../../components/Hero/hero";
import Pillars from "../../components/Pillars/pillars";
import Values from "../../components/Values/values";
import Excerpts from "../../components/Excerpts/excerpts";
import CallToAction from "../../components/CallToAction/callToAction";
import Footer from "../../components/Footer/footer";
import HighlightStrip from "../../components/HighlightStrip/highlightStrip";

export default function HomePageChika() {
    return (
        <>
            <Header />
            <main>
                <Hero />
                <HighlightStrip />
                <Pillars />
                <Values />
                <Excerpts />
                <CallToAction />
            </main>
            <Footer />
        </>
    );
}