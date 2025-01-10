import { Dispatch, SetStateAction } from "react";

export const handleTextChange = <T extends object>(
  setFields: Dispatch<SetStateAction<T>>,
  attribute: string,
  text: string
) => {
  setFields((prev) => ({
    ...prev,
    [attribute]: text,
  }));
};
