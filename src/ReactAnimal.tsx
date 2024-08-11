import React, { Suspense, useMemo } from 'react';
import { getAnimalColorByKey } from './constants';
import "./ReactAnimal.css";
import { AnimalIcons } from './AnimalIcons';

export type ReactAnimalIconNames = keyof typeof AnimalIcons;

export type ReactAnimalColors = 
    | 'red'
    | 'blue'
    | 'yellow'
    | 'purple'
    | 'orange'
    | 'green'
    | 'teal';

export type ReactAnimalProps = {
    name?: ReactAnimalIconNames;
    color?: ReactAnimalColors;
    size?: ( 'sm' | 'md' | 'lg' ) | ( string & {} ) ;
    shape?: 'circle' | 'square' | 'rounded';
    dance?: boolean;
    onClick?: () => void;
};

const ReactAnimal = ({ name = 'Otter', color, shape = 'rounded', size = 'md', dance, onClick }: ReactAnimalProps) => {
    const AnimalIcon = useMemo(() => AnimalIcons[name], [name]);

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

    const getColor = (color?: ReactAnimalColors): string => {
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
            aria-label={`animal-avatar-${name}`}
            role="img"
        >
            <Suspense fallback={null}>
                <AnimalIcon 
                    style={{ width: '80%', height: '80%' }}
                    className={dance ? 'v-animal-image v-animal-dance' : 'v-animal-image'}
                    data-testid="animalIcon"
                />
            </Suspense>
        </div>
    );
};

export default ReactAnimal;
