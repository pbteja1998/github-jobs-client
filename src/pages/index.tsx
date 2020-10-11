import { Button } from '../components'

export default function Home() {
  return (
    <>
      <h1 className='text-2xl bg-green-100'>Hello World</h1>
      <p className='text-primary ml-2.5'>Accent Color Text</p>
      <Button>Button 1</Button>
      <Button primary={true}>Button 1</Button>
    </>
  )
}
