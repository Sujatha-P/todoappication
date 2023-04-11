export const addTask = (title, description) => ({
    type: 'ADD_TASK',
    payload: { title, description },
  });
  
  export const updateTask = (id, status) => ({
    type: 'UPDATE_TASK',
    payload: { id, status },
  });
  
  const initialState = {
    tasks: [],
  };
  
  const reducer = (state = initialState, action) => {
    switch (action.type) {
      case 'ADD_TASK':
        const newTask = {
          id: state.tasks.length + 1,
          title: action.payload.title,
          description: action.payload.description,
          status: 'to-do',
        };
        return { ...state, tasks: [...state.tasks, newTask] };
      case 'UPDATE_TASK':
        return {
          ...state,
          tasks: state.tasks.map(task =>
            task.id === action.payload.id ? { ...task, status: action.payload.status } : task,
          ),
        };
      default:
        return state;
    }
  };
  
  export default reducer
  