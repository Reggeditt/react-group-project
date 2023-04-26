import React, { useEffect, useRef } from 'react';
import { useSelector, useDispatch } from 'react-redux';
// import { getDragons } from '../redux/dragons/dragonsSlice';
import { getDragons } from '../redux/dragon/dragonSlice';
import DragonEntry from './DragonsEntry';

function Dragons() {
  const dispatch = useDispatch();
  const dragonsData = useSelector((store) => store.dragons);
  const fetch = useRef(true);

  useEffect(() => {
    if (fetch.current) {
      if (dragonsData.length === 0) {
        fetch.current = false;
        dispatch(getDragons());
      }
    }
  }, [dispatch, dragonsData.length]);
  return (
    <div className="dragonBody">
      {dragonsData.map((dragon) => (
        <DragonEntry
          key={dragon.id}
          name={dragon.name}
          type={dragon.type}
          img={dragon.flickr_image}
          id={dragon.id}
          reserved={dragon.reserved}
        />
      ))}
    </div>
  );
}

export default Dragons;
