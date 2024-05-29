const Button = ({ text }: { text: string }) => {
  return (
    <button
      className="bg-[#3454D1] hover:bg-blue-700 text-white font-bold button rounded"
      //   onClick={onClick}
    >
      {text}
    </button>
  );
};

export default Button;
