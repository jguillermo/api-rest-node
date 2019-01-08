import { LoggerWinston } from "@sdk/Logger";
import "jest";

describe("logger winston", () => {
    test("parametros validados", () => {

        let log = LoggerWinston.getInstance();

        expect(undefined).toEqual(log.info("test logger"));

        expect(log).toEqual(LoggerWinston.getInstance());

    });
});
