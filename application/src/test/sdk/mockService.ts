import {ILogguer} from "../../sdk/Logger";

export let gLogger = jest.fn<ILogguer>(() => ({
    info(message: string): void {
        return;
    },
}));
