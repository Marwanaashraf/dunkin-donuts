import React from 'react'
import { Spiner } from '../../Icons'

export default function Loading() {
  return (
    <div className='fixed top-0 left-0 right-0 bottom-0 z-50 flex justify-center items-center  bg-slate-100 dark:bg-slate-800'>
      <Spiner className='w-16 h-16'/>
    </div>
  )
}
