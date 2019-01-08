import { LoggerWinston } from "@sdk/Logger";
import "jest";

describe("logger winston", () => {
    test("parametros validados", () => {

        let log = LoggerWinston.getInstance();

        expect(undefined).toEqual(log.info("jose"));

        expect(log).toEqual(LoggerWinston.getInstance());

    });
});
