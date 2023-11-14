'use client'

import React, {useState} from 'react';
import {Tabs, Tab} from "@nextui-org/react";
import { Search } from 'lucide-react';

const Searchbar = () => {
    const [selected, setSelected] = useState("all");

    return (
        <div className='fixed top-0 left-0
            w-full h-[80px] bg-[var(--background)] px-5
            z-[9980] border-b-2 flex items-center justify-center
        '>
            <div className='relative w-full h-full 
                flex items-center max-w-screen-sm
            '>
                <div className='relative w-full'>
                    <Tabs 
                        size="lg"
                        fullWidth
                        aria-label="Options"         
                        selectedKey={selected}
                        onSelectionChange={setSelected}
                        color="none"
                        classNames={{
                            tabContent: "group-data-[selected=true]:text-[var(--purple-3)] font-semibold"
                        }}
                    >
                        <Tab key="all" title="Todo"/>
                        <Tab key="gray" title="Zona gris"/>
                        <Tab key="blue" title="Zona azul"/>
                        <Tab key="orange" title="Zona naranja"/>
                        <Tab key="green" title="Zona verde"/>
                        
                    </Tabs>
                </div>
            </div>
        </div>
    );
}

export default Searchbar;
