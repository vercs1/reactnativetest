import { StyleSheet, Platform, ScrollView } from 'react-native';

import { Collapsible } from '@/components/Collapsible';
import { ExternalLink } from '@/components/ExternalLink';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';

export default function AboutScreen() {
  return (
    <ScrollView style={styles.container}>
      <ThemedView style={styles.titleContainer}>
        <ThemedText type="title" style={styles.titleText}>About</ThemedText>
      </ThemedView>
      <ThemedText style={styles.bodyText}>Learn more about this application and its features.</ThemedText>

      <Collapsible title="App Purpose">
        <ThemedText style={styles.bodyText}>
          This application is designed to help users explore and learn about various features in
          React Native, including routing, animations, and styling.
        </ThemedText>
      </Collapsible>

      <Collapsible title="Technology Stack">
        <ThemedText style={styles.bodyText}>
          This app is built using React Native and Expo. It leverages modern UI components and
          state management techniques.
        </ThemedText>
      </Collapsible>

      <Collapsible title="Contributors">
        <ThemedText style={styles.bodyText}>
          Developed by a passionate team of engineers and designers who believe in open-source and
          intuitive mobile experiences.
        </ThemedText>
      </Collapsible>

      <Collapsible title="Open Source">
        <ThemedText style={styles.bodyText}>
          This project is open-source, and we welcome contributions! Check out the repository on
          GitHub to learn how you can help improve it.
        </ThemedText>
        <ExternalLink href="https://github.com/your-repo">
          <ThemedText style={styles.linkText}>Visit our GitHub</ThemedText>
        </ExternalLink>
      </Collapsible>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#DCD7C9', // Light beige background color
  },
  titleContainer: {
    marginBottom: 16,
  },
  titleText: {
    color: '#EFE9D5', // Dark greyish-green for the title
    fontSize: 24,
    fontWeight: 'bold',
  },
  bodyText: {
    color: '#3F4F44', // Medium greenish-grey for the body text
    fontSize: 16,
    marginBottom: 8,
  },
  linkText: {
    color: '#A27B5C', // Warm brownish color for links
    fontSize: 16,
    textDecorationLine: 'underline',
  },
});
