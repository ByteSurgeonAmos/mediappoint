const Button = ({
  text,
  handleScrollToView,
}: {
  text: string;
  handleScrollToView: () => void;
}) => {
  return (
    <button
      className="bg-[#3454D1] hover:bg-blue-700 text-white font-bold button rounded-[12px]"
      onClick={handleScrollToView}
    >
      {text}
    </button>
  );
};

export default Button;
