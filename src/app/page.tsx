import Form from './components/Form'

export default async function Home() {
  return (
    <main >
      <div className='imagen h-screen'>
        <div className=' flex flex-col items-center justify-center h-full'>
          <div className='container mx-auto w-2/6 '>
            <h1 className='text-4xl font-bold text-center text-white'>
              Liminal Spaces Images Generator
            </h1>
            <Form />
          </div>
        </div>
      </div>
    </main>
  )
}
