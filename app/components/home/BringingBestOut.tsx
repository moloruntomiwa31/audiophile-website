import Image from "next/image";
export const BringingBestOut = () => {
    return (
			<div className="w-[90%] md:max-w-6xl mx-auto mt-16">
				<div className="flex items-center flex-col lg:flex-row-reverse justify-center md:justify-between container mx-auto max-w-4xl md:gap-8">
					<Image
						src="/home/man.png"
						alt="Gallery Image 1"
						width={540}
						height={320}
						className="w-full md:hidden object-cover rounded-lg"
					/>
					<Image
						src="/home/man-md.png"
						alt="Gallery Image 1"
						width={540}
						height={320}
						className="w-full hidden md:block object-cover rounded-lg"
					/>
					<div className="w-full rounded-lg py-8 flex flex-col items-center lg:items-start gap-4 text-center lg:text-left">
						<h2 className="text-black uppercase font-bold text-4xl leading-tight">
							Bringing you the <span className="text-brown">best</span> audio
							gear
						</h2>
						<p className="text-black/50 leading-relaxed text-sm">
							Located at the heart of New York City, Audiophile is the premier
							store for high end headphones, earphones, speakers, and audio
							accessories. We have a large showroom and luxury demonstration
							rooms available for you to browse and experience a wide range of
							our products. Stop by our store to meet some of the fantastic
							people who make Audiophile the best place to buy your portable
							audio equipment.
						</p>
					</div>
				</div>
			</div>
		);
}