import { GetHealthUseCase } from "./get-health.use-case.js";

type DatabaseServiceDependency = ConstructorParameters<typeof GetHealthUseCase>[0];

describe("GetHealthUseCase", () => {
  it("returns a healthy response when the database is reachable", async () => {
    const execute = jest.fn(async () => undefined);

    const databaseService = {
      db: {
        execute,
      },
    } as unknown as DatabaseServiceDependency;

    const useCase = new GetHealthUseCase(databaseService);

    await expect(useCase.execute()).resolves.toEqual({
      ok: true,
      database: "connected!",
    });
    expect(execute).toHaveBeenCalledTimes(1);
  });

  it("propagates database errors", async () => {
    const databaseError = new Error("database unavailable");
    const execute = jest.fn(async () => {
      throw databaseError;
    });

    const databaseService = {
      db: {
        execute,
      },
    } as unknown as DatabaseServiceDependency;

    const useCase = new GetHealthUseCase(databaseService);

    await expect(useCase.execute()).rejects.toThrow(databaseError);
  });
});
