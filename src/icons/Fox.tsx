import * as React from "react";
import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgFox = ({
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
    <path fill="url(#fox_svg__a)" d="M0 0h128v128H0z" />
    <defs>
      <pattern
        id="fox_svg__a"
        width={1}
        height={1}
        patternContentUnits="objectBoundingBox"
      >
        <use xlinkHref="#fox_svg__b" transform="scale(.00781)" />
      </pattern>
      <image
        xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIAAAACACAMAAAD04JH5AAAANlBMVEX///8AAAD///////////////////////////////////////////////////////////////9TvwflAAAAEXRSTlMAABBAYO9QMN8ggHCfv8+vj4uptuEAAAN4SURBVHja7dvNmqsgDAbgAQwIgpr7v9mzsK12RuBDm3oWZuWiffI2QkL/fn7uuOOOO+74z0JVQxv9ut5cNsQ5QEdMdrl0xNx9G6CJmfvlumdm9l8GBGZmXmrBzMzmuwBNK6C/ArAUgNcCfBnwKACvBSgB3BDTnzCnAI8C8FqALECHh/BXkD4BeBaA1wJkADoQZ8KcADwLwGsB9gGu52z444BXAXgtwC6gy6en7sQaeBWANylMS/7ozuyCtQC8FmAHYHPpR39uG64F4I7zAJ9bfhHrA3oIwVcKwH0BkHKvH2tEemRmcuUCvO8q8AZ4DDAwM/NULkAJkNuAM9iKl9dJf1tozxDA1AuAVKAUVATE6gqorQHaSbJN75QeC4C+tgWqu8DHNBmXFXRKKZ0H6NzzQuM4zgqMUkpRFpBdArb1PJATBKWUy720wiY0zQeSXEMPxtKfm1JrFkcApZHGWUFAHoTOAljgAEA4AIAFm86dBcyHDqWxWZAFpGOn4ri7mHb6nK4B6BjAgYCXIPDZWfCen1DAs9fnAfYAYO9skwM8mn0eENoB70NnraQrjJs8IDUDdvP3hX4figBqBqRckrnQ7fIA9Ei2dqH1MPSrzL9WRr8+0JcA9vi741eqYe82J2gYbVfhIYDJtwYQMH0GsNMaLAboPwHQoTJnCgDWJwHa2JkKTbAKMKcXIdDmS4AgBugwwCQGiBhgFAMQBmAxADsMYMQAAwYYxAATBohiAMYASQ5gIADLAWYM4MQAIwboxACsIUCQA3QQIMkBIgQgOUAPAR53SgLwHMkB2a4igAECBDnABAGiHIAgwCgHeNzegAwNGUCAAE4OMEKATg6w7PGA1KkVYDGARQCpGeAjYfmXkVwDUCsgoOkf3TggNwoH6IkbwiMA0wLY/ZCmvMKrgKEFEJvy84QAYgPAtuVnQgCp4VMyagSwAwCsPv99wbbL1AEeBozNgIQALArw3B4IIKAAcwBgAcCEAsIBwAw8a5QEjMizUEA8AGAPABwISEcAHQCwkoAIAIIkgADAJAlgYH73ogBkfogCkDA34AZcDfAXA+jqbZiuBgxXA/zFgKQuBpiLAfV3Rn5evgknkfzkawBHLBn1z4gm+fxlwBfyXwZ4/jWlDBjF8k8e+ubUCqWPmx8Ulreh7T+efIzd2/+Rfu6444477rhjG/8AXKbkRmjdYtMAAAAASUVORK5CYII="
        id="fox_svg__b"
        width={128}
        height={128}
      />
    </defs>
  </svg>
);
export default SvgFox;
