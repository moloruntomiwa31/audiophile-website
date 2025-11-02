'use client';
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { ThankYouModal } from "../components/checkout/ThankYouModal";
import { checkoutSchema, type CheckoutFormData } from "../schema/checkout";

export default function CheckoutPage() {
	const [isThankYouOpen, setIsThankYouOpen] = useState(false);
	const [isSubmitting, setIsSubmitting] = useState(false);

	const {
		register,
		handleSubmit,
		watch,
		formState: { errors },
	} = useForm<CheckoutFormData>({
		resolver: zodResolver(checkoutSchema),
		defaultValues: {
			paymentMethod: "e-money",
		},
	});

	const paymentMethod = watch("paymentMethod");

	const onSubmit = async (data: CheckoutFormData) => {
		if (isSubmitting) return;
		setIsSubmitting(true);
		
		try {
			// Simulate API call
			await new Promise(resolve => setTimeout(resolve, 1000));
			setIsThankYouOpen(true);
		} catch (error) {
			console.error("Submission error:", error);
		} finally {
			setIsSubmitting(false);
		}
	};

	return (
		<div className="bg-lightGray min-h-screen py-8">
			<div className="container mx-auto max-w-6xl px-4">
				<Link href="/" className="text-black/50 mb-8 inline-block">
					Go back
				</Link>
				
				<form onSubmit={handleSubmit(onSubmit)} className="flex flex-col lg:flex-row gap-8">
					{/* Checkout Form */}
					<div className="lg:w-2/3 bg-white rounded-lg p-8">
						<h1 className="text-3xl font-bold uppercase mb-8">Checkout</h1>
						
						{/* Billing Details */}
						<div className="mb-8">
							<h2 className="text-brown uppercase font-bold text-sm mb-4 tracking-wide">Billing Details</h2>
							<div className="grid grid-cols-1 md:grid-cols-2 gap-4">
								<div>
									<label className="block text-xs font-bold mb-2">Name</label>
									<input 
										{...register("name")}
										type="text" 
										className={`w-full border rounded p-3 text-sm focus:ring-1 focus:outline-none ${
											errors.name ? 'border-red-500 focus:border-red-500 focus:ring-red-500' : 'border-gray-300 focus:border-brown focus:ring-brown'
										}`}
										placeholder="Alexei Ward" 
										aria-invalid={errors.name ? 'true' : 'false'}
										aria-describedby={errors.name ? 'name-error' : undefined}
									/>
									{errors.name && (
										<p id="name-error" className="text-red-500 text-xs mt-1" role="alert">
											{errors.name.message}
										</p>
									)}
								</div>
								<div>
									<label className="block text-xs font-bold mb-2">Email Address</label>
									<input 
										{...register("email")}
										type="email" 
										className={`w-full border rounded p-3 text-sm focus:ring-1 focus:outline-none ${
											errors.email ? 'border-red-500 focus:border-red-500 focus:ring-red-500' : 'border-gray-300 focus:border-brown focus:ring-brown'
										}`}
										placeholder="alexeiward@mail.com" 
										aria-invalid={errors.email ? 'true' : 'false'}
										aria-describedby={errors.email ? 'email-error' : undefined}
									/>
									{errors.email && (
										<p id="email-error" className="text-red-500 text-xs mt-1" role="alert">
											{errors.email.message}
										</p>
									)}
								</div>
								<div>
									<label className="block text-xs font-bold mb-2">Phone Number</label>
									<input 
										{...register("phone")}
										type="tel" 
										className={`w-full border rounded p-3 text-sm focus:ring-1 focus:outline-none ${
											errors.phone ? 'border-red-500 focus:border-red-500 focus:ring-red-500' : 'border-gray-300 focus:border-brown focus:ring-brown'
										}`}
										placeholder="+1 202-555-0136" 
										aria-invalid={errors.phone ? 'true' : 'false'}
										aria-describedby={errors.phone ? 'phone-error' : undefined}
									/>
									{errors.phone && (
										<p id="phone-error" className="text-red-500 text-xs mt-1" role="alert">
											{errors.phone.message}
										</p>
									)}
								</div>
							</div>
						</div>

						{/* Shipping Info */}
						<div className="mb-8">
							<h2 className="text-brown uppercase font-bold text-sm mb-4 tracking-wide">Shipping Info</h2>
							<div className="grid grid-cols-1 md:grid-cols-2 gap-4">
								<div className="md:col-span-2">
									<label className="block text-xs font-bold mb-2">Address</label>
									<input 
										{...register("address")}
										type="text" 
										className={`w-full border rounded p-3 text-sm focus:ring-1 focus:outline-none ${
											errors.address ? 'border-red-500 focus:border-red-500 focus:ring-red-500' : 'border-gray-300 focus:border-brown focus:ring-brown'
										}`}
										placeholder="1137 Williams Avenue" 
										aria-invalid={errors.address ? 'true' : 'false'}
										aria-describedby={errors.address ? 'address-error' : undefined}
									/>
									{errors.address && (
										<p id="address-error" className="text-red-500 text-xs mt-1" role="alert">
											{errors.address.message}
										</p>
									)}
								</div>
								<div>
									<label className="block text-xs font-bold mb-2">ZIP Code</label>
									<input 
										{...register("zipCode")}
										type="text" 
										className={`w-full border rounded p-3 text-sm focus:ring-1 focus:outline-none ${
											errors.zipCode ? 'border-red-500 focus:border-red-500 focus:ring-red-500' : 'border-gray-300 focus:border-brown focus:ring-brown'
										}`}
										placeholder="10001" 
										aria-invalid={errors.zipCode ? 'true' : 'false'}
										aria-describedby={errors.zipCode ? 'zipCode-error' : undefined}
									/>
									{errors.zipCode && (
										<p id="zipCode-error" className="text-red-500 text-xs mt-1" role="alert">
											{errors.zipCode.message}
										</p>
									)}
								</div>
								<div>
									<label className="block text-xs font-bold mb-2">City</label>
									<input 
										{...register("city")}
										type="text" 
										className={`w-full border rounded p-3 text-sm focus:ring-1 focus:outline-none ${
											errors.city ? 'border-red-500 focus:border-red-500 focus:ring-red-500' : 'border-gray-300 focus:border-brown focus:ring-brown'
										}`}
										placeholder="New York" 
										aria-invalid={errors.city ? 'true' : 'false'}
										aria-describedby={errors.city ? 'city-error' : undefined}
									/>
									{errors.city && (
										<p id="city-error" className="text-red-500 text-xs mt-1" role="alert">
											{errors.city.message}
										</p>
									)}
								</div>
								<div>
									<label className="block text-xs font-bold mb-2">Country</label>
									<input 
										{...register("country")}
										type="text" 
										className={`w-full border rounded p-3 text-sm focus:ring-1 focus:outline-none ${
											errors.country ? 'border-red-500 focus:border-red-500 focus:ring-red-500' : 'border-gray-300 focus:border-brown focus:ring-brown'
										}`}
										placeholder="United States" 
										aria-invalid={errors.country ? 'true' : 'false'}
										aria-describedby={errors.country ? 'country-error' : undefined}
									/>
									{errors.country && (
										<p id="country-error" className="text-red-500 text-xs mt-1" role="alert">
											{errors.country.message}
										</p>
									)}
								</div>
							</div>
						</div>

						{/* Payment Details */}
						<div>
							<h2 className="text-brown uppercase font-bold text-sm mb-4 tracking-wide">Payment Details</h2>
							<div className="grid gap-4">
								<div className="flex justify-between">
									<label className="block text-xs font-bold mb-2">Payment Method</label>
									<div className="space-y-2">
										<label className="flex items-center border rounded p-3 focus-within:border-brown">
											<input 
												{...register("paymentMethod")}
												type="radio" 
												value="e-money"
												className="mr-3 text-brown focus:ring-brown" 
											/>
											<span className="text-sm">e-Money</span>
										</label>
										<label className="flex items-center border rounded p-3 focus-within:border-brown">
											<input 
												{...register("paymentMethod")}
												type="radio" 
												value="cash"
												className="mr-3 text-brown focus:ring-brown" 
											/>
											<span className="text-sm">Cash on Delivery</span>
										</label>
									</div>
								</div>
								{paymentMethod === "e-money" && (
									<div className="space-y-4 grid grid-cols-2 gap-4">
										<div>
											<label className="block text-xs font-bold mb-2">e-Money Number</label>
											<input 
												{...register("emoneyNumber")}
												type="text" 
												className={`w-full border rounded p-3 text-sm focus:ring-1 focus:outline-none ${
													errors.emoneyNumber ? 'border-red-500 focus:border-red-500 focus:ring-red-500' : 'border-gray-300 focus:border-brown focus:ring-brown'
												}`}
												placeholder="238521993" 
												aria-invalid={errors.emoneyNumber ? 'true' : 'false'}
												aria-describedby={errors.emoneyNumber ? 'emoneyNumber-error' : undefined}
											/>
											{errors.emoneyNumber && (
												<p id="emoneyNumber-error" className="text-red-500 text-xs mt-1" role="alert">
													{errors.emoneyNumber.message}
												</p>
											)}
										</div>
										<div>
											<label className="block text-xs font-bold mb-2">e-Money PIN</label>
											<input 
												{...register("emoneyPin")}
												type="text" 
												className={`w-full border rounded p-3 text-sm focus:ring-1 focus:outline-none ${
													errors.emoneyPin ? 'border-red-500 focus:border-red-500 focus:ring-red-500' : 'border-gray-300 focus:border-brown focus:ring-brown'
												}`}
												placeholder="6891" 
												aria-invalid={errors.emoneyPin ? 'true' : 'false'}
												aria-describedby={errors.emoneyPin ? 'emoneyPin-error' : undefined}
											/>
											{errors.emoneyPin && (
												<p id="emoneyPin-error" className="text-red-500 text-xs mt-1" role="alert">
													{errors.emoneyPin.message}
												</p>
											)}
										</div>
									</div>
								)}
							</div>
						</div>
					</div>

					{/* Order Summary */}
					<div className="lg:w-1/3 h-fit bg-white rounded-lg p-8">
						<h2 className="text-lg font-bold uppercase mb-6">Summary</h2>
						
						<div className="space-y-4 mb-6">
							<div className="flex items-center gap-4">
								<div className="bg-lightGray p-2 rounded">
									<Image src="/home/headphones/xx99-markii.png" width={50} height={50} alt="Product" />
								</div>
								<div className="flex-1">
									<h3 className="font-bold text-sm">XX99 MK II</h3>
									<p className="text-black/50 text-sm">$2,999</p>
								</div>
								<span className="text-black/50 text-sm">x1</span>
							</div>
						</div>

						<div className="space-y-2 mb-6">
							<div className="flex justify-between">
								<span className="text-black/50 uppercase text-sm">Total</span>
								<span className="font-bold">$5,396</span>
							</div>
							<div className="flex justify-between">
								<span className="text-black/50 uppercase text-sm">Shipping</span>
								<span className="font-bold">$50</span>
							</div>
							<div className="flex justify-between">
								<span className="text-black/50 uppercase text-sm">VAT (Included)</span>
								<span className="font-bold">$1,079</span>
							</div>
							<div className="flex justify-between pt-2 border-t">
								<span className="text-black/50 uppercase text-sm">Grand Total</span>
								<span className="font-bold text-brown text-lg">$5,446</span>
							</div>
						</div>

						<button 
							type="submit"
							disabled={isSubmitting}
							className={`w-full transition p-3 text-white uppercase text-sm ${
								isSubmitting ? 'bg-gray-400 cursor-not-allowed' : 'bg-brown hover:bg-peach'
							}`}
						>
							{isSubmitting ? 'Processing...' : 'Continue & Pay'}
						</button>
					</div>
				</form>
			</div>
			<ThankYouModal isOpen={isThankYouOpen} onClose={() => setIsThankYouOpen(false)} />
		</div>
	);
}