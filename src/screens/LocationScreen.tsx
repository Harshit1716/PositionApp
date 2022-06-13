import React, { useEffect, useState } from "react"
import { StyleSheet, Text, View, Button } from "react-native"
import * as TaskManager from "expo-task-manager"
import * as Location from "expo-location"
import { useDispatch } from "react-redux"
import { useAppDispatch } from "../redux/ReduxHooks"
import { addLocation } from "../redux/UserLocationSlice"
import RootNavigation from "../navigation/RootNavigation"

const LOCATION_TASK_NAME = "LOCATION_TASK_NAME"
let foregroundSubscription:any = null
TaskManager.defineTask(LOCATION_TASK_NAME, async ({ data, error }) => {
  if (error) {
    console.error(error)
    return
  }
  if (data) {
    // Extract location coordinates from data
    const { locations } = data
    const location = locations[0]
    if (location) {
      console.log("Location in background", location.coords)
    }
  }
})
export default function App() {
  const [position, setPosition] = useState(null)
  const [date, setDate] = useState<Date>()
  const dispatch = useAppDispatch()
  const MINUTE_5_MS = 600000;
  
  useEffect(() => {
    const requestPermissions = async () => {
      const foreground = await Location.requestForegroundPermissionsAsync()
      if (foreground.granted) await Location.requestBackgroundPermissionsAsync()
    }
    requestPermissions()

    startForegroundUpdate();
    const interval = setInterval(() => {
      if(position)
      {
        dispatch(addLocation({latitude:position?.latitude??0,longitude:position?.longitude??0,name:""}))
      }
     
    }, MINUTE_5_MS);
  
    return () => clearInterval(interval); 
  }, [])


  const startForegroundUpdate = async () => {
    // Check if foreground permission is granted
    const { granted } = await Location.getForegroundPermissionsAsync()
    if (!granted) {
      console.log("location tracking denied")
      return
    }

    // Make sure that foreground location tracking is not running
    foregroundSubscription?.remove()

    // Start watching position in real-time
    foregroundSubscription = await Location.watchPositionAsync(
      {
        // For better logs, we set the accuracy to the most sensitive option
        accuracy: Location.Accuracy.BestForNavigation,
      },
      location => {
        setPosition(location.coords)
        const date=new Date(location.timestamp)
        if(date.toString().includes("T"))
        {
           setDate(date)
        }
      }
    )
  }

  return (
    <View  testID="LocationScreen" style={styles.container}>
     <RootNavigation></RootNavigation>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
   
  },
  switchContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  button: {
    marginTop: 15,
  },
  separator: {
    marginVertical: 8,
  },
})



// ALl i am having some issue with the sound so i am just showing you the detail then ill join from the phone