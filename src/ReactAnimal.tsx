import React from 'react';
import { ANIMAL_NAMES, getAnimalColorByKey } from './constants';
import "./ReactAnimal.css";
import { ReactAnimalNames, ReactAnimalProps } from './ReactAnimal.types';
import { getAnimalImage } from './imageHelper';

const ReactAnimal = ({ name, color, shape = 'rounded', size = 'md', dance, onClick }: ReactAnimalProps) => {
    const getAvatar = (name?: ReactAnimalNames) => {
        if (name === undefined) {
            const randomAnimal = ANIMAL_NAMES[Math.floor(Math.random() * ANIMAL_NAMES.length)];
            const animalSrc = getAnimalImage(randomAnimal)?.default;
            
            return [randomAnimal, animalSrc] as const;
        }

        const animalSrc = getAnimalImage(name)?.default;
        return [name, animalSrc] as const;
    };

    const getSize = (size: ReactAnimalProps['size']): string => {
        switch (size) {
            case 'sm':
                return '40px';
            case 'md':
                return '70px';
            case 'lg':
                return '125px';
            default:
                if (size !== undefined && size.match(/(^\d*)(em|ex|%|px|cm|mm|in|pt|pc|ch|rem|vh|vw|vmin|vmax)/)) {
                    return size;
                }

                console.error('Invalid size prop. Defaulting to 70px');
                return '70px';
        }
    };

    const getColor = (color: ReactAnimalProps['color']): string => {
        if (color === undefined) return 'red';

        return getAnimalColorByKey(color);
    };

    const getRadius = (shape: ReactAnimalProps['shape']): string => {
        switch (shape) {
            case 'circle':
                return '50%';
            case 'square':
                return '0%';
            case 'rounded':
                return '10%';
            default:
                console.error('Invalid shape prop. Defaulting to shape circle');
                return '10%';
        }
    };

    const [animalName, animalAvatar] = getAvatar(name);
    const animalSize = getSize(size);

    const avatarStyle = {
        'height': animalSize,
        'width': animalSize,
        'borderRadius': getRadius(shape),
        'backgroundColor': getColor(color),
    };

    return (
        <div 
            className="v-animal-avatar"
            style={avatarStyle}
            onClick={onClick}
        >
            <img 
                src={animalAvatar} 
                alt={`image of ${animalName}`}
                className={dance ? 'v-animal-image v-animal-dance' : 'v-animal-image'}
            />
        </div>
    );
};

export default ReactAnimal;
