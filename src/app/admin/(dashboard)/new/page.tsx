import { ProjectForm } from "../../project-form";

export default function NewProjectPage() {
  return (
    <div>
      <h1 className="mb-8 text-2xl font-medium text-text">New project</h1>
      <ProjectForm isNew />
    </div>
  );
}
