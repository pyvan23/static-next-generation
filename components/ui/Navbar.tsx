import React from 'react'
import { Spacer, Text, theme } from '@nextui-org/react';
import Image from 'next/image';

export const Navbar = () => {
    return (
        <div style={{ display: 'flex', width: '100%',
         flexDirection: 'row', alignItems: 'center', justifyContent: 'start', 
         padding: '0px 20px', backgroundColor:theme.colors.accents4.value }}>
            <Image src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/9.png" alt='icono'
            width={70}
            height={70}/>
            <Text h4>shop cards </Text>
            <Spacer css={{flex:1}}/>
            <Text>Favoritos</Text>
            </div>
    )
}
