import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity, ScrollView } from 'react-native';

const Chatbot = () => {
  const [messages, setMessages] = useState([]);
  const [inputText, setInputText] = useState('');

  const handleSend = () => {
    if (inputText.trim() === '') return;

    const newMessage = {
      id: messages.length,
      text: inputText,
      fromUser: true,
    };

    setMessages([...messages, newMessage]);
    setInputText('');

    // Example responses based on user input
    setTimeout(() => {
      let botResponse = null;
      switch (inputText.toLowerCase().trim()) {
        case 'hi':
          botResponse = { id: messages.length + 1, text: 'Hello! How can I assist you today?', fromUser: false };
          break;
        case 'how are you':
          botResponse = { id: messages.length + 1, text: "I'm doing well, thank you!", fromUser: false };
          break;
        case 'weather':
          botResponse = { id: messages.length + 1, text: 'Sure, checking the weather now.Rainy', fromUser: false };
          break;
        case 'trading':
          botResponse = { id: messages.length + 1, text: 'Let me fetch some trading information .you can trade on Bitcoin Today', fromUser: false };
          break;
        case 'bitcoin':
          botResponse = { id: messages.length + 1, text: 'Fetching latest Bitcoin data...Its almost on Top', fromUser: false };
          break;
        case 'idea':
          botResponse = { id: messages.length + 1, text: 'Generating creative ideas...', fromUser: false };
          break;
        case 'top movie':
          botResponse = { id: messages.length + 1, text: 'Fetching top movie..Kalki', fromUser: false };
          break;
        case 'top yt channel':
          botResponse = { id: messages.length + 1, text: 'Fetching top YouTube channels..Sourav Joshi', fromUser: false };
          break;
        default:
          botResponse = { id: messages.length + 1, text: "I'm sorry, I don't understand. Can you please rephrase?", fromUser: false };
          break;
      }

      setMessages([...messages, botResponse]);
    }, 1000); // Simulate bot response after 1 second
  };

  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.messageContainer}>
        {messages.map((message) => (
          <View key={message.id} style={[styles.messageBubble, message.fromUser ? styles.userBubble : styles.botBubble]}>
            <Text style={styles.messageText}>{message.text}</Text>
          </View>
        ))}
      </ScrollView>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="Type your message..."
          value={inputText}
          onChangeText={setInputText}
        />
        <TouchableOpacity style={styles.sendButton} onPress={handleSend}>
          <Text style={styles.sendButtonText}>Send</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f8f9fa',
    paddingTop: 20,
  },
  messageContainer: {
    flexGrow: 1,
    paddingBottom: 10,
  },
  messageBubble: {
    maxWidth: '80%',
    padding: 10,
    marginVertical: 5,
    borderRadius: 10,
  },
  userBubble: {
    alignSelf: 'flex-end',
    backgroundColor: '#007bff',
    marginRight: 10,
  },
  botBubble: {
    alignSelf: 'flex-start',
    backgroundColor: '#28a745',
    marginLeft: 10,
  },
  messageText: {
    color: 'white',
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 10,
    borderTopWidth: 1,
    borderTopColor: '#ccc',
    backgroundColor: 'white',
  },
  input: {
    flex: 1,
    paddingVertical: 10,
    paddingHorizontal: 15,
    fontSize: 16,
  },
  sendButton: {
    backgroundColor: '#007bff',
    paddingVertical: 10,
    paddingHorizontal: 15,
    marginLeft: 10,
    borderRadius: 5,
  },
  sendButtonText: {
    color: 'white',
    fontWeight: 'bold',
  },
});

export default Chatbot;
