import React, {useState} from 'react';
import { useDispatch } from "react-redux";
import {addTutorial} from '../actions/tutorialAction';

function AddTutorial() {
    const dispatch = useDispatch();
    const [formValues,updateFormValues] = useState({title: "", description: ""})
    const submit = (e) => {
    e.preventDefault();
     formValues.published = false;
     dispatch(addTutorial(formValues));
    }
  return (
    <div className='mt-5'>
      <form onSubmit={submit} noValidate>
        <div class='mb-3'>
          <label for='Title' class='form-label'>
            Title
          </label>
          <input class='form-control' id='Title' value={formValues.title} onChange={e => updateFormValues({...formValues, title: e.target.value})} />
        </div>
        <div class='form-floating'>
          <textarea
            class='form-control'
            placeholder='Write Description here'
            id='Description'
            style={{ height: '100px' }}
            value={formValues.descrition}
            onChange={e => updateFormValues({...formValues, description: e.target.value})}
          ></textarea>
        </div>
        <div class='mb-3 form-check'>
        </div>
        <button type='submit' class='btn btn-primary'>
          Submit
        </button>
      </form>
    </div>
  );
}

export default AddTutorial;
