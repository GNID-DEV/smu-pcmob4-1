import React, { useEffect, useState } from "react";	
import { ActivityIndicator, StyleSheet, Text, TouchableOpacity, View } from "react-native";	

export default function App() {
  const [loading, setLoading] = useState(true);
  const [arrival, setArrival] = useState("");
  const [remaining, remainingTime] = useState("");
  const BUSSTOP_URL = "https://arrivelah2.busrouter.sg/?id=83139";

  function loadBusStopData() {	
    fetch(BUSSTOP_URL)	
      .then((response) => response.json())	
      .then((json) => {	
        const myBus = json.services.filter((bus) => bus.no == 155)[0];	
        console.log(myBus.next.time);	
        setArrival(myBus.next.time);
        setLoading(false);	

// Remaining time.
const duration_ms = myBus.next.duration_ms;
console.log(duration_ms);
// Convert time to minutes.
const duration_mins = Math.floor((duration_ms / 1000 / 60) << 0);
// Convert time to seconds.
const duration_secs = Math.floor((duration_ms / 1000) %  60);

remainingTime(`${duration_mins} min` + " : " + `${duration_secs} sec`);
setLoading(false);
//

      });	
  }

  useEffect(() => {
    loadBusStopData();
    const interval = setInterval(loadBusStopData, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.titleNo}>155</Text>
      <Text style={styles.title}>Bus Arrival Time</Text>
      
      <Text style={styles.text}>Next Upcoming Time</Text>
      <Text style={styles.arrivalTime}>
        {loading ? <ActivityIndicator color={"#0D0D0D"} /> : arrival}
      </Text>
      
      <Text style={styles.text}>Remaining Time</Text>

      <Text style={styles.arrivalTime}>
        {loading ? <ActivityIndicator color={"#0D0D0D"} /> : remaining}
      </Text>

      <TouchableOpacity style={styles.button} onPress={() => setLoading(true)}>
        <Text style={styles.buttonText}>Refresh</Text>
      </TouchableOpacity>
    </View>
  );
}	

// Styling
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F2C791",
    alignItems: "center",
    justifyContent: "center",
  },
  titleNo: {
    fontSize: 80,
    fontWeight: "300",
  },
  title: {
    fontSize: 38,
    fontWeight: "100",
    marginTop: 0,
    marginBottom: 30,
    
  },
  button: {
    backgroundColor: "#59341E",
    padding: 10,
    width: 120,
    alignItems: "center",
    borderRadius: 5,
    marginTop: 30,
  },
  buttonText: {
    color: "#F2DEA0",
    fontSize: 18,
    fontWeight: "200",
  },
  arrivalTime: {
    color: "#0D0D0D",
    fontSize: 18,
    fontWeight: "200",
    textTransform: "uppercase",
    marginTop: 0,
    
  },
  text: {
    color: "#0D0D0D",
    fontSize: 14,
    fontWeight: "300",
    marginTop: 10,
    marginBottom: 0,
    textTransform: "uppercase",
  },
});