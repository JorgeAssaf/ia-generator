'use client'
import Image from 'next/image'
import { useState, useRef } from 'react'
const Form = () => {
  const [image, setImage] = useState<string>('')
  const [error, setError] = useState<boolean>(false)
  const [loading, setLoading] = useState<boolean>(false)
  const ref = useRef<HTMLInputElement>(null)

  const handleGenerate = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!ref.current?.value.trim()) return
    try {
      setLoading(true)
      const timestamp = Date.now()
      const res = await fetch(
        'https://api-inference.huggingface.co/models/stabilityai/stable-diffusion-2-1',
        {
          method: 'POST',
          headers: {
            Authorization: `Bearer ${process.env.NEXT_PUBLIC_API_TOKEN}`,
          },
          body: JSON.stringify({
            inputs: `mdjrny-v4 A space of a lonely ${ref.current?.value
              .trim()
              .toLowerCase()} with a neat floor very clean, scary atmosphere, real life, realistic, global illumination, 8k, soft ligh, unreal engine 5, sharp focus, image saturate, retro photo, very creepe, highly detailed, careful details, empty feelings, void, photography, blurry, nostalgic, Canon EOS, cinematic postprocessing, ray tracing "${timestamp}"`,
          }),
        },
      )

      if (res.status !== 200) {
        setLoading(false)
        setError(true)
        return
      }
      setError(false)
      const data = await res.blob()
      const url = URL.createObjectURL(data)
      setImage(url)
      setLoading(false)
      return url
    } catch (e) {
      console.log(e)
    }
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
        ) : error ? (
          <div className='text-center text-red-500 font-semibold'>
            <p>Something went wrong</p>
            <p>Try again later</p>
          </div>
        ) : (
          image && (
            <Image
              src={image}
              width={300}
              height={500}
              className='w-full h-[500px] rounded-lg shadow-lg'
              alt='Liminal Space Image'
            />
          )
        )}
      </div>
      <div className='flex mt-5 justify-center gap-5 '>
        <button className=' disabled:text-neutral-400/40 py-2 bg-neutral-700 px-4 md:px-6 rounded-lg shadow-lg'>
          {!image ? 'Generate Image' : 'Other Image'}
        </button>
        {error
          ? null
          : image && (
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
