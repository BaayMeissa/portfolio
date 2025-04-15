import React from 'react'
import Button from './button'

const Projects = () => {
  return (
    <div>
      <h1 className="text-center sm:text-xl px-5 sm:px-6 mb-11">Here you will find some of the personal and clients projects that I created with each project containing its own case study</h1>
      <h1 className='mb-[-50px] text-center sm:hidden sm:text-2xl text-xl'>Nemmeeku Chat App</h1>
        <div className='flex sm:flex-row flex-col items-center sm:gap-20 sm:px-32 px-8'>
            <img src="/Nemmeeku chat app-Photoroom.png" className='sm:w-[700px] w-[400px]' alt="" />
            <div className='flex flex-col gap-14'>
            <h1 className='hidden sm:block sm:text-left text-center sm:text-2xl text-xl'>Nemmeeku Chat App</h1>
            <p>Nemmeeku is a real-time messaging application that I developed to master WebSockets and bidirectional communication. It allows users to exchange instant messages through a simple, smooth, and responsive interface. <br />
            ✨ Key Features: <br />
            ✅Creation of chat rooms or participation in a general chat. <br />

            ✅Real-time sending and receiving of messages. <br />

            ✅Display of online users.<br />

            ✅Visual notifications for new messages.<br />

            ✅Responsive design (mobile and desktop).</p>
            <Button text="Check"/>
            </div>
            
            </div>



      <h1 className='mb-[-50px] text-center sm:hidden sm:text-2xl text-xl'>This portfolio</h1>
        <div className='flex sm:flex-row flex-col items-center sm:gap-20 sm:px-32 px-8'>
            <img src="/Ecommerce-Photoroom.png" className='sm:w-[700px] w-[400px]' alt="" />
            <div className='flex flex-col gap-14'>
            <h1 className='hidden sm:block sm:text-left text-center sm:text-2xl text-xl'>This portfolio</h1>
            <p>
            This portfolio showcases my expertise in designing and developing modern, intuitive projects. It highlights the use of powerful tools such as Next.js for building dynamic and optimized web applications, Tailwind CSS for creating elegant and responsive designs, and DaisyUI for leveraging pre-built components that enable fast and efficient development. Each project reflects my ability to integrate cutting-edge technologies to deliver high-quality user experiences.</p>
            <Button text="Check"/>
            </div>
            
            </div>



      <h1 className='mb-[-50px] text-center sm:hidden sm:text-2xl text-xl'>This portfolio</h1>
        <div className='flex sm:flex-row flex-col items-center sm:gap-20 sm:px-32 px-8'>
            <img src="/Portfolio-project-Photoroom.png" className='sm:w-[700px] w-[400px]' alt="" />
            <div className='flex flex-col gap-14'>
            <h1 className='hidden sm:block sm:text-left text-center sm:text-2xl text-xl'>This portfolio</h1>
            <p>
            This portfolio showcases my expertise in designing and developing modern, intuitive projects. It highlights the use of powerful tools such as Next.js for building dynamic and optimized web applications, Tailwind CSS for creating elegant and responsive designs, and DaisyUI for leveraging pre-built components that enable fast and efficient development. Each project reflects my ability to integrate cutting-edge technologies to deliver high-quality user experiences.</p>
            <Button text="Check"/>
            </div>
            
            </div>
        
        
    </div>
  )
}

export default Projects
