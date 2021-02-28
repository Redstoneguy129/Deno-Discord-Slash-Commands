import { ApplicationCommandOption } from "./ApplicationCommandOptions.ts";
import { Snowflake } from "./Snowflake.ts";

export type ApplicationCommand = {
    id: Snowflake;
    application_id: Snowflake;
    name: string;
    description: string;
    options: ApplicationCommandOption[];
};

export type PartialApplicationCommand = {
    name: string;
    description: string;
    options?: ApplicationCommandOption[];
};
