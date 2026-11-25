import { treaty } from "@elysiajs/eden";
import { App } from "./../../app/api/[[...slugs]]/route";

export const client = treaty<App>("localhost:4000").api;
