import passwordStrength from "./index";

describe("Password strength", () => {
  it("should be weak password when use sequence", () => {
    expect(passwordStrength("1234567890")).toBe("weak");
    expect(passwordStrength("0987654321")).toBe("weak");
    expect(passwordStrength("abc123dfg456")).toBe("weak");
    expect(passwordStrength("a1b2c3d4e5")).toBe("weak");
  });

  it("should be weak password when the same number repeated many times", () => {
    expect(passwordStrength("11111111111111")).toBe("weak");
    expect(passwordStrength("00000000000000")).toBe("weak");
    expect(passwordStrength("aaaaaaaaaaaaaa")).toBe("weak");
    expect(passwordStrength("zzzzzzzzzzzzzz")).toBe("weak");
  });

  it("should be weak password by lenght", () => {
    expect(passwordStrength("APxm9623&*-+")).toBe("weak");
    expect(passwordStrength("*%xtVP9@23&!")).toBe("weak");
  });
});
