import React from "react";
import { Page, Text, View, Document, StyleSheet } from "@react-pdf/renderer";

// Create styles
const styles = StyleSheet.create({
  page: {
    flexDirection: "row",
    backgroundColor: "#E4E4E4",
  },
  section: {
    margin: 10,
    padding: 10,
    flexGrow: 1,
  },
});

// Create Document Component
const MyDocument = ({ users = [] }) => (
  <Document>
    <Page size="A4" style={styles.page}>
      <View style={styles.section}>
        <Text>Name</Text>
        <Text>Age</Text>
        <Text>City</Text>
      </View>
      {users.map((user, index) => (
        <View key={index} style={styles.section}>
          <Text>{user.name}</Text>
          <Text>{user.age}</Text>
          <Text>{user.city}</Text>
        </View>
      ))}
    </Page>
  </Document>
);

export default MyDocument;
