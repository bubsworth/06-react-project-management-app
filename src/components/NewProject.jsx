import { useRef } from "react";
import Button from "./Button.jsx";
import Input from "./Input.jsx";
import Modal from "./Modal.jsx";

export default function NewProject({ onAdd }) {
  const modal = useRef();

  const title = useRef();
  const description = useRef();
  const due_date = useRef();

  function handleSave() {
    const enteredTitle = title.current.value;
    const enteredDescription = description.current.value;
    const enteredDueDate = due_date.current.value;

    if (
      entereredTitle.trim() === "" ||
      enteredDescription.trim() === "" ||
      enteredDueDate.trim()
    ) {
      modal.current.open();
      return;
    }

    onAdd({
      title: enteredTitle,
      description: enteredDescription,
      due_date: enteredDueDate,
    });
  }

  return (
    <>
      <Modal ref={modal} buttonCaption="Okay">
        <h2>Invalid Input</h2>
        <p>Oops ... looks ike you forgot to enter a vlaue</p>
        <p>Please make sure you provide a valid value for every input field.</p>
      </Modal>
      <div className="w-[35rem] mt-16">
        <menu className="flex items-center justify-end gap-4 my-4">
          <li>
            <button className="text-stone-800 hover:text-stone-950">
              Cancel
            </button>
          </li>
          <li>
            <button
              className="px-6 py-2 rounded-md bg-stone-800 text-stone-50 hover:bg-stone"
              onClick={handleSave}
            >
              Save
            </button>
          </li>
        </menu>
        <div>
          <Input type="text" label="Title" ref={title} />
          <Input label="Description" textarea ref={description} />
          <Input type="date" label="Due Date" ref={due_date} />
        </div>
      </div>
    </>
  );
}
