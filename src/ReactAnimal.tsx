import React from 'react';
import type { ReactAnimalNames, ReactAnimalProps } from './ReactAnimal.types';
import { ANIMAL_NAMES, getAnimalColorByKey } from './constants';
import "./ReactAnimal.css";

const ReactAnimal = ({ name, color, shape, size, dance, onClick }: ReactAnimalProps) => {
    const getAvatar = (name?: ReactAnimalNames) => {
        if (name === undefined) {
            const randomAnimal = ANIMAL_NAMES[Math.floor(Math.random() * ANIMAL_NAMES.length)];
            
            return [randomAnimal, `./assets/${randomAnimal}}.png`] as const;
        }

        return [name, `./assets/${name}.png`] as const;
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
                if (size.match(/(^\d*)(em|ex|%|px|cm|mm|in|pt|pc|ch|rem|vh|vw|vmin|vmax)/)) {
                    return size;
                }

                console.error('Invalid size prop. Defaulting to 70px');
                return '70px';
        }
    };

    const getColor = (color: ReactAnimalProps['color']): string => {
        if (color === undefined) return 'transparent';

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
        'border-radius': getRadius(shape),
        'background-color': getColor(color),
    };

    return (
        <div 
            className="v-animal-avatar"
            style={avatarStyle}
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
