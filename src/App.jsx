import React from 'react'

const App = () => {
  return (
    <>
      <div className="navbar flex justify-between items-center mt-3 px-8 md:px-10 lg:px-[110px]">
        <div className='text-4xl'>Logo</div>
        <div className='about'>
          <ul className='md:flex gap-10 text-2xl pt-3 hidden'>
            <li className='cursor-pointer'>Home </li>
            <li className='cursor-pointer'>About</li>
            <li className='cursor-pointer'>Contact</li>
            <li className='cursor-pointer'>Help</li>
          </ul>
        </div>
        <div className='button-holder flex gap-10'>
          <button className='px-4 border border-transparent py-1 mt-3 rounded-md bg-[#00f] text-white hover:bg-transparent cursor-pointer hover:text-black button'>Sign In</button>
          <button className='px-4 border border-transparent py-1 mt-3 rounded-md bg-[#f00] text-white hover:bg-transparent cursor-pointer hover:text-black button'>Sign up</button>
        </div>
      </div>
      <section className='mainSection mt-20 mb-10'>
        <div className="flex flex-col lg:flex-row items-center justify-between px-8 md:px-10 lg:px-[110px]">
          <div>
            <h1 className='text-4xl font-semibold'>What can Our site do?</h1>
            <h2 className='text-3xl mt-10 pl-10'>Why to use our site?</h2>
            <p className='lg:w-[500px] text-slate-600 mt-10'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aspernatur mollitia quam dicta suscipit itaque architecto repudiandae praesentium vitae dolore necessitatibus porro ad voluptatem odio, eum commodi fugit beatae quidem atque officiis corporis, sint cupiditate. Non, officiis atque. Perferendis quos molestiae, placeat, doloribus illo tempore illum, ratione optio magnam similique voluptatem?</p>
            <div className='flex gap-10 mt-10'>
            <button className='px-4 border border-transparent py-1 mt-3 rounded-md bg-[#00f] text-white hover:bg-transparent cursor-pointer hover:text-black button'>Sign In</button>
            <button className='px-4 border border-transparent py-1 mt-3 rounded-md bg-[#f00] text-white hover:bg-transparent cursor-pointer hover:text-black button'>Sign up</button>   
            </div>
          </div>
          <div className='mt-14 lg:mt-0'>
            <img src="pinguuin.png" alt="" className='aspect-[3/2] w-[400px] h-[300px]'/>
          </div>
        </div>
      </section>
      <section className="users px-8 md:px-10 lg:px-[110px] mb-10 section-border">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          <div className='card flex flex-col gap-5 justify-center items-center py-7'>
            <h1 className='text-3xl font-bold'>150+ users for now</h1>
            <h1 className='text-xl font-semibold'>1k+ granted</h1>
            <p className='text-slate-600'>Join community for comforts</p>
            <button className='join'>Join Us Now</button>
          </div>
          <div className='card flex flex-col gap-5 justify-center items-center py-7'>
          <h1 className='text-3xl font-bold'>150+ users for now</h1>
            <h1 className='text-xl font-semibold'>1k+ granted</h1>
            <p className='text-slate-600'>Join community for comforts</p>
            <button className='join'>Join Us Now</button>
          </div>
          <div className='card flex flex-col gap-5 justify-center items-center py-7'>
          <h1 className='text-3xl font-bold'>150+ users for now</h1>
            <h1 className='text-xl font-semibold'>1k+ granted</h1>
            <p className='text-slate-600'>Join community for comforts</p>
            <button className='join'>Join Us Now</button>
          </div>
          <div className='card flex flex-col gap-5 justify-center items-center '>
          <h1 className='text-3xl font-bold'>150+ users for now</h1>
            <h1 className='text-xl font-semibold'>1k+ granted</h1>
            <p className='text-slate-600'>Join community for comforts</p>
            <button className='join'>Join Us Now</button>
          </div>
        </div>
      </section>
      <section className="back  mb-10">
        <h1 className='text-white text-3xl pt-10 px-8 md:px-10 lg:px-[110px]'><span className='border-bottom '>Our</span> Services</h1>
        <div className="flex flex-col lg:flex-row gap-10 px-8 md:px-10 lg:px-[110px] justify-center items-center pb-10">
        <div className="card flex flex-col gap-4 border w-[350px] pb-3 mt-10">
          <img src="pinguuin.png" alt="" className='aspect-[3/2] w-[350px] h-[200px]'/>
          <h1 className='text-2xl pl-2 text-white font-bold'>Welcome For Penguin</h1>
          <h3 className='text-xl text-white pl-8'>Stock: 86</h3>
          <h5 className='text-md text-white pl-2'>Already for Sale</h5>
          <p className='w-[300px] text-white pl-2'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Et ex veritatis assumenda cumque voluptatibus, eum inventore laudantium eaque. Ullam, sequi.</p>
          <button className='join w-[300px] ml-5'>Join Us Now</button>
        </div>
        <div className="card flex flex-col gap-4 border w-[350px] pb-3 mt-10">
          <img src="pinguuin.png" alt="" className='aspect-[3/2] w-[350px] h-[200px]'/>
          <h1 className='text-2xl pl-2 text-white font-bold'>Welcome For Penguin</h1>
          <h3 className='text-xl text-white pl-8'>Stock: 86</h3>
          <h5 className='text-md text-white pl-2'>Already for Sale</h5>
          <p className='w-[300px] text-white pl-2'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Et ex veritatis assumenda cumque voluptatibus, eum inventore laudantium eaque. Ullam, sequi.</p>
          <button className='join w-[300px] ml-5'>Join Us Now</button>
        </div>       
        <div className="card lg:flex hidden flex-col gap-4 border w-[350px] pb-3 mt-10">
          <img src="pinguuin.png" alt="" className='aspect-[3/2] w-[350px] h-[200px]'/>
          <h1 className='text-2xl pl-2 text-white font-bold'>Welcome For Penguin</h1>
          <h3 className='text-xl text-white pl-8'>Stock: 86</h3>
          <h5 className='text-md text-white pl-2'>Already for Sale</h5>
          <p className='w-[300px] text-white pl-2'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Et ex veritatis assumenda cumque voluptatibus, eum inventore laudantium eaque. Ullam, sequi.</p>
          <button className='join w-[300px] ml-5'>Join Us Now</button>
        </div>
        </div>
      </section>
    </>
  )
}

export default App