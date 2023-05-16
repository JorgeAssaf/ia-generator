
import Form from './components/Form'


export default async function Home() {



  return (
    <main className='flex min-h-screen flex-col items-center '>
      <h1 className='text-6xl font-bold text-gray-800'>
        Liminal Space Generator
      </h1>
      <div className='flex flex-col items-center'>
        <p className='text-2xl font-bold text-gray-800'>Coming Soon</p>
      </div>

      <div>
        <Form />
      </div>
    </main>
  )
}
