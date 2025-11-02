'use client';
import { ReactNode } from 'react';

interface ModalProps {
	isOpen: boolean;
	onClose: () => void;
	children: ReactNode;
	position?: 'center' | 'top' | 'top-right';
}

export const Modal = ({ isOpen, onClose, children, position = 'center' }: ModalProps) => {
	if (!isOpen) return null;

	const getPositionClasses = () => {
		switch (position) {
			case 'top':
				return 'flex items-start justify-center pt-20';
			case 'top-right':
				return 'flex items-start justify-end pt-20 pr-8';
			default:
				return 'flex items-center justify-center';
		}
	};

	return (
		<div className={`fixed inset-0 z-50 ${getPositionClasses()}`}>
			<div 
				className="absolute inset-0 bg-black/50" 
				onClick={onClose}
			/>
			<div className="relative bg-white rounded-lg p-6 max-w-md w-full z-10">
				{children}
			</div>
		</div>
	);
};