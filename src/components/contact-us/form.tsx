import { PlaceholderInput } from '@/services/contact/placeholder'
import { useLangStore } from '@/store/language'
import { useState } from 'react'

export const FormContact: React.FC = () => {
  const { lang } = useLangStore()
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    console.log('Submitted:', { name, email, message })
  }

  return (
    <form onSubmit={handleSubmit} className='mdMax:mx-auto mdMax:my-9 md:w-1/2'>
      <div className='mt-7'>
        <label className={styling.label} htmlFor='name'>
          {lang ? 'Name' : 'Nama'}
        </label>
        <input
          className={styling.input}
          id='name'
          type='text'
          placeholder={PlaceholderInput[lang ? 'en' : 'id'].name}
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </div>
      <div className='mt-7'>
        <label className={styling.label} htmlFor='email'>
          Email
        </label>
        <input
          className={styling.input}
          id='email'
          type='email'
          placeholder={PlaceholderInput[lang ? 'en' : 'id'].email}
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>
      <div className='mt-7'>
        <label className={styling.label} htmlFor='message'>
          {lang ? 'Message' : 'Pesan'}
        </label>
        <textarea
          className={`${styling.input} resize-none scroll-smooth`}
          id='message'
          required
          rows={5}
          style={{ height: '100px' }}
          placeholder={PlaceholderInput[lang ? 'en' : 'id'].desc}
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        />
      </div>
      <div className='flex items-center w-full justify-end'>
        <button className={styling.submit} type='submit'>
          {lang ? 'Submit' : 'Kirim'}
        </button>
      </div>
    </form>
  )
}

const styling = {
  label: 'block text-gray-700 text-sm mb-2 text-white font-poppins',
  input:
    'shadow appearance-none border-none rounded placeholder:opacity-50 w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline',
  submit:
    'hover:text-quaternary hover:bg-tertiary duration-200 text-secondary font-bold py-2 px-4 rounded-md mt-4 focus:outline-none focus:shadow-outline',
}
