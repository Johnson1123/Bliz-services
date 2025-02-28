import { useEffect } from "react";

function useClickOutside(ref: any, handler: any) {
  useEffect(() => {
    function handleOutside(event: any) {
      if (ref.current && !ref.current.contains(event.target)) {
        handler();
      }
    }
    document.addEventListener("mousedown", handleOutside);

    return () => document.removeEventListener("mousedown", handleOutside);
  }, [ref]);
}

export default useClickOutside;
