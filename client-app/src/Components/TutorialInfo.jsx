import React, {useState, useEffect} from 'react';
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router";
import {getByIdTutorial, editTutorial, deleteTutorial } from '../actions/tutorialAction';

function TutorialInfo(props) {
    const dispatch = useDispatch();
    const history = useHistory();
    const id = props.match.params.id;
    const [formValues,updateFormValues] = useState({title: "", description: "", published: false});
    useEffect(() => {
        dispatch(getByIdTutorial(id));
    }, [dispatch, id]);

  /*-----nextprops------*/
  const nextProps = useSelector((state) => ({
    tutorialData: state.Tutorial.getTutorialByIdSuccess,
    updateTutorialData: state.Tutorial.updateTutorialSuccess,
    deleteTutorialData: state.Tutorial.deleteTutorialSuccess,
  }));
   
  useEffect(() => {
      if(nextProps.tutorialData && nextProps.tutorialData.isSuccess){
          const data = {
              title: nextProps.tutorialData.data.title,
              description: nextProps.tutorialData.data.description,
              published: nextProps.tutorialData.data.published
          }
          updateFormValues(data);
      }
  }, [nextProps.tutorialData]);

  console.log(nextProps);

  useEffect(() => {
    if((nextProps.updateTutorialData && nextProps.updateTutorialData.isSuccess) || (nextProps.deleteTutorialData && nextProps.deleteTutorialData.isSuccess)){
       history.goBack();
    }
}, [nextProps.updateTutorialData, nextProps.deleteTutorialData]);

  const submit = (e) => {
    e.preventDefault();
     dispatch(editTutorial(id, formValues));
    }

   const deleteOneTutorial = () => {
    dispatch(deleteTutorial(id));
   }

   const publishToggle = () => {
       if (formValues.published) {
           formValues.published = false
       } else {
        formValues.published = true
       }
    dispatch(editTutorial(id, formValues));
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
            value={formValues.description}
            onChange={e => updateFormValues({...formValues, description: e.target.value})}
          ></textarea>
        </div>
        <div class='mb-3 mt-3 form-check'> Status: {formValues.published ? "Published" : "Unpublished"}
        </div>
        <button class='btn btn-warning' onClick={() => publishToggle()}>
        {formValues.published ? "Unpublished" : "Published"}
        </button>{" "}
        <button class='btn btn-danger' onClick={() => deleteOneTutorial()}>
          Delete
        </button>{" "}
        <button type='submit' class='btn btn-primary'>
          Update
        </button>
      </form>
    </div>
  );
}

export default TutorialInfo;
