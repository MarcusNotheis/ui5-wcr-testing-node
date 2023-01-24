import { render, screen, waitFor } from "@testing-library/react";

import App from "./App";

describe("App", () => {
  it("renders headline", async () => {
    render(<App title="React" />);

    await waitFor(() =>
      expect(screen.findByTestId("shellbar")).toHaveAttribute("ui5-shellbar")
    );

    screen.debug();

    // check if App components renders headline
  });
});
