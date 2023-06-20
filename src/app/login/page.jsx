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
    <div
    style={{
        backgroundImage:'url("library2.jpg")',
        backgroundPosition:'center',
    }}
    className='h-screen w-screen flex items-center justify-center flex-col object-cover'
    >
      <div
      className='bg-green-600/60 h-screen w-screen fixed'
      />
      <div className='bg-white text-black font-semibold p-4 relative flex flex-col items-center'>
        <div>
            <img 
            className='w-[120px]'
            src="/jkuatLogo.png" alt="" />
            <h2>Exams Center</h2>
        </div>
        <form 
        onSubmit={handleSubmit}
        className='w-[400px] grid gap-3'>
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
            <button type='submit' className='bg-green-600 text-white py-1 w-[60%]'>Log In</button>
        </form>
      </div>
    </div>
  )
}

export default page
