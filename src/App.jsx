import { useEffect, useRef } from "react";
import SideBar from "./components/SideBar";

export default function App() {
  return (
    <>
      <main className="h-screen my-8 flex gap-8">
        <SideBar />
      </main>
    </>
  );
}
