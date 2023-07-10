'use client'
import{filterUnits} from '../../../utils/operations'
import {MagnifyingGlassIcon,ArrowDownTrayIcon }from '@heroicons/react/24/solid'
import axios from 'axios'
import {Header} from '../../component/header'
import Link from 'next/link'
import { QueryClient, QueryClientProvider,useQuery } from '@tanstack/react-query';
import React,{ useState} from 'react';


const queryClient = new QueryClient();

const page = () => {
    const url = 'http://localhost:8000/units'
    const getData = async () => {
      const response  =  await axios.get(url);
      return response.data.data;
    }
    const{data,isLoading} = useQuery({
      queryKey:['units'],
      queryFn:getData
    });
    const[search,setSearch]= useState("")
    const[start,setStart] = useState(0)
    
    if (isLoading) return (
      <div>
        <h2>Data is loading </h2>
      </div>
    )
    console.log(data)
  
const filteredData = filterUnits(data,search)
console.table(filteredData)

  return (
    <div className='bg-green h-screen flex flex-col items-center'>

      <Header/>
      <div className='relative w-[500px]'>
              <input
              onChange={(e) => setSearch(e.target.value)}
              className='font-semibold border-white placeholder:text-black flex px-3 py-2 m-5 rounded-md border-2 w-[500px]'
              placeholder='Search ' 
              type="text" />
              <MagnifyingGlassIcon className='text-black cursor-pointer h-5 w-5 absolute right-3 top-7'/>
              <ArrowDownTrayIcon className='text-black h-5 w-5  absolute -right-10 top-7 active:bg-black/25'/>
            
      </div>

 
      <div className='w-[900px]'>

        <div className=' grid grid-cols-4 text-black font-bold  space-x-4'>
          <h1>UnitCode</h1>
          <h2>UnitName</h2>
          <h3>Date Updated</h3>
        
        </div>
        {
                  filteredData.slice(start,start+10).map((f) =>(
                    <div 
                    key={f.id}
                
                      className = 'grid grid-cols-4 space-x-4 text-black capitalize '>
                        <h1>{f.UnitCode}</h1>
                        <h2>{f.UnitName}</h2>
                        <h3>{f.DateUpdated}</h3>
                        <input className = 'h-5 w-5'type='checkbox'name='unit'unchecked >
                          </input>
          
                    </div>
                  )
                  )
                  
                  } 
      </div>

 <div className = 'flex space-x-4' mt-10>
  <button
  onClick={() => setStart(prev =>prev-10 )
  }
  type='submit'
  className = ' text-black px-2 py-2 m-2 bg-white'  
> Previous
  </button>
  
  <div className='flex space-x-4'>
  <button
  onClick={() => setStart(prev =>prev+10 )
  }
  type='submit'
  className = ' text-black px-2 py-2 m-2 bg-white'  
> Next
  </button>

 </div >
 </div>
</div>   
)
}

export default page
