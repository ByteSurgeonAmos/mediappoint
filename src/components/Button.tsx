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
      className="bg-[#098CE9] hover:bg-[#0A74C8] px-10 font-bold h-12 rounded-xl text-white mr-4"
    >
      {text}
    </button>
  );
};

export default Button;
