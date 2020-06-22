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
        defaultValue="null"
        onChange={(e) => handleChangeSelect(e.target.value)}
      >
        <option value="null">{placeholderData}</option>
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
