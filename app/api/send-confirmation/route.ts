import { Resend } from 'resend';
import { NextRequest, NextResponse } from 'next/server';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { customerDetails, shippingDetails, items, totals, orderId } = body;
    
    if (!customerDetails?.email || !orderId) {
      return NextResponse.json({ error: 'Missing required fields' }, { status: 400 });
    }

    const { data, error } = await resend.emails.send({
      from: 'Audiophile Audio Store <onboarding@resend.dev>',
      to: [customerDetails.email],
      subject: `Order Confirmation from AudioPhile Audio Store - #${orderId}`,
      html: `
        <!DOCTYPE html>
        <html>
        <head>
          <meta charset="utf-8">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
          <title>Order Confirmation</title>
        </head>
        <body style="font-family: Arial, sans-serif; line-height: 1.6; color: #333; max-width: 600px; margin: 0 auto; padding: 20px;">
          <div style="background-color: #D87D4A; color: white; padding: 20px; text-align: center;">
            <h1 style="margin: 0; font-size: 24px;">Thank you for your order!</h1>
          </div>
          
          <div style="padding: 20px; background-color: #f9f9f9;">
            <p style="font-size: 18px; margin-bottom: 20px;">Hello ${customerDetails.name},</p>
            <p>We've received your order and it's being processed. Here are the details:</p>
            
            <div style="background-color: white; padding: 20px; margin: 20px 0; border-radius: 8px;">
              <h2 style="color: #D87D4A; margin-top: 0;">Order #${orderId}</h2>
              
              <h3>Items Ordered:</h3>
              ${items.map((item: any) => `
                <div style="display: flex; justify-content: space-between; align-items: center; padding: 10px 0; border-bottom: 1px solid #eee;">
                  <div>
                    <strong>${item.title}</strong><br>
                    <span style="color: #666;">$${item.price.toLocaleString()} x ${item.quantity}</span>
                  </div>
                  <div style="font-weight: bold;">$${(item.price * item.quantity).toLocaleString()}</div>
                </div>
              `).join('')}
              
              <div style="margin-top: 20px; padding-top: 20px; border-top: 2px solid #D87D4A;">
                <div style="display: flex; justify-content: space-between; margin-bottom: 10px;">
                  <span>Subtotal:</span>
                  <span>$${totals.subtotal.toLocaleString()}</span>
                </div>
                <div style="display: flex; justify-content: space-between; margin-bottom: 10px;">
                  <span>Shipping:</span>
                  <span>$${totals.shipping}</span>
                </div>
                <div style="display: flex; justify-content: space-between; margin-bottom: 10px;">
                  <span>VAT (Included):</span>
                  <span>$${totals.vat.toLocaleString()}</span>
                </div>
                <div style="display: flex; justify-content: space-between; font-size: 18px; font-weight: bold; color: #D87D4A;">
                  <span>Grand Total:</span>
                  <span>$${totals.grandTotal.toLocaleString()}</span>
                </div>
              </div>
            </div>
            
            <div style="background-color: white; padding: 20px; margin: 20px 0; border-radius: 8px;">
              <h3 style="color: #D87D4A; margin-top: 0;">Shipping Address:</h3>
              <p style="margin: 0;">
                ${customerDetails.name}<br>
                ${shippingDetails.address}<br>
                ${shippingDetails.city}, ${shippingDetails.zipCode}<br>
                ${shippingDetails.country}
              </p>
            </div>
            
            <div style="text-align: center; margin: 30px 0;">
              <a href="${process.env.NEXT_PUBLIC_BASE_URL}" 
                 style="background-color: #D87D4A; color: white; padding: 15px 30px; text-decoration: none; border-radius: 5px; font-weight: bold; display: inline-block;">
                Check More Products
              </a>
            </div>
            
            <div style="background-color: white; padding: 20px; margin: 20px 0; border-radius: 8px; text-align: center;">
              <h3 style="color: #D87D4A; margin-top: 0;">Need Help?</h3>
              <p>If you have any questions about your order, please contact our support team:</p>
              <p>
                <strong>Email:</strong> support@audiophile.com<br>
                <strong>Phone:</strong> +1 (555) 123-4567<br>
                <strong>Hours:</strong> Monday - Friday, 9AM - 6PM EST
              </p>
            </div>
            
            <div style="text-align: center; margin-top: 30px; padding-top: 20px; border-top: 1px solid #ddd; color: #666; font-size: 14px;">
              <p>Thank you for choosing Audiophile!</p>
              <p>© 2025 Audiophile. All rights reserved.</p>
            </div>
          </div>
        </body>
        </html>
      `,
    });

    if (error) {
      return NextResponse.json({ error }, { status: 400 });
    }

    return NextResponse.json({ data });
  } catch (error) {
    return NextResponse.json({ error }, { status: 500 });
  }
}