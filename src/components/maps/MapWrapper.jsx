'use client'

import React, {useState}from 'react';
import dynamic from 'next/dynamic'
import Searchbar from '@/components/Searchbar'
import Navbar from '@/components/Navbar'
import ModalWindow from '@/components/ModalWindow'
 
const Map = dynamic(() => import('@/components/maps/Map'), {
  loading: () => <p>Loading...</p>, ssr: false
})

const MapWrapper = () => {
    const [modalData, setModalData] = useState({})
    return (
        <div className='relative w-screen h-screen pt-[80px] pb-[60px]'>
            <Map openModal={(modalData)=>{
                console.log("MD:", modalData)
                setModalData(modalData)
            }}/>
            <Searchbar/>
            <Navbar/>
            <ModalWindow modalData={modalData} className="z-[9998]"/>
        </div>
    );
}

export default MapWrapper;
