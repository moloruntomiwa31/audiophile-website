'use client';
import { useState } from 'react';
import { useCartStore } from '@/app/store/cart';

interface QuantitySelectorProps {
	product: {
		id: string;
		title: string;
		price: number;
		image: string;
	};
}

export const QuantitySelector = ({ product }: QuantitySelectorProps) => {
	const [quantity, setQuantity] = useState(1);
	const { addItem } = useCartStore();

	const increment = () => setQuantity(prev => prev + 1);
	const decrement = () => setQuantity(prev => prev > 1 ? prev - 1 : 1);

	const handleAddToCart = () => {
		for (let i = 0; i < quantity; i++) {
			addItem(product);
		}
		setQuantity(1);
	};

	return (
		<div className="flex items-center gap-4">
			<div className="flex items-center bg-lightGray">
				<button 
					onClick={decrement}
					className="px-4 py-3 hover:text-brown transition"
				>
					-
				</button>
				<span className="px-4 py-3 font-bold">{quantity}</span>
				<button 
					onClick={increment}
					className="px-4 py-3 hover:text-brown transition"
				>
					+
				</button>
			</div>
			<button 
				onClick={handleAddToCart}
				className="bg-brown cursor-pointer hover:bg-peach transition duration-300 p-3 text-white w-40 uppercase text-sm"
			>
				Add to Cart
			</button>
		</div>
	);
};