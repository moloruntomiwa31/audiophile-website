import { create } from 'zustand';

export interface CartItem {
	id: string;
	title: string;
	price: number;
	image: string;
	quantity: number;
}

interface CartStore {
	items: CartItem[];
	isOpen: boolean;
	addItem: (item: Omit<CartItem, 'quantity'>) => void;
	removeItem: (id: string) => void;
	updateQuantity: (id: string, quantity: number) => void;
	clearCart: () => void;
	openCart: () => void;
	closeCart: () => void;
	getTotalItems: () => number;
	getTotalPrice: () => number;
}

export const useCartStore = create<CartStore>((set, get) => ({
	items: [],
	isOpen: false,
	addItem: (item) => set((state) => {
		const existingItem = state.items.find(i => i.id === item.id);
		if (existingItem) {
			return {
				items: state.items.map(i => 
					i.id === item.id ? { ...i, quantity: i.quantity + 1 } : i
				)
			};
		}
		return { items: [...state.items, { ...item, quantity: 1 }] };
	}),
	removeItem: (id) => set((state) => ({
		items: state.items.filter(item => item.id !== id)
	})),
	updateQuantity: (id, quantity) => set((state) => ({
		items: quantity <= 0 
			? state.items.filter(item => item.id !== id)
			: state.items.map(item => 
				item.id === id ? { ...item, quantity } : item
			)
	})),
	clearCart: () => set({ items: [] }),
	openCart: () => set({ isOpen: true }),
	closeCart: () => set({ isOpen: false }),
	getTotalItems: () => get().items.reduce((total, item) => total + item.quantity, 0),
	getTotalPrice: () => get().items.reduce((total, item) => total + (item.price * item.quantity), 0),
}));