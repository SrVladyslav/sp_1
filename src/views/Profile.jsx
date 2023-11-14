'use client'

import React from 'react';
import {Progress, Button} from "@nextui-org/react";

const Profile = () => {
    return (
        <div className='relative h-full w-full flex justify-center'>
            <div className='relative h-screen w-full max-w-screen-sm p-5 flex
                flex-col items-center gap-6  
            '>
                <div className='relative w-full grid grid-cols-2 gap-2'>
                    <div className='relative border rounded-lg p-2 bg-[#55038C]'>
                        <h2 className='text-lg font-semibold text-[white]'>23</h2>
                        <span className='text-xs text-white'>
                            Sitios spoteados
                        </span>
                    </div>
                    <div className='relative border rounded-lg p-2 bg-[#9305F2]'>
                        <h2 className='text-lg font-semibold text-[white]'>23€</h2>
                        <span className='text-xs text-white'>
                            Dinero ganado
                        </span>
                    </div>
                </div>

                {/* Stats */}
                <div className='relative w-full p-5 rounded-lg border 
                    border-[var(--purple-3)] flex flex-col gap-5 justify-center
                '>
                    <Progress
                        label="Mi saldo"
                        size="sm"
                        value={130}
                        maxValue={500}
                        color="secondary"
                        formatOptions={{style: "currency", currency: "EUR"}}
                        showValueLabel={true}
                        className="w-full"
                    />
                    <Progress
                        label="Tiempo transcurrido en el parking"
                        size="sm"
                        value={90}
                        maxValue={120}
                        color="secondary"
                        showValueLabel={true}
                        className="w-full"
                    />
                    <Button size="md" className="bg-[var(--purple-2)] text-white">
                        Renovar parking
                    </Button>
                </div>
                <div>
                    Mi perfil
                </div>
            </div>
        </div>
    );
}

export default Profile;
