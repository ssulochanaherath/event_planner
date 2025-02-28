import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, FlatList, Alert } from 'react-native';

const seats = [
  { id: 'A1' }, { id: 'A2' }, { id: 'A3' }, { id: 'A4' },
  { id: 'B1' }, { id: 'B2' }, { id: 'B3' }, { id: 'B4' },
  { id: 'C1' }, { id: 'C2' }, { id: 'C3' }, { id: 'C4' },
];

export default function TicketBookingScreen() {
  const [selectedSeats, setSelectedSeats] = useState([]);

  const toggleSeatSelection = (seatId) => {
    setSelectedSeats((prev) =>
      prev.includes(seatId) ? prev.filter((id) => id !== seatId) : [...prev, seatId]
    );
  };

  const handleBooking = () => {
    if (selectedSeats.length === 0) {
      Alert.alert('No seats selected', 'Please select at least one seat.');
    } else {
      Alert.alert('Booking Confirmed', `Seats: ${selectedSeats.join(', ')}`);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>🎟 Select Your Seats</Text>

      {/* Seat Grid */}
      <FlatList
        data={seats}
        keyExtractor={(item) => item.id}
        numColumns={4}
        renderItem={({ item }) => (
          <TouchableOpacity
            style={[
              styles.seat,
              selectedSeats.includes(item.id) && styles.selectedSeat,
            ]}
            onPress={() => toggleSeatSelection(item.id)}
          >
            <Text style={styles.seatText}>{item.id}</Text>
          </TouchableOpacity>
        )}
      />

      {/* Confirm Button */}
      <TouchableOpacity style={styles.bookButton} onPress={handleBooking}>
        <Text style={styles.bookButtonText}>Confirm Booking</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1e1e2d',
    padding: 20,
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#ffffff',
    marginBottom: 20,
  },
  seat: {
    width: 50,
    height: 50,
    backgroundColor: '#444',
    margin: 8,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 8,
  },
  selectedSeat: {
    backgroundColor: '#ff5c5c',
  },
  seatText: {
    color: '#fff',
    fontSize: 16,
  },
  bookButton: {
    marginTop: 20,
    backgroundColor: '#ff5c5c',
    paddingVertical: 15,
    paddingHorizontal: 40,
    borderRadius: 10,
    shadowColor: '#ff5c5c',
    shadowOpacity: 0.4,
    shadowOffset: { width: 0, height: 4 },
    elevation: 5,
  },
  bookButtonText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#fff',
  },
});
