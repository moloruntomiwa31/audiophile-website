"use client";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

const links = [
	{ name: "Home", href: "/" },
	{ name: "Headphones", href: "/categories/headphones" },
	{ name: "Speakers", href: "/categories/speakers" },
	{ name: "Earphones", href: "/categories/earphones" },
];

const icons = [
	{ name: "facebook", href: "/icon-facebook.svg" },
	{ name: "twitter", href: "/icon-twitter.svg" },
	{ name: "instagram", href: "/icon-instagram.svg" },
];

export const Footer = () => {
	const pathname = usePathname();
	return (
		<footer className="relative bg-black pt-16 pb-10 mt-16">
			<div className="flex flex-col container mx-auto gap-8 px-8 max-w-6xl">
				<div className="absolute -top-0.5 left-40 md:left-8 lg:left-22 w-25 h-1 bg-peach"></div>
				<div className="flex flex-col gap-6 lg:gap-0 lg:flex-row justify-between md:items-start items-center">
					<Image src="/logo.svg" alt="logo" width={143} height={25} />
					<nav>
						<ul className="flex flex-col md:flex-row items-center gap-6">
							{links.map((link) => (
								<li
									key={link.name}
									className="text-white uppercase text-xs hover:text-peach transition-colors"
								>
									<Link
										href={link.href}
										className={`leading-[25px] tracking-[2px] ${
											pathname === link.href ? "text-brown" : ""
										}`}
									>
										{link.name}
									</Link>
								</li>
							))}
						</ul>
					</nav>
				</div>
				<p className="leading-[25px] text-white/50 lg:max-w-md text-center md:text-left">
					Audiophile is an all in one stop to fulfill your audio needs.
					We&#39;re a small team of music lovers and sound specialists who are
					devoted to helping you get the most out of personal audio. Come and
					visit our demo facility - we&#39;re open 7 days a week.
				</p>
				<div className="flex flex-col md:flex-row justify-between items-center gap-8 md:mt-10 lg:mt-0">
					<p className="text-white/50 leading-[25px]">
						Copyright 2021. All Rights Reserved
					</p>
					<nav>
						<ul className="flex items-center gap-4">
							{icons.map((icon) => (
								<li key={icon.name}>
									<Link href="#">
										<Image
											src={icon.href}
											alt={icon.name}
											width={18}
											height={18}
										/>
									</Link>
								</li>
							))}
						</ul>
					</nav>
				</div>
			</div>
		</footer>
	);
};
