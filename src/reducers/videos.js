const initialState = {

  asmrPotter: [
    {
      author: 'Hogwart Library',
      content: 'https://www.youtube.com/watch?v=pAHciSqi1-8',
      id: 1,
    },
    {
      author: 'Charms ClassRoom',
      content: 'https://www.youtube.com/watch?v=8Te8ndpLzz0',
      id: 2,
    },
  ],
};

const videos = (state = initialState, action = {}) => {
  switch (action.type) {
    default:
      return state;
  }
};

export default videos;
