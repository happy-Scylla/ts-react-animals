import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import ReactAnimal from "./ReactAnimal";
import { ANIMAL_NAMES } from "./constants";

describe("ReactAnimal", () => {
    it("renders a default ReactAnimal component", () => {
        render(<ReactAnimal />);
        const animal = screen.getByRole("img");
        expect(animal);
    });

    ANIMAL_NAMES.forEach((animalName) => {
        it(`renders a ${animalName} ReactAnimal component`, () => {
            render(<ReactAnimal name={animalName} />);
            const animal = screen.getByRole("img");
            expect(animal.getAttribute('src')).toBe(`./src/animals/${animalName}.png`);
            expect(animal.getAttribute('alt')).toBe(`image of ${animalName}`);
        });
    });

    it("renders a dancing ReactAnimal component", () => {
        render(<ReactAnimal dance />);
        const animal = screen.getByRole("img");
        expect(animal);
    });

    it("rendes a ReactAnimal component with an onClick event", () => {
        const callbackMock = jest.fn();
        render(<ReactAnimal onClick={callbackMock} />);

        const animalWrapperDiv = screen.getByRole("img").closest("div");
        expect(animalWrapperDiv);

        fireEvent.click(animalWrapperDiv!);
        expect(callbackMock).toHaveBeenCalled();
    });
});