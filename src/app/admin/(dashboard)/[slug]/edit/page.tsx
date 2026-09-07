import { notFound } from "next/navigation";
import { getProjectBySlug } from "@/lib/data/projects";
import { ProjectForm } from "../../../project-form";

export default async function EditProjectPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = await getProjectBySlug(slug);
  if (!project) notFound();

  return (
    <div>
      <h1 className="mb-8 text-2xl font-medium text-text">
        Edit: {project.name}
      </h1>
      <ProjectForm project={project} isNew={false} />
    </div>
  );
}
