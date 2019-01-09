import {ILogguer} from "../../sdk/Logger";

export let gLogger = jest.fn<ILogguer>(() => ({
    info(message: string): void {
        return;
    },
    serviceCreated(serviceName: string): void {
        return;
    },
    serviceMethod(methodName: string, serviceName: string): void {
        return;
    },
    repositoryCreated(repositoryName: string): void {
        return;
    },
}));
