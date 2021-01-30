import React from 'react';

export const InputArea = (props) => {
  const { handlSubmit, inputText, handlInputText } = props

  const handleInputValue = (e) => {
    const inputValue = e.target.value
    handlInputText(inputValue)
  }

  return (
    <>
      <form onSubmit={handlSubmit}>
        <input
          type="text"
          value={inputText}
          onChange={handleInputValue}
          placeholder="買った食材を入力"
        />
        <button type="submit">食材を投入</button>
      </form>
    </>
  )
};
