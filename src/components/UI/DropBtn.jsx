import React, {useState} from "react";
import {Button, ButtonGroup, Dropdown, DropdownTrigger, DropdownMenu, DropdownItem} from "@nextui-org/react";
import { ChevronDown } from 'lucide-react';

export default function DropBtn() {
  const [selectedOption, setSelectedOption] = useState(new Set(["min_15"]));

  const descriptionsMap = {
    min_5:"Me iré del parking en 5min.",
    min_10:"Me iré del parking en 10min.",
    min_15: "Me iré del parking en 15min.",
    min_30: "Me iré del parking en 30min.",
  };

  const labelsMap = {
    min_5: "Me iré en 5min",
    min_10: "Me iré en 10min",
    min_15: "Me iré en 15min",
    min_30: "Me iré en 30min",
  }

  // Convert the Set to an Array and get the first value.
  const selectedOptionValue = Array.from(selectedOption)[0];

  return (
    <ButtonGroup variant="flat" fullWidth>
        {/* {JSON.stringify(selectedOptionValue)} */}
      <Button size="lg" className="w-full bg-[var(--purple-2)] text-white">{labelsMap[selectedOptionValue]}</Button>
      <Dropdown placement="bottom-end">
        <DropdownTrigger>
          <Button isIconOnly size="lg" className="bg-[var(--purple-2)]">
            <ChevronDown className="stroke-white"/>
          </Button>
        </DropdownTrigger>
        <DropdownMenu
          disallowEmptySelection
          selectedKeys={selectedOption}
          selectionMode="single"
          onSelectionChange={setSelectedOption}
          className="w-full"
        >
          <DropdownItem key="min_5" description={descriptionsMap["min_5"]}>
            {labelsMap["min_5"]}
          </DropdownItem>
          <DropdownItem key="min_10" description={descriptionsMap["min_10"]}>
            {labelsMap["min_10"]}
          </DropdownItem>
          <DropdownItem key="min_15" description={descriptionsMap["min_15"]}>
            {labelsMap["min_15"]}
          </DropdownItem>
          <DropdownItem key="min_30" description={descriptionsMap["min_30"]}>
            {labelsMap["min_30"]}
          </DropdownItem>
        </DropdownMenu>
      </Dropdown>
    </ButtonGroup>
  );
}
