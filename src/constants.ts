import type { ReactAnimalNames } from "./ReactAnimal.types";

export const ANIMAL_NAMES: ReadonlyArray<ReactAnimalNames> = [
    "alligator",
    "anteater",
    "armadillo",
    "auroch",
    "axolotl",
    "badger",
    "bat",
    "beaver",
    "buffalo",
    "camel",
    "capybara",
    "chameleon",
    "cheetah",
    "chinchilla",
    "chipmunk",
    "chupacabra",
    "cormorant",
    "coyote",
    "crow",
    "dingo",
    "dinosaur",
    "dolphin",
    "duck",
    "elephant",
    "ferret",
    "fox",
    "frog",
    "giraffe",
    "gopher",
    "grizzly",
    "hedgehog",
    "hippo",
    "hyena",
    "ibex",
    "ifrit",
    "iguana",
    "jackal",
    "kangaroo",
    "koala",
    "kraken",
    "lemur",
    "leopard",
    "liger",
    "llama",
    "manatee",
    "mink",
    "monkey",
    "moose",
    "narwhal",
    "orangutan",
    "otter",
    "panda",
    "penguin",
    "platypus",
    "pumpkin",
    "python",
    "quagga",
    "rabbit",
    "raccoon",
    "rhino",
    "sheep",
    "shrew",
    "skunk",
    "squirrel",
    "tiger",
    "turtle",
    "walrus",
    "wolf",
    "wolverine",
    "wombat"
];

const ANIMAL_COLORS = {
    red: "#FF0044",
    blue: "#006CFE",
    yellow: "#FFCC41",
    purple: "#B476FB",
    orange: "#FE9D24",
    green: "#29B278",
    teal: "#00D7BF",
    transparent: "transparent"
} as const;
type AnimalColorsType = typeof ANIMAL_COLORS;

export const getAnimalColorByKey = (key: string):  AnimalColorsType[keyof AnimalColorsType] => {
    if (key in ANIMAL_COLORS) {
        return ANIMAL_COLORS[key as keyof AnimalColorsType];
    }

    return '#FF0044';
};
