import Form from './components/Form'

export default async function Home() {
  return (
    <main>
      <div className='imagen h-screen'>
        <div className=' flex flex-col items-center justify-center h-full'>
          <div className='container mx-auto md:w-2/6 w-11/12 '>
            <h1 className='md:text-4xl text-3xl font-bold text-center text-white'>
              Liminal Space Images Generator
            </h1>
            <Form />
          </div>
        </div>
      </div>
    </main>
  )
}
