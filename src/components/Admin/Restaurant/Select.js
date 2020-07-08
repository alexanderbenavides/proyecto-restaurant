import React from "react";
import { NativeSelect } from "@material-ui/core";

export default function CustomizedSelects(props) {
  const { placeholderData, selectData, selectId } = props;

  const handleChangeSelect = (val) => {
    selectId(val);
  };

  return (
    <>
      <NativeSelect
        id="select"
        onChange={(e) => handleChangeSelect(e.target.value)}
        value={placeholderData}
      >
        {selectData
          ? selectData.map((obj, key) => {
              return (
                <option value={obj.code} key={key}>
                  {obj.value}
                </option>
              );
            })
          : null}
      </NativeSelect>
    </>
  );
}
