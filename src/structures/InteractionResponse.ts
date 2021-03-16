import { InteractionApplicationCommandCallbackData } from "./InteractionApplicationCommandCallbackData.ts";
import { InteractionResponseType } from "./InteractionResponseType.ts";

export type InteractionResponse = {
    type: InteractionResponseType;
    data?: InteractionApplicationCommandCallbackData;
};
