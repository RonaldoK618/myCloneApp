// App.tsx
import React from 'react';
import {
  SafeAreaView,
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  Alert,
} from 'react-native';

export default function App() {
  const showAlert = () => {
    Alert.alert('Assignment 1 Completed');
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.topIndex}>
        <Text style={styles.notificationIcon}>🔔</Text>
        <Text style={styles.homeIndex}>Home</Text>
        <Text style={styles.rewardsIcon}>🎁</Text>
        <Text style={styles.profileIcon}>👤</Text>
      </View>

      {/* ===== BALANCE ROW ===== */}
      <ScrollView contentContainerStyle={styles.scrollContent}>
        <View style={styles.balanceContainer}>
          <Text style={styles.dollarSign}>$</Text>
          <Text style={styles.balanceText}>••••••••</Text>
          {/* Eye icon is clickable */}
          <TouchableOpacity onPress={showAlert} style={styles.eyeIcon}>
            <Text style={styles.balanceIcon}>👁️</Text>
          </TouchableOpacity>
        </View>
        {/* ===== TIME RANGE BUTTONS ===== */}
        <View style={styles.timeRangeContainer}>
          <View style={styles.timeButton}>
            <Text style={styles.timeButtonText}>1M</Text>
          </View>
          <View style={styles.timeButton}>
            <Text style={styles.timeButtonText}>3M</Text>
          </View>
          <View style={styles.timeButton}>
            <Text style={styles.timeButtonText}>6M</Text>
          </View>
          <View style={styles.timeButton}>
            <Text style={styles.timeButtonText}>YTD</Text>
          </View>
          <View style={styles.timeButton}>
            <Text style={styles.timeButtonText}>1Y</Text>
          </View>

          {/* “ALL” button is clickable */}
          <TouchableOpacity
            style={[styles.timeButton, styles.timeButtonActive]}
            onPress={showAlert}
          >
            <Text style={[styles.timeButtonText, styles.timeButtonTextActive]}>
              ALL
            </Text>
          </TouchableOpacity>
        </View>
      </ScrollView>

      {/* ===== BOTTOM TAB BAR ===== */}
      <View style={styles.bottomTabs}>
        <TouchableOpacity>
          <Text style={styles.tabIcon}>🏠</Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Text style={styles.tabIcon}>🔍</Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Text style={styles.tabIcon}>🔄</Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Text style={styles.tabIcon}>🕒</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  /* ============== CONTAINER ============== */
  container: {
    flex: 1,
    backgroundColor: '#000',
  },

  /* ============== HEADER ROW ================== */
  topIndex: {
    flexDirection: 'row',
    backgroundColor: '#000',
    justifyContent: 'center',
  },
  notificationIcon: {
    color: '#fff',
    fontSize: 27,
    margin: 15,
  },
  homeIndex: {
    textAlign: 'center',
    color: '#fff',
    fontSize: 20,
    fontWeight: '600',
    letterSpacing: 2,
    marginTop: 16,
    paddingLeft: 48,
    flexGrow: 2,
  },
  rewardsIcon: {
    color: '#fff',
    fontSize: 27,
    margin: 15,
  },
  profileIcon: {
    color: '#fff',
    fontSize: 27,
    margin: 15,
    marginLeft: 0,
  },

  /* ============== BALANCE ROW ============== */
  balanceContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 16,
    marginTop: 12,
  },
  dollarSign: {
    color: '#fff',
    fontSize: 30,
    fontWeight: '600',
    marginRight: 4,
  },
  balanceText: {
    color: '#fff',
    fontSize: 30,
    fontWeight: '600',
    letterSpacing: 2,
  },
  eyeIcon: {
    marginLeft: 12,
  },
  balanceIcon: {
    color: '#fff',
    fontSize: 24,
  },

  /* ============== SCROLL CONTENT ============== */
  scrollContent: {
    paddingBottom: 16,
  },

  /* ===== TIME RANGE BUTTONS ===== */
  timeRangeContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: 16,
    marginTop: 20,
  },
  timeButton: {
    paddingHorizontal: 8,
    paddingVertical: 6,
    borderRadius: 12,
    backgroundColor: '#111',
  },
  timeButtonActive: {
    backgroundColor: '#0f0',
  },
  timeButtonText: {
    fontSize: 12,
    color: '#888',
    fontWeight: '500',
  },
  timeButtonTextActive: {
    color: '#000',
  },

  /* ===== BOTTOM TABS ===== */
  bottomTabs: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingVertical: 10,
    backgroundColor: '#000',
    borderTopColor: '#fff', 
    borderTopWidth: 1,
  },
  tabIcon: {
    color: '#fff',
    fontSize: 24,
  },
});