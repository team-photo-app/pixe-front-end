import React from 'react'
import { StyleSheet, View, TextInput } from 'react-native'
import { Button, Text } from 'react-native-elements'

const fbAuthForm = (props) => {
  displayNameInput = (
    <View>
      <TextInput
        onChangeText= {text => props.setFieldValue('displayName', text)}
        placeholder='Screen Name'
      />
      <Text style={styles.validationText}>{props.errors.displayName}</Text>
    </View>
  )

  return (
    <View>
      <Text>PixE Share your Memories</Text>

    </View>
  )
}
