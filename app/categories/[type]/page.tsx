import { AudioCategories } from "@/app/components/home/AudioCategories";
import { BringingBestOut } from "@/app/components/home/BringingBestOut";
import { ProductList } from "@/app/components/categories/ProductList";
import { headphones, speakers, earphones } from "@/app/data/products";

interface CategoryPageProps {
	params: {
		type: string;
	};
}

const getProductsByType = (type: string) => {
	switch (type) {
		case "headphones":
			return headphones;
		case "speakers":
			return speakers;
		case "earphones":
			return earphones;
		default:
			return [];
	}
};

export default async function CategoryPage({ params }: CategoryPageProps) {
	const { type } = await params;

	return (
		<div className="w-full">
			<div className="flex items-center justify-center bg-black h-48">
				<h1 className="text-5xl font-bold uppercase text-white tracking-wide">
					{type}
				</h1>
			</div>
			<ProductList products={getProductsByType(type)} />
			<AudioCategories />
			<BringingBestOut />
		</div>
	);
}
