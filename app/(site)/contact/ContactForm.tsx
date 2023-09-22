'use client'

import axios from 'axios'
import { useState } from 'react'
import toast from 'react-hot-toast'
import { FaSpinner } from 'react-icons/fa6'

import { validateEmail } from '@/utils/formHelper'

export default function ContactForm()
{
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [message, setMessage] = useState('')
    // 0 = not sent/failed, 1 = sending, 2 = sent
    const [status, setStatus] = useState(0)

    const handleSubmit = () =>
    {
        if (!name)
        {
            toast.error('Please enter your name')
            return
        }

        if (!validateEmail(email))
        {
            toast.error('Please enter your email')
            return
        }

        if (!message)
        {
            toast.error('Please enter your message')
            return
        }

        setStatus(1)
        axios.post('/api/contact', { name, email, message })
            .then(() =>
            {
                toast.success('Message sent successfully! Check your email for a confirmation.')
                setStatus(2)
            })
            .catch(err =>
            {
                console.error(err)
                toast.error('Failed to send message. Please contact us via info@qlassichotel.com or try again.')
                setStatus(0)
            })
    }

    return <form className='mt-6 flex flex-col space-y-6'>

        {/* Full Name */}
        <div>
            <label
                htmlFor='full_name'
                className='block font-medium text-stone-800'
            >
                Full Name
            </label>
            <input
                name='full_name'
                type='text'
                placeholder='Your full name'
                className='block w-full px-4 py-2 text-lg border border-gray-300 rounded-md outline-theme-primary focus:ring-theme-primary focus:border-theme-primary'
                value={name}
                onChange={e => setName(e.target.value)}
                disabled={status !== 0}
            />
        </div>

        {/* Email */}
        <div>
            <label
                htmlFor='email'
                className='block font-medium text-stone-800'
            >
                Email
            </label>
            <input
                name='email'
                type='email'
                placeholder='Your email'
                className='block w-full px-4 py-2 text-lg border border-gray-300 rounded-md outline-theme-primary focus:ring-theme-primary focus:border-theme-primary'
                value={email}
                onChange={e => setEmail(e.target.value)}
                disabled={status !== 0}
            />
        </div>

        {/* Message */}
        <div>
            <label
                htmlFor='message'
                className='block font-medium text-stone-800'
            >
                Message
            </label>
            <textarea
                name='message'
                rows={10}
                placeholder='Type your message here... Include your phone number if you would like us to call you back.'
                className='block w-full px-4 py-2 text-lg border border-gray-300 rounded-md outline-theme-primary focus:ring-theme-primary focus:border-theme-primary'
                value={message}
                onChange={e => setMessage(e.target.value)}
                disabled={status !== 0}
            />
        </div>

        <button
            type='submit'
            className='bg-amber-400 disabled:bg-stone-300 px-8 py-3 rounded-full hover:brightness-110 transition-all duration-500 ease-in-out'
            disabled={status !== 0}
            onClick={e =>
            {
                e.preventDefault()
                handleSubmit()
            }}
        >
            {
                status === 1
                    ? <FaSpinner className='text-xl animate-spin mx-auto' />
                    : status === 2
                        ? <span className='font-semibold text-lg text-stone-900'>Sent!</span>
                        : <span className='font-semibold text-lg text-stone-900'>Send</span>
            }
        </button>
    </form>
}