import { StyleSheet, Platform, ScrollView, View } from 'react-native';

import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';

export default function HomeScreen() {
  return (
    <ScrollView style={styles.container}>
      <ThemedView style={styles.listItem}>
        <ThemedText type="title" style={styles.titleText}>Welcome!</ThemedText>
      </ThemedView>

      <ThemedView style={styles.listItem}>
        <ThemedText type="subtitle" style={styles.subtitleText}>Step 1: Try it</ThemedText>
        <ThemedText style={styles.bodyText}>
          Edit <ThemedText type="defaultSemiBold">app/(tabs)/index.tsx</ThemedText> to see changes.
          Press{' '}
          <ThemedText type="defaultSemiBold">
            {Platform.select({
              ios: 'cmd + d',
              android: 'cmd + m',
              web: 'F12'
            })}
          </ThemedText>{' '}
          to open developer tools.
        </ThemedText>
      </ThemedView>

      <ThemedView style={styles.listItem}>
        <ThemedText type="subtitle" style={styles.subtitleText}>Step 2: Explore</ThemedText>
        <ThemedText style={styles.bodyText}>
          Tap the Explore tab to learn more about what's included in this starter app.
        </ThemedText>
      </ThemedView>

      <ThemedView style={styles.listItem}>
        <ThemedText type="subtitle" style={styles.subtitleText}>Step 3: Get a fresh start</ThemedText>
        <ThemedText style={styles.bodyText}>
          When you're ready, run{' '}
          <ThemedText type="defaultSemiBold">npm run reset-project</ThemedText> to get a fresh{' '}
          <ThemedText type="defaultSemiBold">app</ThemedText> directory. This will move the current{' '}
          <ThemedText type="defaultSemiBold">app</ThemedText> to{' '}
          <ThemedText type="defaultSemiBold">app-example</ThemedText>.
        </ThemedText>
      </ThemedView>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#DCD7C9', // Light beige background color
  },
  listItem: {
    marginBottom: 16,
  },
  titleText: {
    color: '#EFE9D5', // Dark greyish-green for the title
  },
  subtitleText: {
    color: '#EFE9D5', // Medium greenish-grey for subtitles
  },
  bodyText: {
    color: '#A27B5C', // Warm brownish color for body text
  },
});
