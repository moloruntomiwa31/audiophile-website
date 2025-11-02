export type Product = {
	id: string;
	status: string;
	image: string;
	title: string;
	description: string;
	price: number;
	features: string;
	boxContents: string;
	alsoLike: {
		image: string;
		href: string;
		title: string;
	}[];
	gallery: string[]
};

export const headphones: Product[] = [
	{
		id: "xx99-mark-ii",
		status: "new",
		image: "/home/headphones/xx99-markii.png",
		title: "XX99 Mark II Headphones",
		description:
			"The new XX99 Mark II headphones is the pinnacle of pristine audio. It redefines your premium headphone experience by reproducing the balanced depth and precision of studio-quality sound.",
		price: 2999,
		features:
			"<div><p>Featuring a genuine leather head strap and premium earcups, these headphones deliver superior comfort for those who like to enjoy endless listening. It includes intuitive controls designed for any situation. Whether you're taking a business call or just in your own personal space, the auto on/off and pause features ensure that you'll never miss a beat.</p><p style='margin-top: 24px;'>The advanced Active Noise Cancellation with built-in equalizer allow you to experience your audio world on your terms. It lets you enjoy your audio in peace, but quickly interact with your surroundings when you need to. Combined with Bluetooth 5. 0 compliant connectivity and 17 hour battery life, the XX99 Mark II headphones gives you superior sound, cutting-edge technology, and a modern design aesthetic.</p></div>",
		boxContents:
			"<ul><li><span style='color: #D87D4A; font-weight: 700;'>1x</span> Headphone Unit</li><li><span style='color: #D87D4A; font-weight: 700;'>2x</span> Replacement Earcups</li><li><span style='color: #D87D4A; font-weight: 700;'>1x</span> User Manual</li><li><span style='color: #D87D4A; font-weight: 700;'>3x</span> 3.5mm Audio Cable</li><li><span style='color: #D87D4A; font-weight: 700;'>1x</span> Travel Bag</li></ul>",
		alsoLike: [
			{
				image: "/home/headphones/xx99-marki.png",
				href: "/products/xx99-mark-i",
				title: "XX99 Mark I",
			},
			{
				image: "/home/headphones/xx59.png",
				href: "/products/xx59",
				title: "XX59",
			},
			{
				image: "/home/speakers/zx9.png",
				href: "/products/zx9",
				title: "ZX9 Speaker",
			},
		],
		gallery: [
			'/display/xx99-mark-ii/man-display.png',
			'/display/xx99-mark-ii/headset-on-table.png',
			'/display/xx99-mark-ii/headset.png',
		]
	},
	{
		id: "xx99-mark-i",
		status: " ",
		image: "/home/headphones/xx99-marki.png",
		title: "XX99 Mark I Headphones",
		description:
			"As the gold standard for headphones, the classic XX99 Mark I offers detailed and accurate audio reproduction for audiophiles, mixing engineers, and music aficionados alike in studios and on the go.",
		price: 1750,
		features:
			"<div><p>From the handcrafted wooden earcups to the sleek metal headband, the XX99 Mark I headphones is a testament to enduring design. It features intuitive controls designed for any situation. Whether you're taking a business call or just in your own personal space, the auto on/off and pause features ensure that you'll never miss a beat.</p><p style='margin-top: 24px;'>The advanced Active Noise Cancellation with built-in equalizer allow you to experience your audio world on your terms. It lets you enjoy your audio in peace, but quickly interact with your surroundings when you need to. Combined with Bluetooth 5. 0 compliant connectivity and 20 hour battery life, the XX99 Mark I headphones gives you superior sound, cutting-edge technology, and a modern design aesthetic.</p></div>",
		boxContents:
			"<ul><li><span style='color: #D87D4A; font-weight: 700;'>1x</span> Headphone Unit</li><li><span style='color: #D87D4A; font-weight: 700;'>2x</span> Replacement Earcups</li><li><span style='color: #D87D4A; font-weight: 700;'>1x</span> User Manual</li><li><span style='color: #D87D4A; font-weight: 700;'>3x</span> 3.5mm Audio Cable</li><li><span style='color: #D87D4A; font-weight: 700;'>1x</span> Travel Bag</li></ul>",
		alsoLike: [
			{
				image: "/home/headphones/xx99-mark-ii.png",
				href: "/products/xx99-mark-ii",
				title: "XX99 Mark II",
			},
			{
				image: "/home/headphones/xx59.png",
				href: "/products/xx59",
				title: "XX59",
			},
			{
				image: "/home/speakers/zx9.png",
				href: "/products/zx9",
				title: "ZX9 Speaker",
			},
		],
		gallery: [
			'/display/xx99-mark-i/headset-hang.png',
			'/display/xx99-mark-i/headset-hang2.png',
			'/display/xx99-mark-i/headset-with-light.png',
		]
	},
	{
		id: "xx59",
		status: " ",
		image: "/home/headphones/xx59.png",
		title: "XX59 Headphones",
		description:
			"Enjoy your audio almost anywhere and customize it to your specific tastes with the XX59 headphones. The stylish yet durable versatile wireless headset is a brilliant companion at home or on the move.",
		price: 899,
		features:
			"<div><p>These headphones have been created from durable, high-quality materials tough enough to withstand daily use. The stylish yet durable versatile wireless headset is a brilliant companion at home or on the move.</p><p style='margin-top: 24px;'>Featuring a genuine leather head strap and premium earcups, these headphones deliver superior comfort for those who like to enjoy endless listening. It includes intuitive controls designed for any situation. Whether you're taking a business call or just in your own personal space, the auto on/off and pause features ensure that you'll never miss a beat.</p></div>",
		boxContents:
			"<ul><li><span style='color: #D87D4A; font-weight: 700;'>1x</span> Headphone Unit</li><li><span style='color: #D87D4A; font-weight: 700;'>2x</span> Replacement Earcups</li><li><span style='color: #D87D4A; font-weight: 700;'>1x</span> User Manual</li><li><span style='color: #D87D4A; font-weight: 700;'>3x</span> 3.5mm Audio Cable</li></ul>",
		alsoLike: [
			{
				image: "/home/headphones/xx99-markii.png",
				href: "/products/xx99-mark-ii",
				title: "XX99 Mark II",
			},
			{
				image: "/home/headphones/xx99-marki.png",
				href: "/products/xx99-mark-i",
				title: "XX99 Mark I",
			},
			{
				image: "/home/speakers/zx9.png",
				href: "/products/zx9",
				title: "ZX9 Speaker",
			},
		],
		gallery: [
			'/display/xx59/woman.png',
			'/display/xx59/headset-pack.png',
			'/display/xx59/headset-on-finger.png',
		],
	},
];

