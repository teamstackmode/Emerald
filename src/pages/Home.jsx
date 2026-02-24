import Hero from "../components/Hero/Hero";
import Showcase from "../components/Showcase/Showcase";
import AboutPreview from "../components/AboutPreview/AboutPreview";
import ContactPreview from "../components/ContactPreview/ContactPreview";
import Testimonials from "../components/Testimonials/Testimonials"

export default function Home() {
    return (
        <>
            <Hero />
            <Showcase />
            <AboutPreview />
            {/* <Testimonials /> */}
            <ContactPreview />
        </>
    );
}
