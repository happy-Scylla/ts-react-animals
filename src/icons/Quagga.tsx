import * as React from "react";
import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgQuagga = ({
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
    viewBox="0 0 129 129"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path fill="url(#quagga_svg__a)" d="M0 0h129v129H0z" />
    <defs>
      <pattern
        id="quagga_svg__a"
        width={1}
        height={1}
        patternContentUnits="objectBoundingBox"
      >
        <use xlinkHref="#quagga_svg__b" transform="scale(.00775)" />
      </pattern>
      <image
        xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIEAAACBBAMAAAAVjsRjAAAAElBMVEX///8AAAD///////////////+k0Pl/AAAABXRSTlMAAL+AQEE2ZkcAAANqSURBVGje7ddNmpwsEMDxHCHlxwGYxH14HPYvk9cDCP7vf5UsAFuwW7SzjLWa9pn+CVVQ0N++3XHHHXfc8c+EpPiQ0/H9qdBi/1JomEX+/xuhx0kD7vNdwQBaDPDjPaEBWKQD8PYdYQDAygTg3xBa2AyiSjwR+iBg5QuAn5eFgTSI+Ke6KHSwhBTYkFOcvSb0MIeZrINYrgnDKqBSVtUVoQNcfLeTMB3cFSFVIr67ozaPnTBshXUQB3u1FDooBlFLZin0ueDjLjkYRCkMubBItaKFUEwCLdVBFEIPy3YYa7t4PYhCGECvqfjAi7Q2DcyeETo2gp+YRYZF5Pc4juOozwgNoOMKcBa0TNTadi4YQAzOAKoF6Wr7qhQAxPyQFhbp8SGJFwUvVkRwIgbVpG3VjZ8i0o3jp4i043g0i5Avo0XADqmME15EpnWJOf1CaMdH2lrcV2oODaiwZ1RaYfb4zAq9ygMDiHQD2LBN96v8tWAAFvAiE7jw7sdOQ1cFAH6nVhd75py18mMhHH09WBkAFR7odQhrkV8Kod8bXDh3wrvddvvrimCARWAOB3A6jh9DYK4IPWBb0EP47wFAdUPefY6EFn5Kjwsv1XERTHkHrNTCiRh87NkDgOu4IkwqVhRYwhDm6ZLQxpuEB1SY/ieXhHR+fQGhUzKVQgfqUDDAkr5mcLuzZAJ3KEDa4UULTwLArwOhBZaYfleeJDDXhZ5wMQViuyqEriYYUOsFYnoitPUxuMflcnhH6NYbyCL7NKCD8N9RLT5im3BWmmdCD3BYzdQmlDxJQxRcTYh95UkasNIDviJ0qbHvAeKarQhNcRXcC3NFmPLLfbsXdEUY8rO73W+L490d0jAX2z0TXEVoq8JSEfrt8ZZOwiYJ4SQ+FkwhDICX7bawFYHiChO+OT0EJ9eEbnt0ztLAfEYol0Na4kp6sBeFPn6c0sZyckYoijk/ZtOjrgomVYb4w1xOCSov5vpcxCznBJ199KkmTsTYc4LNijmvB4mIlXNCXkydMqrqt8EouLzdrF3Dnhby5eBTTZycFpasmPP+cVXIl4NOj9VbQkpDm1WoKuhtMX3KqJN3hDYNqM+yUxWyYurHreAdoU8fTPb7ryb4bSl8ero9xi4Jc3q6XBBmqcWx8PKn8kvhjjvuuOOOOw7jD4ser2yVhz8iAAAAAElFTkSuQmCC"
        id="quagga_svg__b"
        width={129}
        height={129}
      />
    </defs>
  </svg>
);
export default SvgQuagga;
