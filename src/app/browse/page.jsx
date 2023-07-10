'use client'
import React from 'react'
import {MagnifyingGlassIcon } from '@heroicons/react/24/solid'
import * as Accordion from '@radix-ui/react-accordion';
import {ChevronDownIcon} from '@heroicons/react/24/solid'
import {Header} from '../../component/header'
import Link from 'next/link';

const page = () => {
  return (
    <div className='h-screen w-screen flex flex-col items-center '>
<Header/>
    <div className='h-[80vh]  justify-center'>
      

<div className='relative w-[500px]'>
        <input
        onChange={(e) => setSearch(e.target.value)}
        className='font-semibold border-white placeholder:text-black flex px-3 py-2 m-5 rounded-md border-2 w-[500px]'
        placeholder='Search ' 
        type="text" />
        <MagnifyingGlassIcon className='text-black cursor-pointer h-5 w-5 absolute right-5 top-3'/>

</div>
<div className='relative  h-[400px] w-[500px] flex flex-col text-black font-bold items-center bg-lime-300'>
  Filter by:
  <Accordion.Root 
      className='grid gap-8'
      type='single' 
      collapsible >
        <Accordion.Item 
        className='bg-white w-[400px] py-1 font-semibold'
        value='item-1'>
            <Accordion.Trigger className='px-2 flex justify-between items-center w-full'>
                <p>College </p>
                <ChevronDownIcon className='w-5'/>
            </Accordion.Trigger>
            <Accordion.Content className='px-2 py-1 border-t-2 border-black'>

               
            </Accordion.Content>
        </Accordion.Item>
        <Accordion.Item 
        className='bg-white w-[400px] py-1 font-semibold'
        value='item-2'>
            <Accordion.Trigger className='px-2 flex justify-between items-center w-full'>
                <p>School </p>
                <ChevronDownIcon className='w-5'/>
            </Accordion.Trigger>
            <Accordion.Content className='px-2 py-1 border-t-2 border-black'>

            </Accordion.Content>
        </Accordion.Item>
        <Accordion.Item 
        className='bg-white w-[400px] py-1 font-semibold'
        value='item-3'>
            <Accordion.Trigger className='px-2 flex justify-between items-center w-full'>
                <p>Department </p>
                <ChevronDownIcon className='w-5'/>
            </Accordion.Trigger>
            <Accordion.Content className='px-2 py-1 border-t-2 border-black'>

            </Accordion.Content>
        </Accordion.Item>
        <Accordion.Item 
        className='bg-white w-[400px] py-1 font-semibold'
        value='item-4'>
            <Accordion.Trigger className='px-2 flex justify-between items-center w-full'>
                <p>Educational Level </p>
                <ChevronDownIcon className='w-5'/>
            </Accordion.Trigger>
            <Accordion.Content className='px-2 py-1 border-t-2 border-black'>

            </Accordion.Content>
        </Accordion.Item>
        <Accordion.Item 
        className='bg-white w-[400px] py-1 font-semibold'
        value='item-5'>
            <Accordion.Trigger className='px-2 flex justify-between items-center w-full'>
                <p>Course </p>
                <ChevronDownIcon className='w-5'/>
            </Accordion.Trigger>
            <Accordion.Content className='px-2 py-1 border-t-2 border-black'>

            </Accordion.Content>
        </Accordion.Item>
        </Accordion.Root>
        <button 
        type='submit'
        className='text-black bg-white px-2 py-2 m-2'>
Apply Changes 
        </button>
</div>

</div>
</div>
  )
}

export default page