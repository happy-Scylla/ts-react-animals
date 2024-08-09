import type { ReactAnimalNames } from "./ReactAnimal.types";
export declare const ANIMAL_NAMES: ReadonlyArray<ReactAnimalNames>;
declare const ANIMAL_COLORS: {
    readonly red: "#FF0044";
    readonly blue: "#006CFE";
    readonly yellow: "#FFCC41";
    readonly purple: "#B476FB";
    readonly orange: "#FE9D24";
    readonly green: "#29B278";
    readonly teal: "#00D7BF";
    readonly transparent: "transparent";
};
type AnimalColorsType = typeof ANIMAL_COLORS;
export declare const getAnimalColorByKey: (key: string) => AnimalColorsType[keyof AnimalColorsType];
export {};
