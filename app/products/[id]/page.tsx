import { getProductById } from "@/app/data/products";
import { AudioCategories } from "@/app/components/home/AudioCategories";
import { BringingBestOut } from "@/app/components/home/BringingBestOut";
import { QuantitySelector } from "@/app/components/products/QuantitySelector";
import { YouMayAlsoLike } from "@/app/components/products/YouMayAlsoLike";
import Image from "next/image";
import { notFound } from "next/navigation";
import Link from "next/link";

interface ProductPageProps {
	params: {
		id: string;
	};
}

export default async function ProductPage({ params }: ProductPageProps) {
	const { id } = await params;
	const product = getProductById(id);

	if (!product) {
		notFound();
	}

	return (
		<div className="w-full">
			<div className="flex items-center justify-between mt-16 w-[80%] md:max-w-4xl mx-auto">
				<Link href="/categories/earphones" className="text-black/50">
					Go back
				</Link>
				<span />
				<span />
			</div>
			<div className="w-[80%] mt-10 md:max-w-4xl mx-auto">
				<section className="flex flex-col md:flex-row gap-12 lg:gap-28 items-center justify-between mx-auto container">
					<div className="md:w-full flex flex-col justify-center items-center bg-darkGray p-10 md:px-10 md:py-20 rounded-lg">
						<Image
							src={product.image}
							alt={product.title}
							width={340}
							height={480}
						/>
						<div className="blur-md bg-black/50 w-44 h-2"></div>
					</div>
					<div className="max-w-md text-left grid gap-6">
						{product.status === "new" && (
							<p className="uppercase leading-[25px] tracking-[10px] text-brown">
								New product
							</p>
						)}
						<h1 className="text-black text-4xl uppercase font-bold">
							{product.title}
						</h1>
						<p className="leading-[25px] tracking-[2px] text-black/50 text-sm">
							{product.description}
						</p>
						<p className="tracking-wide font-bold text-lg">${product.price}</p>
						<div className="flex flex-col lg:flex-row items-start gap-4">
							<QuantitySelector />
						</div>
					</div>
				</section>
			</div>
			<div className="mt-16 w-[80%] md:max-w-4xl mx-auto">
				<div className="flex flex-col lg:flex-row gap-16">
					<div className="lg:w-2/3">
						<h2 className="text-2xl font-bold uppercase mb-6">Features</h2>
						<div
							className="text-black/50 leading-relaxed text-sm"
							dangerouslySetInnerHTML={{ __html: product.features }}
						/>
					</div>
					<div className="lg:w-1/3 md:flex lg:flex-col lg:justify-start md:items-start md:justify-between">
						<h2 className="text-2xl font-bold uppercase mb-6">In the Box</h2>
						<div
							className="text-black/50 leading-relaxed text-sm"
							dangerouslySetInnerHTML={{ __html: product.boxContents }}
						/>
					</div>
				</div>
			</div>
			<div className="mt-16 w-[80%] md:max-w-4xl mx-auto">
				<div className="flex flex-col md:flex-row gap-4">
					<div className="flex flex-col gap-4 md:flex-1">
						<Image
							src={product.gallery[0]}
							width={445}
							height={280}
							alt="Image"
							className="w-full rounded-lg"
						/>
						<Image
							src={product.gallery[1]}
							width={445}
							height={280}
							alt="Image"
							className="w-full rounded-lg"
						/>
					</div>
					<div className="md:flex-1">
						<Image
							src={product.gallery[2]}
							width={635}
							height={540}
							alt="Image"
							className="w-full h-96 md:h-full object-cover lg::object-fill rounded-lg"
						/>
					</div>
				</div>
			</div>
			<YouMayAlsoLike products={product.alsoLike} />
			<AudioCategories />
			<BringingBestOut />
		</div>
	);
}