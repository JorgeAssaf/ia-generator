'use client'

import Image from "next/image";
import { useState, useRef, HtmlHTMLAttributes } from "react";

const Form = ({ }) => {
  const [image, setImage] = useState<string>('');
  const ref = useRef<HTMLInputElement>(null);
  const API_TOKEN = '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'
  const handleGenerate = async (e: React.FormEvent) => {
    e.preventDefault()

    try {
      const timestamp = Date.now()

      const res = await fetch("https://api-inference.huggingface.co/models/SG161222/Realistic_Vision_V1.4", {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${API_TOKEN}`,
        },
        body: JSON.stringify({
          inputs: `mdjrny-v4 A space of a lonely ${ref.current!.value} with a neat floor very clean, scary atmosphere, realistic shaded, global illumination, 8k, soft ligh, unreal engine 5, sharp focus, image saturate, retro photo, very creepe, highly detailed, careful details, empty feelings, void, photography, Canon EOS, cinematic postprocessing, ray tracing "${timestamp}"`,
        }),


      })

      const data = await res.blob()
      const url = URL.createObjectURL(data)
      console.log(url);

      setImage(url)
      return url
    } catch (error) {
      console.log(error)
    }
  }
  return (
    <form onSubmit={(e) => handleGenerate(e)}>
      <label htmlFor='name'>Propmt</label>

      <input type='text' id='name' name='name' ref={ref} />
      {
        image && <Image src={image} alt="liminal space" width={500} height={500} />
      }
      <button type="submit">generar</button>
    </form>
  )
}

export default Form
