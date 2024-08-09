// import all images from ./animals folder
import * as alligator from "./animals/alligator.png";
import * as anteater from "./animals/anteater.png";
import * as armadillo from "./animals/armadillo.png";
import * as auroch from "./animals/auroch.png";
import * as axolotl from "./animals/axolotl.png";
import * as badger from "./animals/badger.png";
import * as bat from "./animals/bat.png";
import * as beaver from "./animals/beaver.png";
import * as buffalo from "./animals/buffalo.png";
import * as camel from "./animals/camel.png";
import * as capybara from "./animals/capybara.png";
import * as chameleon from "./animals/chameleon.png";
import * as cheetah from "./animals/cheetah.png";
import * as chinchilla from "./animals/chinchilla.png";
import * as chipmunk from "./animals/chipmunk.png";
import * as chupacabra from "./animals/chupacabra.png";
import * as cormorant from "./animals/cormorant.png";
import * as coyote from "./animals/coyote.png";
import * as crow from "./animals/crow.png";
import * as dingo from "./animals/dingo.png";
import * as dinosaur from "./animals/dinosaur.png";
import * as dolphin from "./animals/dolphin.png";
import * as duck from "./animals/duck.png";
import * as elephant from "./animals/elephant.png";
import * as ferret from "./animals/ferret.png";
import * as fox from "./animals/fox.png";
import * as frog from "./animals/frog.png";
import * as giraffe from "./animals/giraffe.png";
import * as gopher from "./animals/gopher.png";
import * as grizzly from "./animals/grizzly.png";
import * as hedgehog from "./animals/hedgehog.png";
import * as hippo from "./animals/hippo.png";
import * as hyena from "./animals/hyena.png";
import * as ibex from "./animals/ibex.png";
import * as ifrit from "./animals/ifrit.png";
import * as iguana from "./animals/iguana.png";
import * as jackal from "./animals/jackal.png";
import * as kangaroo from "./animals/kangaroo.png";
import * as koala from "./animals/koala.png";
import * as kraken from "./animals/kraken.png";
import * as lemur from "./animals/lemur.png";
import * as leopard from "./animals/leopard.png";
import * as liger from "./animals/liger.png";
import * as llama from "./animals/llama.png";
import * as manatee from "./animals/manatee.png";
import * as mink from "./animals/mink.png";
import * as monkey from "./animals/monkey.png";
import * as moose from "./animals/moose.png";
import * as narwhal from "./animals/narwhal.png";
import * as orangutan from "./animals/orangutan.png";
import * as otter from "./animals/otter.png";
import * as panda from "./animals/panda.png";
import * as penguin from "./animals/penguin.png";
import * as platypus from "./animals/platypus.png";
import * as pumpkin from "./animals/pumpkin.png";
import * as python from "./animals/python.png";
import * as quagga from "./animals/quagga.png";
import * as rabbit from "./animals/rabbit.png";
import * as raccoon from "./animals/raccoon.png";
import * as rhino from "./animals/rhino.png";
import * as sheep from "./animals/sheep.png";
import * as shrew from "./animals/shrew.png";
import * as skunk from "./animals/skunk.png";
import * as squirrel from "./animals/squirrel.png";
import * as tiger from "./animals/tiger.png";
import * as turtle from "./animals/turtle.png";
import * as walrus from "./animals/walrus.png";
import * as wolf from "./animals/wolf.png";
import * as wolverine from "./animals/wolverine.png";
import type { ReactAnimalNames } from "./ReactAnimal.types";

export const getAnimalImage = (name: ReactAnimalNames) => {
    switch (name) {
        case "alligator":
            return alligator;
        case "anteater":
            return anteater;
        case "armadillo":
            return armadillo;
        case "auroch":
            return auroch;
        case "axolotl":
            return axolotl;
        case "badger":
            return badger;
        case "bat":
            return bat;
        case "beaver":
            return beaver;
        case "buffalo":
            return buffalo;
        case "camel":
            return camel;
        case "capybara":
            return capybara;
        case "chameleon":
            return chameleon;
        case "cheetah":
            return cheetah;
        case "chinchilla":
            return chinchilla;
        case "chipmunk":
            return chipmunk;
        case "chupacabra":
            return chupacabra;
        case "cormorant":
            return cormorant;
        case "coyote":
            return coyote;
        case "crow":
            return crow;
        case "dingo":
            return dingo;
        case "dinosaur":
            return dinosaur;
        case "dolphin":
            return dolphin;
        case "duck":
            return duck;
        case "elephant":
            return elephant;
        case "ferret":
            return ferret;
        case "fox":
            return fox;
        case "frog":
            return frog;
        case "giraffe":
            return giraffe;
        case "gopher":
            return gopher;
        case "grizzly":
            return grizzly;
        case "hedgehog":
            return hedgehog;
        case "hippo":
            return hippo;
        case "hyena":
            return hyena;
        case "ibex":
            return ibex;
        case "ifrit":
            return ifrit;
        case "iguana":
            return iguana;
        case "jackal":
            return jackal;
        case "kangaroo":
            return kangaroo;
        case "koala":
            return koala;
        case "kraken":
            return kraken;
        case "lemur":
            return lemur;
        case "leopard":
            return leopard;
        case "liger":
            return liger;
        case "llama":
            return llama;
        case "manatee":
            return manatee;
        case "mink":
            return mink;
        case "monkey":
            return monkey;
        case "moose":
            return moose;
        case "narwhal":
            return narwhal;
        case "orangutan":
            return orangutan;
        case "otter":
            return otter;
        case "panda":
            return panda;
        case "penguin":
            return penguin;
        case "platypus":
            return platypus;
        case "pumpkin":
            return pumpkin;
        case "python":
            return python;
        case "quagga":
            return quagga;
        case "rabbit":
            return rabbit;
        case "raccoon":
            return raccoon;
        case "rhino":
            return rhino;
        case "sheep":
            return sheep;
        case "shrew":
            return shrew;
        case "skunk":
            return skunk;
        case "squirrel":
            return squirrel;
        case "tiger":
            return tiger;
        case "turtle":
            return turtle;
        case "walrus":
            return walrus;
        case "wolf":
            return wolf;
        case "wolverine":
            return wolverine;
        default:
            return null;
    }
}