import * as React from "react";
import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgPlatypus = ({
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
    <path fill="url(#platypus_svg__a)" d="M0 0h129v129H0z" />
    <defs>
      <pattern
        id="platypus_svg__a"
        width={1}
        height={1}
        patternContentUnits="objectBoundingBox"
      >
        <use xlinkHref="#platypus_svg__b" transform="scale(.00775)" />
      </pattern>
      <image
        xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIEAAACBBAMAAAAVjsRjAAAAElBMVEX///8AAAD///////////////+k0Pl/AAAABXRSTlMAAECAv9KsvScAAAJSSURBVGje7dlNcuMgEAXgHCEgdABmov1ghQNgFweQ4N3/KrOQHAsLVfGgkmjhXtku11f6oVvd6O3tFa84fYhHyHEcR7P54Z0TpAUAIJpK4S++4lolfAB7ghE6IEMQgsRTGFawz0IkBYVdXDnB7wVoRsgcAjAzgs0JkRAksuHKhT4vzOWCzwsoFg5OAnClgjoS5lJhOBJiqXB0GYBS4RCAKRO6Y2EqE9SxMJcJ/bEQygT7nQJ+SvAAEP8kqyJ0jLDctzRB3Voy6gWzfv1XLsxpdrh1qRMCxjSnPkELzffil9dDuzA050X/ncL8UzWqXUgeOMFWVFqRth0fFYJPWoZtipU+L2zafqkWQSjACf6pd18Q8SI8EB/NbSCFoJe2VAvpSUGtf18vgRN3YioVOgCIWoi1MF3undVE9TDm69iBsB6NKe6jAMwbAAhLg0gJOu0pZyEB6GLBYkrHC8CJgejlhIWWuxaqY4Rh3ndjTvhA9LRGZvo4RQhdriF0cmqcL2ZhCCFb6KgJZTgYDsoF3zzjALj554IbSSGZEaLoAJBzVlKkdY3gNvPadbm27KynH0V6+RgYoQcQNoJEjbC5GzdbJzSth+yIMYnWvDiDYKj9h7MKunkXhduHsScQMoUycEJ/TmHihO6cguMEmU8LZn/ynELzLusZBHand5+cgRX6EwgqmxaM0DULMptY1LuD3NOCE2xuQVFCv28/SEHmLgP3FsZnToITVOYkyHdJfncnWEHtD4F9IzakmV0h3NdE1NXCMrrftKgXhOguydcy4RWvaIj/rDkUUBm9ebsAAAAASUVORK5CYII="
        id="platypus_svg__b"
        width={129}
        height={129}
      />
    </defs>
  </svg>
);
export default SvgPlatypus;
