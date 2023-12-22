import Button from "./Button.jsx";
import Input from "./Input.jsx";

export default function NewProject() {
  return (
    <div className="w-[35rem] mt-16">
      <menu className="flex items-center justify-end gap-4 my-4">
        <li className="flex justify-between my-4">
          <button className="text-stone-800 hover:text-stone-950">
            Cancel
          </button>
        </li>
        <li className="flex justify-between my-4">
          <Button />
        </li>
      </menu>
      <div>
        <Input label="Title" />
        <Input label="Description" textarea />
        <Input label="Due Date" />
      </div>
    </div>
  );
}
