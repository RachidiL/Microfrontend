import { mount } from "filemgmt/FileMngmnt";
import React, { useRef, useEffect } from "react";
const FileMgmntApp = () => {
  const ref = useRef(null);

  useEffect(() => {
    mount(ref.current);
  });
  return <div ref={ref}></div>;
};
export default FileMgmntApp;
