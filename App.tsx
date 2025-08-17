/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import { StatusBar, StyleSheet, useColorScheme, View, Text, Alert, TouchableOpacity } from 'react-native';
import {
  SafeAreaProvider,
  useSafeAreaInsets,
} from 'react-native-safe-area-context';
import BudgetList from './components/BudgetList';
import { Budget } from './types/budget';

function App() {
  const isDarkMode = useColorScheme() === 'dark';

  return (
    <SafeAreaProvider>
      <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
      <AppContent />
    </SafeAreaProvider>
  );
}

function AppContent() {
  const safeAreaInsets = useSafeAreaInsets();

  // 示例預算數據
  const budgetData: Budget[] = [
    { yyyymm: '202412', amount: 50000, id: '1' },
    { yyyymm: '202411', amount: 48000, id: '2' },
    { yyyymm: '202410', amount: 52000, id: '3' },
    { yyyymm: '202409', amount: 45000, id: '4' },
    { yyyymm: '202408', amount: 55000, id: '5' },
    { yyyymm: '202407', amount: 47000, id: '6' },
  ];

  // 處理預算點擊
  const handleBudgetPress = (budget: Budget) => {
    Alert.alert(
      '預算詳情',
      `${budget.yyyymm} 月份預算\n金額: ${new Intl.NumberFormat('zh-TW', {
        style: 'currency',
        currency: 'TWD',
        minimumFractionDigits: 0,
      }).format(budget.amount)}`,
      [{ text: '確定', style: 'default' }]
    );
  };

  // 處理預算刪除
  const handleBudgetDelete = (budget: Budget) => {
    Alert.alert(
      '預算已刪除',
      `已刪除 ${budget.yyyymm} 月份的預算`,
      [{ text: '確定', style: 'default' }]
    );
  };

  // 處理取得比分按鈕點擊
  const handleGetScore = () => {
    Alert.alert(
      '取得比分',
      '比分功能已觸發！\n這裡可以顯示比賽比分或相關資訊。',
      [{ text: '確定', style: 'default' }]
    );
  };

  return (
    <View style={styles.container}>
      {/* 取得比分按鈕 - 位於畫面最上方 */}
      <View style={styles.topButtonContainer}>
        <TouchableOpacity style={styles.scoreButton} onPress={handleGetScore}>
          <Text style={styles.scoreButtonText}>取得比分</Text>
        </TouchableOpacity>
      </View>

      {/* <BudgetList budgets={budgetData} onBudgetPress={handleBudgetPress} onBudgetDelete={handleBudgetDelete} /> */}


    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  topButtonContainer: {
    backgroundColor: '#ffffff',
    paddingTop: 200,
    paddingBottom: 16,
    paddingHorizontal: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#e0e0e0',
    alignItems: 'center',
  },
  scoreButton: {
    backgroundColor: '#007AFF',
    paddingHorizontal: 32,
    paddingVertical: 14,
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 3.84,
    elevation: 5,
  },
  scoreButtonText: {
    color: '#ffffff',
    fontSize: 18,
    fontWeight: '600',
  },
  header: {
    alignItems: 'center',
    paddingVertical: 20,
    paddingTop: 20,
    backgroundColor: '#ffffff',
    borderBottomWidth: 1,
    borderBottomColor: '#e0e0e0',
  },
  headerText: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#333333',
    marginBottom: 8,
  },
  headerSubText: {
    fontSize: 16,
    color: '#666666',
    fontWeight: '400',
  },
});

export default App;
