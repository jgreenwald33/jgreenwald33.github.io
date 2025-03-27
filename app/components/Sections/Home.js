import Card from "../Card";
import Image from "next/image";
import personMakingMusic from "../../../public/maincardimage.jpg"

export default function About() {
    return (
        <section id="home" className="h-screen my-6">
            <div className="px-20">
                <div className="grid grid-cols-3">
                    <Card>
                        <div className="flex flex-col gap-3">
                            <h1 className="text-2xl font-bold">
                                lullo-fi: the VST3 plugin for everyone
                            </h1>
                            <Image src={personMakingMusic} alt="Person making music" className="rounded-md"/>
                            <p>
                                lullo-fi was designed for audio enthusiants. Whether you are a seasoned audio engineer with or just getting started in
                                your bedroom, lullo-fi has you covered. 
                            </p>
                            <a href="#" className="text-blue-500 hover:underline w-fit">
                                learn more
                            </a>
                        </div>
                    </Card>
                </div>

            </div>
        </section>
    );
}