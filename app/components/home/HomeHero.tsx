import Image from "next/image";

export const HomeHero = () => {
    return (
			<div className="bg-black">
				{/* Mobile & Tablet View (overlay) */}
				<section className="relative flex items-center justify-center text-center bg-black overflow-hidden px-6 md:px-12 py-20 md:py-32 lg:hidden">
					{/* Background Image */}
					<Image
						src="/home/headphones.png"
						alt="XX99 Mark II Headphones"
						width={540}
						height={480}
						className="absolute inset-0 m-auto object-contain opacity-90"
					/>

					<div className="absolute inset-0 bg-linear-to-t from-black via-black/70 to-transparent" />

					<div className="relative z-10 max-w-lg mx-auto flex flex-col items-center gap-4">
						<p className="uppercase tracking-[10px] text-white/50 text-sm md:text-base">
							New product
						</p>

						<h1 className="text-white uppercase font-bold text-4xl md:text-5xl leading-tight">
							XX99 Mark II Headphones
						</h1>

						<p className="text-white/70 leading-relaxed text-base md:text-lg">
							Experience natural, lifelike audio and exceptional build quality
							made for the passionate music enthusiast.
						</p>

						<button className="bg-brown cursor-pointer hover:bg-peach transition duration-300 p-3 text-white w-40 uppercase text-sm mt-4">
							See Product
						</button>
					</div>
				</section>

				{/* Desktop View (side-by-side layout) */}
				<section className="hidden lg:flex items-center justify-between max-w-6xl mx-auto container">
					<div className="max-w-sm grid gap-6">
						<p className="uppercase leading-[25px] tracking-[10px] text-white/50">
							New product
						</p>
						<h1 className="text-white text-5xl uppercase font-bold">
							XX99 Mark II Headphones
						</h1>
						<p className="leading-[25px] tracking-[2px] text-white/50">
							Experience natural, lifelike audio and exceptional build quality
							made for the passionate music enthusiast.
						</p>
						<button className="bg-brown cursor-pointer hover:bg-peach transition duration-300 p-3 text-white w-40 uppercase text-sm">
							See Product
						</button>
					</div>
					<Image
						src="/home/headphones.png"
						alt="Headphones"
						width={540}
						height={480}
					/>
				</section>
			</div>
		);
}