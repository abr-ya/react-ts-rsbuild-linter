import { createRef } from "react";
import { StyledButtonLabel, StyledButton } from "./button.styles";
import { IButton } from "./button.interface";

// кнопка для совместимости с прошлой реализацией
const Button = ({ borderRadius, children, ...other }: IButton) => {
  const ref = createRef<HTMLButtonElement>();

  // useEffect(() => {
  //   autoFocus && ref?.current?.focus();
  // }, []);

  return (
    <StyledButton border={3} borderRadius={borderRadius || 8} fontWeight={600} ref={ref} {...other}>
      <StyledButtonLabel>{children}</StyledButtonLabel>
    </StyledButton>
  );
};

export default Button;
