import Button from "./Button";

export default function ProjectsSideBar() {
  const handleClick = () => {
    // Some button logic
  };

  return (
    <aside className="w-1/3 px-8 py-16 bg-stone-900 text-stone-50 md:w-72 rounded-r-xl">
      <h2 className="mb-8 font-bold uppercase md:text-xl text-stone-200">
        Your Projects
      </h2>
      <div>
        <Button onClick={handleClick}>+ Add Project</Button>
      </div>
      <ul className="mt-8">
        <li className="flex justify-between my-4">Learning React</li>
        <li className="flex justify-between my-4">Mastering React</li>
      </ul>
    </aside>
  );
}
