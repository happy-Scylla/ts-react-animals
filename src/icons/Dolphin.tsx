import * as React from "react";
import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgDolphin = ({
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
    <path fill="url(#dolphin_svg__a)" d="M0 0h129v129H0z" />
    <defs>
      <pattern
        id="dolphin_svg__a"
        width={1}
        height={1}
        patternContentUnits="objectBoundingBox"
      >
        <use xlinkHref="#dolphin_svg__b" transform="scale(.00775)" />
      </pattern>
      <image
        xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIEAAACBBAMAAAAVjsRjAAAAElBMVEX///8AAAD///////////////+k0Pl/AAAABXRSTlMAAIC/QDbf7tYAAAI6SURBVGje7dhBdoQgDADQtq8HqBr3HaYcYOaVfbWPA6iT+1+lCx0RRUjI646sOn3tHwxBAi8vJUqUKFEiGa9VNGp1HZU6/v6DKIDGOb4yhRrXGLOEDYB4IwmgDI5KqW7+tAVwoAi9+/v7pao0W/j1/mO6eh8pT+ED+yBkEqLA1KUFExVu6Xpo4kMg1KTmDeEoAHMIRyH+EANBsFHhQhDiaagIgkHE8XRGKcKc8JY8FVxhIgqP87p80ASMFHZHEzgVwRYmYT0EpoMvTGJhn8ut0CullEkKj1PhHWkxnQpvRGG3QHOEQfoUu8fYZvKXSnSUnReU0rSiiu7dljKfUQEoiYj3D5aQiLgwD2I0sUQkehg7z38fSURCgKWCanPaAaT6KLvUIOizt35KgLWK9cnSSPZydl0HOpzKpADuC3VwcaX7yX7thMGEUvlB7qu9xjRX2HR5uYLbDbtcAY7TyRTWtXbLFuAwnVzhOQiBAPvpZAvLICRCs3vR8YWlJiSCFQuNX5QZQuUXZY6gxUIrFmqxAF5Z5wiVEQtaLFix0IqFRizUiDh2AqGfLwPuuYLbuUbRW84RbMHsu6Hc/cI1dbl7lhsEU7DHK5Xcndft4TyhDpw1eEIbOGvwBB24W+IJJtCk84TQjURuJ+bafJbgbnmGNSMXluCmoluxgSVolz8QCjf388gStqekJkdYR/69rQ2OUHtHvaf3wxBa/45zAT85YzC4fc1XcEXE+w9vdT/vn8PnrBIlSpT4l/gDmbgOZCJFnFYAAAAASUVORK5CYII="
        id="dolphin_svg__b"
        width={129}
        height={129}
      />
    </defs>
  </svg>
);
export default SvgDolphin;
