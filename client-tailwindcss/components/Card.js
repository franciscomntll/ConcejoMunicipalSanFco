export const Card = () => {
  return (
    <div
      style={{ aspectRatio: "4/5" }}
      className="flex flex-col items-center justify-start gap-3 hover:shadow-xl transition shadow rounded-xl cursor-pointer overflow-hidden max-h-[300px] mx-auto w-full"
    >
      <img
        src="/basilica.jpg"
        className="bg-gray-500 w-full h-2/3 rounded-xl overflow-hidden object-center object-cover"
      />
      <div className="flex flex-col items-center justify-center gap-1 px-3 pb-3 pt-2">
        <h2 className="font-bold text-lg text-center text-gray-700 leading-5">
          Heading heading heading
        </h2>
        <small className="text-xs text-center text-gray-500">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua
        </small>
      </div>
    </div>
  );
};
