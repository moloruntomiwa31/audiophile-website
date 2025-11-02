"use client";
import { Modal } from "../ui/Modal";
import Image from "next/image";
import Link from "next/link";

interface ThankYouModalProps {
	isOpen: boolean;
	onClose: () => void;
}

export const ThankYouModal = ({ isOpen, onClose }: ThankYouModalProps) => {
	return (
		<Modal isOpen={isOpen} onClose={onClose}>
			<div className="space-y-6">
				{/* Success Icon */}
				<div className="w-16 h-16 bg-brown rounded-full flex items-center justify-center">
					<svg
						className="w-8 h-8 text-white"
						fill="none"
						stroke="currentColor"
						viewBox="0 0 24 24"
					>
						<path
							strokeLinecap="round"
							strokeLinejoin="round"
							strokeWidth={2}
							d="M5 13l4 4L19 7"
						/>
					</svg>
				</div>

				{/* Thank You Message */}
				<div>
					<h1 className="text-2xl font-bold uppercase mb-4">
						Thank you for your order
					</h1>
					<p className="text-black/50 text-sm">
						You will receive an email confirmation shortly.
					</p>
				</div>

				{/* Order Summary */}
				<div className="flex rounded-lg overflow-hidden">
					{/* Product Details - Left */}
					<div className="bg-lightGray p-4 w-2/3">
						<div className="flex items-center gap-4 pb-4 border-b border-black/10">
							<div className="p-2 rounded">
								<Image
									src="/home/headphones/xx99-markii.png"
									width={40}
									height={40}
									alt="Product"
								/>
							</div>
							<div className="flex-1">
								<h3 className="font-bold text-sm">XX99 MK II</h3>
								<p className="text-black/50 text-xs">$2,999</p>
							</div>
							<span className="text-black/50 text-sm">x1</span>
						</div>
						<p className="text-black/50 text-xs mt-4 text-center">and 2 other item(s)</p>
					</div>
					{/* Grand Total - Right */}
					<div className="bg-black p-4 w-1/3 flex flex-col justify-center">
						<p className="text-white/50 uppercase text-xs mb-1">Grand Total</p>
						<p className="text-white font-bold text-lg">$5,446</p>
					</div>
				</div>

				<Link
					href="/"
					onClick={onClose}
					className="block w-full bg-brown hover:bg-peach transition p-3 text-white uppercase text-sm text-center"
				>
					Back to Home
				</Link>
			</div>
		</Modal>
	);
};
