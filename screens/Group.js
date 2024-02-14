import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, View, Text } from "react-native";
import { Color, Border, FontFamily, FontSize } from "../GlobalStyles";

const Group = () => {
  return (
    <View style={styles.group}>
      <View style={[styles.launchScreen, styles.signPosition1]}>
        <View style={styles.container2}>
          <View style={[styles.image14, styles.imagePosition]}>
            <View style={[styles.group1, styles.groupPosition]}>
              <View style={[styles.group2, styles.groupIconPosition]}>
                <Image
                  style={[styles.groupIcon, styles.groupIconLayout1]}
                  contentFit="cover"
                  source={require("../assets/group.png")}
                />
                <Image
                  style={[styles.groupIcon1, styles.groupIconLayout]}
                  contentFit="cover"
                  source={require("../assets/group1.png")}
                />
              </View>
            </View>
          </View>
          <View style={[styles.image15, styles.imagePosition]}>
            <View style={[styles.group3, styles.groupPosition]}>
              <View style={[styles.group2, styles.groupIconPosition]}>
                <Image
                  style={[styles.groupIcon2, styles.groupIconLayout1]}
                  contentFit="cover"
                  source={require("../assets/group2.png")}
                />
                <Image
                  style={[styles.groupIcon3, styles.groupIconLayout]}
                  contentFit="cover"
                  source={require("../assets/group1.png")}
                />
              </View>
            </View>
          </View>
        </View>
        <Image
          style={[styles.image16Icon, styles.textPosition]}
          contentFit="cover"
          source={require("../assets/image-16.png")}
        />
      </View>
      <View style={[styles.signIn, styles.signPosition1]}>
        <View style={[styles.textbox1, styles.textboxLayout1]}>
          <Image
            style={[styles.vectorIcon, styles.groupIconLayout1]}
            contentFit="cover"
            source={require("../assets/vector.png")}
          />
          <Text style={[styles.enterEmailenrollmentNumber, styles.enterTypo]}>
            Enter email/Enrollment Number
          </Text>
          <Image
            style={[styles.profileIcon, styles.profileIconLayout]}
            contentFit="cover"
            source={require("../assets/profile.png")}
          />
        </View>
        <Text style={[styles.welcome, styles.orTypo]}>Welcome!</Text>
        <Text
          style={[styles.hiEnterYour, styles.orSignInTypo]}
        >{`Hi, Enter your details to get sign in
to your account`}</Text>
        <View style={[styles.button1Parent, styles.parentPosition]}>
          <View style={[styles.button1, styles.buttonLayout2]}>
            <Text style={[styles.text, styles.emailLayout]} />
            <Image
              style={[styles.googleIcon, styles.googleIconPosition]}
              contentFit="cover"
              source={require("../assets/google.png")}
            />
          </View>
          <View style={[styles.button2, styles.buttonLayout2]}>
            <Text style={[styles.text, styles.emailLayout]} />
            <Image
              style={[styles.googleIcon, styles.googleIconPosition]}
              contentFit="cover"
              source={require("../assets/apple.png")}
            />
          </View>
          <View style={[styles.button3, styles.buttonLayout2]}>
            <Text style={[styles.text, styles.emailLayout]} />
            <Image
              style={[styles.googleIcon, styles.googleIconPosition]}
              contentFit="cover"
              source={require("../assets/logo-facebook.png")}
            />
          </View>
          <Text style={[styles.orSignIn, styles.orSignInTypo]}>
            Or Sign In via
          </Text>
        </View>
        <View style={styles.container2}>
          <View style={[styles.image14, styles.imagePosition]}>
            <View style={[styles.group1, styles.groupPosition]}>
              <View style={[styles.group2, styles.groupIconPosition]}>
                <Image
                  style={[styles.groupIcon, styles.groupIconLayout1]}
                  contentFit="cover"
                  source={require("../assets/group.png")}
                />
                <Image
                  style={[styles.groupIcon1, styles.groupIconLayout]}
                  contentFit="cover"
                  source={require("../assets/group1.png")}
                />
              </View>
            </View>
          </View>
          <View style={[styles.image15, styles.imagePosition]}>
            <View style={[styles.group3, styles.groupPosition]}>
              <View style={[styles.group2, styles.groupIconPosition]}>
                <Image
                  style={[styles.groupIcon2, styles.groupIconLayout1]}
                  contentFit="cover"
                  source={require("../assets/group2.png")}
                />
                <Image
                  style={[styles.groupIcon3, styles.groupIconLayout]}
                  contentFit="cover"
                  source={require("../assets/group1.png")}
                />
              </View>
            </View>
          </View>
        </View>
        <Image
          style={styles.image19Icon}
          contentFit="cover"
          source={require("../assets/image-19.png")}
        />
        <View style={styles.dropdownButton1}>
          <Text
            style={[
              styles.selectYourUniversity,
              styles.iAgreeWithContainerLayout,
            ]}
          >
            Select your University
          </Text>
          <Image
            style={[styles.chevronDownLarge, styles.profileIconLayout]}
            contentFit="cover"
            source={require("../assets/chevron-down-large.png")}
          />
        </View>
        <View style={[styles.button4Parent, styles.parentPosition]}>
          <View style={[styles.button4, styles.buttonLayout1]}>
            <Text style={[styles.login, styles.signPosition]}>Login</Text>
          </View>
          <View style={[styles.button41, styles.buttonLayout1]}>
            <Text style={[styles.signUp, styles.signPosition]}>Sign Up</Text>
          </View>
        </View>
        <View style={[styles.textbox11, styles.parentPosition]}>
          <Image
            style={[styles.vectorIcon, styles.groupIconLayout1]}
            contentFit="cover"
            source={require("../assets/vector.png")}
          />
          <Text style={[styles.enterEmailenrollmentNumber, styles.enterTypo]}>
            Enter your Password
          </Text>
          <Image
            style={[styles.profileIcon, styles.profileIconLayout]}
            contentFit="cover"
            source={require("../assets/lock.png")}
          />
        </View>
      </View>
      <View style={[styles.signUp1, styles.signPosition1]}>
        <View style={[styles.textbox5, styles.textboxLayout]}>
          <Text style={[styles.enterEmail, styles.emailLayout]}>
            Enter email
          </Text>
          <Text style={[styles.email, styles.emailLayout]}>Email</Text>
          <Image
            style={[styles.mailIcon, styles.iconPosition]}
            contentFit="cover"
            source={require("../assets/mail.png")}
          />
        </View>
        <View style={[styles.textbox6, styles.textboxLayout]}>
          <Text style={[styles.enterEmail, styles.emailLayout]}>
            Enter password
          </Text>
          <Text style={[styles.email, styles.emailLayout]}>Password</Text>
          <Image
            style={[styles.hideIcon, styles.iconPosition]}
            contentFit="cover"
            source={require("../assets/hide.png")}
          />
          <Image
            style={[styles.mailIcon, styles.iconPosition]}
            contentFit="cover"
            source={require("../assets/lock1.png")}
          />
        </View>
        <View style={[styles.button23, styles.buttonLayout]}>
          <Text style={[styles.signUp2, styles.signPosition]}>Sign Up</Text>
        </View>
        <Text style={[styles.signUp3, styles.orFlexBox]}>Sign Up</Text>
        <Text style={[styles.createAnAccount, styles.orFlexBox]}>
          Create an account
        </Text>
        <Text style={[styles.signIn1, styles.signIn1Position]}>Sign in</Text>
        <Text style={[styles.alreadyHaveAn, styles.signIn1Position]}>
          Already have an account?
        </Text>
        <Text style={[styles.or, styles.orFlexBox]}>OR</Text>
        <View style={[styles.button24, styles.buttonLayout]}>
          <Text style={[styles.signUpWith, styles.signPosition]}>
            Sign up with Google
          </Text>
          <Image
            style={[styles.googleIcon1, styles.googleIconPosition]}
            contentFit="cover"
            source={require("../assets/google1.png")}
          />
        </View>
        <View style={[styles.button25, styles.buttonLayout]}>
          <Text style={[styles.signUpWith1, styles.signPosition]}>
            Sign up with Facebook
          </Text>
          <Image
            style={[styles.logoFacebookIcon1, styles.googleIconPosition]}
            contentFit="cover"
            source={require("../assets/logo-facebook1.png")}
          />
        </View>
        <View style={[styles.checkbox1, styles.frameLayout]}>
          <View style={[styles.frame, styles.frameLayout]}>
            <View style={styles.rectangle} />
            <Image
              style={[styles.frameIcon, styles.signPosition1]}
              contentFit="cover"
              source={require("../assets/frame.png")}
            />
            <Text style={styles.text3} />
          </View>
        </View>
        <Text
          style={[styles.iAgreeWithContainer, styles.iAgreeWithContainerLayout]}
        >
          <Text style={styles.iAgreeWith}>{`I agree with `}</Text>
          <Text style={styles.termsConditions}>{`Terms & Conditions`}</Text>
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  signPosition1: {
    overflow: "hidden",
    position: "absolute",
  },
  imagePosition: {
    top: "50%",
    position: "absolute",
  },
  groupPosition: {
    bottom: "-14.77%",
    position: "absolute",
  },
  groupIconPosition: {
    left: "0%",
    right: "0%",
    top: "0%",
    width: "100%",
  },
  groupIconLayout1: {
    maxHeight: "100%",
    maxWidth: "100%",
    overflow: "hidden",
    position: "absolute",
  },
  groupIconLayout: {
    height: 0,
    width: 0,
    top: "100%",
    position: "absolute",
  },
  textPosition: {
    left: "50%",
    top: "50%",
    position: "absolute",
  },
  textboxLayout1: {
    height: 52,
    backgroundColor: Color.colorGray_300,
    borderTopRightRadius: Border.br_7xl,
    borderTopLeftRadius: Border.br_7xl,
  },
  enterTypo: {
    color: Color.colorSilver,
    textAlign: "left",
    fontFamily: FontFamily.manropeRegular,
    top: "50%",
    position: "absolute",
  },
  profileIconLayout: {
    height: 14,
    width: 14,
    top: "50%",
    overflow: "hidden",
    position: "absolute",
  },
  orTypo: {
    fontFamily: FontFamily.manropeBold,
    fontWeight: "700",
  },
  orSignInTypo: {
    fontFamily: FontFamily.manropeLight,
    fontWeight: "300",
    textAlign: "left",
    lineHeight: 22,
    fontSize: FontSize.size_sm,
    position: "absolute",
  },
  parentPosition: {
    width: 350,
    left: 20,
    position: "absolute",
  },
  buttonLayout2: {
    width: 112,
    borderColor: Color.colorLightslategray,
    borderRadius: Border.br_3xl,
    top: 34,
    borderWidth: 1,
    borderStyle: "solid",
    backgroundColor: Color.colorGray_300,
    height: 44,
    overflow: "hidden",
    position: "absolute",
  },
  emailLayout: {
    lineHeight: 26,
    fontSize: FontSize.size_base,
  },
  googleIconPosition: {
    height: 20,
    marginTop: -10,
    width: 20,
    left: "50%",
    top: "50%",
    overflow: "hidden",
    position: "absolute",
  },
  iAgreeWithContainerLayout: {
    lineHeight: 22,
    fontSize: FontSize.size_sm,
  },
  buttonLayout1: {
    borderRadius: Border.br_7xl,
    backgroundColor: Color.colorBlueviolet,
    width: 350,
    height: 52,
    overflow: "hidden",
    left: 0,
    position: "absolute",
  },
  signPosition: {
    color: Color.colorWhite,
    textAlign: "left",
    fontFamily: FontFamily.manropeRegular,
    left: "50%",
    top: "50%",
    position: "absolute",
  },
  textboxLayout: {
    height: 55,
    width: 334,
    backgroundColor: Color.colorWhitesmoke,
    left: 35,
    borderRadius: Border.br_9xs,
    position: "absolute",
  },
  iconPosition: {
    marginTop: 4,
    height: 20,
    width: 20,
    top: "50%",
    overflow: "hidden",
    position: "absolute",
  },
  buttonLayout: {
    width: 335,
    left: 35,
    borderRadius: Border.br_9xs,
    height: 44,
    overflow: "hidden",
    position: "absolute",
  },
  orFlexBox: {
    textAlign: "center",
    position: "absolute",
  },
  signIn1Position: {
    top: 704,
    lineHeight: 22,
    fontSize: FontSize.size_sm,
    position: "absolute",
  },
  frameLayout: {
    height: 22,
    width: 42,
    backgroundColor: Color.colorGray_300,
    position: "absolute",
  },
  groupIcon: {
    height: "36.88%",
    bottom: "63.13%",
    left: "0%",
    right: "0%",
    top: "0%",
    width: "100%",
  },
  groupIcon1: {
    left: "68.11%",
  },
  group2: {
    height: "100%",
    bottom: "0%",
    position: "absolute",
  },
  group1: {
    height: "72.73%",
    width: "41.81%",
    top: "42.05%",
    right: "16.53%",
    left: "41.67%",
  },
  image14: {
    width: 72,
    marginTop: -22,
    top: "50%",
    height: 44,
    overflow: "hidden",
    left: 0,
  },
  groupIcon2: {
    height: "36.02%",
    bottom: "63.98%",
    left: "0%",
    right: "0%",
    top: "0%",
    width: "100%",
  },
  groupIcon3: {
    left: "56.97%",
  },
  group3: {
    height: "73.18%",
    width: "75.52%",
    top: "41.59%",
    right: "14.9%",
    left: "9.58%",
  },
  image15: {
    width: 96,
    marginTop: -22,
    top: "50%",
    height: 44,
    overflow: "hidden",
    right: 0,
  },
  container2: {
    backgroundColor: Color.colorGray_200,
    height: 44,
    right: 0,
    overflow: "hidden",
    left: 0,
    top: 0,
    position: "absolute",
  },
  image16Icon: {
    marginTop: -151,
    marginLeft: -148,
    width: 286,
    height: 166,
  },
  launchScreen: {
    width: 390,
    shadowOpacity: 1,
    elevation: 6,
    shadowRadius: 6,
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowColor: "rgba(18, 15, 40, 0.12)",
    backgroundColor: Color.colorWhite,
    overflow: "hidden",
    top: 0,
    height: 844,
    left: 0,
  },
  vectorIcon: {
    bottom: -1,
    right: 0,
    left: 0,
  },
  enterEmailenrollmentNumber: {
    marginTop: -11,
    textAlign: "left",
    lineHeight: 22,
    fontSize: FontSize.size_sm,
    left: 22,
    color: Color.colorSilver,
  },
  profileIcon: {
    marginTop: -7,
    left: 0,
  },
  textbox1: {
    top: 332,
    right: 20,
    left: 20,
    position: "absolute",
  },
  welcome: {
    top: 212,
    color: Color.colorGray_100,
    lineHeight: 48,
    fontSize: FontSize.size_13xl,
    fontFamily: FontFamily.manropeBold,
    textAlign: "left",
    left: 20,
    position: "absolute",
  },
  hiEnterYour: {
    top: 268,
    color: Color.colorDimgray,
    left: 20,
  },
  text: {
    marginLeft: 10,
    color: Color.colorLightslategray,
    marginTop: -13,
    fontSize: FontSize.size_base,
    textAlign: "left",
    fontFamily: FontFamily.manropeRegular,
    left: "50%",
    top: "50%",
    position: "absolute",
  },
  googleIcon: {
    marginLeft: -10,
  },
  button1: {
    left: 0,
  },
  button2: {
    left: 119,
  },
  button3: {
    left: 238,
  },
  orSignIn: {
    color: Color.colorGray_100,
    left: 0,
    top: 0,
  },
  button1Parent: {
    top: 626,
    height: 78,
  },
  image19Icon: {
    top: 64,
    left: 26,
    borderRadius: 23,
    width: 46,
    height: 56,
    position: "absolute",
  },
  selectYourUniversity: {
    marginTop: -11.5,
    left: 12,
    color: Color.colorGray_100,
    textAlign: "left",
    fontFamily: FontFamily.manropeRegular,
    top: "50%",
    position: "absolute",
  },
  chevronDownLarge: {
    marginTop: -7.5,
    right: 13,
  },
  dropdownButton1: {
    top: 147,
    left: 48,
    width: 310,
    height: 37,
    borderRadius: Border.br_9xs,
    borderWidth: 1,
    borderColor: Color.colorLightslategray,
    borderStyle: "solid",
    backgroundColor: Color.colorWhite,
    position: "absolute",
  },
  login: {
    marginLeft: -22.5,
    lineHeight: 28,
    fontSize: FontSize.size_lg,
    marginTop: -14,
    color: Color.colorWhite,
  },
  button4: {
    backgroundColor: Color.colorBlueviolet,
    top: 0,
  },
  signUp: {
    marginLeft: -32,
    lineHeight: 28,
    fontSize: FontSize.size_lg,
    marginTop: -14,
    color: Color.colorWhite,
  },
  button41: {
    top: 60,
    backgroundColor: Color.colorBlueviolet,
  },
  button4Parent: {
    top: 481,
    height: 112,
  },
  textbox11: {
    top: 396,
    height: 52,
    backgroundColor: Color.colorGray_300,
    borderTopRightRadius: Border.br_7xl,
    borderTopLeftRadius: Border.br_7xl,
  },
  signIn: {
    left: 409,
    width: 390,
    shadowOpacity: 1,
    elevation: 6,
    shadowRadius: 6,
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowColor: "rgba(18, 15, 40, 0.12)",
    backgroundColor: Color.colorWhite,
    overflow: "hidden",
    top: 0,
    height: 844,
  },
  enterEmail: {
    marginTop: 1,
    left: 44,
    textAlign: "left",
    color: Color.colorSilver,
    fontFamily: FontFamily.manropeRegular,
    top: "50%",
    position: "absolute",
  },
  email: {
    marginTop: -26,
    color: Color.colorDarkslategray,
    left: 16,
    fontFamily: FontFamily.manropeBold,
    fontWeight: "700",
    textAlign: "left",
    top: "50%",
    position: "absolute",
  },
  mailIcon: {
    left: 16,
  },
  textbox5: {
    top: 236,
  },
  hideIcon: {
    right: 15,
  },
  textbox6: {
    top: 321,
  },
  signUp2: {
    marginLeft: -28,
    lineHeight: 26,
    fontSize: FontSize.size_base,
    marginTop: -13,
  },
  button23: {
    top: 444,
    backgroundColor: Color.colorBlueviolet,
  },
  signUp3: {
    top: 130,
    left: 144,
    fontFamily: FontFamily.lexendBold,
    color: Color.colorGray_100,
    fontWeight: "700",
    textAlign: "center",
    lineHeight: 48,
    fontSize: FontSize.size_13xl,
  },
  createAnAccount: {
    top: 178,
    left: 117,
    fontSize: 20,
    lineHeight: 30,
    fontFamily: FontFamily.lexendRegular,
    color: Color.colorDimgray,
  },
  signIn1: {
    left: 267,
    color: Color.colorBlueviolet,
    fontFamily: FontFamily.manropeBold,
    fontWeight: "700",
    textAlign: "left",
  },
  alreadyHaveAn: {
    left: 92,
    textAlign: "right",
    color: Color.colorGray_100,
    fontFamily: FontFamily.manropeRegular,
  },
  or: {
    top: 508,
    left: 194,
    fontSize: 12,
    lineHeight: 20,
    textTransform: "uppercase",
    color: "#6f7787",
    fontFamily: FontFamily.manropeBold,
    fontWeight: "700",
  },
  signUpWith: {
    marginLeft: -60,
    lineHeight: 26,
    fontSize: FontSize.size_base,
    marginTop: -13,
  },
  googleIcon1: {
    marginLeft: -86,
  },
  button24: {
    top: 548,
    backgroundColor: "#db4437",
  },
  signUpWith1: {
    marginLeft: -69.5,
    lineHeight: 26,
    fontSize: FontSize.size_base,
    marginTop: -13,
  },
  logoFacebookIcon1: {
    marginLeft: -95.5,
  },
  button25: {
    top: 604,
    backgroundColor: "#4267b2",
  },
  rectangle: {
    top: 3,
    borderRadius: 2,
    borderColor: Color.colorBlueviolet,
    width: 16,
    height: 16,
    borderWidth: 1,
    borderStyle: "solid",
    backgroundColor: Color.colorGray_300,
    left: 0,
    position: "absolute",
  },
  frameIcon: {
    top: 5,
    left: 2,
    width: 12,
    height: 12,
  },
  text3: {
    width: 20,
    color: Color.colorGray_100,
    textAlign: "left",
    fontFamily: FontFamily.manropeRegular,
    lineHeight: 22,
    fontSize: FontSize.size_sm,
    left: 22,
    top: 0,
    position: "absolute",
  },
  frame: {
    left: 0,
    top: 0,
  },
  checkbox1: {
    left: 37,
    top: 400,
  },
  iAgreeWith: {
    color: Color.colorGray_100,
  },
  termsConditions: {
    color: Color.colorBlueviolet,
  },
  iAgreeWithContainer: {
    left: 59,
    top: 400,
    textAlign: "left",
    fontFamily: FontFamily.manropeRegular,
    position: "absolute",
  },
  signUp1: {
    left: 864,
    width: 390,
    shadowOpacity: 1,
    elevation: 6,
    shadowRadius: 6,
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowColor: "rgba(18, 15, 40, 0.12)",
    backgroundColor: Color.colorWhite,
    overflow: "hidden",
    top: 0,
    height: 844,
  },
  group: {
    flex: 1,
    height: 844,
    width: "100%",
  },
});

export default Group;
