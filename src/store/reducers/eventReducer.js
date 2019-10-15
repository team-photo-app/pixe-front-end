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
    { key: 1, eventPictureId: 'pictureabc', description: 'This is pic abc', url:'https://en.wikipedia.org/wiki/Akita_(dog)#/media/File:Akita_female.png'},
    { key: 2, eventPictureId: 'picturedef', description: 'This is pic def', url:'https://images.pexels.com/photos/1108099/pexels-photo-1108099.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'},
    { key: 3, eventPictureId: 'pictureghi', description: 'This is pic ghi', url:'https://thenypost.files.wordpress.com/2018/10/102318-dogs-color-determine-disesases-life.jpg?quality=90&strip=all&w=618&h=410&crop=1'},
    { key: 4, eventPictureId: 'picturejkl', description: 'This is pic jkl', url:'https://cdn.pixabay.com/photo/2016/12/13/05/15/puppy-1903313__340.jpg'},
    { key: 5, eventPictureId: 'picturemno', description: 'This is pic mno', url:'https://cdn.pixabay.com/photo/2019/08/19/07/45/pets-4415649__340.jpg'},
  ],
}

const eventReducer = (state = initState, action) => {
  switch (action.type) {
    default:
      return state;
  }
}

export default eventReducer;
