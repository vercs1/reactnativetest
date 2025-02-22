import { StyleSheet, ScrollView } from 'react-native';

import { Collapsible } from '@/components/Collapsible';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';

export default function SettingsScreen() {
  return (
    <ScrollView style={styles.container}>
      <ThemedView style={styles.titleContainer}>
        <ThemedText type="title" style={styles.titleText}>Settings</ThemedText>
      </ThemedView>
      <ThemedText style={styles.bodyText}>Manage your preferences and application settings.</ThemedText>

      <Collapsible title="Account Settings">
        <ThemedText style={styles.bodyText}>
          Update your profile information, change your password, and manage account security.
        </ThemedText>
      </Collapsible>

      <Collapsible title="Notifications">
        <ThemedText style={styles.bodyText}>
          Customize your notification preferences to stay updated on what matters most.
        </ThemedText>
      </Collapsible>

      <Collapsible title="Privacy">
        <ThemedText style={styles.bodyText}>
          Control your privacy settings, manage permissions, and review data usage policies.
        </ThemedText>
      </Collapsible>

      <Collapsible title="Theme">
        <ThemedText style={styles.bodyText}>
          Switch between light and dark mode, or set it to follow your system preference.
        </ThemedText>
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
});
