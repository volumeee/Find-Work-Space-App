import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {Image, ScrollView, StyleSheet, Text, View} from 'react-native';
import {gs} from '../../../assets/styles/GlobalStyle';
import {colors} from '../../../assets/styles/Colors';

function Home(): JSX.Element {
  const navigation = useNavigation();

  const renderHeader = () => {
    return (
      <View style={styles.headerContainer}>
        <View style={[gs.flexRow, gs.itemsCenter]}>
          <Image
            source={require('../../../assets/images/profile_1.png')}
            style={styles.profileContainer}
          />
          <View>
            <Text style={gs.textBlack}>Hi, Nana</Text>
            <Text style={[gs.textBlack, gs.font700]}>@nanalestari</Text>
          </View>
        </View>
        <View style={gs.flexRow}>
          <Image
            source={require('../../../assets/icons/gift.png')}
            style={styles.iconContainer}
          />
          <Image
            source={require('../../../assets/icons/notification.png')}
            style={styles.iconContainer}
          />
        </View>
      </View>
    );
  };

  const renderSearch = () => {
    return <Text>renderSearch</Text>;
  };

  const renderPopularSection = () => {
    return <Text>renderPopularSection</Text>;
  };

  const renderNewsworthy = () => {
    return <Text>renderNewsworthy</Text>;
  };
  return (
    <View style={styles.container}>
      <View>
        {renderHeader()}
        {renderSearch()}
        <ScrollView>
          {renderPopularSection()}
          {renderNewsworthy()}
        </ScrollView>
      </View>
      {/* <BottomNav/> */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.greyLight,
  },
  headerContainer: {
    ...gs.flexRow,
    ...gs.itemsCenter,
    ...gs.justifyBetween,
    padding: 24,
  },
  profileContainer: {
    width: 50,
    height: 50,
    marginRight: 10,
  },
  iconContainer: {
    width: 20,
    height: 20,
    marginLeft: 10,
  },
});

export default Home;
