'use client';
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { CartModal } from "./cart/CartModal";
import { MobileMenu } from "./navigation/MobileMenu";

const links = [
	{ name: "Home", href: "/" },
	{ name: "Headphones", href: "/categories/headphones" },
	{ name: "Speakers", href: "/categories/speakers" },
	{ name: "Earphones", href: "/categories/earphones" },
];

export const Header = () => {
	const pathName = usePathname();
	const [isCartOpen, setIsCartOpen] = useState(false);
	const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

	return (
		<header className="bg-black pt-6">
			<div className="container px-8 flex justify-between items-center max-w-6xl mx-auto border-b border-white pb-8">
				<div className="flex items-center gap-x-20 md:gap-12">
					<button onClick={() => setIsMobileMenuOpen(true)} className="lg:hidden cursor-pointer">
						<Image
							src="/hamburger.svg"
							alt="Menu"
							width={25}
							height={25}
						/>
					</button>
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
									className={`leading-[25px] tracking-[2px] ${
										pathName === link.href ? "text-brown" : ""
									}`}
								>
									{link.name}
								</Link>
							</li>
						))}
					</ul>
				</nav>
				<button onClick={() => setIsCartOpen(true)} className="cursor-pointer">
					<Image src="/carts.svg" alt="Carts" width={25} height={25} />
				</button>
			</div>
			<CartModal isOpen={isCartOpen} onClose={() => setIsCartOpen(false)} />
			<MobileMenu isOpen={isMobileMenuOpen} onClose={() => setIsMobileMenuOpen(false)} />
		</header>
	);
};
