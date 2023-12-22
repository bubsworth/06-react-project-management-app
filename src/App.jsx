import ProjectsSideBar from "./components/ProjectsSideBar";
import NewProject from "./components/NewProject";

export default function App() {
  return (
    <>
      <main className="h-screen my-8 flex gap-8">
        <ProjectsSideBar />
        <NewProject />
      </main>
    </>
  );
}
