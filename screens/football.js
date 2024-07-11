import React, { useState } from 'react';
import { View, Text, StyleSheet, Image, ScrollView, TouchableOpacity, Button, Modal } from 'react-native';
import Slider from '@react-native-community/slider';
import { Swipeable, GestureHandlerRootView, PanGestureHandler } from 'react-native-gesture-handler'; // Import Swipeable and PanGestureHandler components

const liveMatches = [
  { id: '1', title: 'AFG Vs IND', image: require('../assets/afg.png') },
  { id: '2', title: 'PSG Vs Barca', image: require('../assets/PSF.png') },
  { id: '3', title: 'Mount Vs Lion', image: require('../assets/barca.png') },
];

const randomMatches = [
  { id: '6', title: 'AFG Vs IND?', image: require('../assets/football.png') },
  { id: '7', title: 'CR7 or Robert! who will score more ?', image: require('../assets/football.png') },
  { id: '8', title: 'ARG Vs SF?', image: require('../assets/football.png') },
];

const Crypto = () => {
  const [selectedMatchIndex, setSelectedMatchIndex] = useState(0);
  const [isPopupVisible, setPopupVisible] = useState(false);
  const [price, setPrice] = useState(0); // Add state for price

  const renderLiveMatches = () => (
    <ScrollView horizontal showsHorizontalScrollIndicator={false} contentContainerStyle={styles.liveMatchesContainer}>
      {liveMatches.map((match, index) => (
        <TouchableOpacity
          key={match.id}
          style={[styles.liveMatchItem, index === selectedMatchIndex ? styles.selectedMatch : null]}
          onPress={() => setSelectedMatchIndex(index)}
        >
          <Image source={match.image} style={styles.liveMatchImage} />
          <Text style={styles.liveMatchTitle}>{match.title}</Text>
        </TouchableOpacity>
      ))}
    </ScrollView>
  );

  const handlePrediction = (action) => {
    // Handle prediction logic here (e.g., show modal, send data to backend, etc.)
    setPopupVisible(true); // Example: Show modal on prediction
    console.log(`Selected: ${action}`);
  };

  const handleSwipeSubmit = () => {
    // Handle swipe-to-submit action
    console.log(`Price selected: ${price}`);
    setPopupVisible(false); // Close modal after submission
  };

  const renderYesNoSections = () => {
    return randomMatches.map((match, index) => (
      <View key={match.id} style={styles.sectionContainer}>
        <View style={styles.box}>
          <Text style={styles.predictionText}>{match.title}</Text>
          <Swipeable
            renderRightActions={() => (
              <TouchableOpacity style={[styles.swipeButton, styles.swipeButtonYes]} onPress={() => handlePrediction('Yes')}>
                <Text style={styles.swipeButtonText}>Yes ${(5.3 + index).toFixed(1)}</Text>
              </TouchableOpacity>
            )}
            renderLeftActions={() => (
              <TouchableOpacity style={[styles.swipeButton, styles.swipeButtonNo]} onPress={() => handlePrediction('No')}>
                <Text style={styles.swipeButtonText}>No ${(4.7 + index).toFixed(1)}</Text>
              </TouchableOpacity>
            )}
          >
            <View style={styles.swipeContent}>
              <Button title="Yes" onPress={() => handlePrediction('Yes')} />
              <Button title="No" onPress={() => handlePrediction('No')} />
            </View>
          </Swipeable>
        </View>
      </View>
    ));
  };

  return (
    <GestureHandlerRootView style={styles.container}>
      {/* Live Matches Section */}
      <View style={styles.sectionContainer}>
        <Text style={styles.sectionTitle}>Live Matches</Text>
        <View style={styles.box}>
          {renderLiveMatches()}
          <Slider
            style={styles.slider}
            minimumValue={0}
            maximumValue={liveMatches.length - 1}
            step={1}
            value={selectedMatchIndex}
            onValueChange={(index) => setSelectedMatchIndex(index)}
          />
        </View>
      </View>

      {/* Render Yes/No Prediction Sections */}
      {renderYesNoSections()}

      {/* Modal for Yes/No Prediction */}
      <Modal
        visible={isPopupVisible}
        animationType="slide"
        transparent={true}
        onRequestClose={() => setPopupVisible(false)}
      >
        <View style={styles.modalBackground}>
          <View style={styles.modalContainer}>
            <Text style={styles.modalTitle}>Select Price Range</Text>
            <Slider
              style={styles.priceSlider}
              minimumValue={0}
              maximumValue={100}
              step={1}
              value={price}
              onValueChange={(value) => setPrice(value)}
            />
            <Text>{`$${price}`}</Text>
            <PanGestureHandler onGestureEvent={handleSwipeSubmit}>
              <View style={styles.swipeSubmitContainer}>
                <Text style={styles.swipeSubmitText}>Swipe to Submit</Text>
              </View>
            </PanGestureHandler>
            <Button title="Close Modal" onPress={() => setPopupVisible(false)} />
          </View>
        </View>
      </Modal>
    </GestureHandlerRootView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f8f9fa',
    padding: 10,
  },
  sectionContainer: {
    marginBottom: 20,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  box: {
    backgroundColor: '#fff',
    padding: 15,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#ddd',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  liveMatchesContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 10,
  },
  liveMatchItem: {
    paddingHorizontal: 15,
    paddingVertical: 10,
    alignItems: 'center',
  },
  selectedMatch: {
    borderBottomWidth: 2,
    borderBottomColor: '#007bff',
  },
  liveMatchImage: {
    width: 40,
    height: 40,
    resizeMode: 'contain',
  },
  liveMatchTitle: {
    fontSize: 14,
    textAlign: 'center',
    marginTop: 5,
  },
  slider: {
    width: '100%',
    marginTop: 10,
  },
  predictionItem: {
    marginBottom: 10,
  },
  predictionText: {
    fontSize: 16,
    marginBottom: 10,
    textAlign: 'center',
  },
  swipeContent: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    height: '100%',
  },
  swipeButton: {
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
    borderRadius: 5,
    marginBottom: 10,
  },
  swipeButtonYes: {
    backgroundColor: '#28a745',
  },
  swipeButtonNo: {
    backgroundColor: '#dc3545',
  },
  swipeButtonText: {
    fontSize: 16,
    color: 'white',
  },
  modalBackground: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalContainer: {
    backgroundColor: 'white',
    padding: 20,
    borderRadius: 10,
    alignItems: 'center',
    elevation: 5,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
  },
  modalTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  priceSlider: {
    width: '100%',
    marginVertical: 20,
  },
  swipeSubmitContainer: {
    backgroundColor: '#007bff',
    padding: 10,
    borderRadius: 50,
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
  },
  swipeSubmitText: {
    fontSize: 16,
    color: 'white',
  },
});

export default Crypto;
