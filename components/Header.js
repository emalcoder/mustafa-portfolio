const Header = () => {
  return (
    <div className='flex items-baseline justify-between py-4'>
      <div>
        <img src='./images/logo.png' alt='' className='w-36' />
      </div>
      <ul className='flex items-center justify-center'>
        <li className='text-base font-medium capitalize mr-12 last:mr-0'>home</li>
        <li className='text-base font-medium capitalize mr-12 last:mr-0'>about</li>
        <li className='text-base font-medium capitalize mr-12 last:mr-0'>projects</li>
        <li className='text-base font-medium capitalize mr-12 last:mr-0'>contact me</li>
      </ul>
    </div>
  )
}
export default Header
