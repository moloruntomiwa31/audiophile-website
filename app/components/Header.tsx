import Image from "next/image";
import Link from "next/link";

const links = [
	{ name: "Home", href: "#" },
	{ name: "Headphones", href: "#" },
	{ name: "Speakers", href: "#" },
	{ name: "Earphones", href: "#" },
];

export const Header = () => {
	return (
		<header className="bg-black pt-6">
			<div className="container px-8 flex justify-between items-center max-w-6xl mx-auto border-b border-white pb-8">
				<div className="flex items-center gap-x-20 md:gap-12">
					<Image
						src="/hamburger.svg"
						alt="Menu"
						width={25}
						height={25}
						className="lg:hidden"
					/>
					<Image
						src="/logo.svg"
						alt="Audiophile Logo"
						width={143}
						height={25}
					/>
				</div>
				<nav className="hidden lg:block">
					<ul className="flex items-center-safe gap-x-6">
						{links.map((link) => (
							<li
								key={link.name}
								className="text-white uppercase text-xs hover:text-peach transition-colors"
							>
								<Link
									href={link.href}
									className="leading-[25px] tracking-[2px]"
								>
									{link.name}
								</Link>
							</li>
						))}
					</ul>
				</nav>
				<Image src="/carts.svg" alt="Carts" width={25} height={25} />
			</div>
		</header>
	);
};
