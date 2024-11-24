import React from 'react'

function Navbar() {
  return (
    <div className='h-36 bg-red-300 grid grid-cols-3 place-items-center'>
      <div></div>
      <div className="flex items-center bg-black h-12 rounded-[50px] overflow-hidden px-10">
        <input type='text' placeholder='Find friends' className='h-10 w-96 bg-transparent placeholder:text-red-600 placeholder:font-medium outline-none'></input>
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" color='red'><path fill="currentColor" d="M15.5 14h-.79l-.28-.27A6.47 6.47 0 0 0 16 9.5A6.5 6.5 0 1 0 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5S14 7.01 14 9.5S11.99 14 9.5 14"/></svg>
      </div>
      <div className="flex justify-end w-full pr-10 place-items-center">
        <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50"  viewBox="0 0 50 50" className='ml-28'><path fill="currentColor" d="M25.1 42c-9.4 0-17-7.6-17-17s7.6-17 17-17s17 7.6 17 17s-7.7 17-17 17m0-32c-8.3 0-15 6.7-15 15s6.7 15 15 15s15-6.7 15-15s-6.8-15-15-15"/><path fill="currentColor" d="m15.3 37.3l-1.8-.8c.5-1.2 2.1-1.9 3.8-2.7s3.8-1.7 3.8-2.8v-1.5c-.6-.5-1.6-1.6-1.8-3.2c-.5-.5-1.3-1.4-1.3-2.6c0-.7.3-1.3.5-1.7c-.2-.8-.4-2.3-.4-3.5c0-3.9 2.7-6.5 7-6.5c1.2 0 2.7.3 3.5 1.2c1.9.4 3.5 2.6 3.5 5.3c0 1.7-.3 3.1-.5 3.8c.2.3.4.8.4 1.4c0 1.3-.7 2.2-1.3 2.6c-.2 1.6-1.1 2.6-1.7 3.1V31c0 .9 1.8 1.6 3.4 2.2c1.9.7 3.9 1.5 4.6 3.1l-1.9.7c-.3-.8-1.9-1.4-3.4-1.9c-2.2-.8-4.7-1.7-4.7-4v-2.6l.5-.3s1.2-.8 1.2-2.4v-.7l.6-.3c.1 0 .6-.3.6-1.1c0-.2-.2-.5-.3-.6l-.4-.4l.2-.5s.5-1.6.5-3.6c0-1.9-1.1-3.3-2-3.3h-.6l-.3-.5c0-.4-.7-.8-1.9-.8c-3.1 0-5 1.7-5 4.5c0 1.3.5 3.5.5 3.5l.1.5l-.4.5c-.1 0-.3.3-.3.7c0 .5.6 1.1.9 1.3l.4.3v.5c0 1.5 1.3 2.3 1.3 2.4l.5.3v2.6c0 2.4-2.6 3.6-5 4.6c-1.1.4-2.6 1.1-2.8 1.6"/></svg>
        <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 0 24 24" className='ml-8'><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 17h2m0 0h10M7 17v-6a5 5 0 0 1 10 0v6m0 0h2M11.5 5.5V4a.5.5 0 0 1 1 0v1.5M13 20a1 1 0 1 1-2 0z"/></svg>
        <a href='/Login'className='ml-8 text-black font-medium hover:font-bold'>Login</a>
        <a href='/Sign-up'className='ml-8 text-red-500 font-medium hover:font-bold'>Sign Up</a>
      </div>
    </div>
    
  )
}

export default Navbar