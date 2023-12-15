"use client"
import React from 'react'
import Image from 'next/image';
import { CustomeButtonProps } from '@/types';


const CustomButton = ({title, containerStyles, handelClick, }: CustomeButtonProps) => {
  return (
    <button
    disabled={false}
    type={'button'}
    className={`custom-btn ${containerStyles}`}
    onClick={handelClick}
    >
      <span className={`flex-1`}> 
      {title} 
      </span>
    </button>
  )
}

export default CustomButton
