"use client";

import React from "react";
// import Fraternity from "@/app/(pages)/home/data/db.json"

const Fraternity = [
    {
        "name": "Poquito Mas",
        "description": "consectetur adipiscing elit. Sed etiam, purus, nunc, sed etiam, purus, nunc, sed etiam, purus, nunc.lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed etiam, purus, nunc, sed etiam, purus, nunc, sed etiam, purus, nunc.lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed etiam, purus, nunc, sed etiam, purus, nunc, sed etiam, purus, nunc.lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed etiam, purus, nunc, sed etiam, .",
        "image": "/logo-poquito.png"
    },
    {
        "name": "Sbornia",
        "description": "Famosa pela organização e limpeza impecáveis, esta república promove um estilo de vida saudável com atividades em grupo e um ambiente tranquilo.",
        "image": "/logo-sbornia.jpeg"
    },
    {
        "name": "Jaca",
        "description": "Oferece espaços amplos e modernos, com uma comunidade vibrante e conectada. Excelente escolha para quem gosta de eventos e networking.",
        "image": ""
    }
]

export default function Explore() {
    return (
        // Explore Content
        <div className="flex flex-col p-8 gap-2 items-center">

            {Fraternity.map((item, index) => {

                // Card
                return (
                    <div key={index} className="container min-h-52 rounded-3xl flex flex-col items-center p-6 bg-[#9b9b9b] text-black">
                        {/* Fraternity Name */}
                        <div>
                            <h2>{item.name}</h2>
                        </div>

                        {/* Content */}
                        <div className="flex w-full items-center gap-6" >
                            {/* Image */}
                            <div className="w-32 items-start">
                                <img src={item.image} className="object-cover rounded-full min-w-32" />
                            </div>
                            {/* Description */}
                            <div>
                                {item.description}
                            </div>
                        </div>

                        {/* See More */}
                        <div>
                            <button className="bg-[#757575] w-48 h-8 rounded-3xl mt-">Saiba Mais</button>
                        </div>

                    </div>
                )
            })}
        </div>


    );
}
