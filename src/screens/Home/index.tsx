import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {
  FlatList,
  Image,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import {gs} from '../../../assets/styles/GlobalStyle';
import {colors} from '../../../assets/styles/Colors';
import InputText from '../../components/InputText';
import NewsworthyItem from '../../components/NewsworthyItem';

function Home(): JSX.Element {
  const navigation = useNavigation();

  const handlePress = () => {
    navigation.navigate('Details');
  };

  // data dummy newsworthy
  const newsworthyData = [
    {
      title: 'Hajime',
      address: 'Pantai Utara No.90',
      price: '$400/day',
      image: require('../../../assets/images/item_2_a.png'),
    },
    {
      title: 'DeepWork',
      address: 'Pantai Selatan No.50',
      price: '$599/day',
      image: require('../../../assets/images/item_3_a.png'),
    },
  ];

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
    return (
      <View style={styles.sectionContainer}>
        <InputText
          // label={'Find Work'}
          placeholder={'Find Workspace in jakarta'}
          icon={require('../../../assets/icons/location.png')}
        />
      </View>
    );
  };

  const renderPopularSection = () => {
    return (
      <View style={styles.sectionContainer}>
        <Text style={[styles.sectionTitle, gs.h1]}>Popular</Text>
        <View style={gs.flexRow}>
          <Image
            source={require('../../../assets/images/item_1_a.png')}
            style={styles.popularMainImage}
          />
          <View>
            <Image
              source={require('../../../assets/images/item_1_b.png')}
              style={styles.popularImage}
            />
            <Image
              source={require('../../../assets/images/item_1_c.png')}
              style={styles.popularImage}
            />
          </View>
        </View>
        <View style={styles.popularContent}>
          <View>
            <Text style={[gs.h2, gs.textBlack]}>IndoorWork</Text>
            <Text style={gs.textGrey}>Jalan Sudirman No. 10</Text>
          </View>
          <View style={styles.popularPriceContainer}>
            <Text style={styles.popularPriceLabel}>$599/day</Text>
          </View>
        </View>
      </View>
    );
  };

  const renderNewsworthy = () => {
    return (
      <View style={styles.sectionContainer}>
        <Text style={[styles.sectionTitle, gs.h1]}>Newsworthy</Text>
        <FlatList
          horizontal
          showsHorizontalScrollIndicator={false}
          data={newsworthyData}
          keyExtractor={item => item.title}
          renderItem={({item}) => (
            <NewsworthyItem
              title={item.title}
              address={item.address}
              price={item.price}
              image={item.image}
              onPress={handlePress}
            />
          )}
        />
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <View style={styles.contentContainer}>
        {renderHeader()}
        {renderSearch()}
        <ScrollView
          showsVerticalScrollIndicator={false}
          style={styles.scrollContainer}>
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
  contentContainer: {
    flex: 1,
    backgroundColor: colors.white,
  },
  scrollContainer: {
    height: '100%',
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
    borderColor: colors.greyContainer,
    borderWidth: 1,
    borderRadius: 50,
  },
  iconContainer: {
    width: 24,
    height: 24,
    marginLeft: 10,
  },
  sectionContainer: {
    paddingHorizontal: 24,
    paddingBottom: 24,
  },
  popularMainImage: {
    ...gs.cornerXL,
    flex: 1,
    height: 200,
    marginRight: 10,
  },
  popularImage: {
    ...gs.cornerMD,
    width: 130,
    height: 95,
    marginBottom: 10,
  },
  sectionTitle: {
    ...gs.textBlack,
    marginBottom: 12,
  },
  popularContent: {
    ...gs.flexRow,
    ...gs.justifyBetween,
    alignItems: 'center',
  },
  popularPriceContainer: {
    ...gs.justifyCenter,
    ...gs.itemsCenter,
    ...gs.cornerXS,
    paddingHorizontal: 12,
    paddingVertical: 8,
    backgroundColor: colors.secondary,
  },
  popularPriceLabel: {
    ...gs.font600,
    ...gs.textPrimary,
  },
});

export default Home;
