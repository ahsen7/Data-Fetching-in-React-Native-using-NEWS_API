import { StyleSheet, TextInput, View } from 'react-native'
import React from 'react'
import { Ionicons } from '@expo/vector-icons'
import { Colors } from '@/constants/Colors'

interface SearchBarProps {
  placeholder?: string;
  onChangeText?: (text: string) => void;
  value?: string;
  onSubmitEditing?: () => void;
}

const SearchBar: React.FC<SearchBarProps> = ({
  placeholder = 'Search',
  onChangeText,
  value,
  onSubmitEditing
}) => {
    return (
        <View style={styles.container}>
            <View style={styles.searchBar}>
                <Ionicons name='search-outline' size={24} color={Colors.lightGrey} />
                <TextInput
                    placeholder={placeholder}
                    placeholderTextColor={Colors.lightGrey}
                    style={styles.txtInput}
                    onChangeText={onChangeText}
                    value={value}
                    onSubmitEditing={onSubmitEditing}
                    returnKeyType='search'
                    autoCorrect={false}
                    clearButtonMode='while-editing'
                />
            </View>
        </View>
    )
}

export default SearchBar

const styles = StyleSheet.create({
    container: {
        marginHorizontal: 20,
    },
    searchBar: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 10,
        backgroundColor: "#E4E4E4",
        paddingHorizontal: 10,
        paddingVertical: 12,
        borderRadius: 15
    },
    txtInput: {
        fontFamily: "Jakarta-SemiBold",
        fontSize: 14,
        flex: 1,
        color: Colors.darkGrey
    }
})