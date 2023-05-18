import Form from './components/Form'

export default async function Home() {
  return (
    <main
      className='container w-11/12 mx-auto'>
      <h1 className='md:text-4xl text-3xl mt-10 font-bold text-center text-white'>
        Liminal Space Images Generator
      </h1>
      <Form />
    </main>
  )
}
