import { useState } from "react";

interface TodoFormProps {
  onAdd: (text: string) => void;
}

export function TodoForm({ onAdd }: TodoFormProps) {
  const [inputText, setInputText] = useState<string>('');
  
  
  const handleSubmit = () => {
    if (inputText.trim() === '') {
      return;
    } 
    onAdd(inputText);
    setInputText('');
  };

  return (
    <div>
      <input 
        type="text"
        value={inputText}
        onChange={(e) => setInputText(e.target.value)} 
      />
      <button onClick={handleSubmit}>追加</button>
    </div>
  );
}