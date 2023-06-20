'use client'

import React from 'react'
import * as Accordion from '@radix-ui/react-accordion';
import {ChevronDownIcon} from '@heroicons/react/24/solid'
import {bbcUnits} from '../../data/index'

const page = () => {
    console.log(bbcUnits)
  return (
    <div className='h-screen flex flex-col items-center justify-center text-black'>
      <Accordion.Root type='single' collapsible >
        <Accordion.Item 
        className='bg-green-400 w-[400px] py-1 font-semibold'
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
      </Accordion.Root>
    </div>
  )
}

export default page
