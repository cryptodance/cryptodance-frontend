import React from "react";
import { Box, Text, ResponsiveContext, Anchor, Button } from "grommet";
import { Money } from "grommet-icons";

const Nav = (props) => {
  const size = React.useContext(ResponsiveContext);

  return (
    <Box
      tag="header"
      direction="row"
      align="center"
      justify="between"
      width="xlarge"
      alignSelf="center"
      gap="medium"
      pad={{ left: "medium", right: "small", vertical: "small" }}
      {...props}
    >
      <Anchor
        href="/"
        icon={<Money size="large" />}
        label={size !== "small" && <Text size="xlarge">CryptoDance</Text>}
      />
      <Box direction="row" gap="small">
        <Button plain href="" target="_blank" rel="noreferrer">
          {({ hover }) => (
            <Box
              pad={{ vertical: "small", horizontal: "medium" }}
              round="xlarge"
              background={hover ? "active" : "control"}
              direction="row"
              gap="small"
            >
              <Text icon> More</Text>
            </Box>
          )}
        </Button>
      </Box>
    </Box>
  );
};

export default Nav;
