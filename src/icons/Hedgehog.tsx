import * as React from "react";
import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgHedgehog = ({
  title,
  titleId,
  ...props
}: SVGProps<SVGSVGElement> & SVGRProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 128 128"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path fill="url(#hedgehog_svg__a)" d="M0 0h128v128H0z" />
    <defs>
      <pattern
        id="hedgehog_svg__a"
        width={1}
        height={1}
        patternContentUnits="objectBoundingBox"
      >
        <use xlinkHref="#hedgehog_svg__b" transform="scale(.00781)" />
      </pattern>
      <image
        xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIAAAACACAMAAAD04JH5AAAANlBMVEX///8AAAD///////////////////////////////////////////////////////////////9TvwflAAAAEXRSTlMAADAgEFDv37+Pn2DPQIBwryT1ARkAAAMMSURBVHja7ZrLYoMgFEQbQMJD0Pn/n+1Co4BUES/NhlmVhjAnvLxc+fnp6urq6urq6urq6lr1uieWlLmIy4Kff/4QYJB4hy0yBQxhBQ2Y0F4BlhDAApEBkwDewc8fAcDFn0s6AAtEhkICAPZRMQAAH/MEQA8BGBZt/1ja3w2mpaw+5XkpT0QATCYAGrGBQwzg17KnARAff0QDshtsFVaAAaQA63juAFuHfAy2CgsAl6QAgf8CIN6IDQwigOALJAB78yvAjNjAIgYwIAUI/RFOsI/BPiALwARSgLA5IJxgq0EwIIDaVywRgEUCwGVioBABCEkK4JAAhDMSgI8GBFCv9PNnAEymACYu+yEuKw1KgIM/pqQ8JzXSLzwDSLq7Ro8ACPyfAcz4LoDBdwE8vgtg8V0AIv9qgOMGUKk3qwIg8wckqwCInm+EBKUAFBtQlqAUgNY/ICgEMKDWKO4A0PtvJ7oiAIsWGooB2vhDikIAhkbSZQCEG1AqXgLA2/nDFACIEQ3FLwHa+kNfApim/pBXAI39geEcYGrtD30KYJv7430GMOAfxHMAdlaat9yAwklwBFhXng/95eB8GwB/BNCZaozsTJBqPgJken7MZQVopI4AuWqi2ZoYywCUeLmgZ0bvnCXapI4AKr9pBn+uuWA+twFYl5+8iiaJdurMPsAUIPWfz8HwXKWaAJwfhUwUrbSYhBexGKM9r6jbDyPijMV8+jjONK+IAfzdgEQSAwznAJmlwGmTZvwiJjwG5VF+RTQNSPLHIini15ItQ7L8UlCUMdtQcDQ7/MqRk8WssuhwephoUrvXi1uCpJEuAmh4OuJl+YFm4akpzZC4dh1QmCNqE47pr2bJbqRomuQJbyWpyDO1y4P4Zq6YeincS1TST8S7qVpqgvvJalqCinQ9KUHVC4uFgGQmVr6yWdYCwX4wi0evbp8GQXJ6epfMPeqEObnbVnWBoT4UUe7QWN0dElt1KjUu01TtNR4+3RyJ2YpsQw/ukonBqyIKNXv3Zyv9BmlXV1dXV1dXV1dX16Zf7/ee+IBRKVMAAAAASUVORK5CYII="
        id="hedgehog_svg__b"
        width={128}
        height={128}
      />
    </defs>
  </svg>
);
export default SvgHedgehog;
