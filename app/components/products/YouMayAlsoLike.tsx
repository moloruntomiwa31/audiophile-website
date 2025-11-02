import Image from "next/image";
import Link from "next/link";

interface YouMayAlsoLikeProps {
	products: {
		image: string;
		href: string;
		title: string;
	}[];
}

export const YouMayAlsoLike = ({ products }: YouMayAlsoLikeProps) => {
	return (
		<div className="my-16 w-[80%] md:max-w-4xl mx-auto">
			<h2 className="text-2xl font-bold uppercase mb-12 text-center">
				You May Also Like
			</h2>
			<div className="flex flex-col md:flex-row items-center mx-auto container justify-center gap-12 md:gap-4 lg:gap-12">
				{products.map((product) => (
					<div key={product.title} className="text-center w-80 grid gap-8">
						<div className="bg-darkGray rounded-lg p-8 h-30 md:h-78 flex items-center justify-center">
							<Image
								src={product.image}
								alt={product.title}
								width={190}
								height={200}
								className="mx-auto w-20 md:w-full"
							/>
						</div>
						<h3 className="text-xl font-bold uppercase">{product.title}</h3>
						<Link
							href={product.href}
							className="bg-brown mx-auto hover:bg-peach transition duration-300 p-3 text-white uppercase text-sm inline-block"
						>
							See Product
						</Link>
					</div>
				))}
			</div>
		</div>
	);
};