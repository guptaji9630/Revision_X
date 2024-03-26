import { SafeAreaView, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import BouncyCheckbox from 'react-native-bouncy-checkbox'

// form validate
import * as Yup from 'yup'
import { Formik } from 'formik'

const PassWordSchema = Yup.object().shape({
    passwordLength : Yup.number()
    .min(4,'Should be min of 4 character')
    .max(16, 'Should be max of 16 character ')
    .required( 'Should be max of 16 charcter')
})

export default function Passwordgenerator() {
    const [password , setPassword] = useState('')
    const [isPassGenerated , setIsPassGenerated] = useState(false)
    const [lowerCase , setLowerCase] = useState(true)
    const [upperCase , setUpperCase] = useState(false)
    const [numbers, setNumbers] = useState(false)
    const [symbols, setSymbols] = useState(false)

    const generatePasswordString = (passwordLength : number) =>{
       let characterList = '';
       const upperCaseChar = 'ABCDEFIJKLMNOPQRSTUVWXYZ';
       const LowerCaseChar ='abcedfghijklmnopqrstuvwxyz';
       const digitChars = '0123456789';
       const specialchar = '!@#$%^&*()_+';

       if (upperCase) {
        characterList+= upperCaseChar
       }
       if (lowerCase) {
        characterList += LowerCaseChar
       }

       if (numbers){
        characterList += digitChars
       }

       if (symbols){
        characterList += specialchar
       }


       const passwordRes = createPassword(characterList, passwordLength)

       setPassword(passwordRes)
       setIsPassGenerated(true)
    }
    const createPassword = (character : string ,
        passwordLength : number) => {
            let result = ''
            for(let i =0; i<passwordLength;i++){
                const characterIndex = Math.round(Math.random() * character.length)
                result += character.charAt(characterIndex)

            }
            return result
        }

    const resetPasswordState = () =>{
        setPassword('')
        setIsPassGenerated(false)
        setLowerCase(true)
        setUpperCase(false)
        setNumbers(false)
        setSymbols(false)
    }

  return (
   <ScrollView keyboardShouldPersistTaps = "handled">
    <SafeAreaView style = {styles.appContainer}>
      <View style = {styles.formContainer}>
        <Text style = {styles.title}> PassWord Generator </Text>
        <Formik
       initialValues={{ passwordLength : ''}}
       validationSchema={PassWordSchema}
       onSubmit={ (values )=> {
        console.log(values);
        generatePasswordString(+values.passwordLength) // TODO  // + sign in the function convert paswordlength string into number or we can also use Number() also 
       }}
     >
       {({
         values,
         errors,
         touched,
         isValid,
         handleChange,
         handleSubmit,
         handleReset,
         isSubmitting,
         /* and other goodies */
       }) => (
         <>           
         <View style = {styles.inputWrapper}>
          <View style = {styles.inputColumn}>
            <Text style = {styles.heading}> Password Length </Text>
            {touched.passwordLength && errors.passwordLength && (      // To Show my errors into the application 
              <Text style = {styles.errorText}>
                {errors.passwordLength}
              </Text>
            )} 
           
          </View>
          <TextInput
            style = {styles.inputStyle}
            value={values.passwordLength}  // track the password field itself
            onChangeText={handleChange('passwordLength')}   // track of validation 
            placeholder='Ex . 8'
            keyboardType='numeric'
            ></TextInput>
         </View>
         <View style = {styles.inputWrapper}>
          <Text style = {styles.heading}> Include Lowercase</Text>
          <BouncyCheckbox>
            disableBuiltInState
            isChecked = {lowerCase}
            onPress = {()=> setLowerCase(!lowerCase)}
            fillcolor = "Red"
          </BouncyCheckbox>
         </View>
         <View style = {styles.inputWrapper}>
         <Text style = {styles.heading}> Include UpperCase</Text>
          <BouncyCheckbox>
            disableBuiltInState
            isChecked = {upperCase}
            onPress = {()=> setUpperCase(!upperCase)}
            fillcolor = "Red"
          </BouncyCheckbox>
         </View>
         <View style = {styles.inputWrapper}>

         <Text style = {styles.heading}> Include number</Text>
          <BouncyCheckbox>
            disableBuiltInState
            isChecked = {numbers}
            onPress = {()=> setNumbers(!numbers)}
            fillcolor = "Red"
          </BouncyCheckbox>
         </View>
         <View style = {styles.inputWrapper}>

         <Text style = {styles.heading}> Include Symbol</Text>
          <BouncyCheckbox>
            disableBuiltInState
            isChecked = {symbols}
            onPress = {()=> setSymbols(!symbols)}
            fillcolor = "Red"
          </BouncyCheckbox>
         </View>

         <View style = {styles.formActions}>
          <TouchableOpacity
           disabled={!isValid}
           style = {styles.primaryBtn}
           onPress = {handleSubmit}
           >
            <Text style = {styles.primaryBtnTxt}> Generate Password </Text>
             </TouchableOpacity>
          <TouchableOpacity
          style = {styles.secondaryBtn}
          onPress={()=> {
            handleReset();
            resetPasswordState()
          }}
          
          > 
            <Text style = {styles.secondaryBtnTxt}>Reset Password</Text>
             </TouchableOpacity>
         </View>
         </>
       )}
     </Formik>
      </View>
      {
        (isPassGenerated ? (
          <View style = {[styles.card, styles.cardElevated]}> 
          <Text style = {styles.subTitle}> Result : </Text>
          <Text style = {styles.description}> Long Press to copy </Text>
            <Text selectable={true} style = {styles.generatedPassword}> {password} </Text>   
          </View>
           // selectable used to give android proper to select 
        ) : null)
      } 
    </SafeAreaView>
   </ScrollView>
  )
}

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
  },
  formContainer: {
    margin: 8,
    padding: 8,
  },
  title: {
    fontSize: 32,
    fontWeight: '600',
    marginBottom: 15,
  },
  subTitle: {
    fontSize: 26,
    fontWeight: '600',
    marginBottom: 2,
  },
  description: {
    color: '#758283',
    marginBottom: 8,
  },
  heading: {
    fontSize: 15,
  },
  inputWrapper: {
    marginBottom: 15,
    alignItems: 'center',
    justifyContent: 'space-between',
    flexDirection: 'row',
  },
  inputColumn: {
    flexDirection: 'column',
  },
  inputStyle: {
    padding: 8,
    width: '30%',
    borderWidth: 1,
    borderRadius: 4,
    borderColor: '#16213e',
  },
  errorText: {
    fontSize: 12,
    color: '#ff0d10',
  },
  formActions: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
  primaryBtn: {
    width: 120,
    padding: 10,
    borderRadius: 8,
    marginHorizontal: 8,
    backgroundColor: '#5DA3FA',
  },
  primaryBtnTxt: {
    color: '#fff',
    textAlign: 'center',
    fontWeight: '700',
  },
  secondaryBtn: {
    width: 120,
    padding: 10,
    borderRadius: 8,
    marginHorizontal: 8,
    backgroundColor: '#CAD5E2',
  },
  secondaryBtnTxt: {
    textAlign: 'center',
  },
  card: {
    padding: 12,
    borderRadius: 6,
    marginHorizontal: 12,
  },
  cardElevated: {
    backgroundColor: '#ffffff',
    elevation: 1,
    shadowOffset: {
      width: 1,
      height: 1,
    },
    shadowColor: '#333',
    shadowOpacity: 0.2,
    shadowRadius: 2,
  },
  generatedPassword: {
    fontSize: 22,
    textAlign: 'center',
    marginBottom: 12,
    color:'#000'
  },
});