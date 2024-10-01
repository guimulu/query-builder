import { useState } from "react";
import axios from "axios";
import { fromZodError } from "zod-validation-error";

import Box from "@components/box";
import Button from "@components/button";
import GroupComponent from "@components/group";

import { QueryOutput } from "@features/query-output";

import { type Group, groupSchema } from "@schemas/GroupSchema";

const QueryBuilder = () => {
  const initialRootGroup: Group = {
    combinator: "AND",
    conditions: [],
  };
  const [rootGroup, setRootGroup] = useState<Group>(initialRootGroup);
  const [queryOutput, setQueryOutput] = useState<string>("");
  const [error, setError] = useState<string | null>(null);

  const handleClickSubmit = async (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    const parsedGroup = groupSchema.safeParse(rootGroup);

    if (parsedGroup.success) {
      setError(null);
      const queryJson = JSON.stringify(parsedGroup.data, null, 2);

      try {
        await axios.post("/api/save-rules", parsedGroup.data);
        setQueryOutput(queryJson);
      } catch {
        setError("Unable to submit the query. Please try again later.");
      }
    } else {
      console.error("Invalid query: ", parsedGroup.error);
      console.log(fromZodError(parsedGroup.error).message);
      setError("Invalid query. Please check the flagged fields and try again.");
    }
    return false;
  };

  const handleClickCancel = () => {
    setRootGroup(initialRootGroup);
    setQueryOutput("");
    setError(null);
  };

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        padding: "2rem",
      }}
    >
      <Box as="h1" sx={{ margin: ".25rem 0 1rem 0" }}>
        Query Builder
      </Box>
      <Box sx={{ display: "block" }}>
        <Box
          sx={{
            display: "flex",
            gap: "1rem",
            justifyContent: "flex-end",
            marginBottom: "1rem",
          }}
        >
          <Button data-cy="submit" onClick={handleClickSubmit}>
            Submit
          </Button>
          <Button data-cy="cancel" onClick={handleClickCancel}>
            Cancel
          </Button>
        </Box>
        {error && <Box sx={{ color: "#af473f" }}>{error}</Box>}
        <Box
          sx={{
            backgroundColor: "#242424",
            borderRadius: "0.25rem",
          }}
        >
          <GroupComponent
            group={rootGroup}
            onChange={setRootGroup}
            onRemove={undefined} // Root group cannot be removed
          />
        </Box>
      </Box>
      {queryOutput && <QueryOutput queryOutput={queryOutput} />}
    </Box>
  );
};
export default QueryBuilder;
