import React, { Component } from 'react';
import { View, Text, TouchableOpacity, Alert, StyleSheet, Image } from 'react-native';
import TabNavigator from 'react-native-tab-navigator';
import SvgUri from 'react-native-svg-uri';
import {
  jiaoyou,
  jiaoyouSelected,
  quanzi,
  quanziSelected,
  xiaoxi,
  xiaoxiSelected,
  wode,
  wodeSelected,
} from '../../util/iconfont'; //../../../util/iconfont
import Friend from './components/Friend';
import Circle from './components/circle';
import My from './components/My';
import Message from './components/Message';
const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  tabText: {
    color: "#333333",
    fontSize: 13
  },
  selectedTabText: {
    color: "#f4ea2a",
    fontSize: 13
  },
  icon: {
    width: 20,
    height: 20
  }
});

export default class index extends Component {
  state = {
    selectedTab: "设置"
  }
  render() {
    return (
      <View style={{ flex: 1 }}>
        <TabNavigator tabBarStyle={{ height: 49 }}>
          <TabNavigator.Item
            selected={this.state.selectedTab === '交友'}
            title="交友"
            titleStyle={styles.tabText}
            selectedTitleStyle={styles.selectedTabText}
            renderIcon={() => <SvgUri width={20} height={20} svgXmlData={jiaoyou} />}
            renderSelectedIcon={() => <SvgUri width={20} height={20} svgXmlData={jiaoyouSelected} />}
            onPress={() => this.setState({ selectedTab: '交友' })}>
            <Friend></Friend>
          </TabNavigator.Item>
          <TabNavigator.Item
            selected={this.state.selectedTab === '圈子'}
            title="圈子"
            titleStyle={styles.tabText}
            selectedTitleStyle={styles.selectedTabText}
            renderIcon={() => <SvgUri width={20} height={20} svgXmlData={quanzi} />}
            renderSelectedIcon={() => <SvgUri width={20} height={20} svgXmlData={quanziSelected} />}
            onPress={() => this.setState({ selectedTab: '圈子' })}>
            <Circle></Circle>
          </TabNavigator.Item>
          <TabNavigator.Item
            selected={this.state.selectedTab === '消息'}
            title="消息"
            titleStyle={styles.tabText}
            selectedTitleStyle={styles.selectedTabText}
            renderIcon={() => <SvgUri width={20} height={20} svgXmlData={xiaoxi} />}
            renderSelectedIcon={() => <SvgUri width={20} height={20} svgXmlData={xiaoxiSelected} />}
            onPress={() => this.setState({ selectedTab: '消息' })}>
            <Message></Message>
          </TabNavigator.Item>
          <TabNavigator.Item
            selected={this.state.selectedTab === '我的'}
            title="我的"
            titleStyle={styles.tabText}
            selectedTitleStyle={styles.selectedTabText}
            renderIcon={() => <SvgUri width={20} height={20} svgXmlData={wode} />}
            renderSelectedIcon={() => <SvgUri width={20} height={20} svgXmlData={wodeSelected} />}
            onPress={() => this.setState({ selectedTab: '我的' })}>
            <My></My>
          </TabNavigator.Item>
        </TabNavigator>
      </View>
    );
  }

}
