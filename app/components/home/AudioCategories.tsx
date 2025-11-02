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

interface AudioCategoriesProps {
	onClose?: () => void;
}

export const AudioCategories = ({ onClose }: AudioCategoriesProps) => {
	return (
		<div className="flex flex-col md:flex-row items-center mx-auto container justify-center gap-12 md:gap-4 lg:gap-12 mt-16">
			{items.map((item, idx) => (
				<div
					onClick={onClose}
					key={`${item.title}-${idx}`}
					className="group cursor-pointer bg-lightGray w-70 h-40 flex flex-col items-center justify-between text-center space-y-3 py-3 rounded-lg"
				>
					<Image
						src={item.image}
						alt={item.title}
						width={80}
						height={80}
						className="-mt-10"
					/>
					<div className="blur-md bg-black/40 w-20 h-4"></div>
					<div className="space-y-3">
						<h4 className="uppercase font-bold tracking-[1.29px]">
							{item.title}
						</h4>
						<div className="flex items center gap-2 justify-center">
							<Link
								href={`/categories/${item.title.toLowerCase()}`}
								className="group-hover:text-peach transition text-xs font-bold text-black/50 tracking-[1px]"
							>
								SHOP
							</Link>
							<Image
								src="/chevron-right.svg"
								alt="Arrow"
								width={10}
								height={10}
							/>
						</div>
					</div>
				</div>
			))}
		</div>
	);
};
