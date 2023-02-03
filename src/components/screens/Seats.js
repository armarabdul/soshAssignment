import React, {useState} from 'react';
import {View, TouchableOpacity, Text, StyleSheet} from 'react-native';

const Layout = ({rows, columns}) => {
  const [selectedSeats, setSelectedSeats] = useState([]);
  const [bookedSeats, setBookedSeats] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);

  const seats = [];
  for (let i = 0; i < rows; i++) {
    const row = [];
    for (let j = 0; j < columns; j++) {
      const seatId = `${i}-${j}`;
      row.push(
        <TouchableOpacity
          key={j}
          style={[
            styles.seat,
            selectedSeats.includes(seatId) ? styles.selected : null,
            bookedSeats.includes(seatId) ? styles.booked : null,
          ]}
          onPress={() => {
            if (bookedSeats.includes(seatId)) {
              return;
            }
            if (selectedSeats.includes(seatId)) {
              setSelectedSeats(selectedSeats.filter(id => id !== seatId));
              setTotalPrice(totalPrice - (i + 1) * 100);
            } else {
              setSelectedSeats([...selectedSeats, seatId]);
              setTotalPrice(totalPrice + (i + 1) * 100);
            }
          }}
        />,
      );
    }
    seats.push(
      <View key={i} style={styles.row}>
        {row}
      </View>,
    );
  }

  return (
    <View style={styles.container}>
      {seats}
      {bookedSeats.length === rows * columns ? (
        <View style={styles.allBookedContainer}>
          <Text style={styles.allBookedText}>All seats are booked</Text>
        </View>
      ) : (
        <View style={styles.totalContainer}>
          <Text style={styles.totalText}>Total: Rs {totalPrice}</Text>
          <TouchableOpacity
            style={styles.bookNowButton}
            onPress={() => {
              setBookedSeats([...bookedSeats, ...selectedSeats]);
              setSelectedSeats([]);
              setTotalPrice(0);
            }}>
            <Text style={styles.bookNowText}>Book Now</Text>
          </TouchableOpacity>
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    flexDirection: 'row',
    flexWrap: 'wrap',
    position: 'relative',
    bottom: 100,
    margin: 30,
  },
  row: {
    flexDirection: 'row',
  },
  seat: {
    width: 50,
    height: 50,
    borderWidth: 1.5,
    borderColor: 'black',
    borderRadius: 10,
    margin: 5,
    backgroundColor: 'white',
  },
  totalContainer: {
    position: 'absolute',
    bottom: 0,
    width: '100%',
    padding: 10,
    backgroundColor: 'white',
    alignItems: 'center',
  },
  totalText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'black',
  },
  bookNowButton: {
    marginTop: 10,
    padding: 10,
    backgroundColor: 'green',
    borderRadius: 10,
  },
  bookNowText: {
    fontSize: 20,
    color: 'white',
    fontWeight: 'bold',
  },
  selected: {
    backgroundColor: 'blue',
  },
  booked: {
    backgroundColor: 'grey',
  },
  allBookedContainer: {
    position: 'absolute',
    top: '70%',
    left: '20%',
  },
  allBookedText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'black',
  },
});

export default Layout;
