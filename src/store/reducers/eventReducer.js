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
    { key: 1, eventPictureId: 'pictureabc', description: 'This is pic abc', url:'./assets/audience.jpg'},
    { key: 2, eventPictureId: 'picturedef', description: 'This is pic def', url:'./assets/howyoudoin.webp'},
    { key: 3, eventPictureId: 'pictureghi', description: 'This is pic ghi', url:'./assets/ilicku.jpg'},
    { key: 4, eventPictureId: 'picturejkl', description: 'This is pic jkl', url:'./assets/puppypuddle.jpg'},
    { key: 5, eventPictureId: 'picturemno', description: 'This is pic mno', url:'./assets/twobroschillin.jpg'},
  ],
}

const eventReducer = (state = initState, action) => {
  switch (action.type) {
    default:
      return state;
  }
}

export default eventReducer;
