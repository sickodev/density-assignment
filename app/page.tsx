import Hero from "@/components/Hero";
import HeroInfo from "@/components/HeroInfo";
import Image from "next/image";

export default function Home() {
    return (
        <main className='text-2xl'>
            <Hero />
            <HeroInfo />
        </main>
    );
}
