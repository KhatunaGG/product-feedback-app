export type ChevronDownProps = {
  isCreateFeedback?: boolean;

};

const ChevronDown = ({ isCreateFeedback }: ChevronDownProps) => {
  return (
    <svg
      width="9"
      height="7"
      viewBox="0 0 9 7"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M0.707031 0.707031L4.70703 4.70703L8.70703 0.707031"
        stroke={isCreateFeedback ? "#4661E6" : "white"}
        strokeWidth="2"
      />
    </svg>
  );
};

export default ChevronDown;