export const speakers: Product[] = [
	{
		id: "zx9",
		status: "new",
		image: "/home/speakers/zx9.png",
		title: "ZX9 Speaker",
		description:
			"Upgrade your sound system with the all new ZX9 active bookshelf speaker. It's a bookshelf speaker system that offers truly wireless connectivity -- creating new possibilities for more pleasing and practical audio setups.",
		price: 4500,
		features:
			"<div><p>The ZX9 speaker is designed to deliver an immersive audio experience with its advanced acoustic engineering. Enjoy deep bass and crystal-clear highs, all while maintaining a sleek and modern aesthetic.</p><p style='margin-top: 24px;'>With its wireless capabilities, you can easily connect your devices and enjoy your favorite music without the hassle of tangled wires. The built-in voice assistant compatibility allows for seamless control and convenience.</p></div>",
		boxContents:
			"<ul><li><span style='color: #D87D4A; font-weight: 700;'>1x</span> Speaker Unit</li><li><span style='color: #D87D4A; font-weight: 700;'>1x</span> Power Cable</li><li><span style='color: #D87D4A; font-weight: 700;'>1x</span> User Manual</li></ul>",
		alsoLike: [
			{
				image: "/home/speakers/zx7.png",
				href: "/products/zx7",
				title: "ZX7 Speaker",
			},
			{
				image: "/home/headphones/xx99-marki.png",
				href: "/products/xx99-mark-i",
				title: "XX99 Mark I",
			},
			{
				image: "/home/headphones/xx59.png",
				href: "/products/xx59",
				title: "XX59",
			},
		],
		gallery: [
			'/display/zx9/speaker-close.png',
			'/display/zx9/speaker-parlour.png',
			'/display/zx9/speaker-mirror.png',
		]
	},
	{
		id: "zx7",
		status: " ",
		image: "/home/speakers/zx7.png",
		title: "ZX7 Speaker",
		description:
			"Stream high quality sound wirelessly with minimal loss. The ZX7 bookshelf speaker uses high-end audiophile components that represents the top of the line powered speakers for home or studio use.",
		price: 3500,
		features:
			"<div><p>Revel in high-fidelity sound even in noisy environments with the ZX7 speaker. Its advanced acoustic engineering ensures deep bass and crystal-clear highs, all while maintaining a sleek and modern aesthetic.</p><p style='margin-top: 24px;'>With its wireless capabilities, you can easily connect your devices and enjoy your favorite music without the hassle of tangled wires. The built-in voice assistant compatibility allows for seamless control and convenience.</p></div>",
		boxContents:
			"<ul><li><span style='color: #D87D4A; font-weight: 700;'>1x</span> Speaker Unit</li><li><span style='color: #D87D4A; font-weight: 700;'>1x</span> Power Cable</li><li><span style='color: #D87D4A; font-weight: 700;'>1x</span> User Manual</li></ul>",
		alsoLike: [
			{
				image: "/home/speakers/zx9.png",
				href: "/products/zx9",
				title: "ZX9 Speaker",
			},
			{
				image: "/home/headphones/xx99-marki.png",
				href: "/products/xx99-mark-i",
				title: "XX99 Mark I",
			},
			{
				image: "/home/headphones/xx59.png",
				href: "/products/xx59",
				title: "XX59",
			},
		],
		gallery: [
			'/display/zx7/speaker.png',
			'/display/zx7/speaker-studio.png',
			'/display/zx7/speaker-on-table.png',
		]
	},
];

