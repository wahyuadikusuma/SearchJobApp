import { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Image,
  FlatList,
} from "react-native";
import { useRouter } from "expo-router";

import styles from "./welcome.style";
import { icons, SIZES } from "../../../constants";
import { JobTabs } from "../..";
import { set } from "react-native-reanimated";
import { Directions } from "react-native-gesture-handler";

const jobTypes = ["Full-time", "Part-time", "Internship", "Freelance"];

const Welcome = () => {
  const router = useRouter();
  const [activeJobType, setActiveJobType] = useState("Full Time");

  return (
    <View>
      <View style={styles.container}>
        <Text style={styles.userName}>Hello Wahyu!</Text>
        <Text style={styles.welcomeMessage}>Find your perfect job!</Text>
      </View>
      {/* search content */}
      <View style={styles.searchContainer}>
        <View style={styles.searchWrapper}>
          <TextInput
            style={styles.searchInput}
            value=""
            onChange={() => {
              setActiveJobType(item);
              router.push(`/search/${item}`);
            }}
            placeholder="Search job title or company..."
          />
        </View>

        <TouchableOpacity style={styles.searchBtn} onPress={() => {}}>
          <Image source={icons.search} resizeMode="contain" style={styles.searchBtnImage } />
          </TouchableOpacity>
      </View>

      <View style={styles.tabsContainer}>
      <FlatList
        data={jobTypes}
        renderItem={({ item }) => (
          <TouchableOpacity
          style={styles.tab(activeJobType, item)}
          onPress={() => {
            setActiveJobType(item);
            router.push(`/search/${item}`);
          }}
          >
            <Text>{item}</Text>
            </TouchableOpacity>
          )}
          keyExtractor={(item) => item}
          contentContainerStyle={{columnGap: SIZES.small}}
          horizontal
          />
      </View>
    </View>
  );
};

export default Welcome;
