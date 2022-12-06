'use client'
import '../styles/globals.css'
import { useState, useEffect } from 'react'
import Image from 'next/image'

export default function Page({Component, pageProps}) {
    const [gifts, setGifts] = useState([])
  
    function remOne (gift){
        if(gift.amount>0)
        newGift = {
            id: gift.id,
            name: gift.name,
            amount: gift.name-1,
            price: gift.price
        }
        console.log(gift.amount)
    }
    function addOne (gift){
        newGift = {
            id: gift.id,
            name: gift.name,
            amount: gift.name+1,
            price: gift.price
        }
    }
    function remAll(){
        setGifts([])
    }

    useEffect(() => {
        setGifts([
            {
                id: 1,
                src: 'https://http2.mlstatic.com/D_NQ_NP_611570-MLA49912028965_052022-O.webp',
                name: 'Medias de Papa Güel',
                amount: 1,
                price: 960
            },
            {
                id: 2,
                src: 'https://http2.mlstatic.com/D_NQ_NP_674650-MLA48525401181_122021-O.webp',
                name: 'Gorro de Papa Güel',
                amount: 1,
                price: 850
            },
            {
                id: 3,
                src: 'https://http2.mlstatic.com/D_NQ_NP_631442-MLA50997493722_082022-O.webp',
                name: 'Yerba Playadito 1kg',
                amount: 5,
                price: 1000
            }
        ])
    }, []);

    return (
        <>
            <main className='text-center items-center flex-1'>
                <h3 className='cnt'>Compras para navidad!</h3>
                <ul className='cnt'>
                    {gifts.map((gift)=>{
                        return(
                            <li key={gift.id}>
                                <Image
                                className='flex-1'
                                src={gift.src}
                                height="200"
                                width="200"
                                objectFit='cover'
                                quality={100}
                                alt={'Imagen para '+gift.name}
                                />
                                <p>Nombre: {gift.name}</p>
                                <div className='group flex-row'>
                                    <button className='cnt hidden group-hover:block' onClick={remOne(gift)}>-</button>
                                    <p className='cnt'>{gift.amount}</p>
                                    <button className='cnt hidden group-hover:block' onClick={addOne(gift)}>+</button>
                                </div>
                                <p className='cnt'>Precio: {gift.price}</p>
                            </li>
                        )
                    })}
                </ul>
                <button onClick={remAll()}>Vaciar el carrito</button>
                <button>Comprar todo</button>
            </main>
        </>
    )
}