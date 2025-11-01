export type Product = {
	status: string;
	image: string;
	title: string;
	description: string;
};

export const headphones: Product[] = [
	{
		status: "new",
		image: "/home/headphones/xx99-markii.png",
		title: "XX99 Mark II Headphones",
		description:
			"The new XX99 Mark II headphones is the pinnacle of pristine audio. It redefines your premium headphone experience by reproducing the balanced depth and precision of studio-quality sound.",
	},
	{
		status: " ",
		image: "/home/headphones/xx99-marki.png",
		title: "XX99 Mark I Headphones",
		description:
			"As the gold standard for headphones, the classic XX99 Mark I offers detailed and accurate audio reproduction for audiophiles, mixing engineers, and music aficionados alike in studios and on the go.",
	},
	{
		status: " ",
		image: "/home/headphones/xx59.png",
		title: "XX59 Headphones",
		description:
			"Enjoy your audio almost anywhere and customize it to your specific tastes with the XX59 headphones. The stylish yet durable versatile wireless headset is a brilliant companion at home or on the move.",
	},
];

export const speakers: Product[] = [
	{
		status: "new",
		image: "/home/speakers/zx9.png",
		title: "ZX9 Speaker",
		description:
			"Upgrade your sound system with the all new ZX9 active bookshelf speaker. It's a bookshelf speaker system that offers truly wireless connectivity -- creating new possibilities for more pleasing and practical audio setups.",
	},
	{
		status: " ",
		image: "/home/speakers/zx7.png",
		title: "ZX7 Speaker",
		description:
			"Stream high quality sound wirelessly with minimal loss. The ZX7 bookshelf speaker uses high-end audiophile components that represents the top of the line powered speakers for home or studio use.",
	},
];

export const earphones: Product[] = [
	{
		status: "new",
		image: "/home/earphones/yx1.png",
		title: "YX1 Wireless Earphones",
		description:
			"Tailor your listening experience with bespoke dynamic drivers from the new YX1 Wireless Earphones. Enjoy incredible high-fidelity sound even in noisy environments with its active noise cancellation feature.",
	},
];