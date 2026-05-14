import type { Principal } from "@icp-sdk/core/principal";
export interface Some<T> {
    __kind__: "Some";
    value: T;
}
export interface None {
    __kind__: "None";
}
export type Option<T> = Some<T> | None;
export type SubmitResult = {
    __kind__: "ok";
    ok: bigint;
} | {
    __kind__: "err";
    err: string;
};
export interface Project {
    id: bigint;
    title: string;
    githubLink: string;
    description: string;
    demoLink: string;
    techStack: Array<string>;
}
export interface Skill {
    name: string;
    color: string;
    iconName: string;
    proficiency: bigint;
}
export interface ContactSubmission {
    id: bigint;
    subject: string;
    name: string;
    email: string;
    message: string;
    timestamp: bigint;
}
export interface ContactFormInput {
    subject: string;
    name: string;
    email: string;
    message: string;
}
export interface backendInterface {
    getContactSubmissions(): Promise<Array<ContactSubmission>>;
    getProjects(): Promise<Array<Project>>;
    getSkills(): Promise<Array<Skill>>;
    submitContact(input: ContactFormInput): Promise<SubmitResult>;
}
