// App.tsx
import { Image } from 'react-native';
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
      {/* ===== INDEX ROW ===== */}
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
        
        <Image
          source={require('./assets/my-graph.png')}
          style={styles.graphImage}
          resizeMode="contain"
        />

        <View style={styles.accountSection}>
          <Text style={styles.accountText}>Accounts</Text>
          <View style={styles.accounts}>
            <Text style={styles.accountName}>Cash</Text>
            <Text style={styles.accountType}>Chequing</Text>
          </View>
          <View style={styles.accounts}>
            <Text style={styles.accountName}>Non-registered</Text>
            <Text style={styles.accountType}>Non-registered</Text>
          </View>
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
    color: '##f1f0f0',
    backgroundColor: '#181716',
  },

  /* ============== HEADER ROW ================== */
  topIndex: {
    flexDirection: 'row',
    backgroundColor: '#181716',
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
    padding: 5,
    backgroundColor: '#343332',
    borderRadius: 20,
    
  },
  timeButton: {
    paddingHorizontal: 10,
    paddingVertical: 6,
    borderRadius: 20,
  },
  timeButtonActive: {
    backgroundColor: '#615e5c',
  },
  timeButtonText: {
    fontSize: 12,
    color: '#fff',
    fontWeight: '500',
  },
  timeButtonTextActive: {
    color: '#fff',
  },
  graphImage: {
    width: '100%',
    height: 200,
    marginTop: 20,
    alignSelf: 'center',
  },

  /* ===== Accounts ===== */
  accountSection: {
    marginHorizontal: 16,
    marginTop: 20,
  },
  accountText: {
    marginTop:20,
    fontSize: 20,
    color: '#d3d3d3',
    fontWeight: '600',
  },
  accounts: {
    fontSize: 18,
    marginTop: 20,
    padding: 10,
    backgroundColor: '#32302f',
    borderRadius: 15,
  },
  accountName: {
    color: '#f1f0f0',
    padding: 4,
    fontSize: 18,
    fontWeight: 600,
  },
  accountType: {
    color: '#b0b0b0',
    padding: 4,
    fontSize: 15,
    fontWeight: 600,
  },

  /* ===== BOTTOM TABS ===== */
  bottomTabs: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingVertical: 10,
    backgroundColor: '#181716',
    borderTopColor: '#fff', 
    borderTopWidth: 1,
  },
  tabIcon: {
    color: '#fff',
    fontSize: 24,
  },
});