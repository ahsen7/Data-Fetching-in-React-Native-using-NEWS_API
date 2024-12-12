import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Colors } from '@/constants/Colors'
import { Ionicons, AntDesign, Feather } from '@expo/vector-icons'


type IconLibrary = 'Ionicons' | 'AntDesign' | 'Feather'


const IconLibraries = {
    Ionicons: Ionicons,
    AntDesign: AntDesign,
    Feather: Feather
}

interface HeaderProps {
    profileImage: string;
    title: string;
    description: string;
    iconLibrary?: IconLibrary;
    iconName?: string;
    onIconPress?: () => void;
}

const Header: React.FC<HeaderProps> = ({
    profileImage,
    title,
    description,
    iconLibrary = 'Ionicons',
    iconName = 'notifications-outline',
    onIconPress
}) => {

    const IconComponent = IconLibraries[iconLibrary];

    return (
        <View style={styles.container}>
            <View style={styles.wrapper}>
                <Image
                    source={typeof profileImage === 'string'
                        ? { uri: profileImage }
                        : profileImage
                    }
                    resizeMode='cover'
                    style={styles.img}
                />
                <View style={styles.textContainer}>
                    <Text style={styles.title}>{title}</Text>
                    <Text style={styles.description}>{description}</Text>
                </View>
            </View>
            <IconComponent
                name={iconName}
                size={25}
                onPress={onIconPress}
            />
        </View>
    )
}

export default Header

const styles = StyleSheet.create({
    container: {
        paddingHorizontal: 10,
        flexDirection: 'row',
        justifyContent: "space-between",
        alignItems: 'center',
        marginBottom:20,
    },
    wrapper: {
        flexDirection: 'row',
        gap: 10
    },
    img: {
        width: 50,
        height: 50,
        borderRadius: 30,
    },
    title: {
        fontSize: 14,
        fontFamily: "Jakarta-SemiBold",
        color: Colors.lightGrey
    },
    description: {
        fontSize: 16,
        fontFamily: "Jakarta-Bold",
        color: Colors.black
    },
    textContainer: {
        gap: 2,
    }
})