'use client'
import React,{useState} from 'react'

const page = () => {
    const [form,setForm] = useState({
        username:'',
        password:''
    })
    const inputs = [
        {
            name:'username',
            placeholder:'Reg No.',
            type:'text',
        },
        {
            name:'password',
            placeholder:'*****',
            type:'password',
        },
        
    ]
    const handleChange = (e) => {
        setForm({...form ,[e.target.name]: e.target.value})
    }
    const handleSubmit = (e) => {
        e.preventDefault()
        console.table(form)
    }

  return (

      
      <div className='bg-white text-black font-semibold p-4 relative flex flex-col justify-center space-y-4 items-center h-screen'>
        <div className='bg-transparent  border-2 border-black px-4 py-4 flex flex-col items-center shadow-black shadow-md
        '>
        <div>
            <img 
            className='w-[120px]'
            src="/jkuatLogo.png" alt="" />
            <h2>Exams Center</h2>
        </div>

    
        <form 
        onSubmit={handleSubmit}
        className='w-[400px] grid gap-6'>
            {inputs.map((d,i) => (
                <div key={i}
                className='grid gap-2'
                >
                    <label 
                    className='capitalize'
                    htmlFor="">{d.name}</label>
                    <input
                    onChange={handleChange}
                    type={d.type}
                    placeholder={d.placeholder}
                    name={d.name}
                    className='py-1 px-2 border-black border-2 rounded-sm'
                    />
                </div>
            ))}
            <button type='submit' className='bg-lime-300 text-white py-1 w-[60%]  active:bg-slate-50/25'>Login</button>
           <p className='text-blue-500 hover:bg-black cursor-pointer
           '> Forgot Password ?</p>
        </form>
      </div>
      </div>
      
    
  )
}

export default page
