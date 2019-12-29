import React from "react";
import { render, fireEvent } from "@testing-library/react";
import { LoginComponent } from "./LoginComponent";

it("renders correctly", () => {
  const { queryByPlaceholderText } = render(<LoginComponent />);
  expect(queryByPlaceholderText("Enter your username")).toBeTruthy();
  expect(queryByPlaceholderText("Enter your password")).toBeTruthy();
});

describe("Username input value", () => {
  it("login username", () => {
    const { queryByPlaceholderText } = render(<LoginComponent />);
    const usernameInput = queryByPlaceholderText("Enter your username");

    fireEvent.change(usernameInput, { target: { value: "admin" } });
    expect(usernameInput.value).toBe("admin");
  });
});

describe("Password input value", () => {
  it("login password", () => {
    const { queryByPlaceholderText } = render(<LoginComponent />);
    const passwordInput = queryByPlaceholderText("Enter your password");

    fireEvent.change(passwordInput, { target: { value: "123" } });
    expect(passwordInput.value).toBe("123");
  });
});
