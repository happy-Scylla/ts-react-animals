import * as React from "react";
import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgPumpkin = ({
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
    <path fill="url(#pumpkin_svg__a)" d="M0 0h129v129H0z" />
    <defs>
      <pattern
        id="pumpkin_svg__a"
        width={1}
        height={1}
        patternContentUnits="objectBoundingBox"
      >
        <use xlinkHref="#pumpkin_svg__b" transform="scale(.00775)" />
      </pattern>
      <image
        xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIEAAACBBAMAAAAVjsRjAAAAElBMVEX///8AAAD///////////////+k0Pl/AAAABXRSTlMAAECAv9KsvScAAAJbSURBVGje7dhhTvQgEAZgjyC0PUCj+//rIgeoGw6wlPf+V/l+uLR0dwamSzQmMgnRGH2WMlMYfHlp0aJFiz8RKg1tjFHZeC0IFgDONQIAAHO1gLFa8NVCZhJSwVcLqMsmAEzVwvVZYYjCopRSylgs0zGhTxeicwAQjgk6ETpyUUuCcmtFaPeccFqTcaJLoyisj2Hi14O5SCbB1EVZ0DtgVseFJKEPmRQK6j03BZGgug9+CjJhrW5fIVh2v5QK/CsuFDS/zeSEN7fW4C0dl1GpzgLARSLEBCyjXvcZnGNqw1gUtr8KDkREghXeUYqQFzTK4bOCFQhfxxAj9BLgaxKM4EQCRlbQMgCeFU5CAazgpMLMCJ0UwMII4ocAGMHJhYkUtBzAlRToclosvRCUMNCfRv+YFOh3YqQzNFIC9y6TCzyLBc8k+UoIu9le7Hbi9vfHOAD4krBrXNbpJIu6EMKwr9qkEbOxBpIPCQUhxPKak8ZuNwcQwm7BPm2yocViPbu8YPl9mcqnUPBkRwQA+CcTpsd25qDw0OofFfxDo35UWMwtnhZy8RuEUk0+JQw/LFDvZlp4F2M+qJHfH7rdcaAGauQFvd9hLDXy+6TavxD0yO/VaUFMHT22X6CE091JRY38mdXfnZbU2DYvSugOlIOn+4cDwlzdw4y00IuBwHRB8ibmynWDVv4QjCB9jKW6r55re/uQu1846RRYoZdOgb9nWVEicoJ2omfI3RY3It0Ptvfys3xjvd1Tw6SUjlvrOV5kwyS6d3fGmPgfVrN+r5Of0kKLFi1atGjxrfEfyzS0C+vB5L0AAAAASUVORK5CYII="
        id="pumpkin_svg__b"
        width={129}
        height={129}
      />
    </defs>
  </svg>
);
export default SvgPumpkin;
