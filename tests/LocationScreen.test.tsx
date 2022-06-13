import * as React from 'react';
import { Provider } from 'react-redux';
import { cleanup, fireEvent, render } from '@testing-library/react-native';

import { configureStore } from '@reduxjs/toolkit';
import LocationScreen from '../src/screens/LocationScreen';
import { store } from '../src/redux/store';
import { useAppDispatch } from '../src/redux/ReduxHooks';



describe('LocationScreen Test', () => {
  test('initial Render Test', () => {
   
   let state = store.getState().user;
    expect(state.length).toEqual(0);
    const component = (
      <Provider store={store}>
        <LocationScreen  />
      </Provider>
    );

    const tree=render(component)
    const item=tree.getByTestId("LocationScreen")
    expect(item).toBeDefined(); 


  //  const effect= jest.spyOn(React,'useEffect').mockImplementation((f)=>f())
  //  expect(effect).toHaveBeenCalledTimes(1); 
    
   
    // const=useAppDispatch()
    // state = store.getState().toDo;
    // let changedToDo = state.toDoList.find((p) => p.toDoId === 1);
    // expect(changedToDo?.isComplete).toBeFalsy();
   
    // store.dispatch(updateToDo({ toDoId: 1, description: 'be merry' }));
    // state = store.getState().toDo;
    // changedToDo = state.toDoList.find((p) => p.toDoId === 1);
    // expect(changedToDo?.description).toBe('be merry');
   
    // store.dispatch(
    //   updateToDo({ toDoId: 1, description: 'eat tacos', isComplete: true }),
    // );
    // state = store.getState().toDo;
    // const backToOriginalToDo = state.toDoList.find((p) => p.toDoId === 1);
   
    // // snapshots can be objects
    // expect(backToOriginalToDo).toMatchInlineSnapshot(`
    //   Object {
    //     "description": "eat tacos",
    //     "isComplete": true,
    //     "profileId": 1,
    //     "toDoId": 1,
    //   }
    // `);
   
    // // deep object equality
    // expect(backToOriginalToDo).toEqual(originalToDo);
  
  });
  
});