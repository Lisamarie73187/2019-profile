import { Github } from "./GitHub";

export interface Notes {
    title: string;
    subTitle: string;
    github?: Github;
    app?: string;
}