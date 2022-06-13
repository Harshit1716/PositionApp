import * as React from 'react';
import { Provider } from 'react-redux';
import { cleanup, fireEvent, render } from '@testing-library/react-native';


import { store } from '../src/redux/store';
import { useAppDispatch } from '../src/redux/ReduxHooks';
import Home from '../src/screens/Home';
import { addLocation } from '../src/redux/UserLocationSlice';



describe('AddTodo component test', () => {
  test('initial Render Test', () => {
   
   let state = store.getState().user;
   state=[{ location: "",
            long:0,
        lat:0,
        time:0},{ location: "",
        long:0,
        lat:0,
        time:0}
        ,{ location: "",
        long:0,
        lat:0,
        time:0}]

        expect(state.length).toEqual(3);
    const component = (
      <Provider store={store}>
        <Home  />
      </Provider>
    );

    const tree=render(component)
    const item=tree.getByTestId("mainView")
    expect(item).toBeDefined();
    
    const item1=tree.getByTestId("deleteAllTest")
    expect(item1).toBeDefined();

    const item2=tree.getByTestId("listScreenText")
    expect(item2).toBeDefined();

    const item3=tree.getByTestId("listView")
    expect(item3).toBeDefined();
    
    

  //  const effect= jest.spyOn(React,'useEffect').mockImplementation((f)=>f())
  //  expect(effect).toHaveBeenCalledTimes(1); 
    
   
    
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