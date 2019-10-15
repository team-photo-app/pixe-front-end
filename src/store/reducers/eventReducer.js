const initState = {
  eventTitle: 'Event Title',
  eventDescription: 'Event Description',
  eventSplashImage: { eventPictureId: 'pictureabc', decription: 'This is pic abc'},
  eventOwnderId: 'joe456',
  eventGuestsIds: [
    {username: 'jeff56'},
    {username: 'joy789'},
    {username: 'fred90906'},
  ],
  eventPicturesIds: [
    { eventPictureId: 'pictureabc', decription: 'This is pic abc'},
    { eventPictureId: 'picturedef', decription: 'This is pic def'},
    { eventPictureId: 'pictureghi', decription: 'This is pic ghi'},
    { eventPictureId: 'picturejkl', decription: 'This is pic jkl'},
    { eventPictureId: 'picturemno', decription: 'This is pic mno'},
    { eventPictureId: 'pictureqrs', decription: 'This is pic qrs'},
    { eventPictureId: 'picturetuv', decription: 'This is pic tuv'},
    { eventPictureId: 'picturewxy', decription: 'This is pic wxy'},
    { eventPictureId: 'picturez', decription: 'This is pic z'},
  ],
}

const eventReducer = (state = initState, action) => {
  switch (action.type) {
    default:
      return state;
  }
}

export default eventReducer;