export const earphones: Product[] = [
	{
		id: "yx1",
		status: "new",
		image: "/home/earphones/yx1.png",
		title: "YX1 Wireless Earphones",
		description:
			"Tailor your listening experience with bespoke dynamic drivers from the new YX1 Wireless Earphones. Enjoy incredible high-fidelity sound even in noisy environments with its active noise cancellation feature.",
		price: 599,
		features:
			"<div><p>Experience unparalleled sound quality with the YX1 Wireless Earphones. Its bespoke dynamic drivers deliver rich bass and clear treble, ensuring an immersive listening experience.</p><p style='margin-top: 24px;'>The active noise cancellation feature allows you to enjoy your music without distractions, making it perfect for commuting or working in noisy environments. With a comfortable fit and long-lasting battery life, the YX1 earphones are designed for all-day use.</p></div>",
		boxContents:
			"<ul><li><span style='color: #D87D4A; font-weight: 700;'>1x</span> Earphone Unit</li><li><span style='color: #D87D4A; font-weight: 700;'>3x</span> Ear Tips</li><li><span style='color: #D87D4A; font-weight: 700;'>1x</span> USB-C Charging Cable</li><li><span style='color: #D87D4A; font-weight: 700;'>1x</span> User Manual</li></ul>",
		alsoLike: [
			{
				image: "/home/headphones/xx99-marki.png",
				href: "/products/xx99-mark-i",
				title: "XX99 Mark I",
			},
			{
				image: "/home/headphones/xx59.png",
				href: "/products/xx59",
				title: "XX59",
			},
			{
				image: "/home/speakers/zx9.png",
				href: "/products/zx9",
				title: "ZX9 Speaker",
			},
		],
		gallery: [
			'/display/yx1/earphone-on-table.png',
			'/display/yx1/earphone-in-pack.png',
			'/display/yx1/earphone-set.png',
		]
	},
];

export const getAllProducts = () => {
	return [...headphones, ...speakers, ...earphones];
};

export const getProductById = (id: string) => {
	return getAllProducts().find((product) => product.id === id);
};
