import React from 'react'

const CommentForm = () => {
  return (
    <div className='w-full bg-white rounded-[10px] shadow-xl flex flex-col px-6 py-6 md:px-8 gap-6'>
        <h2 className='text-[#3A4374] text-lg font-bold leading-[100%] tracking-[-0.25px]'>Add Comment</h2>

    <div className='flex flex-col gap-4'>
        <textarea name="" id="" 
        placeholder='Type your comment here'
        className='bg-[#F7F8FD] text-[#647196] text-[13px] font-normal leading-[100%] min-h-[80px] resize-none rounded-[5px] focus:border border-[#4661E6] outline-none py-4 px-4 md:px-6'></textarea>

        <div className='w-full flex items-center justify-between'>
            <p className='text-[#647196] text-[13px] font-normal leading-[100%]'>250 Characters left</p>
            <button className='bg-[#AD1FEA] text-white px-4 py-[10.5px] rounded-[10px] font-bold'>Post Comment</button>
        </div>
    </div>

    </div>
  )
}

export default CommentForm