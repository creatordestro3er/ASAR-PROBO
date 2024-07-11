import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

const FAQs = () => {
  const [faqItems, setFaqItems] = useState([
    { id: '1', question: 'When Will I Get The Payment??', answer: 'You will get your payment once the events are settled, roughly between 24-48 hours.' },
    { id: '2', question: 'Why Am I Not Able To Trade When I Have Balance In My Account? (Promotional balance issue)', answer: 'If you have made multiple logins, then you may not be able to trade using the promotional balance, and can only use 5% of the promotional balance when you make a recharge.' },
    { id: '3', question: 'When Will My Recharge Be Successful?', answer: 'When Will I Get My Referral Bonus?' },
    { id: '4', question: 'How Do I Change My Bank Details or UPI IDs?', answer: 'When Will I Get My Referral Bonus?' },
    { id: '5', question: 'When Will I Get My Referral Bonus?', answer: 'When Will I Get My Referral Bonus?' },
  ]);

  const toggleFAQ = (id) => {
    const updatedFAQs = faqItems.map((item) =>
      item.id === id ? { ...item, isOpen: !item.isOpen } : item
    );
    setFaqItems(updatedFAQs);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.pageTitle}>FAQs</Text>
      {faqItems.map((item) => (
        <View key={item.id} style={styles.faqItem}>
          <TouchableOpacity onPress={() => toggleFAQ(item.id)}>
            <Text style={styles.question}>{item.question}</Text>
          </TouchableOpacity>
          {item.isOpen && <Text style={styles.answer}>{item.answer}</Text>}
        </View>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f8f9fa',
    padding: 20,
  },
  pageTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
  },
  faqItem: {
    marginBottom: 15,
  },
  question: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#007bff',
  },
  answer: {
    fontSize: 16,
    lineHeight: 22,
  },
});

export default FAQs;
