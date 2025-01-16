import styles from './Avatar.module.css'; 
import { ImgHTMLAttributes } from 'react';

interface AvatarProps extends ImgHTMLAttributes<HTMLImageElement> {
    hasBorder?: boolean;
}

export function Avatar({ hasBorder = true, ...props }: AvatarProps) {
    // hasBorder = true, ...props -> aqui eu tenho todas as props menos a hasBorder, pois estou tirando a hasBorder do props e o que sobra eu coloco no ...props. "...props" esses 3 pontos constituem o rest operator. 
    console.log(props)

    return(
        <img className={hasBorder ? styles.avatarWithBorder : styles.avatar} 
        {...props} // Este é o spread operator. Ele pega todas as propriedades que eu passei para o componente Avatar e passa para o elemento img como uma propriedade.
        />
    );
}  
