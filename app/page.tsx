import Image from "next/image";
import { HomeHero } from "./components/home/HomeHero";
import { BringingBestOut } from "./components/home/BringingBestOut";
import { AudioCategories } from "./components/home/AudioCategories";

export default function Home() {
	return (
		<div>
			<HomeHero />
			<AudioCategories />
			<div className="mt-16 space-y-8 w-[90%] md:max-w-6xl mx-auto">
				<div className="bg-brown lg:h-[450px] rounded-lg">
					<div className="flex flex-col lg:flex-row gap-8 items-center justify-between container mx-auto max-w-4xl py-12 px-10 lg:pt-18">
						<Image
							src="/home/image-speaker-zx9.svg"
							alt="Speaker Image"
							width={340}
							height={210}
							className="hidden lg:block"
						/>
						<Image
							src="/home/image-speaker-zx9.svg"
							alt="Speaker Image"
							width={200}
							height={120}
							className="w-40 lg:hidden"
						/>
						<div className="max-w-sm flex flex-col items-center lg:items-start gap-4 text-center lg:text-left ">
							<h2 className="text-white uppercase font-bold text-4xl md:text-5xl max-w-xs leading-tight">
								ZX9 SPEAKER{" "}
							</h2>
							<p className="text-white/70 leading-relaxed text-sm md:text-lg max-w-xs">
								Upgrade to premium speakers that are phenomenally built to
								deliver truly remarkable sound.
							</p>
							<button className="bg-transparent border border-black cursor-pointer hover:bg-black hover:text-white transition duration-300 p-3 text-black w-40 uppercase text-sm mt-4">
								See Product
							</button>
						</div>
					</div>
				</div>
				<div className="bg-darkGray rounded-lg lg:h-[400px] bg-cover bg-right bg-[url('/home/image-speaker-zx7-mobile.jpg')] md:bg-[url('/home/image-speaker-zx7-tab.jpg')] lg:bg-[url('/home/image-speaker-zx7.jpg')]">
					<div className="container mx-auto max-w-4xl py-12 px-10 lg:pt-18 h-full flex items-center">
						<div className="max-w-sm flex flex-col items-start gap-4 text-center lg:text-left">
							<h2 className="text-black uppercase font-bold text-3xl md:text-4xl leading-tight tracking-[2px]">
								ZX7 SPEAKER{" "}
							</h2>
							<button className="bg-transparent border border-black cursor-pointer hover:bg-black hover:text-white transition duration-300 p-3 text-black w-40 uppercase text-sm mt-4">
								See Product
							</button>
						</div>
					</div>
				</div>
				<div className="w-full">
					<div className="flex flex-col md:flex-row items-stretch gap-8 md:gap-5 mx-auto md:max-w-4xl">
						<Image
							src="/home/image-earphones-yx1.jpg"
							alt="Speaker Image"
							width={340}
							height={220}
							className="w-full md:w-1/2 rounded-lg object-cover"
						/>
						<div className="w-full md:w-1/2 rounded-lg bg-lightGray py-8 px-20 flex flex-col items-center lg:items-start gap-4 text-center lg:text-left">
							<h2 className="text-black uppercase font-bold text-4xl leading-tight">
								YX1 EARPHONES{" "}
							</h2>
							<button className="bg-transparent border border-black cursor-pointer hover:bg-black hover:text-white transition duration-300 p-3 text-black w-40 uppercase text-sm mt-4">
								See Product
							</button>
						</div>
					</div>
				</div>
			</div>
      <BringingBestOut />
		</div>
	);
}
