'use client';
import { Modal } from '../ui/Modal';
import Image from 'next/image';
import Link from 'next/link';
import { useCartStore } from '@/app/store/cart';

interface CartModalProps {
	isOpen: boolean;
	onClose: () => void;
}

export const CartModal = ({ isOpen, onClose }: CartModalProps) => {
	const { items, clearCart, updateQuantity, getTotalItems, getTotalPrice } = useCartStore();

	return (
		<Modal isOpen={isOpen} onClose={onClose} position="top-right">
			<div className="space-y-6">
				<div className="flex items-center justify-between">
					<h2 className="text-lg font-bold uppercase">Cart ({getTotalItems()})</h2>
					<button 
						className="text-black/50 underline text-sm hover:text-brown"
						onClick={clearCart}
					>
						Remove all
					</button>
				</div>
				
				{items.length === 0 ? (
					<p className="text-black/50 text-center py-8">Your cart is empty</p>
				) : (
					<>
						<div className="space-y-4">
							{items.map((item) => (
								<div key={item.id} className="flex items-center gap-4">
									<div className="bg-lightGray p-2 rounded">
										<Image src={item.image} width={50} height={50} alt={item.title} />
									</div>
									<div className="flex-1">
										<h3 className="font-bold text-sm">{item.title}</h3>
										<p className="text-black/50 text-sm">${item.price.toLocaleString()}</p>
									</div>
									<div className="flex items-center bg-lightGray">
										<button 
											className="px-3 py-1 hover:text-brown"
											onClick={() => updateQuantity(item.id, item.quantity - 1)}
										>
											-
										</button>
										<span className="px-3 py-1 font-bold">{item.quantity}</span>
										<button 
											className="px-3 py-1 hover:text-brown"
											onClick={() => updateQuantity(item.id, item.quantity + 1)}
										>
											+
										</button>
									</div>
								</div>
							))}
						</div>

						<div className="space-y-2">
							<div className="flex justify-between">
								<span className="text-black/50 uppercase">Total</span>
								<span className="font-bold text-lg">${getTotalPrice().toLocaleString()}</span>
							</div>
						</div>

						<Link href="/checkout" onClick={onClose} className="block w-full bg-brown hover:bg-peach transition p-3 text-white uppercase text-sm text-center">
							Checkout
						</Link>
					</>
				)}
			</div>
		</Modal>
	);
};