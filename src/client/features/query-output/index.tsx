import { useEffect, useRef } from "react";

import Box from "@components/box";
import Button from "@components/button";

interface QueryOutputProps {
  queryOutput: string;
}

export const QueryOutput: React.FC<QueryOutputProps> = ({ queryOutput }) => {
  const outputRef = useRef<HTMLPreElement>(null);

  useEffect(() => {
    if (outputRef.current) {
      outputRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [queryOutput]);

  return (
    <>
      <Box
        sx={{
          width: "100%",
          height: "1px",
          backgroundColor: "#d1d5db",
          marginTop: "2rem",
        }}
      />
      <Box ref={outputRef} as="h1" sx={{ margin: "2rem 0 1rem 0" }}>
        Query Output
      </Box>
      {/* Copy to Clipboard only works in secure contexts (https). */}
      <Button
        data-cy="copy-to-clipboard"
        onClick={() => navigator?.clipboard.writeText(queryOutput)}
      >
        Copy to Clipboard
      </Button>
      <Box
        data-cy="query-output"
        as="pre"
        sx={{
          backgroundColor: "rgba(214, 214, 214, 0.05)",
          padding: "1rem",
          borderRadius: "5px",
          fontSize: ".8rem",
        }}
      >
        {queryOutput}
      </Box>
    </>
  );
};
