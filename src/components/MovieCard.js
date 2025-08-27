export default function MovieCard({title = "N/A", artis = ""}) {
  return <div className="bg-sky-500  w-48 h-48 aspect-[2/3] rounded-md">
    <h2>{title}</h2>
    <p>{artis}</p>
  </div>;
}