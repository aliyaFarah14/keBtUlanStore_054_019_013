import React from "react";
import * as RadixDropdownMenu from "@radix-ui/react-dropdown-menu";
import { Button } from "../button"; 

export default function DropdownMenu() {
  return (
    <RadixDropdownMenu.Root>
      <RadixDropdownMenu.Trigger asChild>
        <Button variant="outline">Menu</Button>
      </RadixDropdownMenu.Trigger>

      <RadixDropdownMenu.Content className="w-56 rounded-md border bg-white p-1 shadow-md">
        <RadixDropdownMenu.Item
          className="px-2 py-1 rounded hover:bg-gray-100 cursor-pointer"
          onSelect={() => alert("Item 1 clicked")}
        >
          Item 1
        </RadixDropdownMenu.Item>

        <RadixDropdownMenu.Item
          className="px-2 py-1 rounded hover:bg-gray-100 cursor-pointer"
          onSelect={() => alert("Item 2 clicked")}
        >
          Item 2
        </RadixDropdownMenu.Item>

        <RadixDropdownMenu.Item
          className="px-2 py-1 rounded hover:bg-gray-100 cursor-pointer"
          onSelect={() => alert("Item 3 clicked")}
        >
          Item 3
        </RadixDropdownMenu.Item>
      </RadixDropdownMenu.Content>
    </RadixDropdownMenu.Root>
  );
}
