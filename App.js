import React, { useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image, ScrollView, SafeAreaView, ActivityIndicator, Alert } from 'react-native';
import { StatusBar } from 'expo-status-bar';

export default function App() {
  const [currentScreen, setCurrentScreen] = useState('home');
  const [isProcessing, setIsProcessing] = useState(false);
  const [loadingText, setLoadingText] = useState('正在加载...');

  const loadSample = () => {
    setCurrentScreen('editor');
    setIsProcessing(true);
    setLoadingText('AI正在分析人脸与姿态...');
    setTimeout(() => setLoadingText('提取服装与运动相机特征...'), 1200);
    setTimeout(() => setLoadingText('Q版萌化渲染与像素重构...'), 2500);
    setTimeout(() => {
      setIsProcessing(false);
      setCurrentScreen('result');
    }, 3800);
  };

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar style="dark" />
      <View style={styles.header}>
        <View style={styles.headerLeft}>
          <View style={styles.logoBadge}><Text style={{ fontSize: 18 }}>👾</Text></View>
          <View>
            <Text style={styles.headerTitle}>像素萌妹 PixelMe</Text>
            <Text style={styles.headerSub}>Q版像素可爱风转换器</Text>
          </View>
        </View>
      </View>

      {currentScreen === 'home' && (
        <ScrollView contentContainerStyle={styles.scrollContent}>
          <View style={styles.heroBox}>
            <Text style={styles.tag}>✨ AI 智能像素萌化引擎</Text>
            <Text style={styles.title}>上传真实照片{'\n'}一键生成Q版像素插画</Text>
            <Text style={styles.desc}>完美还原人物姿态、服装与手持运动相机特征，大眼睛、红晕与像素颗粒质感！</Text>
          </View>
          <View style={styles.sampleContainer}>
            <View style={styles.sampleHeader}>
              <Text style={styles.sampleTitle}>💗 官方效果示例</Text>
              <TouchableOpacity style={styles.demoBtn} onPress={loadSample}>
                <Text style={styles.demoBtnText}>体验此示例 ⚡</Text>
              </TouchableOpacity>
            </View>
          </View>
          <TouchableOpacity style={styles.primaryBtn} onPress={loadSample}>
            <Text style={styles.primaryBtnText}>上传照片并开始转换</Text>
          </TouchableOpacity>
        </ScrollView>
      )}

      {currentScreen === 'editor' && (
        <View style={styles.centerContainer}>
          {isProcessing && (
            <View style={styles.loadingBox}>
              <Text style={{ fontSize: 40, marginBottom: 16 }}>👾</Text>
              <ActivityIndicator size="large" color="#f43f5e" />
              <Text style={styles.loadingTitle}>AI 正在施展魔法...</Text>
              <Text style={styles.loadingSub}>{loadingText}</Text>
            </View>
          )}
        </View>
      )}

      {currentScreen === 'result' && (
        <ScrollView contentContainerStyle={styles.scrollContent}>
          <View style={styles.centerContainer}>
            <Text style={{ fontSize: 32, marginBottom: 8 }}>🎉</Text>
            <Text style={styles.title}>Q版像素萌妹生成成功！</Text>
            <Text style={styles.desc}>图片已完成AI渲染，可随时保存到手机相册。</Text>
            <TouchableOpacity style={[styles.primaryBtn, { backgroundColor: '#9333ea', marginVertical: 20 }]} onPress={() => Alert.alert('成功', '图片已成功保存至手机相册！')}>
              <Text style={styles.primaryBtnText}>💾 保存图片到相册</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.outlineBtn} onPress={() => setCurrentScreen('home')}>
              <Text style={styles.outlineBtnText}>← 返回首页制作新图片</Text>
            </TouchableOpacity>
          </View>
        </ScrollView>
      )}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#fff8f0' },
  header: { flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', paddingHorizontal: 20, paddingVertical: 12, backgroundColor: '#ffffff', borderBottomWidth: 1, borderBottomColor: '#fecdd3' },
  headerLeft: { flexDirection: 'row', alignItems: 'center' },
  logoBadge: { width: 36, height: 36, backgroundColor: '#f43f5e', borderRadius: 10, alignItems: 'center', justifyContent: 'center', marginRight: 10 },
  headerTitle: { fontSize: 16, fontWeight: '900', color: '#e11d48' },
  headerSub: { fontSize: 10, color: '#9ca3af' },
  scrollContent: { padding: 20, alignItems: 'center' },
  heroBox: { alignItems: 'center', marginBottom: 20 },
  tag: { fontSize: 11, fontWeight: 'bold', color: '#f43f5e', backgroundColor: '#ffe4e6', paddingHorizontal: 10, paddingVertical: 4, borderRadius: 20, marginBottom: 8 },
  title: { fontSize: 24, fontWeight: '900', color: '#1f2937', textAlign: 'center', marginBottom: 8 },
  desc: { fontSize: 13, color: '#6b7280', textAlign: 'center', paddingHorizontal: 10, lineHeight: 18 },
  sampleContainer: { width: '100%', backgroundColor: '#fff1f2', borderRadius: 16, padding: 14, marginBottom: 24, borderWidth: 1, borderColor: '#fecdd3' },
  sampleHeader: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' },
  sampleTitle: { fontSize: 12, fontWeight: 'bold', color: '#e11d48' },
  demoBtn: { backgroundColor: '#f43f5e', paddingHorizontal: 10, paddingVertical: 6, borderRadius: 10 },
  demoBtnText: { color: '#ffffff', fontSize: 11, fontWeight: 'bold' },
  primaryBtn: { width: '100%', backgroundColor: '#f43f5e', paddingVertical: 16, borderRadius: 16, alignItems: 'center' },
  primaryBtnText: { color: '#ffffff', fontSize: 16, fontWeight: 'bold' },
  centerContainer: { flex: 1, justifyContent: 'center', alignItems: 'center', paddingVertical: 40 },
  loadingBox: { alignItems: 'center', backgroundColor: '#ffffff', padding: 30, borderRadius: 20 },
  loadingTitle: { fontSize: 16, fontWeight: 'bold', color: '#1f2937', marginTop: 12, marginBottom: 6 },
  loadingSub: { fontSize: 12, color: '#f43f5e' },
  outlineBtnText: { color: '#f43f5e', fontSize: 14, fontWeight: 'bold' }
});
