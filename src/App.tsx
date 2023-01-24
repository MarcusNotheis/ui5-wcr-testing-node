import { ThemeProvider, ShellBar, Label } from "@ui5/webcomponents-react";

function App() {
  return (
    <ThemeProvider>
      <ShellBar
        primaryTitle="UI5 Web Components for React Issue Template"
        data-testid="shellbar"
      />
      <Label>Your code here</Label>
      {/* Add your example code here */}
    </ThemeProvider>
  );
}

export default App;
