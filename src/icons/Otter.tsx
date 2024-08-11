import * as React from "react";
import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgOtter = ({
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
    <path fill="url(#otter_svg__a)" d="M0 0h129v129H0z" />
    <defs>
      <pattern
        id="otter_svg__a"
        width={1}
        height={1}
        patternContentUnits="objectBoundingBox"
      >
        <use xlinkHref="#otter_svg__b" transform="scale(.00775)" />
      </pattern>
      <image
        xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIEAAACBBAMAAAAVjsRjAAAAG1BMVEX///8AAAD///////////9Xs0dXs0f///9Xs0dOEAi1AAAAB3RSTlMAAECAv0CAMw1xIgAAApZJREFUaN7tmM2KnTAYhmd6Bf0SIeswB7LOccB1poVsexXdHxXeW+hlz0L9Yvw7iballLwrDfiQfP/m5aWoqKio6KleaVviHQD6Ox3o6xHhDaO6k4QbkIA4IEjM1J4gCD8nwOUTTARAn00QWMjlEsyS0GcRRH3HSq62yYSFEY9Pskkw2JNOI4hdAB5phGqf0KUR1D4BaQRzmdD8A3u4bofrvrgeD9djcsqL2gPoPT8CH8m52QyFTQJoDYB2tA3lERwRAFsBsKNtdB7BEgEYMEQYlxIJY3kWQEfUAG4s3JkE6AZwRArodXOKMJ5cnKhRFJdXfxRQ2wQZf2KuEGycJycIi0O1+YS61rKuD1v4JmGe3lYdJ/c2Qf0+woeHVehu5wlawipoeZ7gSGppZwGR3zf1YhxKJYSG0dt4nsoh+MRiv0vo1lOQyiP060lMbReITYIHoMVyfPEZhCGJTLyFCpmExSbaoc5kEVqau0NXyCZMH0U4l9V555uYaImddwpCbYId/SmC42O0AqcID84IfvprhGqfkDmRbtghndADgFaxL3wO4VGt46EVWQSS93nTfpC8k8yyg456Nr+vf5V+/diZq3srovF6el8Rfv6Zyfz/IPgDgt4j+MnTEk/l+G5BB8IXnrr9c8LwYTVVzUDAk5+TxV2Ejwmv0+5StgBMp52d4vVtyDsB4HuIw/BNEy26YUC4R74QADSZqFeFcu94cz3dgI7Is0XZm2asI5bd0YZDaTaQIwHA3kKSMaEKg7TneVYxSwQ/mLhkhojyvK6YJUIENOyGKo6tQFC8LkLgGB7wq7DoowF5FtWe1w1fu4gQhA0X2ioK7xlBenwbV9/Ra47y8VZONOg037bZRV4UFRUVFRUVFWXoE3njDKPDQaB6AAAAAElFTkSuQmCC"
        id="otter_svg__b"
        width={129}
        height={129}
      />
    </defs>
  </svg>
);
export default SvgOtter;
