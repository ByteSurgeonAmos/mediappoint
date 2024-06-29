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
      className="bg-[#098CE9] hover:bg-[#0A74C8] px-3 text-xs sm:px-10 sm:text-base font-bold  h-8 lg:h-12 rounded-[8px] lg:rounded-xl text-white mr-1 md:mr-2 lg:mr-4"
    >
      {text}
    </button>
  );
};

export default Button;
