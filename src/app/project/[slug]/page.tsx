
import { ProjectSchema } from "@/@types";
import ProjectInfo from "@/app/components/Project";
import { getProjects, getProjectsById } from "@/services"

export async function generateStaticParams() {
    const projects = await getProjects();
    return projects.map((project: ProjectSchema) => ({
        slug: project.id.toString()
    }));
};

export default async function Project({ params }: { params: { slug: string } }) {
    const project: ProjectSchema = await getProjectsById(params.slug);
    return <ProjectInfo {...project} />
}