export type ProjectSchema = {
    id: string;
    order: number;
    project_name: string;
    deploy_url: string;
    banner_url: string;
    thumbnail_url: string;
    description: string;
    techs: LinksTypeProps;
}

type TechsTypeProps = {
    id: string;
    svg_name: string;
    link: string;
    svg_link: string;
}

type LinksTypeProps = {
    links: TechsTypeProps[]
}

type ProjectsResponse = {
    projects: ProjectSchema[];
}

type ProjectResponse = {
    project: ProjectSchema;
}

type ErrorResponseProps = {
    error: string;
}

export type APIProjectsResponse = ProjectsResponse | ErrorResponseProps;
export type APIProjectResponse = ProjectResponse | ErrorResponseProps;