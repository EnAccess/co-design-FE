const ForwardArrow = ({ color = "#000000" }: any) => {
  return (
    <svg
      fill={color}
      width="30px"
      height="30px"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g data-name="Layer 2">
        <g data-name="arrow-forward">
          <rect
            width="24"
            height="24"
            transform="rotate(-90 12 12)"
            opacity="0"
          />

          <path d="M5 13h11.86l-3.63 4.36a1 1 0 0 0 1.54 1.28l5-6a1.19 1.19 0 0 0 .09-.15c0-.05.05-.08.07-.13A1 1 0 0 0 20 12a1 1 0 0 0-.07-.36c0-.05-.05-.08-.07-.13a1.19 1.19 0 0 0-.09-.15l-5-6A1 1 0 0 0 14 5a1 1 0 0 0-.64.23 1 1 0 0 0-.13 1.41L16.86 11H5a1 1 0 0 0 0 2z" />
        </g>
      </g>
    </svg>
  );
};

export default ForwardArrow;
