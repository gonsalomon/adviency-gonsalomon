'use client'
import React, { useEffect, useState } from "react"
import { AppProps } from "next/app"
import Image from 'next/image'
import { Gift } from './gift'

function App({Component, pageProps}: AppProps){
    const [gifts, setGifts] = useState<Gift[]|undefined>(undefined);
    
    useEffect(()=>{
        setGifts([
            {
                pic: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSZ8yOkx1HzrmYzPFjJ3BkdF7FBgzyKe3LgUg&usqp=CAU',
                name:'Medias de Papa Güel',
                amount: 1,
                price: 1500
            },
            {
                pic: 'https://http2.mlstatic.com/D_NQ_NP_827156-MLA31116235541_062019-O.jpg',
                name:'Gorrito de Papa Güel',
                amount: 1,
                price: 1000
            },
            {
                pic: 'https://ardiaprod.vtexassets.com/arquivos/ids/212564/Yerba-Mate-Playadito-Suave-1-Kg-_1.jpg?v=637691105938100000',
                name: 'Yerba Playadito 1kg',
                amount: 5,
                price: 1000
            }
        ])
    }, [])
    return (
        <div style={{
            backgroundImage: `url("${require("../public/gift-bg.jpg")}")`,
            width: "100%",
            height: 3744,
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover"
          }} className="main col">
            <h1>Regalos</h1>
            <table>
                <tbody>
                    {
                        gifts?.map((gift:Gift)=>{
                            return <tr key={gifts.indexOf(gift)}>
                                <Image src={gift.pic} alt={gift.name} height="100" width="100" priority={true}/>
                                <p>{gift.name}</p>
                                <p>Cantidad: {gift.amount}</p>
                                <p>Precio unitario: {gift.price-1}</p>
                                <p>Precio total: {(gift.price*gift.amount)-1}</p>
                            </tr>
                        })
                    }
                </tbody>
            </table>
        </div>
    )
}

export default App