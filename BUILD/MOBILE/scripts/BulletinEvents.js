import * as React from "react";
import { StyleSheet, View, Text, Image, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { FontFamily, FontSize, Color } from "../GlobalStyles";

const BulletinEvents = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.bulletinevents}>
      <View style={styles.header}>
        <View style={[styles.headerChild, styles.headerChildPosition]} />
        <Text style={[styles.title, styles.titleTypo]}>Feed</Text>
        <Image
          style={[styles.headerItem, styles.arrowIconPosition]}
          resizeMode="cover"
          source={require("../assets/arrow-1.png")}
        />
      </View>
      <View style={[styles.header1, styles.headerLayout]}>
        <View style={[styles.headerChild, styles.headerChildPosition]} />
        <Text style={[styles.title1, styles.titleTypo]}>Events</Text>
        <Image
          style={[styles.arrowIcon, styles.arrowIconPosition]}
          resizeMode="cover"
          source={require("../assets/arrow-11.png")}
        />
      </View>
      <Pressable
        style={[styles.header2, styles.headerLayout]}
        onPress={() => navigation.navigate("BulletinAlerts")}
      >
        <View style={[styles.rectangleView, styles.headerChildPosition]} />
        <Text style={[styles.title2, styles.titleTypo]}>Alerts</Text>
        <Image
          style={[styles.arrowIcon, styles.arrowIconPosition]}
          resizeMode="cover"
          source={require("../assets/arrow-11.png")}
        />
      </Pressable>
      <View style={styles.bulletineventsChild} />
      <View style={styles.bulletineventsItem} />
      <View style={[styles.greenSpaceGeorgiaStateParent, styles.greenLayout]}>
        <Text
          style={[styles.greenSpaceGeorgia, styles.thereIsAFlexBox]}
        >{`Green Space
Georgia State`}</Text>
        <Text style={[styles.thereIsA, styles.thereIsAPosition]}>
          There is a free picnic event in the Green Space at Georgia State
          University.
        </Text>
      </View>
      <View style={[styles.menuItem, styles.menuItemLayout1]}>
        <View style={[styles.backdrop, styles.backdropPosition]} />
        <Text style={[styles.freePizzaParty, styles.freePizzaPartyTypo]}>
          Free Pizza Party
        </Text>
        <Image
          style={[styles.menuItemChild, styles.menuItemChildLayout]}
          resizeMode="cover"
          source={require("../assets/ellipse-11.png")}
        />
      </View>
      <Image
        style={[styles.bulletineventsInner, styles.textPosition]}
        resizeMode="cover"
        source={require("../assets/ellipse-2.png")}
      />
      <View style={[styles.menuItem1, styles.menuItemLayout1]}>
        <View style={[styles.backdrop1, styles.backdropPosition]} />
        <Text style={[styles.greenSpacePicnic, styles.textTypo]}>
          Green Space Picnic
        </Text>
        <Image
          style={[styles.menuItemChild, styles.menuItemChildLayout]}
          resizeMode="cover"
          source={require("../assets/ellipse-11.png")}
        />
      </View>
      <View style={[styles.menuItem2, styles.menuItemLayout1]}>
        <View style={[styles.backdrop, styles.backdropPosition]} />
        <Text style={[styles.iceCreamSocial, styles.freePizzaPartyTypo]}>
          Ice Cream Social
        </Text>
        <Image
          style={[styles.menuItemChild, styles.menuItemChildLayout]}
          resizeMode="cover"
          source={require("../assets/ellipse-12.png")}
        />
      </View>
      <View style={[styles.menuItem3, styles.menuItemLayout1]}>
        <View style={[styles.backdrop, styles.backdropPosition]} />
        <Text style={[styles.smoothieSampling, styles.freePizzaPartyTypo]}>
          Smoothie Sampling
        </Text>
        <Image
          style={[styles.menuItemChild, styles.menuItemChildLayout]}
          resizeMode="cover"
          source={require("../assets/ellipse-12.png")}
        />
      </View>
      <View style={[styles.menuItem4, styles.menuItemLayout]}>
        <View style={styles.backdrop4} />
        <Text style={[styles.coffeeAndDonuts, styles.freePizzaPartyTypo]}>
          Coffee and Donuts
        </Text>
        <Image
          style={[styles.menuItemChild, styles.menuItemChildLayout]}
          resizeMode="cover"
          source={require("../assets/ellipse-13.png")}
        />
      </View>
      <View style={[styles.menuItem5, styles.menuItemLayout]}>
        <View style={styles.backdrop4} />
        <Text style={[styles.coffeeAndDonuts, styles.freePizzaPartyTypo]}>
          Pop-Up Pancakes
        </Text>
        <Image
          style={[styles.menuItemChild, styles.menuItemChildLayout]}
          resizeMode="cover"
          source={require("../assets/ellipse-12.png")}
        />
      </View>
      <View style={[styles.menuItem6, styles.menuItemLayout]}>
        <View style={styles.backdrop4} />
        <Text style={[styles.coffeeAndDonuts, styles.freePizzaPartyTypo]}>
          Burger Bonanza
        </Text>
        <Image
          style={[styles.menuItemChild, styles.menuItemChildLayout]}
          resizeMode="cover"
          source={require("../assets/ellipse-12.png")}
        />
      </View>
      <View style={[styles.menuItem7, styles.menuItemLayout]}>
        <View style={styles.backdrop4} />
        <Text style={[styles.coffeeAndDonuts, styles.freePizzaPartyTypo]}>
          Cupcake Carnival
        </Text>
        <Image
          style={[styles.menuItemChild, styles.menuItemChildLayout]}
          resizeMode="cover"
          source={require("../assets/ellipse-12.png")}
        />
      </View>
      <View style={[styles.menuItem8, styles.menuItemLayout1]}>
        <View style={[styles.backdrop, styles.backdropPosition]} />
        <Text style={[styles.sandwichGiveaway, styles.freePizzaPartyTypo]}>
          {" "}
          Sandwich Giveaway
        </Text>
        <Image
          style={[styles.menuItemChild, styles.menuItemChildLayout]}
          resizeMode="cover"
          source={require("../assets/ellipse-12.png")}
        />
      </View>
      <Text style={[styles.text, styles.textPosition]}>!</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  headerChildPosition: {
    left: "0%",
    bottom: "0%",
    right: "0%",
    top: "0%",
    height: "100%",
    position: "absolute",
    width: "100%",
  },
  titleTypo: {
    textAlign: "center",
    fontFamily: FontFamily.interRegular,
    fontSize: FontSize.size_5xl,
    top: "14%",
    position: "absolute",
  },
  arrowIconPosition: {
    maxWidth: "100%",
    left: "4.36%",
    right: "89.23%",
    width: "6.41%",
    top: "50%",
    position: "absolute",
    overflow: "hidden",
  },
  headerLayout: {
    width: 195,
    top: 50,
    height: 50,
    position: "absolute",
  },
  greenLayout: {
    width: 378,
    position: "absolute",
  },
  thereIsAFlexBox: {
    justifyContent: "center",
    alignItems: "center",
    display: "flex",
    color: Color.color,
    textAlign: "center",
  },
  thereIsAPosition: {
    left: "50%",
    position: "absolute",
  },
  menuItemLayout1: {
    height: 63,
    width: 392,
    left: -1,
    borderColor: Color.fFFFFF,
    position: "absolute",
    borderWidth: 1,
    borderStyle: "solid",
  },
  backdropPosition: {
    bottom: "3.17%",
    height: "96.83%",
    right: "0.51%",
    width: "99.49%",
    left: "0%",
    top: "0%",
    position: "absolute",
    borderWidth: 1,
    borderColor: Color.color,
    borderStyle: "solid",
  },
  freePizzaPartyTypo: {
    color: Color.colorGray_300,
    fontFamily: FontFamily.workSansRegular,
    left: "50%",
    textAlign: "center",
    fontSize: FontSize.size_5xl,
    position: "absolute",
  },
  menuItemChildLayout: {
    height: 28,
    width: 28,
  },
  textPosition: {
    top: 117,
    position: "absolute",
  },
  textTypo: {
    fontFamily: FontFamily.workSansRegular,
    textAlign: "center",
    fontSize: FontSize.size_5xl,
  },
  menuItemLayout: {
    height: 64,
    width: 392,
    left: -1,
    borderColor: Color.fFFFFF,
    position: "absolute",
    borderWidth: 1,
    borderStyle: "solid",
  },
  headerChild: {
    backgroundColor: Color.color,
  },
  title: {
    left: "42.82%",
    color: Color.colorLightgray,
    textAlign: "center",
    fontFamily: FontFamily.interRegular,
    fontSize: FontSize.size_5xl,
    top: "14%",
  },
  headerItem: {
    height: "29.4%",
    bottom: "20.6%",
    maxHeight: "100%",
  },
  header: {
    height: 50,
    width: 390,
    left: 0,
    top: 0,
    position: "absolute",
  },
  title1: {
    left: "30.26%",
    color: Color.colorLightgray,
    textAlign: "center",
    fontFamily: FontFamily.interRegular,
    fontSize: FontSize.size_5xl,
    top: "14%",
  },
  arrowIcon: {
    height: 0,
    display: "none",
  },
  header1: {
    left: 0,
  },
  rectangleView: {
    backgroundColor: Color.fFFFFF,
  },
  title2: {
    left: "32.82%",
    color: Color.color,
    textAlign: "center",
    fontFamily: FontFamily.interRegular,
    fontSize: FontSize.size_5xl,
    top: "14%",
  },
  header2: {
    left: 195,
  },
  bulletineventsChild: {
    top: 49,
    left: 194,
    borderRightWidth: 3,
    width: 3,
    height: 53,
    borderColor: Color.fFFFFF,
    position: "absolute",
    borderStyle: "solid",
  },
  bulletineventsItem: {
    top: 100,
    height: 198,
    width: 390,
    left: 0,
    position: "absolute",
    borderWidth: 1,
    borderColor: Color.color,
    borderStyle: "solid",
    backgroundColor: Color.fFFFFF,
  },
  greenSpaceGeorgia: {
    fontSize: FontSize.size_9xl,
    fontWeight: "700",
    fontFamily: FontFamily.anonymousProBold,
    height: 56,
    width: 378,
    position: "absolute",
    left: 0,
    alignItems: "center",
    display: "flex",
    top: 0,
  },
  thereIsA: {
    marginTop: -17.15,
    marginLeft: -134,
    fontSize: FontSize.size_base,
    fontFamily: FontFamily.anonymousProRegular,
    height: 90,
    width: 268,
    justifyContent: "center",
    alignItems: "center",
    display: "flex",
    color: Color.color,
    textAlign: "center",
    top: "50%",
    left: "50%",
  },
  greenSpaceGeorgiaStateParent: {
    top: 122,
    left: 6,
    height: 146,
  },
  backdrop: {
    backgroundColor: Color.fFFFFF,
  },
  freePizzaParty: {
    marginLeft: -130,
    top: "25.4%",
  },
  menuItemChild: {
    top: 16,
    left: 331,
    position: "absolute",
    height: 28,
    width: 28,
  },
  menuItem: {
    top: 297,
  },
  bulletineventsInner: {
    left: 345,
    height: 28,
    width: 28,
  },
  backdrop1: {
    backgroundColor: Color.color,
  },
  greenSpacePicnic: {
    marginLeft: -150,
    color: Color.fFFFFF,
    top: "25.4%",
    left: "50%",
    position: "absolute",
  },
  menuItem1: {
    top: 418,
  },
  iceCreamSocial: {
    marginLeft: -136,
    top: "25.4%",
  },
  menuItem2: {
    top: 539,
  },
  smoothieSampling: {
    marginLeft: -151,
    top: "25.4%",
  },
  menuItem3: {
    top: 661,
  },
  backdrop4: {
    height: "96.88%",
    bottom: "3.13%",
    right: "0.51%",
    width: "99.49%",
    left: "0%",
    top: "0%",
    position: "absolute",
    borderWidth: 1,
    borderColor: Color.color,
    borderStyle: "solid",
    backgroundColor: Color.fFFFFF,
  },
  coffeeAndDonuts: {
    height: "44.53%",
    marginLeft: -171,
    top: "25.47%",
    width: 268,
  },
  menuItem4: {
    top: 357,
  },
  menuItem5: {
    top: 478,
  },
  menuItem6: {
    top: 599,
  },
  menuItem7: {
    top: 721,
  },
  sandwichGiveaway: {
    marginLeft: -156,
    top: "25.4%",
  },
  menuItem8: {
    top: 782,
  },
  text: {
    left: 338,
    width: 42,
    height: 33,
    fontFamily: FontFamily.workSansRegular,
    textAlign: "center",
    fontSize: FontSize.size_5xl,
    color: Color.color,
  },
  bulletinevents: {
    flex: 1,
    height: 844,
    overflow: "hidden",
    width: "100%",
    borderWidth: 1,
    borderColor: Color.color,
    borderStyle: "solid",
    backgroundColor: Color.fFFFFF,
  },
});

export default BulletinEvents;
