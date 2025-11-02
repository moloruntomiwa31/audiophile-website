'use client';
import { Modal } from '../ui/Modal';
import { AudioCategories } from '../home/AudioCategories';
import Link from 'next/link';

interface MobileMenuProps {
	isOpen: boolean;
	onClose: () => void;
}

export const MobileMenu = ({ isOpen, onClose }: MobileMenuProps) => {
	return (
		<div className="lg:hidden">
			<Modal isOpen={isOpen} onClose={onClose} position="top">
				<div className="space-y-8 w-full">
					<Link 
						href="/" 
						onClick={onClose}
						className="block text-center text-lg font-bold uppercase hover:text-brown transition"
					>
						Home
					</Link>
					<AudioCategories onClose={onClose} />
				</div>
			</Modal>
		</div>
	);
};