import {
    fireEvent,
    render,
    screen,
  } from "@testing-library/react";
import { ReactAnimal } from "./ReactAnimal";
import { axe, toHaveNoViolations } from "jest-axe";
import { animalNames } from "./AnimalIcons";
import React from "react";

describe("ReactAnimal", () => {
    expect.extend(toHaveNoViolations);
    it("renders a default ReactAnimal component", async () => {
        const { container } = render(<ReactAnimal />);
        await screen.findAllByTestId("animalIcon");
        const result = await axe(container);

        expect(result).toHaveNoViolations();
    });

    (animalNames.forEach((animalName) => {
        it(`renders a ${animalName} ReactAnimal component`, async () => {
            const { container } = render(<ReactAnimal name={animalName} />);
            await screen.findAllByTestId("animalIcon");
            const result = await axe(container);

            expect(result).toHaveNoViolations();
            
            const wrapper = screen.getByRole('img');
            expect(wrapper.getAttribute('aria-label')).toBe(`animal-avatar-${animalName}`);
        });
    }));

    it("rendes a ReactAnimal component with an onClick event", () => {
        const callbackMock = jest.fn();
        render(<ReactAnimal onClick={callbackMock} />);

        const animalWrapperDiv = screen.getByRole("img").closest("div");
        expect(animalWrapperDiv);

        fireEvent.click(animalWrapperDiv!);
        expect(callbackMock).toHaveBeenCalled();
    });
});
