'use client'

import React, {useMemo} from 'react';
import Link from 'next/link';
import { Map, User2, Heart, List } from 'lucide-react';

import { usePathname} from 'next/navigation';

const Navbar = () => {
    const path = usePathname()

    const MENU_DATA = useMemo(()=>{
        return [
            {
                path:"/",
                text:"Home",
                iconI: <Map className="icon-mini stroke-[var(--gray-primary)]"/>,
                iconA: <Map className="icon-mini stroke-[var(--purple-3)]"/>
            },
            {
                path:"/dashboard/favorites",
                text:"Favoritos",
                iconI: <Heart className={`icon-mini stroke-[var(--gray-primary)]`}/>,
                iconA: <Heart className={`icon-mini stroke-[var(--purple-3)]`}/>
            },
            {
                path:"/general/booked",
                text:"Marcados",
                iconI: <List className={`icon-mini stroke-[var(--gray-primary)]`}/>,
                iconA: <List className={`icon-mini stroke-[var(--purple-3)]`}/>
            },
            {
                path:"/dashboard/profile",
                text:"Perfil",
                iconI: <Map className="icon-mini stroke-[var(--gray-primary)]"/>,
                iconA: <Map className="icon-mini stroke-[var(--purple-3)]"/>
            },
        ]
    },[])

    return (
        <div className='fixed bottom-0 left-0
            w-full h-[100px] pb-[20px] bg-[var(--background)]
            z-[9980] border border-b-2 flex justify-center items-center
        '>
            <div className='relative w-full h-full flex gap-5 max-w-screen-sm
                justify-center items-center px-5
            '>
                <div className='relative w-full h-full grid grid-cols-4'>
                    {MENU_DATA.map((l, key)=>{
                        return (
                            <Link key={key} href={l.path} className='relative stroke-[var(--purple-1)] flex flex-col items-center justify-center gap-1'>
                                {path === l.path?
                                    l.iconA:
                                    l.iconI
                                }
                                <span className={`text-xs font-semibold
                                    ${path === l.path? "text-[var(--purple-3)]": "text-[var(--gray-primary)]"}
                                `}>{l.text}</span>
                            </Link>
                        )
                    })}
                </div>
            </div>
        </div>
    );
}

export default Navbar;
