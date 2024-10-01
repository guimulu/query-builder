import { useEffect, useRef } from "react";

import Box from "@components/box";
import Button from "@components/button";
import RuleComponent from "@components/rule";
import Select from "@components/select";

import { useAutoAnimate } from "@formkit/auto-animate/react";

import { type Group } from "@schemas/GroupSchema";
import { type Rule } from "@schemas/RuleSchema";

interface GroupComponentProps {
  group: Group; // The group object to render
  onChange: (updatedGroup: Group) => void; // Callback to update the parent Group
  onRemove?: () => void; // If undefined, it means it's the root group
}

const GroupComponent: React.FC<GroupComponentProps> = ({
  group,
  onChange,
  onRemove,
}) => {
  const [parent] = useAutoAnimate();
  const groupRef = useRef<HTMLDivElement>(null);
  const isRoot = onRemove === undefined;

  const handleCombinatorChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const updatedGroup = {
      ...group,
      combinator: e.target.value as "AND" | "OR",
    };
    onChange(updatedGroup);
  };

  // Handle changes in either Rule or Group
  const handleConditionChange = (
    index: number,
    updatedCondition: Rule | Group,
  ) => {
    const updatedConditions = isRoot
      ? [...(group.conditions || [])]
      : [...(group.subConditions || [])];

    updatedConditions[index] = updatedCondition;

    onChange(
      isRoot
        ? { ...group, conditions: updatedConditions }
        : { ...group, subConditions: updatedConditions },
    );
  };

  const addRule = () => {
    const newCondition: Rule = {
      fieldName: "name",
      operation: "EQUAL",
      value: "",
    };
    const updatedGroup = isRoot
      ? { ...group, conditions: [...(group.conditions || []), newCondition] }
      : {
          ...group,
          subConditions: [...(group.subConditions || []), newCondition],
        };

    onChange(updatedGroup);
  };

  const addGroup = () => {
    const newGroup: Group = { combinator: "AND", subConditions: [] };
    const updatedGroup = isRoot
      ? { ...group, conditions: [...(group.conditions || []), newGroup] }
      : { ...group, subConditions: [...(group.subConditions || []), newGroup] };

    onChange(updatedGroup);
  };

  const removeCondition = (index: number) => {
    const updatedConditions = isRoot
      ? [...(group.conditions || [])]
      : [...(group.subConditions || [])];

    updatedConditions.splice(index, 1);

    onChange(
      isRoot
        ? { ...group, conditions: updatedConditions }
        : { ...group, subConditions: updatedConditions },
    );
  };

  const conditions = isRoot ? group.conditions : group.subConditions;

  useEffect(() => {
    if (groupRef.current) {
      groupRef.current.scrollIntoView({ behavior: "smooth" });
    }
    return () => {};
  }, []);

  return (
    <Box
      ref={groupRef}
      data-cy="group"
      sx={{
        backgroundColor: "rgb(214 214 214 / 5%)",
        borderRadius: "0.25rem",
        padding: [0, "1rem .2rem 1rem 0.5rem"],
        border: "1px solid rgb(89 89 89 / 50%)",
        marginBottom: "1rem",
      }}
    >
      <Box
        sx={{
          padding: "0.5rem 0",
          display: "flex",
          gap: ".5rem",
          flexWrap: "wrap",
        }}
      >
        <Select
          id="combinator"
          name="combinator"
          label=""
          defaultValue={group.combinator}
          options={[
            { value: "AND", label: "AND" },
            { value: "OR", label: "OR" },
          ]}
          onChange={handleCombinatorChange}
        />

        <Button data-cy="add-rule" onClick={addRule}>
          + Rule
        </Button>
        <Button data-cy="add-group" onClick={addGroup}>
          + Group
        </Button>

        {onRemove === undefined ? null : (
          <Button data-cy="remove-group" onClick={onRemove} variant="danger">
            -
          </Button>
        )}
      </Box>

      <Box ref={parent} sx={{ marginLeft: ["0", "1rem"] }}>
        {conditions?.map((condition, index) => {
          if ("fieldName" in condition) {
            // Render Rule
            return (
              <RuleComponent
                key={index}
                rule={condition}
                onChange={(updatedRule) =>
                  handleConditionChange(index, updatedRule)
                }
                onRemove={() => removeCondition(index)}
              />
            );
          } else {
            // Render nested Group (sub-group)
            return (
              <GroupComponent
                key={index}
                group={condition}
                onChange={(updatedGroup) =>
                  handleConditionChange(index, updatedGroup)
                }
                onRemove={() => removeCondition(index)}
              />
            );
          }
        })}
      </Box>
    </Box>
  );
};

export default GroupComponent;
