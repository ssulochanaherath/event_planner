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
      <Text style={styles.title}>🎟 Book Your Seat</Text>

      <FlatList
        data={seats}
        keyExtractor={(item) => item.id}
        numColumns={4}
        contentContainerStyle={styles.seatGrid}
        renderItem={({ item }) => (
          <TouchableOpacity
            style={[
              styles.seat,
              selectedSeats.includes(item.id) && styles.selectedSeat,
            ]}
            onPress={() => toggleSeatSelection(item.id)}
            activeOpacity={0.7}
          >
            <Text style={styles.seatText}>{item.id}</Text>
          </TouchableOpacity>
        )}
      />

      <TouchableOpacity style={styles.bookButton} onPress={handleBooking} activeOpacity={0.8}>
        <Text style={styles.bookButtonText}>Confirm Booking</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#121212',
    padding: 24,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 28,
    fontWeight: '600',
    color: '#ffffff',
    marginBottom: 30,
    letterSpacing: 1,
  },
  seatGrid: {
    alignItems: 'center',
  },
  seat: {
    width: 60,
    height: 60,
    backgroundColor: '#2c2c38',
    margin: 10,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 16,
    shadowColor: '#000',
    shadowOpacity: 0.2,
    shadowOffset: { width: 2, height: 2 },
    elevation: 4,
  },
  selectedSeat: {
    backgroundColor: '#00c896',
    shadowColor: '#00c896',
    shadowOpacity: 0.4,
    elevation: 6,
  },
  seatText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: '500',
  },
  bookButton: {
    marginTop: 30,
    backgroundColor: '#00c896',
    paddingVertical: 16,
    paddingHorizontal: 50,
    borderRadius: 30,
    shadowColor: '#00c896',
    shadowOpacity: 0.5,
    shadowOffset: { width: 0, height: 4 },
    elevation: 8,
  },
  bookButtonText: {
    fontSize: 18,
    fontWeight: '600',
    color: '#fff',
    letterSpacing: 0.5,
  },
});
