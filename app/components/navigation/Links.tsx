"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
const links = [
    { name: "Home", href: "/" },
    { name: "Headphones", href: "/categories/headphones" },
    { name: "Speakers", href: "/categories/speakers" },
    { name: "Earphones", href: "/categories/earphones" },
];

export const Links = () => {
    const pathName = usePathname();
    return (
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
		);
}