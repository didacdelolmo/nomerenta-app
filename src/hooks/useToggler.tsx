import { useState } from 'react';

export default function useToggler() {
  const [toggle, setToggle] = useState(false);
  const isToggled = toggle === true;

  const handleToggle = () => {
    setToggle(!toggle);
  };

  return {
    isToggled,
    handleToggle,
  };
}
