import Image from "next/image";
import Link from "next/link";
const items = [
	{
		image: "/home/headphone.png",
		title: "Headphones",
	},
	{
		image: "/home/speakers.png",
		title: "Speakers",
	},
	{
		image: "/home/earphones.png",
		title: "Earphones",
	},
];

export const AudioCategories = () => {
	return (
		<div className="flex flex-col md:flex-row items-center mx-auto container justify-center gap-12 md:gap-4 lg:gap-12 mt-16">
			{items.map((item) => (
				<div
					key={item.title}
					className="group bg-lightGray w-70 h-40 flex flex-col items-center justify-between text-center space-y-3 py-3 rounded-lg"
				>
					<Image
						src={item.image}
						alt={item.title}
						width={80}
						height={80}
						className="drop-shadow-2xl -mt-12"
					/>
					<div>
						<h4 className="uppercase font-bold tracking-[1.29px]">
							{item.title}
						</h4>
						<Link href={`/categories/${item.title.toLowerCase()}`} className="tracking-wide group-hover:text-peach transition text-xs">
							SHOP
						</Link>
					</div>
				</div>
			))}
		</div>
	);
};
