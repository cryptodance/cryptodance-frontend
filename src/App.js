import React from "react";
import { Grommet, Box, Heading, Paragraph } from "grommet";
import { grommet, dark } from "grommet/themes";
import Nav from "./components/Nav";

const THEMES = {
  grommet,
  dark,
};

function App() {
  const [themeName, setThemeName] = React.useState("grommet");

  return (
    <Grommet theme={THEMES[themeName || "grommet"]}>
      <Box>
        <Box pad="large">
          <Nav />
        </Box>
        <Box align="center">
          <Heading level="1" size="large" textAlign="center" margin="none">
            Combined Order Book
          </Heading>
          <Paragraph size="xxlarge" textAlign="center">
            A combined order book that takes the full order books from Bittrex
            and Poloniex
          </Paragraph>
        </Box>
      </Box>
    </Grommet>
  );
}

export default App;
