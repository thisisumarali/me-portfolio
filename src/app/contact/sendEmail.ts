'use server'
import { Resend } from 'resend'

const resend = new Resend(process.env.RESEND_API_KEY);

export const sendEmail = async (formData: FormData) => {
    resend.emails.send({
        from: "onboarding@resend.dev",
        to: "umeralikhan7864@gmail.com",
        subject: "Message from contact form",
        text:"hello world!"
    })
}