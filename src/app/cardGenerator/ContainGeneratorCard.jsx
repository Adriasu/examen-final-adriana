import React from 'react'

const ContainGeneratorCard = () => {
  return (
    <div className='border-[5px] border-black w-[900px]'>

      <div className='bg-purple-800 text-white flex justify-center items-center h-12'>
        <h1 className='font-bold'>ID Card generator</h1>
      </div>

      <div className='grid grid-cols-2'>

      <div className='flex flex-col justify-center items-center p-8 border-r border-black'>
        <h1>Input form</h1>
        <form>
            <div>
                <label htmlFor="">Enter Name:</label>
                <input type="text" />
            </div>
            <div>
                <label htmlFor="">Enter College Name:</label>
                <input type="text" />
            </div>
            <div>
                <label htmlFor="">Enter Location:</label>
                <input type="text" />
            </div>
            <input type="submit" value="Generate Card" className='bg-purple-800 text-white font-bold'/>
        </form>
      </div>
      <div className='flex flex-col justify-center items-center p-8'>
        <h1>Generated Card</h1>
        <div className='flex'>
            <div>imagen</div>
            <div>texto</div>
        </div>
      </div>

      </div>
      
    </div>
  )
}

export default ContainGeneratorCard
