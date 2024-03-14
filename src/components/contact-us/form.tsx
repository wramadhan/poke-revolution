import { PlaceholderInput } from '@/services/contact/placeholder'
import { Tooltip } from '@/services/contact/tooltip'
import { useFormEmail } from '@/store/formEmail'
import { useLangStore } from '@/store/language'

type FormProps = {
  onSubmit: () => void
}

export const FormContact: React.FC<FormProps> = ({ onSubmit }) => {
  const { name, email, message, setName, setEmail, setMessage } = useFormEmail()
  const disabled = !name || !email || !message
  const { lang } = useLangStore()
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    onSubmit()
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
        <button
          title={
            Tooltip[lang ? 'en' : 'id']['submit'][disabled ? 'false' : 'true']
          }
          disabled={disabled}
          className={`hover:text-quaternary ${
            disabled ? '' : 'hover:bg-tertiary'
          } duration-200 text-secondary font-bold py-2 px-4 rounded-md mt-4 focus:outline-none focus:shadow-outline disabled:cursor-not-allowed disabled:text-opacity-70`}
          type='submit'
        >
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
}
