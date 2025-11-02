import { z } from "zod";

export const checkoutSchema = z.object({
	name: z.string().min(1, "Name is required").min(2, "Name must be at least 2 characters"),
	email: z.string().min(1, "Email is required").email("Invalid email address"),
	phone: z.string().min(1, "Phone number is required").regex(/^\+?[1-9]\d{1,14}$/, "Invalid phone number"),
	address: z.string().min(1, "Address is required").min(5, "Address must be at least 5 characters"),
	zipCode: z.string().min(1, "ZIP code is required").regex(/^\d{5}(-\d{4})?$/, "Invalid ZIP code"),
	city: z.string().min(1, "City is required").min(2, "City must be at least 2 characters"),
	country: z.string().min(1, "Country is required").min(2, "Country must be at least 2 characters"),
	paymentMethod: z.enum(["e-money", "cash"] as const, { message: "Payment method is required" }),
	emoneyNumber: z.string().optional(),
	emoneyPin: z.string().optional(),
}).refine((data) => {
	if (data.paymentMethod === "e-money") {
		return data.emoneyNumber && data.emoneyPin;
	}
	return true;
}, {
	message: "e-Money details are required when e-Money is selected",
	path: ["emoneyNumber"],
});

export type CheckoutFormData = z.infer<typeof checkoutSchema>;