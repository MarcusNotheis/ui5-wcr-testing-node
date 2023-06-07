import { render, screen, waitFor } from "@testing-library/react";

import App from "./App";

describe("App", () => {
  it("renders headline", async () => {
    render(<App />);

    screen.debug();
    
    expect(screen.getByText('Your code here')).toBeVisible();

  });
});
