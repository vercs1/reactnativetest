import { StyleSheet, Platform, ScrollView } from 'react-native';

import { Collapsible } from '@/components/Collapsible';
import { ExternalLink } from '@/components/ExternalLink';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';

export default function ServicesScreen() {
  return (
    <ScrollView style={styles.container}>
      <ThemedView style={styles.titleContainer}>
        <ThemedText type="title" style={styles.titleText}>Services</ThemedText>
      </ThemedView>
      <ThemedText style={styles.bodyText}>Discover the services we offer to enhance your experience.</ThemedText>

      <Collapsible title="Consulting">
        <ThemedText style={styles.bodyText}>
          We provide expert consulting services to help you navigate the complexities of mobile app development.
        </ThemedText>
      </Collapsible>

      <Collapsible title="Development">
        <ThemedText style={styles.bodyText}>
          Our team specializes in building high-quality mobile applications using the latest technologies.
        </ThemedText>
      </Collapsible>

      <Collapsible title="Support & Maintenance">
        <ThemedText style={styles.bodyText}>
          We offer continuous support and maintenance services to ensure your app runs smoothly.
        </ThemedText>
      </Collapsible>

      <Collapsible title="Custom Solutions">
        <ThemedText style={styles.bodyText}>
          Need a custom solution? We tailor our services to meet your unique business needs.
        </ThemedText>
        <ExternalLink href="https://github.com/your-repo">
          <ThemedText style={styles.linkText}>Learn more</ThemedText>
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
