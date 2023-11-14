'use client'

import React, {useEffect, useState, useMemo}from "react";
import DropBtn from '@/components/UI/DropBtn'
import {Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, Button, useDisclosure, RadioGroup, Radio} from "@nextui-org/react";
import { MapPin } from 'lucide-react';

export default function ModalWindow(props) {
    const {isOpen, onOpen, onOpenChange} = useDisclosure();
    const [data, setData] = useState({})

    const zones = useMemo(()=>{
      return {
        gray:"gris",
        blue:"azul",
        green:"verde",
        orange:"naranja"
      }
    },[])

    const setColor =(percentage)=>{
      const p = parseFloat(percentage)
      if(p > 89){
        return "green"
      }else if(p > 75){
        return "purple"
      }else if(p > 30){
        return "orange"
      }else{
        return "red"
      }
    }

    useEffect(()=>{
      if(props?.modalData?.isOpen === true){
          onOpen()
      }
    },[props.modalData])

    return (
      <div className="relative mb-[100px] px-5">
        <Modal 
          isOpen={isOpen} 
          placement={"bottom"}
          onOpenChange={onOpenChange}
          backdrop="blur"
          className="relative mb-[110px] mx-5"
        >
          <ModalContent>
            {(onClose) => (
              <>
                <ModalHeader className={`flex flex-row gap-1
                  ${props?.modalData?.data?.type}
                  `}>Zona {props?.modalData?.data?.type && zones[props?.modalData?.data?.type]} [#{props?.modalData?.data?.id}]
                </ModalHeader>
                <ModalBody className="gap-5">
                  <div className="relative p-5 rounded-lg border-2 border-[var(--gray-secondary)] w-full
                    grid grid-cols-2 
                  ">
                    <div>
                      <h2 className="text-[var(--purple-3)] text-3xl font-semibold">{props?.modalData?.data?.free_spots}</h2>
                      <h3 className="text-[var(--gray-primary)] text-sm">Sitios libres</h3>
                    </div>
                    <div>
                      <h2 className={`${setColor(props?.modalData?.data?.probability)} text-3xl font-semibold`}>{props?.modalData?.data?.probability}%</h2>
                      <h3 className="text-[var(--gray-primary)] text-sm">De probabilidad </h3>
                    </div>
                    <div className="w-full col-span-2 mt-4 truncate inline-box flex flex-row items-center gap-1">
                      <MapPin className="icon-micro stroke-[--gray-primary]"/><span className="pt-[2px] text-xs inline-box text-[--gray-primary]">{props?.modalData?.data?.location}</span>
                    </div>
                  </div>
                  <div className="relative p-5 rounded-lg border-2 border-[var(--purple-2)] w-full
                    flex flex-col gap-5
                  ">
                    <h3 className="text-[var(--gray-primary)] text-center">Gana <span className="text-[var(--purple-3)] font-semibold">{props?.modalData?.data?.points} EZPoints</span> comprobando y anotando los sitios del parking.</h3>
                    <Button color="primary" size="lg" onPress={onClose} className="w-full bg-[var(--purple-2)]">
                      Anotar
                    </Button>
                  </div>
                </ModalBody>
                <ModalFooter className="w-full grid grid-cols-2">
                  <Button variant="bordered" size="lg" onPress={onClose} className="w-full border-[var(--red)] text-[var(--red)]">
                    Aparqué aquí
                  </Button>
                  <Button variant="bordered" size="lg" onPress={onClose} className="w-full border-[var(--gray-primary)] text-[var(--gray-primary)]">
                    Abrir mapa
                  </Button>
                  <div className="relative col-span-2 w-full">
                    <DropBtn className="relative w-full"/>
                  </div>
                </ModalFooter>
              </>
            )}
          </ModalContent>
        </Modal>
      </div>
    );
}
