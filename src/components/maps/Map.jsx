'use client'

import React from 'react';

import {useEffect, useState, useMemo} from 'react'
import {MapContainer, TileLayer, Polygon} from 'react-leaflet'
import 'leaflet/dist/leaflet.css'

import {RUSSAFA_PARKING} from '@/data/parkings'

import {Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, Button, useDisclosure, RadioGroup, Radio} from "@nextui-org/react";


const Map = (props) => {
    const {isOpen, onOpen, onOpenChange} = useDisclosure();

    const [map, setMap] = useState(null)

    const center = [39.460948545981395, -0.37295533994045127] // Russafa
    const markers = RUSSAFA_PARKING
    const polygon = [
        [51.515, -0.09],
        [51.52, -0.1],
        [51.52, -0.12],
    ]
    const purpleOptions = { color: 'purple' }

    const openInfo =(id, free_spots, type, probability, location, points)=>{
        console.log("ID:", id)
        try{
            props.openModal({isOpen:true, 
                data: {
                    id:id, 
                    free_spots:free_spots,
                    type:type,
                    probability:probability,
                    location: location, 
                    points: points
                }})
        }catch(e){}
    }
    
    useEffect(()=>{
        console.log("MARKES:", markers)
    },[markers])

    return (
        <>
        <MapContainer
            scrollWheelZoom={false}
            doubleClickZoom={false}
            center={center}
            // center={[39.47212687669738,-0.3771603384935074]} 
            zoom={16}
            // mapPane={1000}
            minZoom={1}
            maxZoom={18}
            className={`rounded-0 sm:rounded-mini w-full h-full p-0 z-0 
            `}
            // Pruebas
            ref={setMap}
            // style={{ height: '100%', width: '100%'}}
            // style={{ height: (props.mapHeight)+"px", width: "100%" }} 
        >
            <TileLayer 
                url="https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}.png"    
            /> 
            {markers?.map((marker, id)=>{
                return (
                    <Polygon
                        key={id}
                        pathOptions={{color: marker.type}} 
                        positions={marker.coords}
                        eventHandlers={{ click: ()=>{openInfo(
                            marker.id, 
                            marker.free_spots, 
                            marker.type, 
                            marker.probability,
                            marker.location, 
                            marker.points
                        )} }}
                    />
                )
            })}
        </MapContainer>
      </>
    );
}

export default Map;
