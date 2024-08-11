export interface IButton {
  /*** If `true`, autoFocus will be set */
  autoFocus?: boolean;
  /*** The background color of the button. */
  backgroundColor?: string;
  /*** Border of the button. */
  border?: number;
  /*** The border color of the button. */
  borderColor?: string;
  /*** The border radius of the button. */
  borderRadius?: string | number;
  /*** The content of the button. */
  children?: React.ReactNode;
  /**
   * @ignore
   */
  className?: string;
  /*** The color of the component. It supports those theme colors that make sense for this component. */
  color?: string;
  /*** The design of the button. */
  design?: "green" | "grey" | "ghost";
  /*** If `true`, the button will be disabled. */
  disabled?: boolean;
  /*** Font weight. */
  fontWeight?: string | number;
  /*** If `true`, the button will take up the full width of its container. */
  fullWidth?: boolean;
  /*** The URL to link to when the button is clicked. If defined, an `a` element will be used as the root node. */
  href?: string;
  id?: string;
  /*** margin left */
  ml?: number;
  /*** margin right */
  mr?: number;
  my?: number;
  /*** event on blur button */
  onBlur?: (ref: React.FocusEvent<HTMLButtonElement>) => void;
  /*** event on click button */
  onClick?: (event?: React.MouseEvent) => void;
  /*** The size of the button. `small` is equivalent to the dense button styling. == not used now! */
  size?: "small" | "medium" | "large";
  /*** Type of button. */
  type?: "button" | "submit" | "reset";
}
