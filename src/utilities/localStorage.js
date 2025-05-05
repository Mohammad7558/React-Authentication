export const getEventDataFromLocalStorage = () => {
    const doctorData = localStorage.getItem('events');
    if(doctorData){
      const parseData = JSON.parse(doctorData);
      return parseData
    }
    return []
  }
  
  export const addEventDataToLocalStorage = (event) => {
    const eventData = getEventDataFromLocalStorage();
    const filter = eventData.find(dt=> dt.id === event.id);
    if(!filter){
      const newEventData = [...eventData, event];
      localStorage.setItem('events', JSON.stringify(newEventData))
    }
  }