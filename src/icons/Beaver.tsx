import * as React from "react";
import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgBeaver = ({
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
    <path fill="url(#beaver_svg__a)" d="M0 0h128v128H0z" />
    <defs>
      <pattern
        id="beaver_svg__a"
        width={1}
        height={1}
        patternContentUnits="objectBoundingBox"
      >
        <use xlinkHref="#beaver_svg__b" transform="scale(.00781)" />
      </pattern>
      <image
        xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIAAAACACAMAAAD04JH5AAAANlBMVEX///8AAAD///////////////////////////////////////////////////////////////9TvwflAAAAEXRSTlMAACCAr78Qn89gMFCPQO/fcCsi9/cAAAMASURBVHja7ZrZcuQgDEUjVhuzmP//2TykEy8NSGA7M1XRfexSzAnmSgLz8cFisVgsFovFYrH+Q0FBQiqtpABUrcBxAGPzl6xpD98OHAYwU/7W1CRAAocBdN6kWwBI4CjAnPea6+NjgaMA0+G5Ux0ACxwFyEe9fnWL9FprraQMphX4BICZVTz8lvzyiwBB5YKSFL8EoDNRTwFkBmAABmAABvjbAEk2a1H09lkABQCyPn4yAOFRANd+JeuhM30CQPwLALcbwQLA2n4F7jhd1wHcofvT0rYWYZJ+C4/uDgCTCuMoWZB/i4ziOoCZCuPLysYsngNP+7MRgOKEB8LOrEQwAOCLb5o8A6cdYj/AXMl35e1/kdZeAQi1xW6LRxNobC+Ai1W7BdIK2GWnEYCiAeub/+p0bfv0PoCiARub/4QH9wE0M15O5xOYtVWk3QCAR7oNiVvwjaAHYMbanZMVPSW6A8DhDZclWPCUEukALhJavkCw4JGADNA2QMGKgRZOBiCegcwUC+7fGRUg0MbfrLjS4h0VwBEBvq1o4s0A4PaNTkStWLdg3D/IjbVkFrWiIKerEYAVt6Ik14wBACwhKgzg0Jv3A1QTUtrlghdAbBeiIQARqzP/QtsAbC197frSXoBqQtQA4NIBQNbz4UbQC6CbGcjYDSAFaCwGOwhgsUoo/KQBYFUzsmD9EMCKVtfW95qiGbsAEAPG5dQRKULp7gHAOwK9d7hEwr/M2AEgIrkUAQAYWuWkA5A6komeMHs7ImJHYmgVa8vaZADf2xGRGgIPdzcktnSK1JC4vSX78QAtPpBfwarPii0fFC2r1PkZ64X7A7X/0QsAmEvjx1vvD7x9l8a1wM0AInaN7+FuAFh6xq984r8EQMl22D2PawDU/U/1EO0yAHUO6vdcrgKUDfdWpuv3bC4DgJt6ivQDAGCQOpUCPAsA4BqlOsr2PatbAKByhSTnJJF7XncBAIj1bS1Eu+AX3W4DAAAx+58SOSkZKH9DBmCxWCwWi8VisVisv6VPfRMX4lwxKWMAAAAASUVORK5CYII="
        id="beaver_svg__b"
        width={128}
        height={128}
      />
    </defs>
  </svg>
);
export default SvgBeaver;
