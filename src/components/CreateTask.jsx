import { Button } from '@mui/material';
import React, { useState } from 'react';
import styled from 'styled-components';

const CreateTask = (props) => {
  const [title, setTitle] = useState('');
  const [priority, setPriority] = useState(1);

  const onSubmit = () => {
    props.onSubmit({ title, priority });
    setTitle('');
    setPriority(1);
  };

  return (
    <StyledForm>
      <StyledLabel htmlFor="title" className="form-label">
        Название задач
      </StyledLabel>

      <StyledInput
        type="text"
        className="form-control"
        id="title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Добавить новый задача"
      />

      <StyledLabel htmlFor="priority" className="form-label">
        Приоритет
      </StyledLabel>

      <StyledInput
        type="number"
        className="form-control"
        id="priority"
        value={priority}
        onChange={(e) => setPriority(parseInt(e.target.value))}
        placeholder="Напишите цифрами насколько важно этот задача"
      />

      <Button
        variant="contained"
        disableElevation
        onClick={onSubmit}
        style={{ margin: '0.8rem', width: '98%', padding: '0.7rem' }}
      >
        Добавить задачу
      </Button>
    </StyledForm>
  );
};

export default CreateTask;

// --------------------------------- \\

const StyledForm = styled.form`
  margin-bottom: 20px;
`;

const StyledLabel = styled.label`
  display: block;
  margin-bottom: 8px;
  margin: 0.9rem;
`;

const StyledInput = styled.input`
  width: 98%;
  padding: 1rem;
  margin: 0.8rem;
  margin-bottom: 1rem;
`;
