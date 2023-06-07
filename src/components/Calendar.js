import { View, Text } from 'react-native'
import React from 'react'
import { Calendar as RnCalendar } from 'react-native-calendars';

const Calendar = () => {
  const [markedDate, setMarkedDate] = React.useState({dateString: 'as'});
  return (
    <View>
      <RnCalendar 
        onDayPress={date => setMarkedDate(date)}
        markedDates={
          {
            '2023-06-02': { 
              marked: true, 
              dotColor: 'red', 
              selected: true,
              selectedColor: 'purple',
              selectedTextColor: 'orange'
            }
          }
        }
      />
      <Text>{markedDate.dateString}</Text>
    </View>
  );
}

export default Calendar