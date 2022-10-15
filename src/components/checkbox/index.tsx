import { InputHTMLAttributes, useRef } from "react";
import { MdCheck } from "react-icons/md";
import * as S from "./styles";

interface Props extends InputHTMLAttributes<HTMLInputElement> {}

export function Checkbox({ ...rest }: Props) {
  const toggleCheckboxRef = useRef<HTMLInputElement>(null);

  function toggleCheckbox() {
    const { current } = toggleCheckboxRef;

    if (current) current.click();
  }

  return (
    <>
      <S.HiddenCheckbox
        type="checkbox"
        ref={toggleCheckboxRef}
        hidden
        {...rest}
      />

      <S.Checkbox onClick={toggleCheckbox}>
        <S.Check>
          <MdCheck size={24} />
        </S.Check>
      </S.Checkbox>
    </>
  );
}
