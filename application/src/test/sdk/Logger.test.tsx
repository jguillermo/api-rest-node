import { LoggerWinston } from "@sdk/Logger";
import "jest";

describe("logger winston", () => {
    test("parametros validados", () => {

        let log = LoggerWinston.getInstance();

        expect(undefined).toEqual(log.info("test logger"));
        expect(undefined).toEqual(log.serviceCreated("serviceA"));
        expect(undefined).toEqual(log.serviceMethod("login", "ServiceB"));
        expect(undefined).toEqual(log.repositoryCreated("repository C"));

        expect(log).toEqual(LoggerWinston.getInstance());

    });
});
