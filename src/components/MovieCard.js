export default function MovieCard({
  title = "N/A",
  duration = "",
  description = "",
  image = "",
  vote_average = "",
}) {
  return (
    <div className="aspect-[2/3] rounded-md overflow-hidden relative text-white group transition">
      <div className="opacity-0 bg-black absolute inset-0 z-1 group-hover:opacity-80 transition"></div>
      <div className="opacity-0 absolute z-10 left-4 top-4 group-hover:opacity-100 transition">
        <div className="flex justify-between">
        <h2 className="font-bold mb-2">{title}</h2>
        <span className="bg-red-500 p-2 grow-0 h-10 w-10 text-center rounded">{vote_average}</span>
        </div>
        <p className="">{duration}</p>
        <p className="">{description.substring(0, 30)}</p>
      </div>
      <img src={image} className="z-0 object-cover w-full h-full" />
    </div>
  );
}
