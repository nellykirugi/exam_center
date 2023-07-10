'use client'

import React from 'react'
import * as Accordion from '@radix-ui/react-accordion';
import {ChevronDownIcon} from '@heroicons/react/24/solid'
import {bbcUnits} from '../../data/index'
import {MagnifyingGlassIcon } from '@heroicons/react/24/solid'
import {Header} from '../../component/header'
import Link from 'next/link'
const page = () => {
    console.log(bbcUnits)
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
      <Accordion.Root 
      className='grid gap-8'
      type='single' 
      collapsible >
        <Accordion.Item 
        className='bg-lime-300 w-[400px] py-1 font-semibold'
        value='item-1'>
            <Accordion.Trigger className='px-2 flex justify-between items-center w-full'>
                <p>Year 1</p>
                <ChevronDownIcon className='w-5'/>
            </Accordion.Trigger>
            <Accordion.Content className='px-2 py-1 border-t-2 border-black'>
               <ul className='grid gap-2 '>
                {bbcUnits.map((d,i) => {
                    return (
                        <li 
                        className='flex items-center space-x-2'
                        key={i}>
                            <p className='text-sm uppercase'>{d.unitCode}</p>
                            <p>{d.unitName}</p>
                        </li>
                    )
                })}
               </ul>
            </Accordion.Content>
        </Accordion.Item>
        <Accordion.Item 
        className='bg-lime-300 w-[400px] py-1 font-semibold'
        value='item-2'>
            <Accordion.Trigger className='px-2 flex justify-between items-center w-full'>
                <p>Year 2</p>
                <ChevronDownIcon className='w-5'/>
            </Accordion.Trigger>
            <Accordion.Content className='px-2 py-1 border-t-2 border-black'>
               <ul className='grid gap-2 '>
                {bbcUnits.map((d,i) => {
                    return (
                        <li 
                        className='flex items-center space-x-2'
                        key={i}>
                            <p className='text-sm uppercase'>{d.unitCode}</p>
                            <p>{d.unitName}</p>
                        </li>
                    )
                })}
               </ul>
            </Accordion.Content>
        </Accordion.Item>
        <Accordion.Item 
        className='bg-lime-300 w-[400px] py-1 font-semibold'
        value='item-3'>
            <Accordion.Trigger className='px-2 flex justify-between items-center w-full'>
                <p>Year 3</p>
                <ChevronDownIcon className='w-5'/>
            </Accordion.Trigger>
            <Accordion.Content className='px-2 py-1 border-t-2 border-black'>
               <ul className='grid gap-2 '>
                {bbcUnits.map((d,i) => {
                    return (
                        <li 
                        className='flex items-center space-x-2'
                        key={i}>
                            <p className='text-sm uppercase'>{d.unitCode}</p>
                            <p>{d.unitName}</p>
                        </li>
                    )
                })}
               </ul>
            </Accordion.Content>
        </Accordion.Item>
        <Accordion.Item 
        className='bg-lime-300 w-[400px] py-1 font-semibold'
        value='item-4'>
            <Accordion.Trigger className='px-2 flex justify-between items-center w-full'>
                <p>Year 4 </p>
                <ChevronDownIcon className='w-5'/>
            </Accordion.Trigger>
            <Accordion.Content className='px-2 py-1 border-t-2 border-black'>
               <ul className='grid gap-2 '>
                {bbcUnits.map((d,i) => {
                    return (
                        <li 
                        className='flex items-center space-x-2'
                        key={i}>
                            <p className='text-sm uppercase'>{d.unitCode}</p>
                            <p>{d.unitName}</p>
                        </li>
                    )
                })}
               </ul>
            </Accordion.Content>
        </Accordion.Item>
      </Accordion.Root>
    </div>
    </div>
    </div>

  )
}

export default page
