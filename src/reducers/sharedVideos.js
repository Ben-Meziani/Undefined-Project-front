const initialState = {

  asmrPotter: [
    {
      name: 'Hogwart Library',
      url: 'https://www.youtube.com/watch?v=pAHciSqi1-8',
    },
    {
      name: 'Charms ClassRoom',
      url: 'https://www.youtube.com/watch?v=8Te8ndpLzz0',
    },
  ],

};

const sharedVideos = (state = initialState, action = {}) => {
  switch (action.type) {
    default:
      return state;
  }
};

export default sharedVideos;
