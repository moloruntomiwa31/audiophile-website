'use client';
import { Modal } from '../ui/Modal';
import Image from 'next/image';
import Link from 'next/link';

interface CartModalProps {
	isOpen: boolean;
	onClose: () => void;
}

export const CartModal = ({ isOpen, onClose }: CartModalProps) => {
	return (
		<Modal isOpen={isOpen} onClose={onClose} position="top-right">
			<div className="space-y-6">
				<div className="flex items-center justify-between">
					<h2 className="text-lg font-bold uppercase">Cart (3)</h2>
					<button className="text-black/50 underline text-sm">Remove all</button>
				</div>
				
				<div className="space-y-4">
					<div className="flex items-center gap-4">
						<div className="bg-lightGray p-2 rounded">
							<Image src="/home/headphones/xx99-markii.png" width={50} height={50} alt="Product" />
						</div>
						<div className="flex-1">
							<h3 className="font-bold text-sm">XX99 MK II</h3>
							<p className="text-black/50 text-sm">$2,999</p>
						</div>
						<div className="flex items-center bg-lightGray">
							<button className="px-3 py-1 hover:text-brown">-</button>
							<span className="px-3 py-1 font-bold">1</span>
							<button className="px-3 py-1 hover:text-brown">+</button>
						</div>
					</div>
				</div>

				<div className="space-y-2">
					<div className="flex justify-between">
						<span className="text-black/50 uppercase">Total</span>
						<span className="font-bold text-lg">$5,396</span>
					</div>
				</div>

				<Link href="/checkout" onClick={onClose} className="block w-full bg-brown hover:bg-peach transition p-3 text-white uppercase text-sm text-center">
					Checkout
				</Link>
			</div>
		</Modal>
	);
};