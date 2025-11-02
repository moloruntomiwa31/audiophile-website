'use client';
import Image from "next/image";
import { useState } from "react";
import { CartModal } from "./cart/CartModal";
import { MobileMenu } from "./navigation/MobileMenu";
import { useCartStore } from "@/app/store/cart";
import { Links } from "./navigation/Links";

export const Header = () => {
	const [isCartOpen, setIsCartOpen] = useState(false);
	const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
	const { getTotalItems } = useCartStore();

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
					<Links />
				</nav>
				<button onClick={() => setIsCartOpen(true)} className="cursor-pointer relative">
					<Image src="/carts.svg" alt="Carts" width={25} height={25} />
					{getTotalItems() > 0 && (
						<span className="absolute -top-2 -right-2 bg-brown text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
							{getTotalItems()}
						</span>
					)}
				</button>
			</div>
			<CartModal isOpen={isCartOpen} onClose={() => setIsCartOpen(false)} />
			<MobileMenu isOpen={isMobileMenuOpen} onClose={() => setIsMobileMenuOpen(false)} />
		</header>
	);
};
