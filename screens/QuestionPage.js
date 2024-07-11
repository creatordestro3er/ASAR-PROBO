import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput, Button, Alert } from 'react-native';

const QuestionPage = () => {
  const [question, setQuestion] = useState('');
  const [isSent, setIsSent] = useState(false);

  const handleSubmit = () => {
    // Perform your email sending logic here
    // For demonstration, we'll just set a timeout to simulate sending
    setIsSent(true);
    setTimeout(() => {
      setIsSent(false);
      setQuestion(''); // Clear the text input
    }, 2000); // Reset isSent after 2 seconds
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Question Page</Text>
      <Text style={styles.label}>Enter your question:</Text>
      <TextInput
        style={styles.input}
        placeholder="Type your question here"
        value={question}
        onChangeText={setQuestion}
      />
      <Button
        title="Submit Question"
        onPress={handleSubmit}
      />
      {isSent && (
        <View style={styles.popup}>
          <Text style={styles.popupText}>Sent successfully! you will hear from us very soon.</Text>
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#f8f9fa',
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#333',
  },
  label: {
    fontSize: 18,
    color: '#666',
    marginBottom: 10,
  },
  input: {
    width: '80%',
    padding: 10,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 5,
    marginBottom: 20,
  },
  popup: {
    position: 'absolute',
    top: 100,
    backgroundColor: '#007bff',
    padding: 10,
    borderRadius: 5,
    zIndex: 10,
  },
  popupText: {
    fontSize: 16,
    color: 'white',
    textAlign: 'center',
  },
});

export default QuestionPage;
