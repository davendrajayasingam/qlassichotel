import { NextRequest, NextResponse } from 'next/server'
import { sendEmail } from '@/utils/nodemailerHelper'

export async function POST(req: NextRequest)
{
    const { name, email, message } = await req.json()

    await Promise.all([
        // send to management
        sendEmail({
            to: ['hello@davendra.me'],
            replyTo: [email],
            subject: `QlassicHotel.com | New Message from ${name}`,
            text: message,
            html: `<p>${message}</p>`
        }),
        // send confirmation to sender
        sendEmail({
            to: [email],
            replyTo: ['info@qlassichotel.com'],
            subject: 'QlassicHotel.com | Message Confirmation',
            text: `Dear ${name}, thank you for contacting us! We will get back to you as soon as possible.`,
            html: `<p>Dear ${name}, <br/><br/>Thank you for contacting us!<br/>We will get back to you as soon as possible.<br/><br/>Best regards,<br/>Management @ Qlassic Hotel</p>`
        })
    ])

    return NextResponse.json('ok')
}