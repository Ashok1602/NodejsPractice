/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from "react-router";
import { getAllTutorial } from '../actions/tutorialAction';

function Index() {
  const dispatch = useDispatch();
  const history = useHistory();
  const [tutorialData, upateTutorialData] = useState([]);
  useEffect(() => {
    dispatch(getAllTutorial());
  }, [dispatch]);

  /*-----nextprops------*/
  const nextProps = useSelector((state) => ({
    tutorialData: state.Tutorial.getTutorialSuccess,
  }));

  useEffect(() => {
      if(nextProps.tutorialData && nextProps.tutorialData.data && nextProps.tutorialData.data.length){
        upateTutorialData(nextProps.tutorialData.data)
      }
  }, [nextProps.tutorialData])

  return (
    <div>
      <div class='input-group mb-3'>
        <input
          type='text'
          class='form-control'
          placeholder='Search by title'
          aria-label='Search by title'
          aria-describedby='button-addon2'
        />
        <button
          class='btn btn-outline-secondary'
          type='button'
          id='button-addon2'
        >
          Search
        </button>
      </div>
      <div class='list-group'>
        {tutorialData.length &&
          tutorialData.map((data, key) => (
            <button
              type='button'
              class='list-group-item list-group-item-action'
              aria-current='true'
              onClick={() => history.push(`/tutorials/${data._id}`)}
            >
              {data.title}
            </button>
          ))}
      </div>
    </div>
  );
}
export default Index;
