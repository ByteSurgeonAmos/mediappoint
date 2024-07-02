const Button = ({
  text,
  handleScrollToView,
}: {
  text: string;
  handleScrollToView: () => void;
}) => {
  return (
    <button
      onClick={handleScrollToView}
      className="bg-[#098CE9] hover:bg-[#0A74C8] px-3 text-xs sm:px-6 lg:px-8 sm:text-sm md:text-base font-semibold lg:font-bold  h-8 sm:h-10 md:h-12 rounded-[8px] md:rounded-xl text-white mr-1 md:mr-2 lg:mr-4"
    >
      {text}
    </button>
  );
};

export default Button;
