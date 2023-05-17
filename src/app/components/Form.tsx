'use client'
import Image from 'next/image'
import { useState, useRef } from 'react'

const Form = () => {
  const [image, setImage] = useState<string>('')
  const [loading, setLoading] = useState<boolean>(false)
  const ref = useRef<HTMLInputElement>(null)

  const handleGenerate = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!ref.current?.value.trim()) return
    try {
      setLoading(true)
      const timestamp = Date.now()
      const res = await fetch(
        'https://api-inference.huggingface.co/models/SG161222/Realistic_Vision_V1.4',
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${process.env.NEXT_PUBLIC_API_TOKEN}`,
          },
          body: JSON.stringify({
            inputs: `mdjrny-v4 A space of a lonely ${ref.current?.value.trim()} with a neat floor very clean, scary atmosphere, real life,realistic, global illumination, 4k, soft ligh, unreal engine 5, sharp focus, image saturate, retro photo, very creepe, highly detailed, careful details, empty feelings, void, photography, Canon EOS, cinematic postprocessing, ray tracing "${timestamp}"`,
          }),
        }
      )

      const data = await res.blob()
      const url = URL.createObjectURL(data)

      setImage(url)
      setLoading(false)
      return url
    } catch (error) { }
  }

  return (
    <form className='mt-10 text-white' onSubmit={(e) => handleGenerate(e)}>
      <label className='font-semibold' htmlFor='name'>
        Prompt:{' '}
        <span className='font-medium'>
          Ej. School, Hospital, Garden, SuperMarket
        </span>
      </label>

      <input
        type='text'
        id='name'
        name='name'
        ref={ref}
        className='border-2 text-black my-2 border-gray-300 rounded-lg p-2 mb-4 w-full'
      />
      <div className='grid place-content-center '>
        {loading ? (
          <div className='dot-wave m-16'>
            <div className='dot-wave__dot'></div>
            <div className='dot-wave__dot'></div>
            <div className='dot-wave__dot'></div>
            <div className='dot-wave__dot'></div>
          </div>
        ) : (
          image && (

            <Image className='w-full mx-auto' src={image} width={300} height={500} alt='Limnal Image' />

          )
        )}
      </div>
      <div className='flex mt-5 justify-center gap-5 '>
        <button className=' py-2 bg-neutral-700 px-4 md:px-6 rounded-lg shadow-lg'>
          {!image ? 'Generate Image' : 'Other Image'}
        </button>
        {image && (
          <a
            className=' bg-neutral-700 py-2 px-6 rounded-lg shadow-lg'
            href={image}
            download
          >
            Download
          </a>
        )}
      </div>
    </form>
  )
}

export default Form
