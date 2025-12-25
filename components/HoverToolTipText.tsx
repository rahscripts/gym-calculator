type HoverProps = {
   text: string;
   tooltip: string;
}

export default function HoverTooltipText({ text, tooltip,}: HoverProps) {
  return (
    <span className="relative inline-block group">
      {/* Clickable Text */}
      <span
        className="cursor-pointer font-medium text-black hover:opacity-80"
      >
        {text}
      </span>

      {/* Tooltip */}
      <span className="
        pointer-events-none
        absolute left-1/2 -top-9
        -translate-x-1/2
        opacity-0 scale-95
        group-hover:opacity-100 group-hover:scale-100
        transition-all duration-200
        whitespace-nowrap
        rounded-md bg-black px-2 py-1
        text-xs text-white shadow-lg
      ">
        {tooltip}
      </span>
    </span>
  );
}
