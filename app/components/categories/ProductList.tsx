import Image from "next/image";
import Link from "next/link";

type Product = {
	id: string;
	status: string;
	image: string;
	title: string;
	description: string;
};

interface ProductListProps {
	products: Product[];
}

export const ProductList = ({ products }: ProductListProps) => {
	return (
		<div className="mt-16 space-y-24 w-[80%] md:max-w-4xl mx-auto">
			{products.map((product, index) => (
				<section
					key={product.title}
					className={`flex flex-col lg:flex-row gap-28 items-center justify-between mx-auto container ${
						index === 1 ? "lg:flex-row-reverse" : ""
					}`}
				>
					<div className="md:w-full flex justify-center bg-darkGray p-10 md:px-20 md:py-10 lg:px-10 lg:py-20 rounded-lg">
						<Image
							src={product.image}
							alt={product.title}
							width={340}
							height={480}
							className="md:hidden block lg:block"
						/>
						<Image
							src={product.image}
							alt={product.title}
							width={240}
							height={380}
							className="md:block hidden lg:hidden"
						/>
					</div>
					<div className="max-w-md text-center lg:text-left grid gap-6">
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
						<Link href={`/products/${product.id}`} className="bg-brown cursor-pointer mx-auto lg:mx-0 hover:bg-peach transition duration-300 p-3 text-white w-40 uppercase text-sm text-center block">
							See Product
						</Link>
					</div>
				</section>
			))}
		</div>
	);
};