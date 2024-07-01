"use client"

import React from 'react';
import { useSearchParams  } from 'next/navigation';

interface FormComponentProps {
  onSubmit: (prompt: string) => void;
}

const FormComponent: React.FC<FormComponentProps> = ({onSubmit}) => {  
  const searchParams = useSearchParams()
  var prompt = searchParams.get('prompt')

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    // Read the form data
    const form = e.currentTarget;
    const formData = new FormData(form);
    const newPrompt = formData.get('prompt') as string;

    if (!prompt) {
      prompt = ""
    }
    if (newPrompt && newPrompt != prompt) {
      onSubmit(newPrompt);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div style={{ marginBottom: '10px' }}>
        <label style={{ marginRight: '10px' }}>
          Enter a prompt:
          <input
            type="text"
            name="prompt"
            style={{ marginLeft: '10px', padding: '5px', borderRadius: '4px', border: '1px solid #ccc', minWidth: '200px' }}
            maxLength={3}
            minLength={2}
            required
          />
        </label>
        <button type="submit" style={{ padding: '5px 10px', backgroundColor: '#007bff', color: 'white', border: 'none', borderRadius: '4px', cursor: 'pointer' }}>Search</button>
      </div>
    </form>
  );
};

export default FormComponent;